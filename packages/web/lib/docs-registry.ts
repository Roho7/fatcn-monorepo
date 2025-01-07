// This file is auto-generated. Do not edit manually.
type DocumentationPage = {
  title: string;
  link: string;
  description?: string;
  category?: string;
};

export const documentationPages: DocumentationPage[] = [
  {
    "title": "Avatar",
    "link": "/docs/avatar",
    "description": "Avatar component with various shapes and states.",
    "category": "components"
  },
  {
    "title": "Button",
    "link": "/docs/button",
    "description": "Interactive button component with various styles and states.",
    "category": "components"
  },
  {
    "title": "Callout",
    "link": "/docs/callout",
    "description": "Callout component with various styles.",
    "category": "components"
  },
  {
    "title": "Card",
    "link": "/docs/card",
    "description": "Card component with various styles.",
    "category": "components"
  },
  {
    "title": "Checkbox",
    "link": "/docs/checkbox",
    "description": "Interactive checkbox component with various styles and states.",
    "category": "components"
  },
  {
    "title": "Dark Mode",
    "link": "/docs/dark-mode",
    "description": "Instruction to enabling dark mode in NEXT.js with Fatcn",
    "category": "guide"
  },
  {
    "title": "How It Works",
    "link": "/docs/how-it-works",
    "description": "Learn how fatcn installs and configures components in your Next.js project.",
    "category": "overview"
  },
  {
    "title": "Input",
    "link": "/docs/input",
    "description": "Interactive input component with various styles and states.",
    "category": "components"
  },
  {
    "title": "Installation",
    "link": "/docs/installation",
    "description": "Install and configure fatcn in Next.js.",
    "category": "overview"
  },
  {
    "title": "Pagination",
    "link": "/docs/pagination",
    "description": "Interactive pagination component with various states.",
    "category": "components"
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
