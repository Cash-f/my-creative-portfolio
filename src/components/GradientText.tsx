import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <div
      className={`
        bg-gradient-to-r from-blue-500 to-purple-500 
        bg-clip-text text-transparent
        p-4
        ${className || ""}
      `}
    >
      {children}
    </div>
  );
}