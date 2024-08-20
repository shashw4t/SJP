import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LandingPage from "./LandingPage"; // Import the new component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shashw4t's Portfolio",
  description: "Personal portfolio and resume!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LandingPage /> {/* Add the LandingPage component */}
        <main>{children}</main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          © 2024 Shashw4t&apos;s Portfolio
        </footer>
      </body>
    </html>
  );
}