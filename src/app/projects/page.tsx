"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Zap, 
  MapPin, 
  Globe, 
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";
import { CTASection } from "@/components/sections/CTASection";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
  { id: 1, title: "Skyline Residential Villa", type: "Residential", location: "Lucknow, Uttar Pradesh", video: "/project/1.mp4" },
  { id: 2, title: "TechPark Commercial Complex", type: "Commercial", location: "Noida, Uttar Pradesh", video: "/project/2.mp4" },
  { id: 3, title: "Eco Manufacturing Unit", type: "Industrial", location: "Kanpur, Uttar Pradesh", video: "/project/4.mp4" },
  { id: 4, title: "Industrial Solar Plant", type: "Industrial", location: "Raipur, Chhattisgarh", video: "/vio/a.mp4" }
];

const categories = ["All Projects", "Residential", "Commercial", "Industrial"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.type === activeCategory);

  return (
    <div className="bg-white selection:bg-black selection:text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#F5F5F5] text-[#64748B] px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase">
                  Our Projects
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[30px] md:text-[44px] lg:text-[52px] font-bold text-[#0F172A] leading-[1.1] tracking-tight">
                    Transforming Energy Through <br />
                    <span className="text-[#64748B]">Successful Solar Projects</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[15px] lg:text-[17px] text-[#64748B] max-w-xl leading-[1.7]">
                    Real Installations. Real Savings. Real Impact. Explore our portfolio of solar projects completed across multiple locations.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="secondary" size="lg" className="rounded-full px-10 h-14 md:h-16 text-[14px] md:text-[15px] font-bold transition-all">
                    <Link href="/get-quote">Get Free Quote</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4}>
              <div className="relative w-full aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl">
                <Image 
                  src="/project/5.png" 
                  alt="Solar Project Hero" 
                  fill 
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-y border-neutral-100 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            <StatCard value={500} suffix="+" label="Projects Completed" />
            <StatCard value={10} suffix="MW+" label="Installed Capacity" />
            <StatCard value={98} suffix="%" label="Customer Satisfaction" />
            <StatCard value={25} suffix="+" label="Cities Served" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <LayoutGroup>
            <div className="flex flex-wrap justify-center gap-2 mb-16 md:mb-20">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "relative px-6 md:px-8 py-2 md:py-3 rounded-full text-[13px] md:text-[14px] font-bold transition-all outline-none",
                    activeCategory === cat ? "text-white" : "text-[#64748B] hover:text-[#0F172A]"
                  )}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#0F172A] rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {cat}
                </button>
              ))}
            </div>

            <motion.div 
              layout 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <Card className="rounded-[24px] border-none overflow-hidden group relative h-[500px] md:h-[560px] w-full shadow-sm hover:shadow-2xl transition-all duration-500">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                      
                      <div className="absolute bottom-0 left-0 bg-white pl-6 md:pl-8 pr-8 md:pr-10 py-5 md:py-6 flex items-center justify-center rounded-tr-[32px] border-r-[6px] border-secondary shadow-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <div className="text-[30px] md:text-[40px] font-black text-[#0F172A] tracking-tighter leading-none">
                          {project.id < 10 ? `0${project.id}` : project.id}
                        </div>
                      </div>

                      <Link href={`/get-quote`} className="absolute inset-0 z-10" aria-label={`View Project ${project.id}`} />
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="space-y-10 md:space-y-12">
              <ScrollReveal direction="up" className="space-y-4 md:space-y-6">
                <span className="text-[#64748B] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.3em]">Our Impact</span>
                <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-bold text-[#0F172A] leading-tight">
                  Driving The Green <br /> Revolution Forward
                </h2>
                <p className="text-[15px] md:text-[17px] text-[#64748B] leading-[1.7] max-w-lg">
                  Every project we complete contributes to a larger goal of carbon neutrality and energy independence for our clients.
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-2 gap-8 md:gap-12">
                <ImpactCard icon={<Zap />} val="50M+" label="Units Generated" />
                <ImpactCard icon={<Globe />} val="100+" label="Communities Powered" />
                <ImpactCard icon={<TrendingUp />} val="₹10Cr+" label="Customer Savings" />
              </div>
            </div>
            <ScrollReveal direction="left">
              <div className="relative w-full aspect-[4/3] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
                <Image src="/project/6.png" alt="Solar Impact" fill className="object-cover w-full h-full" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function StatCard({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  return (
    <ScrollReveal direction="up" className="space-y-2">
      <div className="text-[30px] md:text-[40px] lg:text-[48px] font-bold text-[#0F172A] leading-none">
        <Counter value={value} suffix={suffix} />
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">{label}</p>
    </ScrollReveal>
  );
}

function ImpactCard({ icon, val, label }: { icon: any, val: string, label: string }) {
  return (
    <div className="space-y-3">
      <div className="size-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center text-[#0F172A] mb-2">
        {React.cloneElement(icon, { className: "size-5" })}
      </div>
      <h4 className="text-[20px] md:text-[24px] font-bold text-[#0F172A] leading-none">{val}</h4>
      <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">{label}</p>
    </div>
  );
}