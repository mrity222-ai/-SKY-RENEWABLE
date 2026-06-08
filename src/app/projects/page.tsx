
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Zap, 
  MapPin, 
  Calendar, 
  Building2, 
  TrendingUp, 
  TreeDeciduous, 
  Globe, 
  Star,
  CheckCircle2,
  Clock,
  Search,
  Layout
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Skyline Residential Villa",
    type: "Residential",
    location: "Lucknow, Uttar Pradesh",
    capacity: "10KW System",
    date: "Oct 2024",
    client: "Mr. Khanna",
    savings: "₹1,20,000 / Yr",
    image: "https://picsum.photos/seed/arka_pr1/800/600",
    description: "Full rooftop solar installation with smart monitoring and lithium-ion battery backup."
  },
  {
    id: 2,
    title: "TechPark Commercial Complex",
    type: "Commercial",
    location: "Noida, Uttar Pradesh",
    capacity: "150KW System",
    date: "Sept 2024",
    client: "Apex Realty",
    savings: "₹18,00,000 / Yr",
    image: "https://picsum.photos/seed/arka_pr2/800/600",
    description: "Bespoke industrial-grade solar solution powering the entire common area grid."
  },
  {
    id: 3,
    title: "Eco Manufacturing Unit",
    type: "Industrial",
    location: "Kanpur, Uttar Pradesh",
    capacity: "500KW System",
    date: "Aug 2024",
    client: "GreenFab Industries",
    savings: "₹60,00,000 / Yr",
    image: "https://picsum.photos/seed/arka_pr3/800/600",
    description: "Large scale heavy-duty solar array integrated with factory load management systems."
  },
  {
    id: 4,
    title: "Municipal Office Block",
    type: "Government",
    location: "Prayagraj, Uttar Pradesh",
    capacity: "80KW System",
    date: "July 2024",
    client: "Local Municipal Council",
    savings: "₹9,50,000 / Yr",
    image: "https://picsum.photos/seed/arka_pr4/800/600",
    description: "Grid-tie solar solution reducing public infrastructure operational costs."
  },
  {
    id: 5,
    title: "Riverfront Modern Estate",
    type: "Residential",
    location: "Varanasi, Uttar Pradesh",
    capacity: "15KW System",
    date: "June 2024",
    client: "Dr. Singh",
    savings: "₹1,80,000 / Yr",
    image: "https://picsum.photos/seed/arka_pr5/800/600",
    description: "Architecturally integrated solar panels for a luxury riverfront residence."
  },
  {
    id: 6,
    title: "Logistics Hub Warehouse",
    type: "Industrial",
    location: "Ghaziabad, Uttar Pradesh",
    capacity: "350KW System",
    date: "May 2024",
    client: "SafeWay Logistics",
    savings: "₹42,00,000 / Yr",
    image: "https://picsum.photos/seed/arka_pr6/800/600",
    description: "Roof-mounted high-efficiency panels optimized for large surface areas."
  }
];

const categories = ["All Projects", "Residential", "Commercial", "Industrial", "Government"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.type === activeCategory);

  return (
    <div className="bg-white selection:bg-black selection:text-white overflow-hidden">
      {/* SECTION 1 – HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase">
                  Our Projects
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-semibold text-black leading-[1.05] tracking-tight">
                    Transforming Energy Through <br />
                    <span className="text-[#B8B8B8]">Successful Solar Projects</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.8]">
                    Real Installations. Real Savings. Real Impact. Explore our portfolio of residential, commercial, industrial, and government solar projects completed across multiple locations.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-black text-white rounded-full px-10 h-16 text-sm font-semibold hover:bg-neutral-800 transition-all">
                    <Link href="/get-quote">Get Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-black/10 text-black rounded-full px-10 h-16 text-sm font-semibold hover:bg-neutral-50">
                    <Link href="/get-quote">Book Site Survey</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4} className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/arka_project_hero/1200/800" 
                alt="Solar Project Hero" 
                fill 
                className="object-cover"
                priority
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 – PROJECT STATISTICS */}
      <section className="py-24 border-y border-neutral-100 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <StatCard value={500} suffix="+" label="Projects Completed" />
            <StatCard value={10} suffix="MW+" label="Installed Capacity" />
            <StatCard value={98} suffix="%" label="Customer Satisfaction" />
            <StatCard value={25} suffix="+" label="Cities Served" />
          </div>
        </div>
      </section>

      {/* SECTION 3 – PROJECT FILTERS */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <LayoutGroup>
            <div className="flex flex-wrap justify-center gap-2 mb-20">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "relative px-8 py-3 rounded-full text-[12px] font-bold transition-all outline-none",
                    activeCategory === cat ? "text-white" : "text-[#777] hover:text-black"
                  )}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-black rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {cat}
                </button>
              ))}
            </div>

            <motion.div 
              layout 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
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
                    <Card className="rounded-[24px] border-none overflow-hidden group relative aspect-[4/3] shadow-sm hover:shadow-2xl transition-all duration-500 bg-white">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Premium Info Box Overlay */}
                      <div className="absolute bottom-0 left-0 bg-white pl-8 pr-12 py-6 flex items-center gap-6 rounded-tr-[32px] border-r-[6px] border-secondary shadow-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <div className="text-[40px] md:text-[48px] font-black text-foreground tracking-tighter leading-none">
                          {project.id < 10 ? `0${project.id}` : project.id}
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{project.type}</span>
                          <h3 className="text-[16px] md:text-[18px] font-bold text-foreground leading-tight max-w-[180px]">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Hover Overlay for Type/Location */}
                      <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Badge className="bg-white/90 backdrop-blur-md text-black border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                          <MapPin className="size-3 mr-1" /> {project.location}
                        </Badge>
                      </div>

                      <Link href={`/get-quote`} className="absolute inset-0 z-10" aria-label={`View ${project.title}`} />
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </section>

      {/* SECTION 5 – PROJECT GALLERY */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-4">
            <span className="text-[#B8B8B8] font-bold text-[11px] uppercase tracking-[0.3em]">Gallery</span>
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Project Visuals</h2>
          </ScrollReveal>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="relative group overflow-hidden rounded-[40px] cursor-pointer shadow-lg aspect-square">
                  <Image 
                    src={`https://picsum.photos/seed/arka_gal_${idx}/800/800`} 
                    alt={`Gallery ${idx}`} 
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Search className="text-white size-10" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – PROJECT PROCESS */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-24 space-y-4">
            <span className="text-white/40 font-bold text-[11px] uppercase tracking-[0.3em]">Execution Workflow</span>
            <h2 className="text-[30px] lg:text-[40px] font-semibold">How We Deliver Excellence</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <ProcessStep num="01" title="Consultation" desc="Initial energy audit." />
            <ProcessStep num="02" title="Site Survey" desc="Technical analysis." />
            <ProcessStep num="03" title="Design" desc="Custom 3D layout." />
            <ProcessStep num="04" title="Installation" desc="Precision engineering." />
            <ProcessStep num="05" title="Testing" desc="Quality checks." />
            <ProcessStep num="06" title="Support" desc="24/7 monitoring." />
          </div>
        </div>
      </section>

      {/* SECTION 7 – PROJECT IMPACT */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <ScrollReveal direction="up" className="space-y-6">
                <span className="text-[#B8B8B8] font-bold text-[11px] uppercase tracking-[0.3em]">Our Impact</span>
                <h2 className="text-[30px] lg:text-[40px] font-semibold text-black leading-tight">
                  Driving The Green <br /> Revolution Forward
                </h2>
                <p className="text-[14px] text-[#555] leading-[1.8] max-w-lg">
                  Every project we complete contributes to a larger goal of carbon neutrality and energy independence for our clients.
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-2 gap-8 md:gap-12">
                <ImpactCard icon={<Zap />} val="50M+" label="Units Generated" />
                <ImpactCard icon={<TreeDeciduous />} val="5000+" label="Tons CO₂ Reduced" />
                <ImpactCard icon={<TrendingUp />} val="₹10Cr+" label="Customer Savings" />
                <ImpactCard icon={<Globe />} val="100+" label="Communities Powered" />
              </div>
            </div>
            <ScrollReveal direction="left">
              <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl">
                <Image src="https://picsum.photos/seed/arka_impact/800/800" alt="Solar Impact" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 8 – CLIENT TESTIMONIALS */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-4">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Client Success Stories</h2>
            <p className="text-[#777] text-[14px]">Trusted by homeowners and industry leaders alike.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Vikram Seth" 
              type="Industrial Project" 
              review="Arkā Solar transformed our manufacturing cost structure. The ROI was even better than projected in the initial design."
            />
            <TestimonialCard 
              name="Anita Desai" 
              type="Residential Project" 
              review="Zero electricity bills since we installed our 10kW system. The installation team was professional and exceptionally clean."
            />
            <TestimonialCard 
              name="Rohan Mehra" 
              type="Commercial Project" 
              review="The monitoring app is brilliant. We can see our savings in real-time. Truly an engineering-first company."
            />
          </div>
        </div>
      </section>

      {/* SECTION 9 – MAP COVERAGE */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <ScrollReveal className="space-y-4">
              <span className="text-[#B8B8B8] font-bold text-[11px] uppercase tracking-[0.3em]">Coverage</span>
              <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Our Project Presence</h2>
              <p className="text-[#777] text-[14px]">Serving major industrial and urban hubs with dedicated local service teams.</p>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {["Lucknow", "Noida", "Kanpur", "Prayagraj", "Varanasi", "Ghaziabad", "Meerut", "Gorakhpur"].map((city, i) => (
                <ScrollReveal key={i} delay={i * 0.05} direction="up" className="p-6 bg-[#F9F9F9] rounded-[24px] border border-neutral-100 text-center hover:bg-black hover:text-white transition-all cursor-default group">
                  <MapPin className="size-4 mx-auto mb-3 text-[#B8B8B8] group-hover:text-accent transition-colors" />
                  <span className="text-[13px] font-bold">{city}</span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 – FINAL CTA */}
      <section className="py-32 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal direction="zoom">
            <div className="text-center text-white space-y-10 relative overflow-hidden">
              <div className="space-y-6">
                <h2 className="text-[34px] lg:text-[64px] font-semibold leading-[1.05]">Ready To Start Your <br /> <span className="text-accent">Solar Project?</span></h2>
                <p className="text-white/50 text-[14px] max-w-xl mx-auto font-normal leading-[1.8]">
                  Get expert consultation and a customized solar solution for your home or business. Join the transition to clean energy today.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Button asChild size="lg" className="bg-white text-black font-semibold rounded-full px-12 h-16 text-sm hover:bg-neutral-200">
                  <Link href="/get-quote">Get Your Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 text-white rounded-full px-12 h-16 text-sm font-semibold hover:bg-white/10">
                  <Link href="/get-quote">Schedule Site Survey</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function StatCard({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  return (
    <ScrollReveal direction="up" className="space-y-2">
      <div className="text-[34px] md:text-[56px] font-semibold text-black leading-none">
        <Counter value={value} suffix={suffix} />
      </div>
      <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#B8B8B8]">{label}</p>
    </ScrollReveal>
  );
}

function ProcessStep({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <ScrollReveal direction="up" className="space-y-4">
      <div className="text-[40px] md:text-[48px] font-bold text-white/10 leading-none">{num}</div>
      <div className="space-y-1">
        <h4 className="text-[11px] font-bold text-white uppercase tracking-widest">{title}</h4>
        <p className="text-white/40 text-[12px] leading-relaxed">{desc}</p>
      </div>
    </ScrollReveal>
  );
}

function ImpactCard({ icon, val, label }: { icon: any, val: string, label: string }) {
  return (
    <div className="space-y-3">
      <div className="size-10 bg-[#F5F5F5] rounded-xl flex items-center justify-center text-black mb-2">
        {React.cloneElement(icon, { className: "size-5" })}
      </div>
      <h4 className="text-[20px] md:text-[24px] font-bold text-black leading-none">{val}</h4>
      <p className="text-[10px] font-bold text-[#B8B8B8] uppercase tracking-widest">{label}</p>
    </div>
  );
}

function TestimonialCard({ name, type, review }: { name: string, type: string, review: string }) {
  return (
    <ScrollReveal direction="up">
      <Card className="p-10 rounded-[40px] border-none bg-white shadow-sm space-y-8 flex flex-col h-full">
        <div className="flex gap-1 text-black">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="size-4 fill-current" />)}
        </div>
        <p className="text-[14px] text-black italic leading-[1.8] flex-grow">"{review}"</p>
        <div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
          <div className="size-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#B8B8B8]">
            <Star className="size-5" />
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-black">{name}</h4>
            <p className="text-[10px] text-[#B8B8B8] font-bold uppercase tracking-widest">{type}</p>
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
}
