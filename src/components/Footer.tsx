import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/20 py-12 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link href="#" className="font-bold text-xl tracking-tight text-primary block mb-2">
            XS.
          </Link>
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} Xavier Sylvers. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 text-foreground/60">
          <a href="mailto:contact@example.com" className="hover:text-primary transition-colors flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" />
            <span className="sr-only md:not-sr-only">Contact</span>
          </a>
          <a href="https://github.com/xsylvers" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 text-sm">
            <FaGithub className="w-4 h-4" />
            <span className="sr-only md:not-sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/xavier-sylvers" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 text-sm">
            <FaLinkedin className="w-4 h-4" />
            <span className="sr-only md:not-sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
