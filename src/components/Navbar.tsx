import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#" className="font-bold text-xl tracking-tight text-primary">
          XS.
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link href="#ai-workflow" className="hover:text-primary transition-colors">AI Workflow</Link>
        </nav>
        <div className="flex items-center gap-4 text-foreground/70">
          <Link href="https://github.com/xsylvers" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/xavier-sylvers" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
