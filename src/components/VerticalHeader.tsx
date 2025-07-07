"use client";

import Link from 'next/link';

type NavItem = {
  label: string;
  href: string;
};

export function VerticalHeader() {
  // Update the hrefs to point to the section IDs
  const navItems: NavItem[] = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    // This outer div positions the header on the screen
    <div className="fixed top-0 left-0 h-full p-8 flex flex-col justify-between z-30 pointer-events-none">
      
      {/* Your Name (Top Left) */}
      <div>
        <h1 
          className="text-white text-lg  pointer-events-auto"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Charlie Ash-Farmer
        </h1>
      </div>

      {/* Vertical Navigation (Bottom Left) */}
      <nav className="flex flex-col gap-6 pointer-events-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-white text-sm uppercase tracking-widest transition-colors hover:text-gray-400"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

    </div>
  );
}