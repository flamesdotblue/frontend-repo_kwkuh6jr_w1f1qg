import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-white/10 bg-neutral-900/40 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/30">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            {/* Brand */}
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/20">
                <Rocket className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold tracking-tight">BuyMore Analytix</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-white/90"
              >
                Get Started
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              className="inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white md:hidden"
              aria-label="Toggle Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="border-t border-white/10 px-4 py-3 sm:px-6 md:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-1 inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-white/90"
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
