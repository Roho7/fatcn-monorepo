#!/usr/bin/env node

import { execSync } from 'child_process';
import * as fs from 'fs';
import path, { dirname } from 'path';    
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PACKAGE_ROOT = __dirname;
const SOURCE_DIR = path.join(PACKAGE_ROOT, 'source');

const CSS_VARIABLES = `@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}`;

const TAILWIND_CONFIG = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/fatcn/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`;

function copyDirectoryRecursively(source: string, target: string) {
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target, { recursive: true });
    }
  
    const files = fs.readdirSync(source);
  
    files.forEach(file => {
      const sourcePath = path.join(source, file);
      const targetPath = path.join(target, file);
      
      const stat = fs.statSync(sourcePath);
      
      if (stat.isDirectory()) {
        copyDirectoryRecursively(sourcePath, targetPath);
      } else {
        // Only copy TypeScript/React files and avoid compiled files
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          // Replace .js or .mjs with .tsx if they exist
          const targetFile = targetPath
            .replace('.js', '.tsx')
            .replace('.mjs', '.tsx');
            
          fs.copyFileSync(sourcePath, targetFile);
        }
      }
    });
  }

async function init() {
  console.log('🎨 Setting up fatcn dependencies and configurations...');

  try {
    // Install dependencies
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
      'hugeicons-react'
    ];

    console.log('📦 Installing dependencies...');
    execSync(`npm install ${dependencies.join(' ')}`, { stdio: 'inherit' });

    const sourceComponentsDir = path.join(SOURCE_DIR, 'components');
    console.log('Looking for components in:', sourceComponentsDir);
    
    if (!fs.existsSync(sourceComponentsDir)) {
      throw new Error(`Components directory not found at ${sourceComponentsDir}`);
    }

    const targetComponentsDir = path.join(process.cwd(), 'components');
    
    console.log('📂 Copying components to your project...');
    copyDirectoryRecursively(sourceComponentsDir, targetComponentsDir);
    
    // Copy lib files
    const sourceLibDir = path.join(SOURCE_DIR, 'lib');
    const targetLibDir = path.join(process.cwd(), 'lib');
    
    if (fs.existsSync(sourceLibDir)) {
      console.log('📂 Copying utility functions...');
      copyDirectoryRecursively(sourceLibDir, targetLibDir);
    }

    // Find globals.css recursively
    function findGlobalsCss(startPath: string): string | null {
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

    let cssPath = findGlobalsCss(process.cwd());
    if (!cssPath) {
      // If globals.css doesn't exist, create it in the default src/app location
      cssPath = path.join(process.cwd(), 'src', 'app', 'globals.css');
      fs.mkdirSync(path.dirname(cssPath), { recursive: true });
    }

    let existingCss = '';
    if (fs.existsSync(cssPath)) {
      existingCss = fs.readFileSync(cssPath, 'utf8');
    }

    const tailwindDirectives = '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n';
    if (!existingCss.includes('@tailwind')) {
      existingCss = tailwindDirectives + existingCss;
    }

    if (!existingCss.includes('@layer base')) {
      existingCss += '\n' + CSS_VARIABLES;
    }

    fs.writeFileSync(cssPath, existingCss);
    console.log('✅ Updated globals.css with required styles');

    // Create or update tailwind.config.js
    const tailwindConfigPath = path.join(process.cwd(), 'tailwind.config.js');
    fs.writeFileSync(tailwindConfigPath, TAILWIND_CONFIG);
    console.log('✅ Created tailwind.config.js');

    // Create or update postcss.config.js
    const postcssConfigPath = path.join(process.cwd(), 'postcss.config.js');
    fs.writeFileSync(postcssConfigPath, `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`);
    console.log('✅ Created postcss.config.js');

    console.log('\n✨ fatcn setup complete! You can now start using the components.');
    console.log('\nExample usage:');
    console.log('import { Button } from "fatcn";');

  } catch (error: any) {
    console.error('❌ Error during setup:', error.message);
    process.exit(1);
  }
}

const command = process.argv[2];

if (command === 'init') {
  init();
} else {
  console.log(`
fatcn CLI

Commands:
  init    Initialize fatcn in your project (install dependencies and create configurations)

Usage:
  $ npx fatcn init
`);
}