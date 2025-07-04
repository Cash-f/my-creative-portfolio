"use client";
import { useState, useEffect } from "react";

export function FontDebugger() {
  const [fontInfo, setFontInfo] = useState<any>({});

  useEffect(() => {
    // Check if CSS variables are defined
    const rootStyles = getComputedStyle(document.documentElement);
    const interFont = rootStyles.getPropertyValue('--font-inter');
    const greatVibesFont = rootStyles.getPropertyValue('--font-great-vibes');
    
    // Get the actual font family names from the CSS variables
    const interFontName = interFont.split(',')[0].replace(/['"]/g, '');
    const greatVibesFontName = greatVibesFont.split(',')[0].replace(/['"]/g, '');
    
    // Check if fonts are loaded using the actual font names
    const fontsLoaded = {
      inter: document.fonts.check(`16px ${interFontName}`),
      greatVibes: document.fonts.check(`16px ${greatVibesFontName}`),
    };

    setFontInfo({
      interVariable: interFont,
      greatVibesVariable: greatVibesFont,
      interFontName,
      greatVibesFontName,
      fontsLoaded,
    });

    // Log font faces
    console.log('Available font faces:');
    document.fonts.forEach(font => {
      console.log(`${font.family} - ${font.style} - ${font.weight} - ${font.status}`);
    });
    
    // Try to force load fonts
    document.fonts.load(`16px ${interFontName}`).then(() => {
      console.log('Inter font loaded successfully');
    }).catch(err => {
      console.error('Inter font failed to load:', err);
    });
    
    document.fonts.load(`16px ${greatVibesFontName}`).then(() => {
      console.log('Great Vibes font loaded successfully');
    }).catch(err => {
      console.error('Great Vibes font failed to load:', err);
    });
  }, []);

  return (
    <div className="fixed top-4 left-4 bg-black/80 text-white p-4 rounded text-sm z-50 max-w-md">
      <h3 className="font-bold mb-2">Font Debug Info:</h3>
      <div>Inter CSS Variable: {fontInfo.interVariable || 'Not found'}</div>
      <div>Great Vibes CSS Variable: {fontInfo.greatVibesVariable || 'Not found'}</div>
      <div>Inter Font Name: {fontInfo.interFontName || 'Not found'}</div>
      <div>Great Vibes Font Name: {fontInfo.greatVibesFontName || 'Not found'}</div>
      <div>Inter Loaded: {fontInfo.fontsLoaded?.inter ? 'Yes' : 'No'}</div>
      <div>Great Vibes Loaded: {fontInfo.fontsLoaded?.greatVibes ? 'Yes' : 'No'}</div>
      
      <div className="mt-4 space-y-2">
        <div className="font-inter">Inter Font Test (Tailwind)</div>
        <div className="font-handwriting">Great Vibes Font Test (Tailwind)</div>
        <div style={{ fontFamily: 'var(--font-inter)' }}>Direct Inter Variable</div>
        <div style={{ fontFamily: 'var(--font-great-vibes)' }}>Direct Great Vibes Variable</div>
      </div>
    </div>
  );
}