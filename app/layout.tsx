import './styles/globals.css'; // Updated path

import type { Metadata } from 'next';
import LandingPage from './pages/LandingPage'; // Ensure correct import path

export const metadata: Metadata = {
  title: "Shashw4t's Portfolio",
  description: "Personal portfolio and resume!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-night text-black">
        <div className="mt-40">
          <LandingPage /> {/* Render the LandingPage component */}
          <main>{children}</main>
        </div>
        <footer className="p-4 bg-black-olive text-black text-center">
          © 2024 Shashw4t&apos;s Portfolio
        </footer>
      </body>
    </html>
  );
}