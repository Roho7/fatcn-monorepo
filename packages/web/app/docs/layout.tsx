'use client'
import { SidebarLayout, SidebarProvider } from "@fatcn/ui/dist"
import { DocsSidebar } from "./_components/docs-sidebar"

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <SidebarProvider>
        <SidebarLayout>
          <DocsSidebar />
        {children}
        </SidebarLayout>
      </SidebarProvider>
    </main>
  )
}

export default DocsLayout