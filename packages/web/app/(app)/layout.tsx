"use client";

import { ToastProvider } from "@fatcn/ui";
import Topbar from "../_components/topbar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastProvider>
        <Topbar />
          <div className="flex-1 relative">{children}</div>
      </ToastProvider>
    </div>
  );
};

export default AppLayout;
