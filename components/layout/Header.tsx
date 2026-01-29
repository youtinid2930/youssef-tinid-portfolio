"use client"; 

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Logo / Name */}
        <div className="text-2xl font-bold">
          Youssef Tinid
        </div>

        {/* Navigation */}
        <nav className="space-x-6">
          <Link href="#about" className="hover:text-blue-600 transition">About</Link>
          <Link href="#skills" className="hover:text-blue-600 transition">Skills</Link>
          <Link href="#projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
