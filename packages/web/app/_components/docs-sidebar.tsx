'use client'
import { getDocumentationByCategory } from "@/lib/docs-registry";
import { Button } from "@fatcn/ui/components/button";
import { cn } from "@fatcn/ui/lib";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";



export const DocsSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const documentationPages = getDocumentationByCategory();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const activePage = useMemo(() => {
    return Object.values(documentationPages).flat().find((page) => page.link === pathname);
  }, [pathname]);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const storedScrollPos = sessionStorage.getItem('docs-sidebar-scroll');
    if (storedScrollPos) {
      sidebar.scrollTop = parseInt(storedScrollPos);
    }

    const handleScroll = () => {
      sessionStorage.setItem('docs-sidebar-scroll', sidebar.scrollTop.toString());
    };

    sidebar.addEventListener('scroll', handleScroll);
    return () => sidebar.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside id="docs-sidebar" ref={sidebarRef} className="w-[50vw] md:w-[20vw] bg-background md:bg-muted/30 border-r border-border p-4 fixed left-0 md:sticky top-[4.5rem] md:h-[calc(100vh-4rem)] h-screen overflow-y-auto md:z-0 z-50 -translate-x-[100%] md:translate-x-[0%] transition-all duration-300 no-scrollbar">
      <div className="flex flex-col gap-2">
        {Object.entries(documentationPages).sort((a, b) => b[0].localeCompare(a[0])).map(([category, pages]) => (
          <div key={category} className="border-b border-border pb-2">
            <div className="text-sm font-medium text-foreground/80 mb-2 capitalize">{category}</div>
            {pages.map((page) => (
              <Button key={page.title} variant="ghost" size="sm" className={cn("w-full justify-start my-0.5", activePage?.title === page.title ? 'bg-primary text-primary-foreground' : '')} onClick={() => router.push(page.link)}>
                {page.title}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};
