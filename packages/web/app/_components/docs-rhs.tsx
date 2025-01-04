'use client'

import { TocNode } from "@/lib/tableOfContent";
import React from "react";

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    itemIds?.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}


const DocsRHS = ({ toc }: { toc: TocNode[] }) => {
  const itemIds = React.useMemo(
    () =>
      toc
        ? toc.flatMap((item) => [item.url])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc]
  )

  const activeHeading = useActiveItem(itemIds)

  return (
    <aside className='w-[20vw] bg-muted/30 border-l border-border p-4 hidden md:block md:sticky md:top-[4.5rem] md:h-[calc(100vh-4rem)] h-full overflow-y-auto'>
        {/* <Card title="Profile Completion" variant="secondary" size={"sm"}>
          <CardHeader>
            <CardTitle>Profile Completion</CardTitle>
            <CardDescription>Profile Completion</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">80%</div>
          </CardContent>
          <CardFooter>
            <Button variant="gradient" size="xs" className="w-full">
              Complete Now
            </Button>
          </CardFooter>
        </Card> */}

        <div className="flex flex-col justify-start">
          <h3 className="text-sm text-muted-foreground mb-2">Table of Contents</h3>
          {toc.map((item: any) => (
            <a href={`${item.url}`} key={item.url} className={`text-xs text-muted-foreground text-left pb-1 justify-start hover:text-primary-foreground ${activeHeading === item.url ? 'text-primary' : ''}`}>{item.value}</a>
          ))}
        </div>
    </aside>
  )
}

export default DocsRHS