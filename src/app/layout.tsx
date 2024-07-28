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
      <body className={inter.className}>
        <main className="container mx-auto flex max-w-prose flex-col gap-4 p-4">
          <header className="flex flex-col items-start justify-between gap-4 sm:flex-row">
            <div>
              <h1 className="text-5xl font-bold">
                <Link href="/">Daily Social</Link>
              </h1>
              <p>Unique, daily AI challenges to improve your social skills.</p>
            </div>
            <Link href="/profile">
              <button className="cursor-pointer rounded border-2 border-black bg-black p-2 text-white">
                Profile
              </button>
            </Link>
          </header>
          <hr className="border border-black" />
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
