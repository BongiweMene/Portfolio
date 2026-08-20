import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/education', label: 'Education' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-bg/80 backdrop-blur-lg border-b border-brand-border' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <Logo size={40} className="transition-transform group-hover:scale-105" />
          <span className="font-display text-sm font-bold tracking-wide text-white">
            Bongiwe<span className="text-brand-pink"> Mene</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-brand-pink' : 'text-brand-muted hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg text-brand-white"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-brand-border bg-brand-bg/95 backdrop-blur-lg">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'text-brand-pink bg-brand-pink/10' : 'text-brand-muted hover:text-white hover:bg-brand-card'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
