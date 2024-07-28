import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";

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
      <body className={`${inter.className} flex h-screen`}>
        <main className="container m-auto p-4 flex flex-col gap-4 max-w-sm">
          <header className="flex items-center justify-between">
            <Link href="/">
              <h1 className="font-bold text-5xl">Daily Social</h1>
            </Link>
            <Link href="/profile">
              <i className="cursor-pointer fa-regular fa-user fa-2x"></i>
            </Link>
          </header>
          {children}
        </main>
      </body>
      <Script
        crossOrigin="anonymous"
        src="https://kit.fontawesome.com/bf3951551f.js"
      />
    </html>
  );
}
