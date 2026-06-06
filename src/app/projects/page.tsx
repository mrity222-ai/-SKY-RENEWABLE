
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
  { id: 1, title: "Residential Rooftop", location: "Ahmedabad", size: "5 kW", type: "Residential", image: "https://picsum.photos/seed/arka_p1/800/600" },
  { id: 2, title: "Industrial Solar Farm", location: "Sanand", size: "250 kW", type: "Industrial", image: "https://picsum.photos/seed/arka_p2/800/600" },
  { id: 3, title: "Cooperative Housing", location: "Surat", size: "50 kW", type: "Commercial", image: "https://picsum.photos/seed/arka_p3/800/600" },
  { id: 4, title: "Textile Mill", location: "Vapi", size: "100 kW", type: "Industrial", image: "https://picsum.photos/seed/arka_p4/800/600" },
  { id: 5, title: "Modern Villa", location: "Vadodara", size: "10 kW", type: "Residential", image: "https://picsum.photos/seed/arka_p5/800/600" },
  { id: 6, title: "Hospital Setup", location: "Rajkot", size: "30 kW", type: "Commercial", image: "https://picsum.photos/seed/arka_p6/800/600" },
];

const categories = ["All", "Residential", "Commercial", "Industrial"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.type === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold font-headline">Our <span className="text-accent">Portfolio</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">Take a look at some of our successful installations across residential and industrial sectors.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <LayoutGroup>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "relative rounded-full px-8 py-3 text-sm font-bold transition-all outline-none",
                      isActive ? "text-primary" : "text-primary/60 hover:text-primary"
                    )}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="active-pill"
                        className="absolute inset-0 bg-accent rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>

            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div 
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="group relative rounded-[40px] overflow-hidden aspect-[4/3] shadow-lg"
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform group-hover:scale-110 duration-700"
                      data-ai-hint="solar project"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Badge className="w-fit mb-3 bg-accent text-primary font-bold">{project.type}</Badge>
                      <h3 className="text-2xl font-bold font-headline">{project.title}</h3>
                      <div className="flex justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm opacity-80">{project.location}</span>
                        <span className="text-lg font-bold text-accent">{project.size}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </section>
    </div>
  );
}
