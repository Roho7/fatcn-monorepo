'use client'
import { getDocumentationByCategory } from "@/lib/docs-registry";
import { Button } from "@fatcn/ui/components/button";
import { useRouter } from "next/navigation";



export const DocsSidebar = () => {
  const router = useRouter();
  const documentationPages = getDocumentationByCategory();
  return (
    <aside id="docs-sidebar" className="w-[50vw] md:w-[20vw] bg-background md:bg-muted/30 border-r border-border p-4 fixed left-0 md:sticky top-[4.5rem] md:h-[calc(100vh-4rem)] h-screen overflow-y-auto md:z-0 z-50 -translate-x-[100%] md:translate-x-[0%] transition-all duration-300">
      <div className="flex flex-col gap-2">
        {Object.entries(documentationPages).sort((a, b) => b[0].localeCompare(a[0])).map(([category, pages]) => (
          <div key={category} className="border-b border-border pb-2">
            <div className="text-sm font-medium text-foreground/80 mb-2 capitalize">{category}</div>
            {pages.map((page) => (
              <Button key={page.title} variant="ghost" size="sm" className="w-full justify-start" onClick={() => router.push(page.link)}>
                {page.title}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};
