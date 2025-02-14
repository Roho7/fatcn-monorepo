import chalk from 'chalk';
import { execSync } from 'child_process';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { ui } from '../components/registry.js';
import {
  copyComponentsRecursively,
  copyDirectoryRecursively,
  ensureLibDir,
  installBaseDependencies,
  setupGlobalsCss,
  setupTailwindConfig
} from '../utils/helpers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PACKAGE_ROOT = path.join(__dirname, '..');
export const SOURCE_DIR = path.join(PACKAGE_ROOT, 'source');

export default async function add(componentName: string, options: { noCss?: boolean }) {
  try {
    // Check if component exists in registry
    const component = ui.find((c) => c.name === componentName);
    if (!component) {
      console.error(
        chalk.red(`Component "${componentName}" not found in registry`)
      );
      console.log(chalk.yellow('Available components:'));
      console.log(ui.map((c) => c.name).join(', '));
      process.exit(1);
    }

    // Copy component files
    await copyComponentsRecursively(componentName);

    // Install base dependencies
    await installBaseDependencies();

    // If component has dependencies, install them
    if (component.dependencies?.length) {
      console.log('📦 Installing dependencies...');
      execSync(`npm install ${component.dependencies.join(' ')}`, {
        stdio: 'inherit',
      });
    }

    const libDir = await ensureLibDir();
    const sourceLibDir = path.join(SOURCE_DIR, 'lib');

    console.log('📂 Copying lib to your project...');
    await copyDirectoryRecursively(sourceLibDir, libDir);

    if (!options.noCss) {
      await setupGlobalsCss('rose');
    }

    await setupTailwindConfig();

    console.log(
      chalk.green(`\n✓ Successfully added ${componentName} component`)
    );
  } catch (error) {
    console.error(chalk.red('Error adding component:', error));
    process.exit(1);
  }
}
