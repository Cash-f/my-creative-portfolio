// src/components/Loader.tsx

"use client";


import CountUp from "@/blocks/TextAnimations/CountUp/CountUp";
import { GradientText } from "./GradientText";


interface LoaderProps {
  finished: boolean;
  onFinished: () => void;
}

export function Loader({ finished, onFinished }: LoaderProps) {
  return (
    <div className={`loader-overlay ${finished ? 'finished' : ''}`}>
      <div className="loader-content">
        {/* 👇 Use GradientText as a wrapper */}
        <GradientText className="text-6xl font-mono flex items-center">
          <CountUp
            to={100}
            duration={1.5}
            onEnd={onFinished}
          />
          <span>%</span>
        </GradientText>
      </div>
    </div>
  );
}