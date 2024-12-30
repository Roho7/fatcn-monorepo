"use client";

import { Card, CardContent, Tooltip, TooltipContent, TooltipTrigger, useToast } from "@fatcn/ui";
import { Button } from "@fatcn/ui/components/button";
import { Input } from "@fatcn/ui/components/input/input";
import { Copy01Icon } from "hugeicons-react";
import Image from "next/image";
import React from "react";
import Grid from "../public/grid2.svg";
import VsCodeExample from "./docs/_components/_examples/vscode.example";
import HeroBannerLeft from "./docs/_components/hero-banner-left";
import HeroBannerRight from "./docs/_components/hero-banner-right";
import "./globals.css";

export default function Page() {
  const toast = useToast();
  const [hue, setHue] = React.useState(111);  

  React.useEffect(() => {
    const randomHue = Math.floor(Math.random() * 360); // Generate random hue between 0-360
    document.documentElement.style.setProperty("--hue", randomHue.toString());
    setHue(randomHue);
  }, []);



  return (
    <div className="min-h-screen w-screen overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 border-b border-primary-foreground/10 mb-2 backdrop-blur-lg">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold text-primary-foreground">fatcn</h2>
        </div>
        <Input placeholder="Search" className="w-80" />
      </nav>
      {/* Hero Section */}
      <div className="flex gap-1 justify-center md:justify-between min-h-screen relative">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Image
            src={Grid}
            alt="Grid"
            className="w-full h-full opacity-10 -translate-y-1/2 shadow-none"
            width={100}
            height={100}
          />
        </div>
        <HeroBannerLeft />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold tracking-tight mb-4">fatcn</h1>
          <code className="relative flex items-center whitespace-nowrap gap-4 bg-background pl-4 pr-2 py-2 mb-8 rounded-md font-mono text-sm text-secondary-foreground border border-border">
            npx fatcn-ui init{" "}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="xs"
                  variant="ghost"
                  onClick={() => {
                    navigator.clipboard.writeText("npx fatcn-ui init");
                    toast.showToast("Copied to clipboard", "success", 2000);
                  }}
                >
                  <Copy01Icon className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy to clipboard</p>
              </TooltipContent>
            </Tooltip>
          </code>
          <p className="text-sm text-primary-foreground/80">
            Chonky UI that installs right into your repository
          </p>
        </div>
        <HeroBannerRight />
      </div>

      <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:p-10">
        <VsCodeExample />
        <div className="max-w-sm space-y-2">
          <h2 className="text-xl font-semibold text-primary-foreground">
            Instant Component Integration
          </h2>
          <p className="text-sm text-primary-foreground/80">
            Our CLI seamlessly pastes components directly into your project
            structure. Each component comes with full TypeScript support and
            customizable styles.
          </p>
          <div className="text-xs text-primary-foreground/60 flex items-center gap-2">
            <code className="bg-primary-foreground/10 px-2 py-1 rounded">
              npx fatcn-ui init
            </code>
            <span>→ Instant setup</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:p-10">
        
        <div className="max-w-sm space-y-2">
          <h2 className="text-xl font-semibold text-primary-foreground">
            Quick Themes
          </h2>
          <p className="text-sm text-primary-foreground/80">
            Just change the{" "}
            <code className="bg-primary-foreground/10 px-2 py-1 rounded">
              --hue
            </code>{" "}
            flag to switch themes.
          </p>
          <div className="text-xs text-primary-foreground/60 flex items-center gap-2">
            <Button size='sm' onClick={() => {
              const randomHue = Math.floor(Math.random() * 360);
              document.documentElement.style.setProperty("--hue", randomHue.toString()); 
              setHue(randomHue);
            }}>Switch Theme</Button>
          </div>
        </div>
        <Card variant='secondary'>
          <CardContent>
          <pre className="text-sm text-primary-foreground/80">
            <code>{`@layer base {
  :root {
    --hue: ${hue};
    
    --background: var(--hue) 100% 100%;
    --foreground: var(--hue) 45% 37%;
    
    --primary: var(--hue) 100% 93%;
    --primary-foreground: var(--hue) 45% 37%;
    
    --secondary: var(--hue) 73% 90%;
    --secondary-foreground: var(--hue) 40% 40%;

    ...
  }
}`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}