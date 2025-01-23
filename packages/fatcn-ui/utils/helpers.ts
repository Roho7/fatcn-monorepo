import chalk from 'chalk';
import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { TAILWIND_CONFIG } from '../classes/tailwindconfig.js';
import { THEMES } from '../classes/themes.js';
import { SOURCE_DIR } from '../commands/add.js';
import { ui } from '../components/registry.js';

const BASE_DEPENDENCIES = [
  "class-variance-authority",
  "clsx",
  "hugeicons-react",
  "next-themes",
  "tailwind-merge",
  "tailwindcss-animate",
]

export async function ensureComponentsDir(): Promise<string> {
  const componentsDir = path.join(process.cwd(), 'components');
  await fs.ensureDir(componentsDir);
  return componentsDir;
}

export async function ensureLibDir(): Promise<string> {
  const libDir = path.join(process.cwd(), 'lib');
  await fs.ensureDir(libDir);
  return libDir;
}

export async function installBaseDependencies() {
  execSync(`npm install ${BASE_DEPENDENCIES.join(' ')}`, {
    stdio: 'inherit',
  });
}

export async function copyComponentsRecursively(componentName: string) {

  const component = ui.find((c) => c.name === componentName);
    if (!component) {
      console.error(
        chalk.red(`Component "${componentName}" not found in registry`)
      );
      console.log(chalk.yellow('Available components:'));
      console.log(ui.map((c) => c.name).join(', '));
      process.exit(1);
    }

    // Ensure components directory exists
    const componentsDir = await ensureComponentsDir();

    // Copy component files
    for (const file of component.files || []) {
      const sourcePath = path.join(SOURCE_DIR, file.path);
      const fileName = path.basename(file.path);
      const targetPath = path.join(componentsDir, fileName);

      if (!(await fs.pathExists(sourcePath))) {
        console.error(chalk.red(`Source file ${sourcePath} not found`));
        continue;
      }

      await fs.copy(sourcePath, targetPath);
      console.log(chalk.green(`✓ Copied ${fileName}`));
    }

  if (component.registryDependencies?.length) {
    for (const dependency of component.registryDependencies) {
      await copyComponentsRecursively(dependency);
    }
  }
}

export async function copyDirectoryRecursively(source: string, target: string) {
  await fs.ensureDir(target);
  const files = await fs.readdir(source);

  for (const file of files) {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);
    const stat = await fs.stat(sourcePath);

    if (stat.isDirectory()) {
      await copyDirectoryRecursively(sourcePath, targetPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const targetFile = targetPath
        .replace('.js', '.tsx')
        .replace('.mjs', '.tsx');
      await fs.copy(sourcePath, targetFile);
    }
  }
}

// Setup CSS and configs
export function findGlobalsCss(startPath: string): string | null {
  const files = fs.readdirSync(startPath);
  for (const file of files) {
    const filePath = path.join(startPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      const found = findGlobalsCss(filePath);
      if (found) return found;
    } else if (file === 'globals.css') {
      return filePath;
    }
  }
  return null;
}


export async function setupGlobalsCss(theme: string) {
  let cssPath = findGlobalsCss(process.cwd());
		if (!cssPath) {
			cssPath = path.join(process.cwd(), 'src', 'app', 'globals.css');
			await fs.mkdirp(path.dirname(cssPath));
		}

		let existingCss = '';
		if (await fs.pathExists(cssPath)) {
			existingCss = await fs.readFile(cssPath, 'utf8');
		}

		const tailwindDirectives =
			"@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');\n" +
			'@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n' +
			'body {\n' +
			'  color: var(--foreground);\n' +
			'  background: var(--background);\n' +
			"  font-family: 'Rubik', serif;\n" +
			'}\n\n';

		existingCss = tailwindDirectives;
		existingCss = existingCss.replace(/@layer\s+base\s*{[\s\S]*?}/g, '');
		existingCss += '\n' + THEMES[theme as keyof typeof THEMES];

		await fs.writeFile(cssPath, existingCss);
		console.log('✅ Updated globals.css with required styles');
}
export async function setupTailwindConfig() {
  // Check for existing Tailwind config files
  const tailwindConfigTSPath = path.join(process.cwd(), 'tailwind.config.ts');
  const tailwindConfigJSPath = path.join(process.cwd(), 'tailwind.config.js');

  // Determine which config file to use, preferring TypeScript
  const hasTSConfig = await fs.pathExists(tailwindConfigTSPath);
  const hasJSConfig = await fs.pathExists(tailwindConfigJSPath);

  if (hasTSConfig) {
    await fs.writeFile(tailwindConfigTSPath, TAILWIND_CONFIG);
    console.log('✅ Created tailwind.config.ts');
    return;
  }

  if (hasJSConfig) {
    await fs.writeFile(tailwindConfigJSPath, TAILWIND_CONFIG);
    console.log('✅ Created tailwind.config.js');
    return;
  }

  if (!hasTSConfig && !hasJSConfig) {
    // No config exists, create new JS config
    await fs.writeFile(tailwindConfigJSPath, TAILWIND_CONFIG);
    console.log('✅ Created tailwind.config.js');
  }

  const postcssConfigPath = path.join(process.cwd(), 'postcss.config.js');
  await fs.writeFile(
    postcssConfigPath,
    `module.exports = {
plugins: {
  tailwindcss: {},
  autoprefixer: {},
},
}`
  );
  console.log('✅ Created postcss.config.js');
}
