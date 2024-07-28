import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
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
      <body className={`${inter.className} flex h-screen`}>
        <main className="container m-auto flex max-w-sm flex-col gap-4 p-4">
          <header className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-5xl font-bold">Daily Social</h1>
            </Link>
            <Link href="/profile">
              <i className="fa-regular fa-user fa-2x cursor-pointer"></i>
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
