"use client";

import Link from 'next/link';

type NavItem = {
  label: string;
  href: string;
};

export function VerticalHeader() {
  const navItems: NavItem[] = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    // 👇 These classes hide the component on mobile and show it on larger screens.
    <div className="hidden sm:flex fixed top-0 left-0 h-full p-8 flex-col justify-between z-30 pointer-events-none">
      
      <div>
        <h1 
          className="text-white text-lg  pointer-events-auto"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Charlie Ash-Farmer
        </h1>
      </div>

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