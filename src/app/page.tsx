
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
import { PartnerLogos } from "@/components/sections/PartnerLogos";
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
  "https://picsum.photos/seed/arka_hero_res/1920/1080",
  "https://picsum.photos/seed/arka_hero_comm/1920/1080",
  "https://picsum.photos/seed/arka_hero_ind/1920/1080",
  "https://picsum.photos/seed/arka_hero_clean/1920/1080",
  "https://picsum.photos/seed/arka_hero_maint/1920/1080",
  "https://picsum.photos/seed/arka_hero_roof/1920/1080",
  "https://picsum.photos/seed/arka_hero_yojana/1920/1080",
  "https://picsum.photos/seed/arka_hero_tech/1920/1080",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
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
    <div className="bg-background selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* HERO SLIDER */}
      <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={HERO_IMAGES[currentSlide]}
                  alt="Sky Renewable Solar Energy Solutions"
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="container relative z-20 h-full mx-auto px-4 flex flex-col justify-center items-center text-center">
          <ScrollReveal direction="up" className="max-w-4xl space-y-6 md:space-y-8">
            <h1 className="text-[30px] md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-tighter drop-shadow-lg">
              The Future of <br />
              <span className="text-accent">Clean Energy</span>
            </h1>
            
            <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white/90 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md px-2">
              Switch to SKY RENEWABLE. High-yield engineering, smart monitoring, and guaranteed government subsidies.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5 pt-4 md:pt-6 w-full max-w-md mx-auto sm:max-w-none">
              <Button asChild size="lg" className="bg-primary text-white rounded-full px-8 md:px-10 h-12 md:h-14 text-[14px] md:text-[15px] font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all w-full sm:w-auto">
                <Link href="/get-quote" className="flex items-center gap-2">Get Your Quote <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white backdrop-blur-md rounded-full px-8 md:px-10 h-12 md:h-14 text-[14px] md:text-[15px] font-bold hover:bg-white hover:text-primary transition-all w-full sm:w-auto">
                <Link href="/get-quote">Book Site Survey</Link>
              </Button>
            </div>
          </ScrollReveal>

          <div className="absolute bottom-12 md:bottom-16 flex gap-2">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={cn(
                  "size-2 rounded-full transition-all duration-300",
                  currentSlide === idx 
                    ? "bg-accent w-6 md:w-8" 
                    : "bg-white/40 hover:bg-white/60"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex gap-4">
            <button onClick={prevSlide} className="size-10 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all group">
              <ChevronLeft className="size-4" />
            </button>
            <button onClick={nextSlide} className="size-10 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all group">
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

      <PartnerLogos />

      <SubsidyShowcase />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem val={500} suffix="+" label="Solar Projects" />
            <StatItem val={10} suffix="MW+" label="Installed Capacity" />
            <StatItem val={98} suffix="%" label="Client Satisfaction" />
            <StatItem val={25} suffix="Y" label="Performance Warranty" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <ScrollReveal direction="up">
                <span className="inline-block bg-primary/5 text-primary px-4 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
                  Leading Solar Authority
                </span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-primary leading-[1.2] tracking-tight">
                  Empowering India <br />Through <span className="text-secondary">Smart Solar</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                  SKY RENEWABLE is redefining how homes and industries harvest the sun. We provide end-to-end EPC services, from custom structural engineering to seamless subsidy approvals.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <Button asChild variant="outline" className="rounded-full px-6 md:px-8 h-11 md:h-12 border-primary/20 text-primary hover:bg-primary/5 font-bold transition-all text-[13px] md:text-[14px]">
                  <Link href="/about-us">Our Engineering Legacy</Link>
                </Button>
              </ScrollReveal>
            </div>
            {/* Updated About section image with aspect-video (16:9) */}
            <ScrollReveal direction="left">
              <div className="relative aspect-video rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl bg-neutral-100">
                <Image 
                  src="https://picsum.photos/seed/arka_h_about/1280/720" 
                  alt="SKY RENEWABLE Solar Installation Team" 
                  fill 
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                  data-ai-hint="solar installation"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-foreground leading-tight">Advanced Energy Solutions</h2>
            <p className="text-muted-foreground text-[14px] md:text-[15px] max-w-xl mx-auto">Scalable solar architecture tailored for maximum yield and reliability.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <SolutionCard icon={<HomeIcon />} title="Residential Solar" desc="Slash bills by 90% with subsidized rooftop systems." href="/services/residential-solar" />
            <SolutionCard icon={<Factory />} title="Commercial Solar" desc="Boost ROI with tax benefits and fixed energy costs." href="/services/commercial-solar" />
            <SolutionCard icon={<Zap />} title="Industrial EPC" desc="Mega-watt scale solar plants for heavy manufacturing." href="/services/industrial-solar" />
            <SolutionCard icon={<Layout />} title="Technical Survey" desc="Shadow mapping and structural health audits." href="/services/rooftop-installation" />
            <SolutionCard icon={<BatteryFull />} title="Storage & Backup" desc="Smart hybrid storage for true grid-independence." href="/services/battery-storage" />
            <SolutionCard icon={<Wrench />} title="Maintenance & AMC" desc="Proactive IoT monitoring and expert panel cleaning." href="/services/solar-maintenance" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 items-end text-center lg:text-left">
            <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-foreground leading-tight tracking-tighter">
              Why Sky Renewable <br />Solar Solutions?
            </h2>
            <p className="text-[14px] md:text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Solar is a strategic asset. We maximize its value through engineering excellence and lifecycle support.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-10">
            <ValueItem title="Significant Savings" desc="Lock in your electricity tariff for 25 years and insulate your business from rising utility costs." />
            <ValueItem title="ESG Compliance" desc="Meet your sustainability mandates and boost your corporate brand value through clean energy." />
            <ValueItem title="Energy Security" desc="Eliminate production downtime with smart hybrid backup systems and stable voltage profiles." />
            <ValueItem title="Asset Appreciation" desc="Increase your property value with high-yield capital improvements and tax-efficient depreciation." />
            <ValueItem title="Subsidy Handling" desc="Zero-friction government liaison for CFA subsidies under PM-Suryodaya schemes." />
            <ValueItem title="Tier-1 Reliability" desc="We exclusively use Bloomberg-listed modules and high-efficiency smart inverters." />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-foreground text-white overflow-hidden relative border-t border-white/5">
        <div className="absolute top-0 right-0 size-[300px] md:size-[500px] bg-primary/20 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4">
          <Calculator />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12 space-y-4">
            <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-foreground leading-tight">Featured Case Studies</h2>
            <p className="text-muted-foreground text-[14px] md:text-[15px]">High-yield solar deployments across India's industrial landscape.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {projects.map((p) => (
              <ScrollReveal key={p.id} direction="up" delay={p.id * 0.1}>
                <Link href="/projects" className="group block">
                  <div className="relative h-[400px] md:h-[500px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg md:shadow-xl transition-all duration-700 hover:-translate-y-2 bg-neutral-100">
                    <Image src={p.image} alt={p.name} fill className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block bg-primary px-3 py-1 rounded-full text-[9px] font-bold text-white uppercase tracking-widest mb-3">{p.type}</span>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">{p.name}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-white/70 text-xs">
                        <span className="flex items-center gap-1.5"><Zap className="size-3.5 text-primary" /> {p.capacity}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="size-3.5" /> {p.location}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full px-8 h-12 md:h-14 border-border hover:bg-muted font-bold transition-all text-[13px] md:text-[14px]">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12 space-y-4">
            <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-foreground">Voice of our Clients</h2>
            <p className="text-muted-foreground text-[14px] md:text-[15px]">Trusted by homeowners and industrial leaders alike.</p>
          </ScrollReveal>
          
          <div className="relative max-w-7xl mx-auto px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-8">
                <CarouselItem className="pl-4 md:pl-8 basis-full sm:basis-1/2 md:basis-1/3">
                  <TestimonialCard name="Rajesh Kumar" loc="Ahmedabad" review="Professional execution and visible savings. SKY RENEWABLE is easily the best solar company in Gujarat." />
                </CarouselItem>
                <CarouselItem className="pl-4 md:pl-8 basis-full sm:basis-1/2 md:basis-1/3">
                  <TestimonialCard name="Suresh Mehta" loc="Surat" review="Seamless experience with PM-Suryodaya paperwork. Highly recommended for rooftop solar." />
                </CarouselItem>
                <CarouselItem className="pl-4 md:pl-8 basis-full sm:basis-1/2 md:basis-1/3">
                  <TestimonialCard name="Dr. Ananya Singh" loc="Baroda" review="Our hospital's electricity bill dropped by 85%. Excellent engineering and technical support." />
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center gap-3 mt-8">
                <CarouselPrevious className="relative static translate-y-0 translate-x-0" />
                <CarouselNext className="relative static translate-y-0 translate-x-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function StatItem({ val, suffix, label }: { val: number, suffix: string, label: string }) {
  return (
    <div className="space-y-1.5 md:space-y-2">
      <div className="text-[28px] md:text-[40px] font-bold text-primary leading-none">
        <Counter value={val} suffix={suffix} />
      </div>
      <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">{label}</p>
    </div>
  );
}

function SolutionCard({ icon, title, desc, href }: { icon: any, title: string, desc: string, href: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Link href={href} className="group block h-full">
        <Card className="p-8 md:p-10 h-full rounded-[24px] md:rounded-[32px] border-none bg-background shadow-sm hover:shadow-[0_40px_80px_rgba(37,99,235,0.08)] transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 size-24 bg-primary/5 blur-[30px] rounded-full group-hover:bg-primary/10 transition-colors" />
          <div className="size-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
            {React.cloneElement(icon, { className: "size-6" })}
          </div>
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-[14px] md:text-[15px] text-muted-foreground leading-relaxed mb-6">{desc}</p>
          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider group-hover:gap-4 transition-all">
            Explore <ArrowRight className="size-4" />
          </div>
        </Card>
      </Link>
    </ScrollReveal>
  );
}

function ValueItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="space-y-2 md:space-y-3">
      <div className="size-1.5 bg-primary rounded-full" />
      <h3 className="text-lg md:text-xl font-bold text-foreground">{title}</h3>
      <p className="text-[14px] md:text-[15px] text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, loc, review }: { name: string, loc: string, review: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Card className="p-8 md:p-10 rounded-[24px] md:rounded-[32px] border-none bg-white shadow-sm space-y-6 flex flex-col h-full hover-lift">
        <div className="flex gap-1 text-accent">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="size-3.5 fill-current" />)}
        </div>
        <p className="text-[14px] md:text-[15px] text-foreground font-medium italic leading-relaxed flex-grow">"{review}"</p>
        <div className="flex items-center gap-4 border-t border-muted pt-6">
          <div className="size-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold text-base shrink-0">
            {name[0]}
          </div>
          <div>
            <h4 className="font-bold text-foreground text-sm">{name}</h4>
            <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">{loc}</p>
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
}
