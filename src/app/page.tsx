
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
  ChevronRight,
  Home as HomeIcon,
  Factory,
  Wrench,
  BatteryFull,
  Layout,
  FileText,
  BadgeCheck,
  TrendingUp,
  Leaf,
  Banknote,
  MapPin
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
    "Tata Power Solar", "Waaree", "Adani Solar", "Havells", "Luminous", "Exide", "Microtek"
  ];

  const projects = [
    { id: 1, name: "Skyline Villa", capacity: "10kW", location: "Ahmedabad", type: "Residential", image: "https://picsum.photos/seed/arka_h_p1/800/1200" },
    { id: 2, name: "GIDC Industrial Park", capacity: "250kW", location: "Sanand", type: "Industrial", image: "https://picsum.photos/seed/arka_h_p2/800/1200" },
    { id: 3, name: "Emerald Heights", capacity: "50kW", location: "Surat", type: "Commercial", image: "https://picsum.photos/seed/arka_h_p3/800/1200" },
  ];

  return (
    <div className="bg-white selection:bg-primary selection:text-white overflow-hidden">
      {/* HERO SLIDER */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image
                src={HERO_IMAGES[currentSlide]}
                alt="Sky Renewable Solar Energy Solutions"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent z-10" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="container relative z-20 h-full mx-auto px-4 flex flex-col justify-center">
          <ScrollReveal direction="up" className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
              <Zap className="size-4 text-primary" />
              <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Premium Solar Energy Solutions</span>
            </div>
            
            <h1 className="text-[40px] md:text-[64px] lg:text-[96px] font-black text-white leading-[1.05] tracking-tighter">
              Powering India With <br />
              <span className="text-primary">Best Solar Company</span>
            </h1>
            
            <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed font-medium">
              Switch to solar energy today with India's leading rooftop solar installer. High-yield systems, government subsidies, and long-term savings guaranteed.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Button asChild size="lg" className="bg-primary text-white rounded-full px-10 h-14 md:h-16 text-sm font-black hover:bg-white hover:text-primary transition-all shadow-2xl">
                <Link href="/get-quote">Get a Free Quote <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white backdrop-blur-sm rounded-full px-10 h-14 md:h-16 text-sm font-bold hover:bg-white/10 transition-all">
                <Link href="/get-quote">Book Expert Site Survey</Link>
              </Button>
            </div>
          </ScrollReveal>

          <div className="absolute bottom-12 right-4 md:right-12 flex gap-4">
            <button aria-label="Previous Slide" onClick={prevSlide} className="size-12 md:size-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all group">
              <ChevronLeft className="size-6 transition-transform group-active:scale-90" />
            </button>
            <button aria-label="Next Slide" onClick={nextSlide} className="size-12 md:size-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all group">
              <ChevronRight className="size-6 transition-transform group-active:scale-90" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 – TRUST & ACHIEVEMENTS */}
      <section className="py-24 border-b border-muted bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24 text-center">
            <StatItem val={500} suffix="+" label="Solar Projects Completed" />
            <StatItem val={10} suffix="MW+" label="Installed Solar Capacity" />
            <StatItem val={98} suffix="%" label="Client Satisfaction Rate" />
            <StatItem val={25} suffix="Y" label="Performance Warranty" />
          </div>
        </div>
      </section>

      {/* SECTION 3 – ABOUT COMPANY */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-muted text-muted-foreground px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase">
                  Leading Solar Company in India
                </span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="text-[30px] lg:text-[40px] font-semibold text-foreground leading-tight">
                  Driving Sustainable Growth <br /><span className="text-primary">With Clean Solar Energy</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-[14px] text-muted-foreground leading-[1.8] max-w-xl">
                  Sky Renewable is a premier solar energy solutions provider in India. We specialize in end-to-end solar EPC services, rooftop installations, and government subsidy assistance to help you achieve energy independence.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <Button asChild variant="outline" className="rounded-full px-8 h-12 border-primary/10 text-primary hover:bg-primary/5">
                  <Link href="/about-us">Explore Our Solar Journey</Link>
                </Button>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left">
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/arka_h_about/800/800" 
                  alt="Sky Renewable Solar Installation Team" 
                  fill 
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 – OUR SOLAR SOLUTIONS */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal className="space-y-4 mb-20">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-foreground">Comprehensive Solar Energy Solutions</h2>
            <p className="text-muted-foreground text-[14px] max-w-xl mx-auto">From residential rooftops to industrial plants, we deliver customized solar systems optimized for maximum power generation.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SolutionCard icon={<HomeIcon />} title="Residential Solar" desc="High-efficiency rooftop solar systems for modern homes." href="/services/residential-solar" />
            <SolutionCard icon={<Factory />} title="Commercial Solar" desc="Scalable solar energy solutions for businesses and offices." href="/services/commercial-solar" />
            <SolutionCard icon={<Zap />} title="Industrial Systems" desc="Large-scale solar EPC for manufacturing and heavy industry." href="/services/industrial-solar" />
            <SolutionCard icon={<Layout />} title="Rooftop Installation" desc="Engineering-first approach for all rooftop types." href="/services/rooftop-installation" />
            <SolutionCard icon={<BatteryFull />} title="Battery Storage" desc="Smart solar backup for 24/7 energy independence." href="/services/battery-storage" />
            <SolutionCard icon={<Wrench />} title="Solar Maintenance" desc="Expert AMC and 24/7 solar power monitoring services." href="/services/solar-maintenance" />
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY CHOOSE US */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-foreground">Why We Are the Best Solar Company</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Award />} title="Certified Solar Engineers" desc="Our team ensures every installation meets international safety and performance standards." />
            <FeatureCard icon={<BadgeCheck />} title="Government Subsidy Aid" desc="Full assistance in claiming PM-Suryodaya and state solar subsidies." />
            <FeatureCard icon={<Sun />} title="Tier-1 Solar Modules" desc="We use only Bloomberg-listed solar panels and high-yield inverters." />
            <FeatureCard icon={<Zap />} title="Rapid Installation" desc="Turnkey project delivery within record timelines across India." />
            <FeatureCard icon={<ShieldCheck />} title="Lifetime Support" desc="Comprehensive performance warranties and 48-hour service response." />
            <FeatureCard icon={<Users />} title="Client-Centric EPC" desc="Customized engineering designs for maximum ROI on your solar investment." />
          </div>
        </div>
      </section>

      {/* SECTION 6 – SOLAR SAVINGS CALCULATOR */}
      <section className="py-32 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <Calculator />
        </div>
      </section>

      {/* SECTION 7 – FEATURED PROJECTS */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-4">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-foreground">Featured Solar Projects Portfolio</h2>
            <p className="text-muted-foreground text-[14px]">Successful solar installations delivering clean energy across India.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((p, i) => (
              <ScrollReveal key={p.id} direction="up" delay={p.id * 0.1}>
                <Card className="rounded-[24px] border-none overflow-hidden group relative h-[320px] md:h-[420px] lg:h-[560px] w-full shadow-md hover:shadow-2xl transition-all duration-500 bg-white">
                  <Image src={p.image} alt={`${p.name} Solar System`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Premium Info Box Overlay */}
                  <div className="absolute bottom-0 left-0 bg-white pl-8 pr-12 py-6 flex items-center gap-6 rounded-tr-[32px] border-r-[6px] border-secondary shadow-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <div className="text-[40px] md:text-[48px] font-black text-foreground tracking-tighter leading-none">
                      0{p.id}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{p.type}</span>
                      <h3 className="text-[16px] md:text-[18px] font-bold text-foreground leading-tight max-w-[180px]">
                        {p.name}
                      </h3>
                    </div>
                  </div>

                  <Link href="/projects" className="absolute inset-0 z-10" />
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full px-10 h-14 border-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
              <Link href="/projects">Browse All Solar Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8 – INSTALLATION PROCESS */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-foreground">Our 6-Step Solar Installation Process</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <ProcessCard num="01" title="Consultation" desc="Detailed energy audit." />
            <ProcessCard num="02" title="Site Survey" desc="Technical analysis." />
            <ProcessCard num="03" title="Design" desc="Custom solar layout." />
            <ProcessCard num="04" title="Installation" desc="Precision deployment." />
            <ProcessCard num="05" title="Subsidy Aid" desc="Document handling." />
            <ProcessCard num="06" title="Support" desc="24/7 Monitoring." />
          </div>
        </div>
      </section>

      {/* SECTION 9 – GOVERNMENT SUBSIDY */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right" className="space-y-8">
              <span className="inline-block bg-white text-muted-foreground px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase">
                Government Solar Subsidy Guide 2026
              </span>
              <h2 className="text-[30px] lg:text-[40px] font-semibold text-foreground leading-tight">
                Claim Benefits Under <br /><span className="text-secondary">PM-Suryodaya Yojana</span>
              </h2>
              <div className="grid grid-cols-2 gap-6 md:gap-10">
                <SubsidyBenefit icon={<Banknote />} title="Direct Subsidy" desc="Up to ₹78,000 for homes." />
                <SubsidyBenefit icon={<TrendingUp />} title="Faster Payback" desc="ROI within 4-5 years." />
                <SubsidyBenefit icon={<Leaf />} title="Eco-Incentives" desc="Sustainable energy goals." />
                <SubsidyBenefit icon={<ShieldCheck />} title="Energy Security" desc="Grid independence." />
              </div>
              <Button asChild className="bg-primary text-white rounded-full px-10 h-14 font-bold hover:bg-primary/90 transition-all">
                <Link href="/government-solar-subsidy">Check Subsidy Eligibility</Link>
              </Button>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                <Image src="https://picsum.photos/seed/arka_h_subsidy/1000/750" alt="Solar Subsidy Schemes" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 10 – TECHNOLOGY PARTNERS */}
      <section className="py-24 border-y border-muted bg-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal className="mb-12">
            <h2 className="text-[12px] font-bold text-muted-foreground tracking-[0.3em] uppercase">Authorized Technology Partners</h2>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all">
            {partners.map((p, i) => (
              <span key={i} className="text-[16px] md:text-[22px] font-black text-foreground uppercase tracking-tighter">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 – TESTIMONIALS */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-4">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-foreground">Verified Client Reviews</h2>
            <p className="text-muted-foreground text-[14px]">Trusted by thousands of residential and industrial solar users across India.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard name="Rajesh Kumar" loc="Ahmedabad" review="Sky Renewable is the best solar company in Ahmedabad. Their installation was professional and the bill savings are real." />
            <TestimonialCard name="Suresh Mehta" loc="Surat" review="Seamless experience with rooftop solar. They handled my PM-Suryodaya subsidy paperwork from start to finish." />
            <TestimonialCard name="Dr. Ananya Singh" loc="Baroda" review="Excellent solar EPC services. Our hospital's energy costs have significantly reduced thanks to their high-yield system." />
          </div>
        </div>
      </section>

      {/* SECTION 12 – FAQ */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-foreground">Solar Energy FAQs</h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-4">
            <FaqItem value="q1" q="How much can I save with a rooftop solar system?" a="On average, residential customers save 80-90% on their electricity bills. The system pay for itself in 4-5 years." />
            <FaqItem value="q2" q="Who is eligible for the government solar subsidy?" a="Currently, residential homeowners with a valid domestic connection can claim up to ₹78,000 under the central government rooftop solar scheme." />
            <FaqItem value="q3" q="How long do solar panels last?" a="Tier-1 solar panels come with a performance warranty of 25 years and often generate power for much longer with proper maintenance." />
            <FaqItem value="q4" q="Does Sky Renewable provide solar maintenance?" a="Yes, we offer comprehensive Annual Maintenance Contracts (AMC) that include periodic cleaning and technical audits." />
            <FaqItem value="q5" q="What is Net Metering in solar?" a="Net metering is a billing mechanism that credits solar system owners for the electricity they add to the grid." />
          </Accordion>
        </div>
      </section>

      {/* SECTION 13 – FINAL CTA */}
      <section className="py-32 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-foreground rounded-[60px] p-12 md:p-24 text-center text-white space-y-10 relative overflow-hidden">
            <h2 className="text-[34px] lg:text-[64px] font-semibold leading-[1.05]">Ready for Energy Independence?</h2>
            <p className="text-white/50 text-[14px] max-w-xl mx-auto font-normal leading-[1.8]">
              Contact the best solar company today for a personalized rooftop audit and ROI assessment.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <Button asChild size="lg" className="bg-primary text-white font-semibold rounded-full px-12 h-16 text-sm hover:bg-white hover:text-primary transition-all">
                <Link href="/get-quote">Get Your Free Solar Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white rounded-full px-12 h-16 text-sm font-semibold hover:bg-white/10">
                <Link href="/get-quote">Schedule Site Survey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ val, suffix, label }: { val: number, suffix: string, label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-[34px] md:text-[56px] font-semibold text-accent leading-none">
        <Counter value={val} suffix={suffix} />
      </div>
      <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

function SolutionCard({ icon, title, desc, href }: { icon: any, title: string, desc: string, href: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Link href={href}>
        <Card className="p-10 h-full rounded-[40px] border-none bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col items-center">
          <div className="size-16 rounded-2xl bg-muted flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            {React.cloneElement(icon, { className: "size-7" })}
          </div>
          <h3 className="text-[22px] font-semibold text-foreground mb-4">{title}</h3>
          <p className="text-[13px] text-muted-foreground leading-[1.8] mb-8 flex-grow">{desc}</p>
          <Button variant="link" className="p-0 h-auto text-primary font-bold group-hover:gap-2 transition-all">
            Learn More <ArrowRight className="ml-2 size-4" />
          </Button>
        </Card>
      </Link>
    </ScrollReveal>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Card className="p-10 h-full rounded-[40px] border-none bg-muted shadow-sm hover:shadow-xl transition-all group">
        <div className="size-12 md:size-14 rounded-2xl bg-white flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
          {React.cloneElement(icon, { className: "size-6" })}
        </div>
        <h3 className="text-[20px] md:text-[22px] font-semibold text-foreground mb-4">{title}</h3>
        <p className="text-[13px] text-muted-foreground leading-[1.8]">{desc}</p>
      </Card>
    </ScrollReveal>
  );
}

function ProcessCard({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <ScrollReveal direction="up" className="text-center space-y-4">
      <div className="text-[40px] md:text-[48px] font-bold text-primary/10 leading-none">{num}</div>
      <div className="space-y-1">
        <h4 className="text-[11px] font-bold text-foreground uppercase tracking-widest">{title}</h4>
        <p className="text-[12px] text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </ScrollReveal>
  );
}

function SubsidyBenefit({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="space-y-3">
      <div className="size-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
        {React.cloneElement(icon, { className: "size-5" })}
      </div>
      <h4 className="text-[14px] font-bold text-foreground">{title}</h4>
      <p className="text-[12px] text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, loc, review }: { name: string, loc: string, review: string }) {
  return (
    <ScrollReveal direction="up">
      <Card className="p-10 rounded-[40px] border-none bg-white shadow-sm space-y-8 flex flex-col h-full">
        <div className="flex gap-1 text-accent">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="size-4 fill-current" />)}
        </div>
        <p className="text-[14px] text-foreground italic leading-[1.8] flex-grow">"{review}"</p>
        <div className="flex items-center gap-4 border-t border-muted pt-6">
          <div className="size-10 rounded-full bg-muted flex items-center justify-center text-primary">
            <Star className="size-5" />
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-foreground">{name}</h4>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{loc}</p>
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
}

function FaqItem({ value, q, a }: { value: string, q: string, a: string }) {
  return (
    <AccordionItem value={value} className="bg-muted rounded-[24px] border-none px-8 overflow-hidden shadow-sm mb-4">
      <AccordionTrigger className="text-left font-semibold text-base text-foreground py-6 hover:no-underline">
        {q}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground text-[14px] leading-[1.8] pb-6">
        {a}
      </AccordionContent>
    </AccordionItem>
  );
}
