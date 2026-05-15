import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 pb-12 px-6">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-primary font-medium tracking-wide text-sm md:text-base uppercase">Xavier Sylvers</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Aspiring AI Solutions Analyst
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Building AI-powered workflow tools, automation systems, and user-focused technology solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="#projects"
            className="group flex items-center gap-2 bg-primary hover:bg-primary-hover text-background px-6 py-3 rounded-md font-medium transition-all"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/xsylvers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-md font-medium bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/xavier-sylvers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-md font-medium bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
