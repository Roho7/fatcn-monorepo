import fs from 'fs';
import path from 'path';

const UI_DIR = path.join(process.cwd(), '../web/_registry/components');
const OUTPUT_FILE = path.join(process.cwd(), '../web/_registry/ui-registry.tsx');

async function generateUIRegistry() {
  const components = {};
  
  function extractDependencies(content) {
    const dependencies = new Set();
    
    // Match Radix imports
    const radixImportRegex = /@radix-ui\/react-([a-z-]+)/g;
    let radixMatch;
    while ((radixMatch = radixImportRegex.exec(content)) !== null) {
      dependencies.add(radixMatch[1].replace(/-/g, ''));
    }
    
    // Match local component imports
    const localImportRegex = /from\s+['"]\.\.?\/([^'"]+)['"]/g;
    let localMatch;
    while ((localMatch = localImportRegex.exec(content)) !== null) {
      const componentName = path.basename(localMatch[1]).replace(/\.(tsx|ts)$/, '').toLowerCase();
      if (componentName !== 'lib') {
        dependencies.add(componentName);
      }
    }
    
    return Array.from(dependencies);
  }

  // Recursively read all .tsx files
  function readUIComponents(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        readUIComponents(fullPath);
      } else if (file.endsWith('.tsx')) {
        // Read file content
        const content = fs.readFileSync(fullPath, 'utf-8');
        const dependencies = extractDependencies(content);
        
        // Convert file path to component name
        const componentName = file.replace(/\.tsx$/, '').toLowerCase();
        const relativePath = fullPath.replace(process.cwd(), '').replace(/\\/g, '/');
        
        components[componentName] = {
          name: componentName,
          description: "",
          type: "registry:ui",
          registryDependencies: dependencies.length > 0 ? dependencies : undefined,
          files: [{
            path: relativePath,
            type: "registry:ui",
            target: ""
          }],
          component: `React.lazy(() => import("@${relativePath}"))`,
          source: content
        };
      }
    });
  }

  readUIComponents(UI_DIR);

  // Generate TypeScript content
  const content = `// This file is auto-generated. Do not edit manually.
import React from 'react';

const UI_REGISTRY: Record<string, any> = {
  'default': ${JSON.stringify(components, null, 2)}
};

export default UI_REGISTRY;
`;

  // Ensure directory exists
  const dir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write the file
  fs.writeFileSync(OUTPUT_FILE, content);
  console.log('UI Registry generated successfully!');
}

generateUIRegistry().catch(console.error);