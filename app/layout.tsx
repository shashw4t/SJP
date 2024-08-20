import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LandingPage from "./pages/LandingPage"; // Ensure correct import path

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shashw4t's Portfolio",
  description: "Personal portfolio and resume!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-[#0a0a0a] p-4">
          <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Shashw4t&rsquo;s Portfolio
          </p>
        </header>
        <div className="content-wrapper mt-40">
          <LandingPage /> {/* Render the LandingPage component */}
          <main>{children}</main>
        </div>
        <footer className="p-4 bg-gray-800 text-white text-center">
          © 2024 Shashw4t&apos;s Portfolio
        </footer>
      </body>
    </html>
  );
}