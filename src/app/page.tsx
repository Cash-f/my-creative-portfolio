"use client";
import { useState, useEffect } from "react";
import { VerticalHeader } from "@/components/VerticalHeader";
import Iridescence from "@/blocks/Backgrounds/Iridescence/Iridescence";
import { Loader } from "@/components/Loader";
import { GradientText } from "@/components/GradientText";
// Import the debug component
import { FontDebugger } from "@/components/FontDebugger";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader
        finished={!isLoading}
        onFinished={() => setIsLoading(false)}
      />
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Background Layer */}
        <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <Iridescence />
        </div>
       
        {/* UI Layer */}
        <VerticalHeader />
       
        {/* Content Layer */}
        <div
          className="relative flex items-center justify-end min-h-screen p-8 sm:p-16"
          style={{ zIndex: 2 }}
        >
          <div className="w-full sm:w-2/5 text-right bg-transparent flex flex-col items-end">
            <div className="text-4xl sm:text-6xl font-bold text-white">
              <GradientText>
               Hello!
              </GradientText>
              <p className="text-md sm:text-xl text-gray-300 mt-4 font-inter">
                I'm a creative game-developer based in the UK, focused on building immersive and beautiful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}