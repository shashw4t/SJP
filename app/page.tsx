import Image from "next/image";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Education from "./Education";
import Experience from "./Experience";

const NavigationLink = ({ href, title, description }: { href: string, title: string, description: string }) => (
  <a
    href={href}
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  >
    <h2 className="mb-3 text-2xl font-semibold">
      {title}{" "}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
  </a>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Header */}
      <header className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to My Portfolio
        </p>
      </header>

      {/* Logo */}
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* Navigation Links */}
      <nav className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
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

      {/* Resume Section */}
      <section id="resume" className="w-full max-w-5xl">
        <Resume />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="w-full max-w-5xl mt-16">
        <Portfolio />
      </section>

      {/* Education Section */}
      <section id="education" className="w-full max-w-5xl mt-16">
        <Education />
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full max-w-5xl mt-16">
        <Experience />
      </section>
    </main>
  );
}