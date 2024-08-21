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
    <a href={href} onClick={handleClick} className="cursor-pointer no-underline text-black p-4 bg-beaver rounded-lg shadow-md hover:bg-night hover:text-beaver transition-colors duration-300">
      <h2 className="mb-1 text-xl font-semibold text-mint">
        {title}
      </h2>
      <p className="m-0 text-sm opacity-75 text-black">{description}</p>
    </a>
  );
};

export default function LandingPage() {
  return (
    <div className="bg-night text-black min-h-screen flex items-center justify-center">
      <nav className="flex space-x-8">
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