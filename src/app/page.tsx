'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Zap, 
  Home as HomeIcon,
  Factory,
  Wrench,
  BatteryFull,
  Layout,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";
import { Calculator } from "@/components/sections/Calculator";
import { CTASection } from "@/components/sections/CTASection";
import { SubsidyShowcase } from "@/components/sections/SubsidyShowcase";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const HERO_IMAGES = [
  "https://picsum.photos/seed/arka_hero_res/1920/1080", // Residential
  "https://picsum.photos/seed/arka_hero_comm/1920/1080", // Commercial
  "https://picsum.photos/seed/arka_hero_ind/1920/1080", // Industrial
  "https://picsum.photos/seed/arka_hero_clean/1920/1080", // Cleaning
  "https://picsum.photos/seed/arka_hero_maint/1920/1080", // Maintenance
  "https://picsum.photos/seed/arka_hero_roof/1920/1080", // Rooftop
  "https://picsum.photos/seed/arka_hero_yojana/1920/1080", // PM Surya Ghar
  "https://picsum.photos/seed/arka_hero_tech/1920/1080", // Technician
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // Rotates every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  const projects = [
    { id: 1, name: "Skyline Villa", capacity: "10kW", location: "Ahmedabad", type: "Residential", image: "https://picsum.photos/seed/arka_h_p1/800/1200" },
    { id: 2, name: "GIDC Industrial Park", capacity: "250kW", location: "Sanand", type: "Industrial", image: "https://picsum.photos/seed/arka_h_p2/800/1200" },
    { id: 3, name: "Emerald Heights", capacity: "50kW", location: "Surat", type: "Commercial", image: "https://picsum.photos/seed/arka_h_p3/800/1200" },
  ];

  return (
    <div className="bg-background selection:bg-primary/20 selection:text-primary overflow-hidden">
      {/* HERO SLIDER */}
      <section className="relative h-[95vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <motion.div 
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 8, ease: "linear" }}
                className="relative h-full w-full"
              >
                <Image
                  src={HERO_IMAGES[currentSlide]}
                  alt="Sky Renewable Solar Energy Solutions"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="container relative z-20 h-full mx-auto px-4 flex flex-col justify-center items-center text-center">
          <ScrollReveal direction="up" className="max-w-5xl space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/20 px-4 py-2 rounded-full">
              <Zap className="size-4 text-primary" />
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">A Complete Solar Solution</span>
            </div>
            
            <h1 className="text-[42px] md:text-[64px] lg:text-[80px] font-bold text-foreground leading-[1] tracking-tighter">
              The Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Clean Energy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              Switch to SKY RENEWABLE. High-yield engineering, smart monitoring, and guaranteed government subsidies.
            </p>

            <div className="flex flex-wrap justify-center gap-5 pt-8">
              <Button asChild size="lg" className="bg-primary text-white rounded-full px-12 h-16 text-[15px] font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all">
                <Link href="/get-quote" className="flex items-center gap-2">Get Your Quote <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border text-foreground backdrop-blur-md rounded-full px-12 h-16 text-[15px] font-bold hover:bg-white transition-all">
                <Link href="/get-quote">Book Site Survey</Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Pagination Dots */}
          <div className="absolute bottom-24 flex gap-2">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={cn(
                  "size-2.5 rounded-full transition-all duration-300",
                  currentSlide === idx 
                    ? "bg-primary w-8" 
                    : "bg-foreground/20 hover:bg-foreground/40"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden md:flex gap-4">
            <button onClick={prevSlide} className="size-12 rounded-full border border-border backdrop-blur-md flex items-center justify-center text-foreground hover:bg-white transition-all group">
              <ChevronLeft className="size-5" />
            </button>
            <button onClick={nextSlide} className="size-12 rounded-full border border-border backdrop-blur-md flex items-center justify-center text-foreground hover:bg-white transition-all group">
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </section>

      {/* NEW SECTION: PREMIUM SUBSIDY SHOWCASE */}
      <SubsidyShowcase />

      {/* SECTION 2 – TRUST & ACHIEVEMENTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <StatItem val={500} suffix="+" label="Solar Projects" />
            <StatItem val={10} suffix="MW+" label="Installed Capacity" />
            <StatItem val={98} suffix="%" label="Client Satisfaction" />
            <StatItem val={25} suffix="Y" label="Performance Warranty" />
          </div>
        </div>
      </section>

      {/* SECTION 3 – ABOUT COMPANY */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <ScrollReveal direction="up">
                <span className="inline-block bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase">
                  Leading Solar Authority
                </span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="text-[34px] lg:text-[48px] font-bold text-foreground leading-[1.2] tracking-tight">
                  Empowering India <br />Through <span className="text-secondary">Smart Solar</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-[17px] text-muted-foreground leading-relaxed max-w-xl">
                  SKY RENEWABLE is redefining how homes and industries harvest the sun. We provide end-to-end EPC services, from custom structural engineering to seamless subsidy approvals.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <Button asChild variant="outline" className="rounded-full px-10 h-14 border-primary/20 text-primary hover:bg-primary/5 font-bold transition-all text-[15px]">
                  <Link href="/about-us">Our Engineering Legacy</Link>
                </Button>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left">
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
                <Image 
                  src="https://picsum.photos/seed/arka_h_about/800/800" 
                  alt="SKY RENEWABLE Solar Installation Team" 
                  fill 
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 – OUR SOLAR SOLUTIONS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center space-y-6 mb-24">
            <h2 className="text-[34px] lg:text-[48px] font-bold text-foreground leading-tight">Advanced Energy Solutions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Scalable solar architecture tailored for maximum yield and reliability.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <SolutionCard icon={<HomeIcon />} title="Residential Solar" desc="Slash bills by 90% with subsidized rooftop systems." href="/services/residential-solar" />
            <SolutionCard icon={<Factory />} title="Commercial Solar" desc="Boost ROI with tax benefits and fixed energy costs." href="/services/commercial-solar" />
            <SolutionCard icon={<Zap />} title="Industrial EPC" desc="Mega-watt scale solar plants for heavy manufacturing." href="/services/industrial-solar" />
            <SolutionCard icon={<Layout />} title="Technical Survey" desc="Shadow mapping and structural health audits." href="/services/rooftop-installation" />
            <SolutionCard icon={<BatteryFull />} title="Storage & Backup" desc="Smart hybrid storage for true grid-independence." href="/services/battery-storage" />
            <SolutionCard icon={<Wrench />} title="Maintenance & AMC" desc="Proactive IoT monitoring and expert panel cleaning." href="/services/solar-maintenance" />
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY CHOOSE SOLAR ENERGY? */}
      <section className="py-32 bg-background border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-end">
            <h2 className="text-[34px] lg:text-[48px] font-bold text-foreground leading-tight tracking-tighter">
              Why Sky Renewable <br />Solar Solutions?
            </h2>
            <p className="text-[18px] text-muted-foreground leading-relaxed max-w-xl">
              Solar is a strategic asset. We maximize its value through engineering excellence and lifecycle support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
            <ValueItem title="Significant Savings" desc="Lock in your electricity tariff for 25 years and insulate your business from rising utility costs." />
            <ValueItem title="ESG Compliance" desc="Meet your sustainability mandates and boost your corporate brand value through clean energy." />
            <ValueItem title="Energy Security" desc="Eliminate production downtime with smart hybrid backup systems and stable voltage profiles." />
            <ValueItem title="Asset Appreciation" desc="Increase your property value with high-yield capital improvements and tax-efficient depreciation." />
            <ValueItem title="Subsidy Handling" desc="Zero-friction government liaison for CFA subsidies under PM-Suryodaya schemes." />
            <ValueItem title="Tier-1 Reliability" desc="We exclusively use Bloomberg-listed modules and high-efficiency smart inverters." />
          </div>
        </div>
      </section>

      {/* SECTION 6 – SOLAR SAVINGS CALCULATOR */}
      <section className="py-32 bg-foreground text-white overflow-hidden relative border-t border-white/5">
        <div className="absolute top-0 right-0 size-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4">
          <Calculator />
        </div>
      </section>

      {/* SECTION 7 – FEATURED PROJECTS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-24 space-y-6">
            <h2 className="text-[34px] lg:text-[48px] font-bold text-foreground leading-tight">Featured Case Studies</h2>
            <p className="text-muted-foreground text-lg">High-yield solar deployments across India's industrial landscape.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {projects.map((p) => (
              <ScrollReveal key={p.id} direction="up" delay={p.id * 0.1}>
                <Link href="/projects" className="group block">
                  <div className="relative h-[600px] rounded-[32px] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2">
                    <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-80" />
                    <div className="absolute bottom-10 left-10 right-10">
                      <span className="inline-block bg-primary px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4">{p.type}</span>
                      <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                      <div className="flex items-center gap-4 text-white/70 text-sm">
                        <span className="flex items-center gap-1.5"><Zap className="size-4 text-primary" /> {p.capacity}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="size-4" /> {p.location}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full px-12 h-16 border-border hover:bg-muted font-bold transition-all text-[15px]">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 11 – TESTIMONIALS */}
      <section className="py-32 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-24 space-y-6">
            <h2 className="text-[34px] lg:text-[48px] font-bold text-foreground">Voice of our Clients</h2>
            <p className="text-muted-foreground text-lg">Trusted by homeowners and industrial leaders alike.</p>
          </ScrollReveal>
          
          <div className="relative max-w-7xl mx-auto px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-10">
                <CarouselItem className="pl-4 md:pl-10 basis-full md:basis-1/3">
                  <TestimonialCard name="Rajesh Kumar" loc="Ahmedabad" review="Professional execution and visible savings. SKY RENEWABLE is easily the best solar company in Gujarat." />
                </CarouselItem>
                <CarouselItem className="pl-4 md:pl-10 basis-full md:basis-1/3">
                  <TestimonialCard name="Suresh Mehta" loc="Surat" review="Seamless experience with PM-Suryodaya paperwork. Highly recommended for rooftop solar." />
                </CarouselItem>
                <CarouselItem className="pl-4 md:pl-10 basis-full md:basis-1/3">
                  <TestimonialCard name="Dr. Ananya Singh" loc="Baroda" review="Our hospital's electricity bill dropped by 85%. Excellent engineering and technical support." />
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-12 md:hidden">
                <CarouselPrevious className="relative static translate-y-0 translate-x-0" />
                <CarouselNext className="relative static translate-y-0 translate-x-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* SECTION 13 – FINAL CTA */}
      <CTASection />
    </div>
  );
}

function StatItem({ val, suffix, label }: { val: number, suffix: string, label: string }) {
  return (
    <div className="space-y-3">
      <div className="text-[40px] md:text-[56px] font-bold text-primary leading-none">
        <Counter value={val} suffix={suffix} />
      </div>
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  );
}

function SolutionCard({ icon, title, desc, href }: { icon: any, title: string, desc: string, href: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Link href={href} className="group block h-full">
        <Card className="p-12 h-full rounded-[32px] border-none bg-background shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(37,99,235,0.08)] transition-all duration-500 relative overflow-hidden group">
          <div className="absolute top-0 right-0 size-32 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/10 transition-colors" />
          <div className="size-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
            {React.cloneElement(icon, { className: "size-8" })}
          </div>
          <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-8 flex-grow">{desc}</p>
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
            Explore <ArrowRight className="size-4" />
          </div>
        </Card>
      </Link>
    </ScrollReveal>
  );
}

function ValueItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="space-y-4">
      <div className="size-1.5 bg-primary rounded-full" />
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="text-[15px] text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, loc, review }: { name: string, loc: string, review: string }) {
  return (
    <ScrollReveal direction="up">
      <Card className="p-12 rounded-[32px] border-none bg-white shadow-xl shadow-foreground/5 space-y-10 flex flex-col h-full hover-lift">
        <div className="flex gap-1.5 text-accent">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="size-4 fill-current" />)}
        </div>
        <p className="text-[17px] text-foreground font-medium italic leading-relaxed flex-grow">"{review}"</p>
        <div className="flex items-center gap-5 border-t border-muted pt-8">
          <div className="size-12 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold text-lg">
            {name[0]}
          </div>
          <div>
            <h4 className="font-bold text-foreground">{name}</h4>
            <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-widest">{loc}</p>
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
}
