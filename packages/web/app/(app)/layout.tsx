"use client";

// import { AuthProvider } from '@/components/auth-provider';
import { ConvexClientProvider } from "@/convex/convexProvider";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { ToastProvider } from "fatcn-ui";
import Topbar from "../_components/topbar";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL ?? "https://determined-warbler-853.convex.cloud");

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <AuthProvider>
      <ConvexClientProvider>
        <ConvexAuthProvider client={convex}>
          <ToastProvider>
            <Topbar />
            <div className="flex flex-1">
              <div className="flex-1 relative">{children}</div>
            </div>
          </ToastProvider>
        </ConvexAuthProvider>
      </ConvexClientProvider>
    // </AuthProvider>
  );
};

export default AppLayout;
