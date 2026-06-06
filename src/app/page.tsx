
'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Users, 
  Award, 
  Sun, 
  Cpu, 
  Globe, 
  Star,
  ChevronLeft,
  ChevronRight
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
    { id: 1, name: "Skyline Villa", capacity: "10kW", location: "Ahmedabad", image: "https://picsum.photos/seed/arka_h_p1/800/600" },
    { id: 2, name: "GIDC Industrial Park", capacity: "250kW", location: "Sanand", image: "https://picsum.photos/seed/arka_h_p2/800/600" },
    { id: 3, name: "Emerald Heights", capacity: "50kW", location: "Surat", image: "https://picsum.photos/seed/arka_h_p3/800/600" },
  ];

  return (
    <div className="bg-white selection:bg-black selection:text-white overflow-hidden">
      {/* HERO SLIDER */}
      <section className="relative h-screen w-full overflow-hidden">
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
              <div className="absolute inset-0 bg-black/40 z-10" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="container relative z-20 h-full mx-auto px-4 flex flex-col justify-center">
          <ScrollReveal direction="up" className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full">
              <Zap className="size-4 text-accent" />
              <span className="text-white text-[12px] font-bold uppercase tracking-widest">Solar Energy Solutions</span>
            </div>
            
            <h1 className="text-[48px] md:text-[72px] lg:text-[100px] font-black text-white leading-[1.05] tracking-tighter">
              Powering India With <br />
              <span className="text-accent">Smart Solar Energy</span>
            </h1>
            
            <p className="text-[16px] md:text-[20px] text-white/80 max-w-2xl leading-relaxed font-medium">
              Switch to solar today. Clean power, long-term savings, and a brighter future for your home and business.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <Button asChild size="lg" className="bg-accent text-primary rounded-full px-12 py-8 text-[16px] font-black hover:bg-white transition-all shadow-xl">
                <Link href="/get-quote">Get a Quote <ArrowRight className="ml-2 size-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white backdrop-blur-sm rounded-full px-12 py-8 text-[16px] font-bold hover:bg-white/10 transition-all">
                <Link href="/get-quote">Book Site Survey</Link>
              </Button>
            </div>
          </ScrollReveal>

          <div className="absolute bottom-32 right-4 md:right-12 flex gap-4">
            <button onClick={prevSlide} className="size-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <ChevronLeft className="size-6" />
            </button>
            <button onClick={nextSlide} className="size-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <ChevronRight className="size-6" />
            </button>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-12 border-y border-neutral-100 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-[#777]">
            <TrustItem text="MNRE Approved Solutions" />
            <TrustItem text="25 Years Warranty" />
            <TrustItem text="Subsidy Assistance" />
            <TrustItem text="500+ Installations" />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right">
              <div className="relative aspect-square rounded-[40px] overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/arka_about_p/800/800" 
                  alt="About Arkā" 
                  fill 
                  className="object-cover"
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

      {/* SOLUTIONS */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-4">
            <h2 className="text-[30px] lg:text-[48px] font-semibold text-black">Our Solar Solutions</h2>
            <p className="text-[#777] text-[14px] max-w-xl mx-auto">Premium engineered solutions tailored for maximum energy harvest.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <SolutionCard icon={<Sun />} title="Residential Solar" desc="Custom rooftop systems for modern homes." href="/services/residential-solar" />
            <SolutionCard icon={<Zap />} title="Commercial Solutions" desc="Reduce operational overheads for business." href="/services/commercial-solar" />
            <SolutionCard icon={<Globe />} title="Industrial Systems" desc="Large-scale high-yield solar arrays." href="/services/industrial-solar" />
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <Calculator />
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <StatItem val={500} suffix="+" label="Projects Completed" />
            <StatItem val={10} suffix="MW+" label="Installed Capacity" />
            <StatItem val={98} suffix="%" label="Satisfaction Rate" />
            <StatItem val={25} suffix="Y" label="Warranty Period" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Frequently Asked Questions</h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-4">
            <FaqItem value="q1" q="How much can I save with solar?" a="Typically, you can save 80-90% on your monthly electricity bills. Most systems pay for themselves within 4-5 years." />
            <FaqItem value="q2" q="What subsidy is available?" a="Under the PM-Suryodaya scheme, homeowners get up to ₹78,000 as a direct bank transfer subsidy." />
            <FaqItem value="q3" q="How long does installation take?" a="The physical installation takes 3-5 days. The complete process takes about 4-6 weeks." />
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-black rounded-[60px] p-20 text-center text-white space-y-10">
            <h2 className="text-[34px] lg:text-[64px] font-semibold leading-[1.05]">Ready To Switch To Solar?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-black font-semibold rounded-full px-12 py-8 text-[14px] hover:bg-neutral-200">
                <Link href="/get-quote">Get Free Quote</Link>
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

function SolutionCard({ icon, title, desc, href }: { icon: any, title: string, desc: string, href: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Link href={href}>
        <Card className="p-10 h-full rounded-[40px] border-none bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group text-center">
          <div className="size-16 rounded-2xl bg-[#F5F5F5] flex items-center justify-center mb-8 mx-auto text-black group-hover:bg-black group-hover:text-white transition-colors">
            {React.cloneElement(icon, { className: "size-8" })}
          </div>
          <h3 className="text-[22px] font-semibold text-black mb-4">{title}</h3>
          <p className="text-[13px] text-[#555] leading-[1.6]">{desc}</p>
        </Card>
      </Link>
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

function FaqItem({ value, q, a }: { value: string, q: string, a: string }) {
  return (
    <AccordionItem value={value} className="bg-white rounded-[24px] border-none px-8 overflow-hidden shadow-sm">
      <AccordionTrigger className="text-left font-semibold text-[16px] text-black py-6 hover:no-underline">
        {q}
      </AccordionTrigger>
      <AccordionContent className="text-[#555] text-[14px] leading-[1.6] pb-6">
        {a}
      </AccordionContent>
    </AccordionItem>
  );
}
