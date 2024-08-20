"use client";
import React from "react";

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
    <a href={href} onClick={handleClick} className="nav-link cursor-pointer">
      <h2 className="mb-3 text-2xl font-semibold">
        {title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
    </a>
  );
};

export default function LandingPage() {
  return (
    <nav className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left mt-8">
      <NavigationLink
        href="#resume"
        title="Resume"
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
  );
}