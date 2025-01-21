'use client';

import { TocNode } from '@/lib/tableOfContent';
import { cn } from 'fatcn-ui/lib';
import React from 'react';

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

const depthMaps = {
  1: 'ml-0',
  2: 'ml-0',
  3: 'ml-5',
  4: 'ml-8',
};

const DocsRHS = ({ toc }: { toc: TocNode[] }) => {
  const itemIds = React.useMemo(
    () =>
      toc
        ? toc
            .flatMap((item) => [item.url])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split('#')[1])
        : [],
    [toc]
  );

  const activeHeading = useActiveItem(itemIds);

  return (
    <aside className="hidden h-full w-[20vw] overflow-y-auto border-l border-border bg-background p-4 md:sticky md:top-[4.5rem] md:block md:h-[calc(100vh-4rem)]">
      <div className="flex flex-col justify-start">
        <h3 className="mb-2 text-sm font-medium text-muted-foreground">
          Contents
        </h3>
        {toc.map((item: any) => (
          <a
            href={`${item.url}`}
            key={item.url}
            className={cn(
              'justify-start pb-1 text-left text-xs text-muted-foreground hover:text-primary-foreground truncate overflow-ellipsis max-w-[90%]',
              activeHeading === item.url ? 'text-primary' : '',
              depthMaps[item.depth as keyof typeof depthMaps]
            )}
          >
            {item.value}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default DocsRHS;
