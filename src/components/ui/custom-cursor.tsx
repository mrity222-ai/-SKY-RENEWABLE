'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverType, setHoverType] = useState<'default' | 'link' | 'text' | 'button'>('default');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, restDelta: 0.001 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('[role="button"]') ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea';

      const isText = 
        target.tagName.toLowerCase() === 'p' || 
        target.tagName.toLowerCase() === 'h1' || 
        target.tagName.toLowerCase() === 'h2' || 
        target.tagName.toLowerCase() === 'h3' || 
        target.tagName.toLowerCase() === 'span';

      if (isInteractive) {
        setIsHovering(true);
        setHoverType(target.closest('button') ? 'button' : 'link');
      } else if (isText) {
        setHoverType('text');
        setIsHovering(false);
      } else {
        setIsHovering(false);
        setHoverType('default');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  // Disable on mobile/touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Main Dot */}
            <motion.div
              style={{
                x: springX,
                y: springY,
                translateX: '-50%',
                translateY: '-50%',
              }}
              className="size-2 bg-accent rounded-full fixed top-0 left-0"
            />
            
            {/* Outer Ring */}
            <motion.div
              style={{
                x: springX,
                y: springY,
                translateX: '-50%',
                translateY: '-50%',
              }}
              animate={{
                scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                opacity: isHovering ? 0.2 : 0.5,
                borderWidth: isHovering ? '8px' : '1px',
                width: isHovering ? 60 : 40,
                height: isHovering ? 60 : 40,
              }}
              className={cn(
                "fixed top-0 left-0 rounded-full border border-accent transition-colors duration-300",
                isHovering ? "bg-accent/10" : "bg-transparent"
              )}
            />

            {/* Hover Label Placeholder (Optional Luxury Hint) */}
            {isHovering && (
              <motion.div
                style={{
                  x: springX,
                  y: springY,
                  translateX: '40px',
                  translateY: '-50%',
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 40 }}
                className="fixed top-0 left-0 text-[10px] font-black uppercase tracking-[0.2em] text-accent whitespace-nowrap"
              >
                {hoverType === 'link' ? 'Explore' : 'Action'}
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
