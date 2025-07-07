// src/components/MobileHeader.tsx

"use client";

import { useState } from "react";
import Link from 'next/link';

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    // This header is only visible on small screens (hidden on sm and up)
    <header className="sm:hidden fixed top-0 left-0 w-full p-4 flex justify-between items-center z-40">
      <div className="font-bold text-lg text-white">Charlie Ash-Farmer</div>

      
      <button onClick={() => setIsOpen(!isOpen)} className="z-50">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      
      <div 
        className={`fixed inset-0 bg-black bg-opacity-95 transition-opacity duration-300 flex flex-col items-center justify-center gap-8
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`
        }
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-white text-3xl font-header"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}