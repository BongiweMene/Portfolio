import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2.5">
            <Logo size={36} />
            <span className="font-display text-sm font-bold text-white">
              Bongiwe<span className="text-brand-pink"> Mene</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <a href="https://github.com/BongiweMene" target="_blank" rel="noreferrer" className="text-brand-muted hover:text-brand-pink transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/bongiwe-mene-8b1528242" target="_blank" rel="noreferrer" className="text-brand-muted hover:text-brand-pink transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:menebongiwe3@gmail.com" className="text-brand-muted hover:text-brand-pink transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-brand-muted">
          © {new Date().getFullYear()} Bongiwe Mene. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
