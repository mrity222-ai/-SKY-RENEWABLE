"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Zap, Shield } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section ref={containerRef} className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-white">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-8 lg:pr-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 bg-[#F8FAFC] px-5 py-2 rounded-full border border-border/50"
            >
              <Sun className="size-4 text-primary animate-spin-slow" />
              <span className="text-[#14213D] text-[11px] font-bold tracking-[0.2em] uppercase">Clean Energy Solutions</span>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[34px] md:text-[48px] lg:text-[52px] font-bold text-[#14213D] leading-[1.05] tracking-tight font-headline"
              >
                Powering Homes & <br />Businesses With <span className="text-primary">Smart Solar</span>
              </h1 >
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[15px] lg:text-[17px] text-[#475569] max-w-xl leading-relaxed font-medium opacity-90"
              >
                Save More. Consume Less. Build A Sustainable Future. Help homeowners, businesses, and industries reduce electricity costs with reliable solar energy solutions.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button size="lg" className="bg-[#14213D] text-white rounded-full px-10 h-12 md:h-14 text-[14px] font-bold hover:bg-neutral-800 transition-all shadow-xl shadow-[#14213D]/10">
                <a href="/get-quote" className="flex items-center gap-2">Get Free Quote <ArrowRight className="size-4" /></a>
              </Button>
              <Button variant="outline" size="lg" className="border-border text-[#14213D] rounded-full px-10 h-12 md:h-14 text-[14px] font-bold hover:bg-[#F8FAFC] transition-all">
                <a href="/get-quote">Book Site Survey</a>
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(20,33,61,0.15)] group border border-border/50"
          >
            <Image 
              src="https://picsum.photos/seed/arka_hero_luxury/1200/900" 
              alt="Luxury Solar Installation" 
              fill 
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              priority
              data-ai-hint="luxury solar"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
