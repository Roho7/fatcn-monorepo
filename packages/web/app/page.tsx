"use client";

import { Button } from "@fatcn-ui/components/button";
import {
    Card,
    CardContent,
    ToastProvider,
    TooltipProvider
} from "fatcn-ui";
import { FigmaIcon } from "hugeicons-react";
import Image from "next/image";
import React from "react";
import Grid from "../public/grid2.svg";
import VsCodeExample from "./_components/_examples/vscode.example";
import ComponentsShowcase from "./_components/components.showcase";
import HeroBannerLeft from "./_components/hero-banner-left";
import HeroBannerRight from "./_components/hero-banner-right";
import HeroCommand from "./_components/hero-command";
import Topbar from "./_components/topbar";
import "./globals.css";

export default function Page() {
  const [hue, setHue] = React.useState(111);

  React.useEffect(() => {
    const randomHue = Math.floor(Math.random() * 360); // Generate random hue between 0-360
    document.documentElement.style.setProperty("--hue", randomHue.toString());
    setHue(randomHue);
  }, []);

  return (
    <TooltipProvider>
      <ToastProvider>
        <div className="min-h-screen w-screen overflow-hidden">
          <Topbar className="fixed" />

          {/* Hero Section */}
          <div className="flex gap-1 justify-center md:justify-between min-h-screen relative">
            <div className="absolute top-0 left-0 w-full h-full -z-10">
              <Image
                src={Grid}
                alt="Grid"
                className="w-full h-full opacity-10 -translate-y-1/2 shadow-none dark:invert dark:opacity-50"
                width={100}
                height={100}
              />
            </div>
            <HeroBannerLeft />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-6xl font-bold tracking-tight mb-4">fatcn</h1>
              <HeroCommand />
              <p className="text-sm text-primary-foreground/80">
                Chonky UI that installs right into your repository
              </p>
              <Button variant="ghost" size="sm" className="gap-2 mt-8 cursor-pointer" onClick={() => {
                window.open("https://www.figma.com/community/file/1460647923890006936/fatcn", "_blank");
              }}>
                  <FigmaIcon size={16}/> Get the Design System
              </Button>
            </div>
            <HeroBannerRight />
          </div>

          <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 p-4 md:p-10">
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
          <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-10">
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
                <Button
                  size="sm"
                  variant='gradient'
                  onClick={() => {
                    const randomHue = Math.floor(Math.random() * 360);
                    document.documentElement.style.setProperty(
                      "--hue",
                      randomHue.toString(),
                    );
                    setHue(randomHue);
                  }}
                >
                  Switch Theme
                </Button>
              </div>
            </div>
            <Card
              variant="secondary"
              size={"sm"}
              className="md:w-[30vw] w-[80vw]"
            >
              <CardContent>
                <pre className="text-sm text-primary-foreground/80 overflow-x-auto">
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
          <section className="p-4 md:p-10">
            <ComponentsShowcase />
          </section>
        </div>
      </ToastProvider>
    </TooltipProvider>
  );
}
