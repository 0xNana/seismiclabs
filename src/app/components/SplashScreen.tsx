'use client'

import React, { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set timeout for auto-dismiss after 30 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 30000);

    // Handle click event to dismiss
    const handleClick = () => {
      setIsVisible(false);
      onComplete();
      clearTimeout(timer);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('click', handleClick);
    }

    return () => {
      clearTimeout(timer);
      if (typeof window !== 'undefined') {
        window.removeEventListener('click', handleClick);
      }
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-[#0f172a] z-50 flex items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center min-h-screen max-w-3xl mx-auto px-4">
        {/* Seismic Wave Animation */}
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Animated circles */}
            <div className="absolute w-full h-full animate-ping opacity-20 bg-blue-500 rounded-full" style={{ animationDuration: '3s' }}></div>
            <div className="absolute w-3/4 h-3/4 animate-ping opacity-30 bg-purple-500 rounded-full" style={{ animationDuration: '2.5s' }}></div>
            <div className="absolute w-1/2 h-1/2 animate-ping opacity-40 bg-indigo-500 rounded-full" style={{ animationDuration: '2s' }}></div>
            
            {/* Center pulse */}
            <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse" style={{ animationDuration: '1.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Logo Text Container - Now positioned below the animation */}
        <div className="mt-8">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in tracking-tight">
            Seismic Labs
          </h1>
          <p className="text-2xl text-gray-300 animate-fade-in-delayed">
            Transforming societies through technology
          </p>
        </div>

        {/* Optional: Click to continue text */}
        <p className="text-gray-400 text-sm mt-12 animate-fade-in-delayed opacity-60">
          Click anywhere to continue
        </p>
      </div>
    </div>
  );
} 