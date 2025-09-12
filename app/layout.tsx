import type { Metadata } from "next";
import { Cormorant, Quicksand } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Her Immigrant Tales - Celebrating Immigrant Women",
  description: "Discover powerful stories, connect with a vibrant community, and help us honor the voices of immigrant women everywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${quicksand.variable}`}>
      <body className="font-quicksand antialiased">{children}</body>
    </html>
  );
}