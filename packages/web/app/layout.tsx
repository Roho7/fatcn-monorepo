import { siteConfig } from "@/lib/site.utils";
import { Metadata } from "next";
import Footer from "./_components/footer";
import { ThemeProvider } from "./_components/themeProvider";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
    return {
      title: siteConfig().title,
      description: siteConfig().description,
      openGraph: {
        title: siteConfig().title,
        description: siteConfig().description, 
        type: "website",
        url: siteConfig().baseUrl,
        images: [
          {
            url: siteConfig().ogImage,
            width: 1200,
            height: 630,
            alt: siteConfig().name,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: siteConfig().title,
        description: siteConfig().description,
        images: [siteConfig().ogImage],
        creator: siteConfig().twitter,
      },
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-background flex flex-1 flex-col min-h-screen w-screen overflow-x-hidden`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex-1 relative">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
