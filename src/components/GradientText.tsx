// src/components/GradientText.tsx

import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    // 👇 Changed this from a <span> to a <div>
    <div
      className={`
        bg-gradient-to-r from-blue-500 to-purple-500 
        bg-clip-text text-transparent
        ${className || ""}
      `}
    >
      {children}
    </div>
  );
}