import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Social",
  description: "Unique, daily AI challenges to improve your social skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        crossOrigin="anonymous"
        src="https://kit.fontawesome.com/bf3951551f.js"
      />
    </html>
  );
}
