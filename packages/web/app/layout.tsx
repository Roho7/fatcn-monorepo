import Footer from "./_components/footer";
import { ThemeProvider } from "./_components/themeProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-background flex flex-1 flex-col`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
