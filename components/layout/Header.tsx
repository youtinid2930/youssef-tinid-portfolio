"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const SECTIONS = ["About", "Skills", "Projects", "Contact"] as const;

export default function Header() {
  const [activeLink, setActiveLink] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsMenuOpen(false);

      const current = SECTIONS.find((section) => {
        const el = document.getElementById(section.toLowerCase());
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    e.preventDefault();
    setActiveLink(section);
    setIsMenuOpen(false);

    const element = document.getElementById(section.toLowerCase());
    if (!element) return;

    const offset = 100;
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`relative transition-all duration-500 ${
            isScrolled ? "shadow-xl shadow-blue-500/10" : ""
          }`}
        >
          {isScrolled && (
            <div className="absolute inset-0 bg-white/90 rounded-3xl border border-gray-100" />
          )}

          {/* Main bar */}
          <div className="relative flex items-center justify-between px-6 md:px-8 py-4">
            {/* Logo */}
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveLink("");
              }}
              className="group"
            >
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500">
                Youssef Tinid
              </h1>
              <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                Software Engineer
              </p>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {SECTIONS.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleClick(e, item)}
                  className="relative px-1 py-2 group"
                >
                  <span
                    className={`relative z-10 transition ${
                      activeLink === item
                        ? "text-blue-600 font-semibold"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </span>

                  {activeLink === item && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  )}
                </Link>
              ))}

              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-medium group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                Resume →
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-gray-800 mb-1" />
              <span className="block w-6 h-0.5 bg-gray-800 mb-1" />
              <span className="block w-6 h-0.5 bg-gray-800" />
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full px-6 mt-4">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 space-y-4">
                {SECTIONS.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleClick(e, item)}
                    className={`block text-lg font-medium ${
                      activeLink === item
                        ? "text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    {item}
                  </Link>
                ))}

                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="block mt-4 text-center px-6 py-3 bg-gray-900 text-white rounded-xl"
                >
                  Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
