'use client'
import { Button } from "@fatcn/ui/components/button";
import { useRouter } from "next/navigation";

const sidebarItems = [
  {
    title: "Quickstart",
    items: [
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "How It Works",
        href: "/docs/how-it-works",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Button",
        href: "/docs/button",
      },
    ],
  },
];

export const DocsSidebar = () => {
  const router = useRouter();
  return (
    <aside id="docs-sidebar" className="w-[50vw] md:w-[20vw] bg-background md:bg-muted/30 border-r border-border p-4 fixed left-0 md:sticky top-[4.5rem] md:h-[calc(100vh-4rem)] h-screen overflow-y-auto md:z-0 z-50 -translate-x-[100%] md:translate-x-[0%] transition-all duration-300">
      <div className="flex flex-col gap-2">
        {sidebarItems.map((item) => (
          <div key={item.title} className="border-b border-border pb-2">
            <div className="text-sm font-medium text-foreground/80 mb-2">{item.title}</div>
            {item.items.map((subItem) => (
              <Button key={subItem.title} variant="ghost" size="sm" className="w-full justify-start" onClick={() => router.push(subItem.href)}>
                {subItem.title}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};
