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