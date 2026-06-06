"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Sun } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-solar");
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        {heroImg?.imageUrl && (
          <Image
            src={heroImg.imageUrl}
            alt="Arkā Solar Hero"
            fill
            className="object-cover brightness-50"
            priority
            data-ai-hint="solar panels"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl text-white space-y-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-1.5 backdrop-blur-md"
          >
            <Sun className="size-4 text-accent animate-spin-slow" style={{ animationDuration: '8s' }} />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Trusted by 5,000+ Families Across India</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold font-headline leading-[1.1]"
          >
            सूरज की शक्ति, <br />
            <span className="text-accent italic">आपका सुनहरा भविष्य</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed"
          >
            Empowering India's homes with the most reliable solar rooftop solutions. 
            Join the revolution and reduce your bills by up to 90%.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-5 pt-4"
          >
            <Button size="lg" className="bg-accent text-primary font-bold text-lg px-10 rounded-full hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-accent/20">
              Get A Quote <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/5 text-white border-white/20 text-lg px-10 rounded-full backdrop-blur-md hover:bg-white/20 transition-all">
              <Calculator className="mr-2 size-5" /> Calculate Savings
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-3 gap-12 pt-16 border-t border-white/10 max-w-2xl"
          >
            <div className="space-y-1">
              <div className="text-4xl font-black text-accent">90%</div>
              <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Bill Savings</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-black text-accent">5yr+</div>
              <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Payback</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-black text-accent">25yr</div>
              <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Warranty</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
