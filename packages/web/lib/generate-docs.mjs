import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const DOCS_DIR = path.join(process.cwd(), '../web/content/docs');
const OUTPUT_FILE = path.join(process.cwd(), '../web/lib/docs-registry.ts');

async function generateDocsContent() {
  const pages = [];
  
  // Recursively read all .mdx or .md files
  function readDocs(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        readDocs(fullPath);
      } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const { data } = matter(fileContent);
        
        // Convert file path to route
        const route = fullPath
          .replace(DOCS_DIR, '')
          .replace(/\.(mdx?)$/, '')
          .replace(/\/index$/, '')
          .replace(/\\/g, '/');

        pages.push({
          title: data.title || file.replace(/\.(mdx?)$/, ''),
          link: `/docs${route}`,
          description: data.description || '',
          category: data.category || 'Uncategorized',
        });
      }
    });
  }

  readDocs(DOCS_DIR);

  // Generate TypeScript content
  const content = `// This file is auto-generated. Do not edit manually.
type DocumentationPage = {
  title: string;
  link: string;
  description?: string;
  category?: string;
};

export const documentationPages: DocumentationPage[] = ${JSON.stringify(pages, null, 2)};

export const getDocumentationLinks = () => {
  return documentationPages.map((page) => ({
    title: page.title,
    link: page.link,
  }));
};

export const getDocumentationByCategory = () => {
  return documentationPages.reduce((acc, page) => {
    const category = page.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(page);
    return acc;
  }, {} as Record<string, DocumentationPage[]>);
};
`;

  // Ensure directory exists
  const dir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write the file
  fs.writeFileSync(OUTPUT_FILE, content);
  console.log('Documentation content generated successfully!');
}

generateDocsContent().catch(console.error);