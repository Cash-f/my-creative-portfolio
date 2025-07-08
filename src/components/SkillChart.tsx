"use client";
import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface Skill {
  name: string;
  level: number;
  logo: string;
}

// Child component
const SkillBar = ({ name, level, logo }: Skill) => {
  const [barWidth, setBarWidth] = useState(0);

  // Call the hook to get the ref and visibility status
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.5, // Trigger when 50% of the component is visible
    freezeOnceVisible: true, // Animation plays once and then observer stops
  });

  // Animate the bar when it becomes visible
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setBarWidth(level);
      }, 100); // Small delay to ensure render before animation
      return () => clearTimeout(timer);
    }
  }, [isVisible, level]);

  return (
    // Attach the ref to the root element to be observed
    <div ref={ref as React.RefObject<HTMLDivElement>} className="flex items-center w-full justify-between mb-4">


      <div className="flex-grow max-w-[calc(100%-120px)] h-8 rounded-lg flex items-center justify-end mr-4">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-inner rounded-lg"
          style={{
            width: `${barWidth}%`,
            transition: 'width 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' // Corrected the missing parenthesis
          }}
        />
      </div>


      <div className="flex items-center flex-shrink-0 w-[100px] text-right">
        <img
          src={logo}
          alt={`${name} Logo`}
          className="w-8 h-8 object-contain mr-2"
        />
        <p className="text-sm font-medium text-white">
          {name}
        </p>
      </div>
    </div>
  );
};


export const SkillBarChart = ({ skills }: { skills: Skill[] }) => {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div className="w-full mx-auto">
      <h2 className="text-3xl font-header text-white text-center mb-10"> {/* Adjusted margin for better spacing */}
        Software Proficiency
      </h2>

      <div className="flex flex-col items-start px-4 sm:px-8">
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