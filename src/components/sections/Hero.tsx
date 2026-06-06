"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Zap, Shield } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <section ref={containerRef} className="relative pt-32 pb-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 lg:pr-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 bg-[#F5F5F5] px-4 py-1.5 rounded-full"
            >
              <Sun className="size-4 text-black" />
              <span className="text-black text-[12px] font-medium tracking-wider uppercase">☀ Clean Energy Solutions</span>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[34px] md:text-[48px] lg:text-[64px] font-semibold text-black leading-[1.05] tracking-tight"
              >
                Powering Homes & <br />Businesses With <span className="text-[#B8B8B8]">Smart Solar</span>
              </h1 >
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.6]"
              >
                Save More. Consume Less. Build A Sustainable Future. Help homeowners, businesses, and industries reduce electricity costs with reliable solar energy solutions.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-black text-white rounded-full px-10 py-7 text-[14px] font-semibold hover:bg-neutral-800 transition-all">
                <a href="/get-quote">Get Free Quote</a>
              </Button>
              <Button variant="outline" size="lg" className="border-black/10 text-black rounded-full px-10 py-7 text-[14px] font-semibold hover:bg-neutral-50">
                <a href="/get-quote">Book Site Survey</a>
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://picsum.photos/seed/arka_hero_luxury/1200/900" 
              alt="Luxury Solar Installation" 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
