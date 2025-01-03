"use client";

import { SidebarLayout, SidebarProvider } from "@fatcn/ui";
import DocsRHS from "../_components/docs-rhs";
import { DocsSidebar } from "../_components/docs-sidebar";
import Footer from "../_components/footer";
import Topbar from "../_components/topbar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Topbar />
      <SidebarProvider>
        <SidebarLayout>
          <DocsSidebar />
          <div className="flex-1 overflow-y-auto h-[calc(100vh-9vh)]">{children}</div>
          <DocsRHS />
        </SidebarLayout>
      </SidebarProvider>
      <Footer />
    </div>
  );
};

export default AppLayout;
