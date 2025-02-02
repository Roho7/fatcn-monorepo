import * as fs from 'fs';
import * as path from 'path';


const componentsDir = path.join(process.cwd(), '../../packages/fatcn-ui/components');
const blocksDir = path.join(process.cwd(), '../../packages/fatcn-ui/blocks');
const outputFile = path.join(process.cwd(), '../../packages/web/_registry/source-registry.ts');

// Read all component files recursively
const sources = {};

function scanDirectory(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true, recursive: true });

  for (const file of files) {
    if (file.isDirectory()) continue;
    
    const filePath = path.join(dir, file.name);
    const relativePath = path.relative(componentsDir, filePath);
    const relativeBlocksPath = path.relative(blocksDir, filePath);
    
    // Skip non-TSX files and test/story files
    if (!file.name.endsWith('.tsx') || 
        file.name.endsWith('.stories.tsx') || 
        file.name.endsWith('.test.tsx')) {
      continue;
    }

    // Skip the generated source-registry file itself
    if (relativePath === 'source-registry.ts') continue;

    // Extract component name from filename (e.g., 'avatar.tsx' -> 'avatar')
    const componentName = path.basename(file.name, '.tsx');
    const parentDir = path.dirname(relativePath);
    
    // Use parent directory name if file is index.tsx (e.g., 'textarea/index.tsx' -> 'textarea')
    const key = componentName === 'index' && parentDir !== '' 
      ? parentDir 
      : componentName;

    sources[key] = fs.readFileSync(filePath, 'utf8');
  }
}

scanDirectory(componentsDir);
scanDirectory(blocksDir);
// Generate the source-registry.ts file
const fileContent = `
// This file is auto-generated. Do not edit manually.
export const componentSources: Record<string, string> = ${JSON.stringify(sources, null, 2)};

export function getComponentSource(name: string): string | undefined {
  return componentSources[name.toLowerCase()];
}
`;

fs.writeFileSync(outputFile, fileContent);