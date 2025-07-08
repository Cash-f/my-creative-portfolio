"use client";
import { useState, useEffect } from "react";
import { VerticalHeader } from "@/components/VerticalHeader";
import { MobileHeader } from "@/components/MobileHeader";
import Iridescence from "@/blocks/Backgrounds/Iridescence/Iridescence";
import { Loader } from "@/components/Loader";
import { GradientText } from "@/components/GradientText";
import CardSwap, { Card } from "@/blocks/Components/CardSwap/CardSwap"; // centered version
import { SkillBarChart } from "@/components/SkillChart";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "An immersive 3D adventure game",
      image: "/path/to/project1.jpg",
      tech: ["Unity", "C#", "Blender"]
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Interactive web experience",
      image: "/path/to/project2.jpg",
      tech: ["React", "Three.js", "GSAP"]
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "Mobile puzzle game",
      image: "/path/to/project3.jpg",
      tech: ["Unity", "C#", "Mobile"]
    },
    {
      id: 4,
      title: "Project Delta2",
      description: "VR experience prototype",
      image: "/path/to/project4.jpg",
      tech: ["Unity", "VR", "Oculus"]
    }
  ];

  // Data for the software skills bar chart
  const softwareSkills = [
    { name: 'Blender', level: 80, logo: '/SoftwareExImages/blender.png' },
    { name: 'Unreal', level: 90, logo: '/SoftwareExImages/unreal.png' },
    { name: 'Unity', level: 45, logo: '/SoftwareExImages/unity.png' },
    { name: 'Painter', level: 80, logo: '/SoftwareExImages/substance-painter.png' },
    { name: 'Designer', level: 40, logo: '/SoftwareExImages/substance-designer.png' },
    { name: 'Houdini', level: 35, logo: '/SoftwareExImages/houdini.png' },
  ];

  const handleCardClick = (index: number) => {
    console.log(`Clicked on project: ${projects[index].title}`);
    // Add your navigation logic here
    // For example: router.push(`/project/${projects[index].id}`);
  };

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
        <MobileHeader />
        
        <main className="relative z-10 text-white">
          
          <section id="home" className="h-screen flex items-center justify-end p-8 sm:p-16">
            <div className="w-full sm:w-2/5 text-center sm:text-right flex flex-col items-center sm:items-end">
              <div className="font-bold">
                <GradientText className="font-header text-6xl sm:text-7xl md:text-9xl mb-4 block">
                  Hello!
                </GradientText>
                <p className="text-md sm:text-xl text-gray-300 mt-4">
                  I'm a creative game-developer based in the UK, focused on building immersive and beautiful digital experiences.
                </p>
              </div>
            </div>
          </section>
          
          <section id="work" className="relative min-h-screen py-20 flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl font-header text-center mb-20">Featured Work</h2>
            
            {/* CardSwap Container */}
            <div className="relative w-full h-[600px] flex items-center justify-center">
              <CardSwap
                width={400}
                height={300}
                cardDistance={50}
                verticalDistance={60}
                delay={4000}
                pauseOnHover={true}
                onCardClick={handleCardClick}
                skewAmount={8}
                easing="elastic"
              >
                {projects.map((project, index) => (
                  <Card
                    key={project.id}
                    customClass="cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                    style={{
                      background: `linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,20,20,0.9) 100%)`,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <div className="p-6 h-full flex flex-col justify-between">
                      {/* Project Image Placeholder */}
                      <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {project.title}
                        </span>
                      </div>
                      
                      {/* Project Details */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3">
                          {project.description}
                        </p>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap justify-center gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-white/10 rounded-full text-xs text-white"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
            
            {/* Instructions */}
            <div className="mt-12 text-center text-gray-400">
              <p className="text-sm">
                Hover to pause • Click cards to view details
              </p>
            </div>
          </section>
          
          <section id="about" className="min-h-screen flex items-center justify-center p-4">
              <SkillBarChart skills={softwareSkills} />
          </section>
          
          <section id="contact" className="min-h-screen flex items-center justify-center p-4">
             <div className=" backdrop-blur-sm text-white max-w-xl w-full p-8 sm:p-12 rounded-2xl shadow-xl text-center">
                 
                 <h2 className="text-4xl sm:text-5xl font-header mb-6">
                     Get In Touch
                 </h2>
                 
                 <a
                     href="mailto:ashfarmerch@gmail.com"
                     className="text-xl sm:text-2xl text-white hover:underline"
                 >
                     ashfarmerch@gmail.com
                 </a>
 
                 {/* Social Media Links */}
                 <div className="flex items-center justify-center space-x-6 mt-8">
                     <a href="https://github.com/Cash-f" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                         <img src="/SoftwareExImages/github.png" alt="GitHub" className="w-auto h-10" />
                     </a>
                     <a href="https://www.artstation.com/charlieash-farmer" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                         <img src="/SoftwareExImages/artstation-logo-white.png" alt="ArtStation" className="w-auto h-5" />
                     </a>
                 </div>
 
             </div>
         </section>
        </main>
      </div>
    </>
  );
}