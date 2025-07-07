"use client";
import { useState, useEffect } from 'react';


interface Skill {
  name: string;
  level: number; // Proficiency level 0 to 100
  logo: string;  
}

// Child component 
const SkillBar = ({ name, level, logo }: Skill) => {
  const [barHeight, setBarHeight] = useState(0);

  // Animate the bar when the component mounts
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setBarHeight(level);
    }, 100);
    return () => clearTimeout(timer);
  }, [level]);
  
  return (
    <div className="flex flex-col items-center w-20 text-center">
      
      <div className="h-48 w-8 bg-gray-200/30 rounded-lg flex items-end">
        <div
          className="w-full bg-gradient-to-t from-cyan-400 to-blue-500 rounded-lg"
          style={{ 
            height: `${barHeight}%`, 
            transition: 'height 4s ease-out' 
          }}
        />
      </div>
      
      
      <img 
        src={logo} 
        alt={`${name} Logo`} 
        className="w-12 h-12 mt-4 object-contain" 
      />
      
      
      <p className="mt-2 text-sm font-medium text-white">
        {name}
      </p>
    </div>
  );
};



export const SkillBarChart = ({ skills }: { skills: Skill[] }) => {
  if (!skills || skills.length === 0) {
    return null;
  }
  
  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-black/20 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-header text-white text-center mb-10">
        Software Proficiency
      </h2>
      <div className="flex justify-center items-end gap-x-6 sm:gap-x-8">
        {skills.map((skill) => (
          <SkillBar 
            key={skill.name} 
            name={skill.name} 
            level={skill.level}
            logo={skill.logo}
          />
        ))}
      </div>
    </div>
  );
};