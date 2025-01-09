// app/components/Preloader.tsx
"use client"

import { useEffect, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // Adjust increment
      });
    }, 50); // Adjust speed

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (progress === 100) {
      onComplete(); // Notify parent when loading finishes
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="w-3/4 max-w-md">
        <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-4 text-center text-lg font-medium text-gray-700">
          Loading {progress}%
        </p>
      </div>
    </div>
  );
};

export default Preloader;
