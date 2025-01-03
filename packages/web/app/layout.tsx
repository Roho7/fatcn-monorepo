import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-background flex flex-1 flex-col`}>
        {children}
      </body>
    </html>
  );
}
