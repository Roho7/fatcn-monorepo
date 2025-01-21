import chalk from 'chalk';
import { execSync } from 'child_process';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import {
	copyDirectoryRecursively,
	ensureComponentsDir,
	ensureLibDir,
	setupGlobalsCss,
	setupTailwindConfig
} from '../utils/helpers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PACKAGE_ROOT = path.join(__dirname, '..');
const SOURCE_DIR = path.join(PACKAGE_ROOT, 'source');

export default async function init() {
	console.log('🎨 Setting up fatcn dependencies and configurations...');

	try {
		const { theme } = await inquirer.prompt([
			{
				type: 'list',
				name: 'theme',
				message: 'Please select a theme:',
				choices: [{ name: 'Rose (Default)', value: 'rose' }],
			},
		]);

		const dependencies = [
			'react',
			'@radix-ui/react-accordion',
			'@radix-ui/react-alert-dialog',
			'@radix-ui/react-aspect-ratio',
			'@radix-ui/react-avatar',
			'@radix-ui/react-checkbox',
			'@radix-ui/react-collapsible',
			'@radix-ui/react-context-menu',
			'@radix-ui/react-dialog',
			'@radix-ui/react-dropdown-menu',
			'@radix-ui/react-hover-card',
			'@radix-ui/react-label',
			'@radix-ui/react-menubar',
			'@radix-ui/react-navigation-menu',
			'@radix-ui/react-popover',
			'@radix-ui/react-progress',
			'@radix-ui/react-radio-group',
			'@radix-ui/react-scroll-area',
			'@radix-ui/react-select',
			'@radix-ui/react-separator',
			'@radix-ui/react-slider',
			'@radix-ui/react-switch',
			'@radix-ui/react-tabs',
			'@radix-ui/react-toast',
			'@radix-ui/react-toggle',
			'@radix-ui/react-tooltip',
			'tailwindcss-animate',
			'tailwindcss',
			'postcss',
			'autoprefixer',
			'clsx',
			'tailwind-merge',
			'class-variance-authority',
			'hugeicons-react',
		];

		// Install dependencies
		console.log('📦 Installing dependencies...');
		execSync(`npm install ${dependencies.join(' ')}`, { stdio: 'inherit' });

		// Copy components
		const componentsDir = await ensureComponentsDir();
		const sourceComponentsDir = path.join(SOURCE_DIR, 'components');

		console.log('📂 Copying components to your project...');
		await copyDirectoryRecursively(sourceComponentsDir, componentsDir);

		const targetLibDir = await ensureLibDir();
		const sourceLibDir = path.join(SOURCE_DIR, 'lib');

		if (await fs.pathExists(sourceLibDir)) {
			console.log('📂 Copying utility functions...');
			await copyDirectoryRecursively(sourceLibDir, targetLibDir);
		}

		await setupGlobalsCss(theme);

		await setupTailwindConfig();

		console.log(chalk.green('\n✨ fatcn setup complete!'));
	} catch (error: any) {
		console.error(chalk.red('Error during setup:', error.message));
		process.exit(1);
	}
}
