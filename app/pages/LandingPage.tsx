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
    <a href={href} onClick={handleClick} className="cursor-pointer no-underline text-inherit">
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
    <div className="bg-night text-beaver min-h-screen flex items-center justify-center">
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
      </nav>
    </div>
  );
}