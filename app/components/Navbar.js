import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-blue-950 text-slate-300">
    <nav className="flex items-center justify-between  p-4 px-8 w-screen">
      <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 text-transparent bg-clip-text z-10">
        PhishShield
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/" className="hover:text-sky-400 transition-colors duration-200 z-10">
          Home
        </Link>
        <Link href="/about" className="hover:text-sky-400 transition-colors duration-200 z-10">
          About
        </Link>
        <Link href="/contact" className="hover:text-sky-400 transition-colors duration-200 z-10">
          Contact
        </Link>
        <a 
          href="https://github.com/KRISH71819/PhishShield" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition-colors duration-200 z-10"
        >
          GitHub
        </a>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;