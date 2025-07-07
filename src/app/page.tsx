"use client";

import { useState, useEffect } from "react";
import { VerticalHeader } from "@/components/VerticalHeader";
import Iridescence from "@/blocks/Backgrounds/Iridescence/Iridescence";
import { Loader } from "@/components/Loader";
import { GradientText } from "@/components/GradientText";

const ProjectCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 font-sans">
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-300 mt-2">{description}</p>
  </div>
);

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

      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} font-sans`}>
        
        <div className="fixed inset-0 w-full h-full" style={{ zIndex: -1 }}>
          <Iridescence />
        </div>
        
        <VerticalHeader />
        
        <main className="relative z-10 p-8 sm:p-16 text-white">
          <section className="h-screen flex items-center justify-end">
            
            {/* --- This section has been simplified --- */}
            <div className="w-full sm:w-2/5 text-right pr-8">
              <GradientText className="font-header text-7xl sm:text-9xl mb-4 block">
                Hello!
              </GradientText>
              
              <p className="text-md sm:text-xl text-gray-300 mt-4">
                I'm a creative game-developer based in the UK, focused on building immersive and beautiful digital experiences.
              </p>
            </div>
            {/* --- End of simplified section --- */}

          </section>

          {/* Featured Projects */}
          <section className="min-h-screen py-20">
            <h2 className="text-5xl font-header text-center mb-12 text-white">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ProjectCard title="Project One" description="A brief summary  " />
              <ProjectCard title="Project Two" description="A brief summary  " />
              <ProjectCard title="Project Three" description="A brief summary  " />
              <ProjectCard title="Project Four" description="A brief summary  " />
            </div>
          </section>

          {/* About Me */}
          <section className="min-h-screen flex items-center justify-center">
            <div className="max-w-2xl text-center">
              <h2 className="text-5xl font-header mb-6 text-white">About Me</h2>
              <p className="text-lg text-gray-300">
                Skills section add anim bars?
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="min-h-screen flex flex-col items-center justify-center">
             <h2 className="text-5xl font-header mb-6 text-white">Get In Touch</h2>
             <a 
               href="mailto:your-email@example.com" 
               className="text-2xl text-blue-400 hover:underline"
             >
               your-email@example.com
             </a>
          </section>
        </main>
      </div>
    </>
  );
}