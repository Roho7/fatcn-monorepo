"use client";
import { Button } from "@fatcn/ui/components/button/button";
import "./globals.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Sidebar,
  SidebarLayout,
  SidebarProvider,
  ToastProvider,
} from "@fatcn/ui";
import { Message01Icon, Settings01Icon } from "hugeicons-react";
import {
  Calendar01Icon,
  ChartIcon,
  Coins01Icon,
  GroupItemsIcon,
} from "hugeicons-react";
import { UserIcon } from "hugeicons-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-background`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
