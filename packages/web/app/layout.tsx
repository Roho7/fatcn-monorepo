import Footer from "./_components/footer";
import { ThemeProvider } from "./_components/themeProvider";
import "./globals.css";

const generateMetadata = () => {
  return {
    title: "Fatcn",
    description: "Fatcn is a framework for building web applications with Next.js and Tailwind CSS.",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-background flex flex-1 flex-col min-h-screen w-screen`}>
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
