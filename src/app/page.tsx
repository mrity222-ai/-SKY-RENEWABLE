'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Users, 
  Award, 
  Sun, 
  Cpu, 
  Globe, 
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MousePointer2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";
import { Calculator } from "@/components/sections/Calculator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";

const HERO_IMAGES = [
  "https://picsum.photos/seed/arka_hero_1/1920/1080",
  "https://picsum.photos/seed/arka_hero_2/1920/1080",
  "https://picsum.photos/seed/arka_hero_3/1920/1080",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  const partners = [
    { name: "Tata Power", icon: <Sun /> },
    { name: "Waaree", icon: <Cpu /> },
    { name: "Adani Solar", icon: <Globe /> },
    { name: "Luminous", icon: <Zap /> },
    { name: "Havells", icon: <Award /> },
    { name: "Exide", icon: <Cpu /> },
    { name: "Microtek", icon: <Zap /> },
  ];

  const projects = [
    { id: 1, name: "Skyline Villa", capacity: "10kW", location: "Ahmedabad", date: "Oct 2024", image: "https://picsum.photos/seed/arka_h_p1/800/600" },
    { id: 2, name: "GIDC Industrial Park", capacity: "250kW", location: "Sanand", date: "Sept 2024", image: "https://picsum.photos/seed/arka_h_p2/800/600" },
    { id: 3, name: "Emerald Heights", capacity: "50kW", location: "Surat", date: "Aug 2024", image: "https://picsum.photos/seed/arka_h_p3/800/600" },
  ];

  return (
    <div className="bg-white selection:bg-black selection:text-white overflow-hidden">
      {/* SECTION 1 – PREMIUM HERO SLIDER */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image
                src={HERO_IMAGES[currentSlide]}
                alt="Solar Energy"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent z-10" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Content */}
        <div className="container relative z-20 h-full mx-auto px-4 flex flex-col justify-center">
          <ScrollReveal direction="up" className="max-w-4xl space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md border border-accent/30 px-4 py-1.5 rounded-full"
            >
              <Zap className="size-4 text-accent" />
              <span className="text-white text-[12px] font-bold uppercase tracking-widest">Solar Energy Solutions</span>
            </motion.div>
            
            <h1 className="text-[48px] md:text-[72px] lg:text-[100px] font-black text-white leading-[1.05] tracking-tighter">
              Powering India With <br />
              <span className="text-accent">Smart Solar Energy</span>
            </h1>
            
            <p className="text-[16px] md:text-[20px] text-white/80 max-w-2xl leading-relaxed font-medium">
              Switch to solar today. Clean power, long-term savings, and a brighter future for your home and business. Experience the pinnacle of energy independence.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <Button asChild size="lg" className="bg-accent text-primary rounded-full px-12 py-8 text-[16px] font-black hover:bg-white transition-all shadow-xl shadow-accent/20 hover:shadow-accent/40 group relative overflow-hidden">
                <Link href="/get-quote">
                  <span className="relative z-10 flex items-center gap-2">Get a Quote <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" /></span>
                  <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white backdrop-blur-sm rounded-full px-12 py-8 text-[16px] font-bold hover:bg-white/10 transition-all">
                <Link href="/get-quote">Book Site Survey</Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Slider Navigation */}
          <div className="absolute bottom-32 right-4 md:right-12 flex gap-4">
            <button onClick={prevSlide} className="size-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
              <ChevronLeft className="size-6" />
            </button>
            <button onClick={nextSlide} className="size-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
              <ChevronRight className="size-6" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          >
            <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
            <span className="text-[10px] text-white/50 uppercase tracking-[0.4em] font-bold">Scroll</span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 – TRUST BAR */}
      <section className="py-12 border-y border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 text-[#777]">
            <TrustItem text="MNRE Approved Solutions" />
            <TrustItem text="25 Years Warranty" />
            <TrustItem text="Subsidy Assistance" />
            <TrustItem text="500+ Installations" />
            <TrustItem text="98% Satisfaction" />
          </div>
        </div>
      </section>

      {/* SECTION 3 – ABOUT PREVIEW */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right">
              <div className="relative aspect-square rounded-[40px] overflow-hidden group">
                <Image 
                  src="https://picsum.photos/seed/arka_about_p/800/800" 
                  alt="About Arkā" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">
                  Who We Are
                </span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="text-[30px] lg:text-[48px] font-semibold text-black leading-tight">
                  Building India's Future Through Renewable Energy
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-[14px] text-[#555] leading-[1.6]">
                  Arkā Solar is dedicated to transforming the energy landscape of India. Our journey is rooted in engineering excellence, integrity, and a commitment to providing the most efficient solar ecosystems for every rooftop.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <Button asChild variant="outline" className="rounded-full px-8 border-black/10 text-black hover:bg-neutral-50">
                  <Link href="/about-us">Learn More</Link>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – OUR SOLAR SOLUTIONS */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-4">
            <h2 className="text-[30px] lg:text-[48px] font-semibold text-black">Our Solar Solutions</h2>
            <p className="text-[#777] text-[14px] max-w-xl mx-auto">Premium engineered solutions tailored for maximum energy harvest.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <SolutionCard icon={<Sun />} title="Residential Solar" desc="Custom rooftop systems for modern homes." />
            <SolutionCard icon={<Zap />} title="Commercial Solutions" desc="Reduce operational overheads for business." />
            <SolutionCard icon={<Globe />} title="Industrial Systems" desc="Large-scale high-yield solar arrays." />
            <SolutionCard icon={<Cpu />} title="Rooftop Installation" desc="Seamless engineering-first deployment." />
            <SolutionCard icon={<CheckCircle2 />} title="Battery Storage" desc="Smart energy backup and independence." />
            <SolutionCard icon={<ShieldCheck />} title="Solar Maintenance" desc="24/7 monitoring and service support." />
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY CHOOSE US */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-[30px] lg:text-[48px] font-semibold text-black">Why Homeowners & Businesses Choose Us</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureItem title="Certified Solar Experts" desc="In-house engineers with decades of experience." />
            <FeatureItem title="End-To-End Installation" desc="Turnkey project delivery from audit to grid." />
            <FeatureItem title="Government Subsidy Support" desc="End-to-end filing for PM-Suryodaya schemes." />
            <FeatureItem title="Premium Components" desc="Exclusively Tier-1 panels and smart inverters." />
            <FeatureItem title="Fast Installation" desc="Completed within 3-5 days for residential." />
            <FeatureItem title="Dedicated Support" desc="Guaranteed 48-hour on-site service response." />
          </div>
        </div>
      </section>

      {/* SECTION 6 – SOLAR SAVINGS CALCULATOR */}
      <section className="py-32 bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-4">
          <Calculator />
        </div>
      </section>

      {/* SECTION 7 – PROJECT SHOWCASE */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <ScrollReveal className="space-y-4">
              <h2 className="text-[30px] lg:text-[48px] font-semibold text-black">Our Recent Solar Projects</h2>
              <p className="text-[#777] text-[14px]">Engineering excellence across residential and industrial sectors.</p>
            </ScrollReveal>
            <Button asChild variant="outline" className="rounded-full border-black/10">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="group space-y-6">
                  <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#B8B8B8] uppercase tracking-widest">{project.capacity} • {project.location}</span>
                    <h3 className="text-[20px] font-semibold text-black">{project.name}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 – INSTALLATION PROCESS */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-4">
            <h2 className="text-[30px] lg:text-[48px] font-semibold text-black">The Installation Process</h2>
            <p className="text-[#777] text-[14px]">Transparent 6-step workflow for zero-stress transitions.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-6 gap-8">
            <ProcessItem num="01" title="Consultation" />
            <ProcessItem num="02" title="Site Survey" />
            <ProcessItem num="03" title="Design" />
            <ProcessItem num="04" title="Installation" />
            <ProcessItem num="05" title="Subsidy" />
            <ProcessItem num="06" title="Support" />
          </div>
        </div>
      </section>

      {/* SECTION 9 – TECHNOLOGY PARTNERS */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 mb-10 text-center">
          <p className="text-[11px] font-semibold text-[#B8B8B8] uppercase tracking-[0.3em]">Engineering Partners</p>
        </div>
        <div className="flex animate-marquee whitespace-nowrap gap-20 items-center opacity-30 grayscale">
          {[...partners, ...partners].map((p, i) => (
            <div key={i} className="flex items-center gap-4 text-black">
              {React.cloneElement(p.icon as React.ReactElement, { className: "size-6" })}
              <span className="text-[24px] font-bold tracking-tighter uppercase">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10 – ACHIEVEMENTS */}
      <section className="py-32 border-y border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <StatItem val={500} suffix="+" label="Projects Completed" />
            <StatItem val={10} suffix="MW+" label="Installed Capacity" />
            <StatItem val={98} suffix="%" label="Customer Satisfaction" />
            <StatItem val={25} suffix="Y" label="Warranty Support" />
          </div>
        </div>
      </section>

      {/* SECTION 11 – TESTIMONIALS */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-[30px] lg:text-[48px] font-semibold text-black">What Our Clients Say</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Aditya Sharma" 
              role="Homeowner, Ahmedabad" 
              text="The switch to solar was seamless. Arkā handled the subsidy and installation flawlessly. My bill is now almost zero." 
            />
            <TestimonialCard 
              name="Rajesh Mehta" 
              role="CEO, Industrial Hub" 
              text="Strategic investment for our factory. The 40% depreciation and energy savings have significantly boosted our bottom line." 
            />
            <TestimonialCard 
              name="Priya Patel" 
              role="Director, Green Homes" 
              text="Their engineering-first approach set them apart. The monitoring app is incredibly useful to track our daily generation." 
            />
          </div>
        </div>
      </section>

      {/* SECTION 12 – FAQ SECTION */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Frequently Asked Questions</h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-4">
            <FaqItem value="q1" q="How much can I save with solar?" a="Typically, you can save 80-90% on your monthly electricity bills. Most systems pay for themselves within 4-5 years." />
            <FaqItem value="q2" q="What subsidy is available?" a="Under the PM-Suryodaya scheme, homeowners get up to ₹78,000 as a direct bank transfer subsidy for systems up to 3kW." />
            <FaqItem value="q3" q="How long does installation take?" a="The physical installation takes 3-5 days. The complete process with net-metering takes about 4-6 weeks." />
            <FaqItem value="q4" q="Do you provide AMC support?" a="Yes, we offer comprehensive Annual Maintenance Contracts including periodic cleaning and electrical health checks." />
            <FaqItem value="q5" q="What warranty is included?" a="We provide a 25-year performance warranty on solar panels and 5-10 years on inverters and structure." />
          </Accordion>
        </div>
      </section>

      {/* SECTION 13 – FINAL CTA */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-black rounded-[60px] p-20 text-center text-white space-y-10 relative overflow-hidden">
            <div className="space-y-4">
              <h2 className="text-[34px] lg:text-[64px] font-semibold leading-[1.05]">Ready To Switch To Solar?</h2>
              <p className="text-white/50 text-[14px] max-w-xl mx-auto">Start saving on electricity bills today with India's most trusted solar engineering partner.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Button asChild size="lg" className="bg-white text-black font-semibold rounded-full px-12 py-8 text-[14px] hover:bg-neutral-200">
                <Link href="/get-quote">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white rounded-full px-12 py-8 text-[14px] font-semibold hover:bg-white/10">
                <Link href="/get-quote">Schedule Site Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider">
      <CheckCircle2 className="size-4 text-black" />
      {text}
    </div>
  );
}

function SolutionCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Card className="p-10 h-full rounded-[40px] border-none bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col items-center text-center">
        <div className="size-16 rounded-2xl bg-[#F5F5F5] flex items-center justify-center mb-8 text-black group-hover:bg-black group-hover:text-white transition-colors">
          {React.cloneElement(icon, { className: "size-8" })}
        </div>
        <h3 className="text-[22px] font-semibold text-black mb-4">{title}</h3>
        <p className="text-[13px] text-[#555] leading-[1.6]">{desc}</p>
      </Card>
    </ScrollReveal>
  );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <ScrollReveal className="space-y-4 text-center md:text-left">
      <div className="size-12 bg-black text-white rounded-xl flex items-center justify-center mx-auto md:mx-0">
        <CheckCircle2 className="size-6" />
      </div>
      <h3 className="text-[20px] font-semibold text-black">{title}</h3>
      <p className="text-[13px] text-[#555] leading-[1.6]">{desc}</p>
    </ScrollReveal>
  );
}

function ProcessItem({ num, title }: { num: string, title: string }) {
  return (
    <ScrollReveal className="text-center space-y-4">
      <div className="text-[48px] font-bold text-black/5 leading-none">{num}</div>
      <h4 className="text-[13px] font-bold text-black uppercase tracking-widest">{title}</h4>
    </ScrollReveal>
  );
}

function StatItem({ val, suffix, label }: { val: number, suffix: string, label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-[40px] md:text-[56px] font-semibold text-black leading-none">
        <Counter value={val} suffix={suffix} />
      </div>
      <p className="text-[11px] font-bold uppercase tracking-widest text-[#B8B8B8]">{label}</p>
    </div>
  );
}

function TestimonialCard({ name, role, text }: { name: string, role: string, text: string }) {
  return (
    <ScrollReveal direction="up">
      <Card className="p-10 rounded-[40px] border-none bg-white shadow-sm space-y-8">
        <div className="flex gap-1 text-black">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="size-4 fill-current" />)}
        </div>
        <p className="text-[14px] text-black italic leading-[1.7]">"{text}"</p>
        <div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
          <div className="size-10 rounded-full bg-neutral-100" />
          <div>
            <h4 className="text-[14px] font-bold text-black">{name}</h4>
            <p className="text-[12px] text-[#777]">{role}</p>
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
}

function FaqItem({ value, q, a }: { value: string, q: string, a: string }) {
  return (
    <AccordionItem value={value} className="bg-[#F9F9F9] rounded-[24px] border-none px-8 overflow-hidden">
      <AccordionTrigger className="text-left font-semibold text-[16px] text-black py-6 hover:no-underline">
        {q}
      </AccordionTrigger>
      <AccordionContent className="text-[#555] text-[14px] leading-[1.6] pb-6">
        {a}
      </AccordionContent>
    </AccordionItem>
  );
}
