import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saivya Gulati | Frontend Engineer",
  description:
    "Portfolio of Saivya Gulati, Senior System Engineer specializing in React.js, Next.js, and scalable frontend systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans">
        {children}
      </body>
    </html>
  );
}
