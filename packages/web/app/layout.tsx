"use client";
import { ToastProvider, TooltipProvider } from "@fatcn/ui";

import { useRouter } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <html lang="en">
      <body className={`antialiased bg-background flex flex-1 flex-col`}>
        <ToastProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
