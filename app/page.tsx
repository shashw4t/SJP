"use client";

import React from "react";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-[#e0e0e0] p-8">
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        <section id="resume" className="w-full">
          <Resume />
        </section>

        <section id="portfolio" className="w-full">
          <Portfolio />
        </section>

        <section id="education" className="w-full">
          <Education />
        </section>

        <section id="experience" className="w-full">
          <Experience />
        </section>
      </main>
    </div>
  );
}