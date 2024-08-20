"use client";
import React from "react";
import Image from "next/image";


const NavigationLink = ({ href, title, description }: { href: string, title: string, description: string }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} className="cursor-pointer no-underline text-inherit text-right">
      <h2 className="mb-3 text-2xl font-semibold">
        {title}
        <span className="inline-block transition-transform transform translate-x-0">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-xs text-sm opacity-50">{description}</p>
    </a>
  );
};

export default function LandingPage() {
  return (
    <div className="bg-night text-beaver min-h-screen flex flex-col items-center justify-center text-right">
      <Image src="/app/background.jpg" alt="Landing" width={500} height={300} />
      <nav className="mb-32 grid text-center w-full max-w-5xl grid-cols-1 gap-8 mt-8 text-right">
        <NavigationLink
          href="#summary"
          title="Summary"
          description="View my professional experience and education."
        />
        <NavigationLink
          href="#portfolio"
          title="Portfolio"
          description="Explore my projects and accomplishments."
        />
        <NavigationLink
          href="#education"
          title="Education"
          description="Learn about my academic background."
        />
        <NavigationLink
          href="#experience"
          title="Experience"
          description="Discover my work experience."
        />
      </nav>
    </div>
  );
}