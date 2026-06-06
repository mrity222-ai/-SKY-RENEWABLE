"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  words: string[];
  delay?: number;
  speed?: number;
}

export function Typewriter({ words, delay = 2000, speed = 100 }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      const currentWord = words[index];
      
      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
        timeout = setTimeout(handleTyping, speed / 2);
      } else {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        timeout = setTimeout(handleTyping, speed);
      }

      if (!isDeleting && displayText === currentWord) {
        timeout = setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    };

    timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, words, delay, speed]);

  return (
    <span className="relative inline-block min-h-[1.2em]">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[4px] h-[0.9em] bg-accent ml-1 align-middle"
      />
    </span>
  );
}
