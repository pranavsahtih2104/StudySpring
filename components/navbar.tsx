"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun, Zap } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // This only matters if you use Tailwind's `dark:` classes.
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-lg py-3 shadow-sm border-b border-slate-800"
          : "bg-slate-950/80 backdrop-blur-md py-4 border-b border-slate-800/60"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 via-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg group-hover:shadow-sky-500/40 transition-all duration-300">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-50">
              Study<span className="text-sky-400">Sprint</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-sky-300 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-slate-900 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Moon className="w-4 h-4 text-slate-400" />
              ) : (
                <Sun className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {/* Sign Up Free Button */}
            <Link
              href="/signup"
              className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-sky-300 transition-colors duration-200"
            >
              Sign Up Free
            </Link>

            {/* Sign In Button */}
            <Link
              href="/signin"
              className="px-5 py-2 rounded-full bg-sky-500 text-slate-950 text-sm font-medium hover:bg-sky-400 transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-900 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-100" />
            ) : (
              <Menu className="w-6 h-6 text-slate-100" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-3 border-t border-slate-800">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm text-slate-400 hover:text-sky-300 hover:bg-slate-900/60 rounded-lg transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3 space-y-2 border-t border-slate-800">
              {/* Theme Toggle Mobile */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-sky-300 hover:bg-slate-900/60 rounded-lg transition-colors duration-200"
              >
                {isDarkMode ? (
                  <>
                    <Moon className="w-4 h-4" />
                    Dark Mode
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4" />
                    Light Mode
                  </>
                )}
              </button>

              {/* Sign Up Button Mobile */}
              <Link
                href="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-2 text-sm text-center font-medium text-slate-100 hover:bg-slate-900/60 rounded-lg transition-colors duration-200"
              >
                Sign Up Free
              </Link>

              {/* Sign In Button Mobile */}
              <Link
                href="/signin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-2 text-sm text-center font-medium bg-sky-500 text-slate-950 rounded-lg hover:bg-sky-400 transition-all duration-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
