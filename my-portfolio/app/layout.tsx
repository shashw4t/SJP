import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio and resume",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-4 bg-gray-800 text-white">
          <h1 className="text-3xl">My Portfolio</h1>
        </header>
        <main>{children}</main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          © 2023 My Portfolio
        </footer>
      </body>
    </html>
  );
}