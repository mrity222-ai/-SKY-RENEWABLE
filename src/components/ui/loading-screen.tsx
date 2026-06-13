'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8FAFC]"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-64 h-24 md:w-80 md:h-32 mb-12"
          >
            <Image 
              src="/ab/lo.png" 
              alt="Sky Renewable Logo" 
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Progress Bar Container */}
          <div className="relative w-48 h-[2px] bg-[#DCE7F5] rounded-full overflow-hidden">
            {/* Animated Progress */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ 
                duration: 2, 
                ease: [0.65, 0, 0.35, 1],
              }}
              className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]"
            />
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 flex flex-col items-center gap-2"
          >
            <p className="text-[10px] font-bold text-[#14213D] uppercase tracking-[0.4em]">
              Powering the next green revolution
            </p>
            <div className="flex gap-1.5 mt-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity, 
                    delay: i * 0.2 
                  }}
                  className="size-1 rounded-full bg-[#F59E0B]"
                />
              ))}
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
             <motion.div 
               animate={{ 
                 rotate: 360,
                 scale: [1, 1.1, 1]
               }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute -top-1/4 -right-1/4 size-[600px] border border-[#2563EB]/10 rounded-full"
             />
             <motion.div 
               animate={{ 
                 rotate: -360,
                 scale: [1, 1.2, 1]
               }}
               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
               className="absolute -bottom-1/4 -left-1/4 size-[800px] border border-[#F59E0B]/10 rounded-full"
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
