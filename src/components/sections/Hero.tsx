"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Sun, Zap, Shield } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "@/components/animations/Typewriter";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-solar");
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const words = [
    "AI-Powered Solar Design",
    "Clean Energy for Your Home",
    "Maximize Your Savings",
    "Zero Bill Sustainability"
  ];

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Dynamic Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        {heroImg?.imageUrl && (
          <Image
            src={heroImg.imageUrl}
            alt="Arkā Solar Hero"
            fill
            className="object-cover brightness-[0.3]"
            priority
            data-ai-hint="solar panels"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary"></div>
      </motion.div>

      {/* Floating Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob animation-delay-2000 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-2 backdrop-blur-xl shadow-2xl"
          >
            <Sun className="size-5 text-accent animate-spin-slow" style={{ animationDuration: '10s' }} />
            <span className="text-white/90 text-sm font-bold uppercase tracking-[0.2em]">Trusted by 5,000+ Families India-Wide</span>
          </motion.div>
          
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-8xl font-bold font-headline leading-[1.1] text-white"
            >
              सूरज की शक्ति, <br />
              <span className="text-accent italic">
                <Typewriter words={words} />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Experience the pinnacle of solar engineering. Arkā Solar delivers premium, high-efficiency rooftop systems that pay for themselves in record time.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 pt-8"
          >
            <Button size="lg" className="bg-accent text-primary font-bold text-xl px-12 py-8 rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_20px_50px_rgba(251,191,36,0.3)]">
              Get A Quote <ArrowRight className="ml-2 size-6" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/5 text-white border-white/20 text-xl px-12 py-8 rounded-full backdrop-blur-md hover:bg-white/20 transition-all">
              <Calculator className="mr-2 size-6" /> Solar Calculator
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 border-t border-white/10"
          >
            <HeroStat icon={<Zap className="size-5" />} value="90%" label="Bill Savings" />
            <HeroStat icon={<Shield className="size-5" />} value="25Yr" label="Warranty" />
            <HeroStat icon={<Sun className="size-5" />} value="5k+" label="Installations" />
            <HeroStat icon={<ArrowRight className="size-5" />} value="5Yr" label="Avg. Payback" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
      </motion.div>
    </section>
  );
}

function HeroStat({ icon, value, label }: { icon: any, value: string, label: string }) {
  return (
    <div className="space-y-2 group cursor-default">
      <div className="flex items-center justify-center gap-2 text-accent">
        {icon}
        <span className="text-4xl font-black font-headline transition-transform group-hover:scale-110">{value}</span>
      </div>
      <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">{label}</div>
    </div>
  );
}
