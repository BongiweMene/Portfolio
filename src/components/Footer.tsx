import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-bg">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-brand-pink/30 bg-brand-pink/10">
              <Sparkles className="h-4 w-4 text-brand-pink" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-brand-white">
              Bongiwe<span className="text-pink-purple-gradient"> Mene</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/BongiweMene"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl border border-brand-border text-brand-muted transition-all hover:border-brand-pink/40 hover:text-brand-pink"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bongiwe-mene"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl border border-brand-border text-brand-muted transition-all hover:border-brand-pink/40 hover:text-brand-pink"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:bongiwe.mene@example.com"
              className="grid h-10 w-10 place-items-center rounded-xl border border-brand-border text-brand-muted transition-all hover:border-brand-pink/40 hover:text-brand-pink"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-brand-muted sm:text-left">
          &copy; {year} Bongiwe Mene. All rights reserved. Built with passion for AI &amp; Software Engineering.
        </p>
      </div>
    </footer>
  );
}
