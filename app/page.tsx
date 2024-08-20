"use client";

import React from "react";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-[#e0e0e0] p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to Shashw4t&apos;s Portfolio</h1>
      </header>
      
      <div className="space-y-4 mb-16">
        <button className="btn">Professional Summary</button>
        <button className="btn">Education</button>
        <button className="btn">Experience</button>
        <button className="btn">Portfolio</button>
      </div>
      
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        <section id="resume" className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <Resume />
        </section>

        <section id="portfolio" className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
          <Portfolio />
        </section>

        <section id="education" className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <Education />
        </section>

        <section id="experience" className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <Experience />
        </section>
      </main>
    </div>
  );
}