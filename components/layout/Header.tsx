"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active link based on scroll position
      const sections = ["About", "Skills", "Projects", "Contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    setActiveLink(section);
    
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`w-full py-6 sticky top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`relative transition-all duration-500 ${
          isScrolled ? 'shadow-2xl shadow-blue-500/10' : ''
        }`}>
          {/* Floating background - appears on scroll */}
          {isScrolled && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-100/50"></div>
          )}
          
          <div className="relative flex justify-between items-center px-8 py-4">
            {/* Animated Logo */}
            <Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveLink('');
              }}
              className="group cursor-pointer"
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500">
                Youssef Tinid
              </h1>
              <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Software Engineer
              </p>
            </Link>

            {/* Navigation with animated indicator */}
            <nav className="flex items-center space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleClick(e, item)}
                  className="relative px-1 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
                >
                  <span className={`relative z-10 transition-all duration-300 ${
                    activeLink === item 
                      ? "text-blue-600 font-semibold scale-105" 
                      : "font-medium"
                  }`}>
                    {item}
                  </span>
                  {activeLink === item && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>
              ))}
              
              {/* Resume Button */}
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 font-medium flex items-center space-x-2 group overflow-hidden"
              >
                {/* Button shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span>Resume</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}