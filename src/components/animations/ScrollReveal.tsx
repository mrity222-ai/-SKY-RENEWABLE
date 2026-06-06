"use client";

import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: boolean;
}

export function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0,
  duration = 0.8,
  className = "",
  stagger = false
}: ScrollRevealProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      scale: direction === "zoom" ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: delay,
        staggerChildren: stagger ? 0.1 : 0,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
