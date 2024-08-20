import React from "react";

const NavigationLink = ({ href, title, description }: { href: string, title: string, description: string }) => (
  <a href={href} className="nav-link">
    <h2 className="mb-3 text-2xl font-semibold">
      {title}{" "}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
  </a>
);

export default NavigationLink;