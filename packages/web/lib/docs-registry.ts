// This file is auto-generated. Do not edit manually.
type DocumentationPage = {
  title: string;
  link: string;
  description?: string;
  category?: string;
};

export const documentationPages: DocumentationPage[] = [
  {
    "title": "Button",
    "link": "/docs/button",
    "description": "Interactive button component with various styles and states.",
    "category": "components"
  },
  {
    "title": "How It Works",
    "link": "/docs/how-it-works",
    "description": "Learn how fatcn installs and configures components in your Next.js project.",
    "category": "instructions"
  },
  {
    "title": "Installation",
    "link": "/docs/installation",
    "description": "Install and configure fatcn in Next.js.",
    "category": "instructions"
  }
];

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
