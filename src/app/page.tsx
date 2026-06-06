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
  Leaf
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
    { id: 1, name: "Skyline Villa", capacity: "10kW", location: "Ahmedabad", image: "https://picsum.photos/seed/arka_h_p1/800/600" },
    { id: 2, name: "GIDC Industrial Park", capacity: "250kW", location: "Sanand", image: "https://picsum.photos/seed/arka_h_p2/800/600" },
    { id: 3, name: "Emerald Heights", capacity: "50kW", location: "Surat", image: "https://picsum.photos/seed/arka_h_p3/800/600" },
  ];

  return (
    <div className="bg-white selection:bg-black selection:text-white overflow-hidden">
      {/* HERO SLIDER - PRESERVED */}
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

      {/* SECTION 2 – TRUST & ACHIEVEMENTS */}
      <section className="py-24 border-b border-neutral-100 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <StatItem val={500} suffix="+" label="Projects Completed" />
            <StatItem val={10} suffix="MW+" label="Installed Capacity" />
            <StatItem val={98} suffix="%" label="Customer Satisfaction" />
            <StatItem val={25} suffix="Y" label="Performance Warranty" />
          </div>
        </div>
      </section>

      {/* SECTION 3 – ABOUT COMPANY */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">
                  Who We Are
                </span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="text-[30px] lg:text-[40px] font-semibold text-black leading-tight">
                  Building A Sustainable Future <br /><span className="text-[#B8B8B8]">Through Solar Energy</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-[14px] text-[#555] leading-[1.6]">
                  At Arkā Solar, we are dedicated to transforming India's energy landscape. Our mission is to empower homeowners and businesses with high-performance solar ecosystems that maximize energy harvest and minimize environmental footprint.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <Button asChild variant="outline" className="rounded-full px-8 border-black/10 text-black hover:bg-neutral-50 h-12">
                  <Link href="/about-us">Learn More</Link>
                </Button>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left">
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/arka_h_about/800/800" 
                  alt="About Arkā" 
                  fill 
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 – OUR SOLAR SOLUTIONS */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal className="space-y-4 mb-20">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Solar Solutions Designed For Every Need</h2>
            <p className="text-[#555] text-[14px] max-w-xl mx-auto">Premium engineered solutions tailored for maximum energy harvest and long-term reliability.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <SolutionCard icon={<HomeIcon />} title="Residential Solar" desc="Custom rooftop systems for modern homes." href="/services/residential-solar" />
            <SolutionCard icon={<Factory />} title="Commercial Solar" desc="Reduce operational overheads for business." href="/services/commercial-solar" />
            <SolutionCard icon={<Zap />} title="Industrial Systems" desc="Large-scale high-yield solar arrays." href="/services/industrial-solar" />
            <SolutionCard icon={<Layout />} title="Rooftop Installation" desc="Seamless engineering-first deployment." href="/services/rooftop-installation" />
            <SolutionCard icon={<BatteryFull />} title="Battery Storage" desc="Smart energy backup and independence." href="/services/battery-storage" />
            <SolutionCard icon={<Wrench />} title="Solar Maintenance" desc="24/7 monitoring and service support." href="/services/solar-maintenance" />
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY CHOOSE US */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Why Choose Our Solar Solutions</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={<Award />} title="Certified Solar Experts" desc="Our team of certified engineers ensures every installation meets the highest quality standards." />
            <FeatureCard icon={<BadgeCheck />} title="Government Subsidy Support" desc="We handle all the paperwork for your PM-Suryodaya and state government subsidies." />
            <FeatureCard icon={<Sun />} title="Premium Components" desc="We exclusively use Tier-1 modules and high-efficiency inverters from global leaders." />
            <FeatureCard icon={<Zap />} title="Fast Installation" desc="Our streamlined process ensures your rooftop system is live within record timelines." />
            <FeatureCard icon={<ShieldCheck />} title="25-Year Warranty" desc="Enjoy peace of mind with our long-term performance and structure warranties." />
            <FeatureCard icon={<Users />} title="Dedicated Support" desc="24/7 monitoring and a guaranteed 48-hour on-site service response time." />
          </div>
        </div>
      </section>

      {/* SECTION 6 – SOLAR SAVINGS CALCULATOR */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <Calculator />
        </div>
      </section>

      {/* SECTION 7 – FEATURED PROJECTS */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-4">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Our Featured Solar Projects</h2>
            <p className="text-[#555] text-[14px]">Explore our portfolio of successful installations across diverse sectors.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((p) => (
              <ScrollReveal key={p.id} direction="up" delay={p.id * 0.1}>
                <Card className="rounded-[40px] overflow-hidden border-none shadow-sm group bg-white h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-8 space-y-4 flex-grow flex flex-col">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-[#B8B8B8] uppercase tracking-widest">{p.location}</p>
                      <h3 className="text-[20px] font-semibold text-black">{p.name}</h3>
                    </div>
                    <p className="text-[14px] text-[#555] font-bold">{p.capacity} System</p>
                    <Button asChild variant="link" className="p-0 h-auto text-black font-bold group-hover:gap-2 transition-all mt-auto self-start">
                      <Link href="/projects">View Project <ArrowRight className="ml-2 size-4" /></Link>
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full px-10 h-14 border-black/10 text-black hover:bg-black hover:text-white transition-all">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8 – INSTALLATION PROCESS */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Our Solar Installation Process</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            <ProcessCard num="01" title="Consultation" desc="Energy audit." />
            <ProcessCard num="02" title="Site Survey" desc="Technical analysis." />
            <ProcessCard num="03" title="System Design" desc="Custom layout." />
            <ProcessCard num="04" title="Installation" desc="Swift deployment." />
            <ProcessCard num="05" title="Subsidy Assistance" desc="Paperwork aid." />
            <ProcessCard num="06" title="Support" desc="Ongoing care." />
          </div>
        </div>
      </section>

      {/* SECTION 9 – GOVERNMENT SUBSIDY */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right" className="space-y-8">
              <span className="inline-block bg-white text-[#777] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">
                Subsidy Guide
              </span>
              <h2 className="text-[30px] lg:text-[40px] font-semibold text-black leading-tight">
                Government Solar <br /><span className="text-[#B8B8B8]">Subsidy Benefits</span>
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <SubsidyBenefit icon={<Banknote />} title="Reduced Cost" desc="Lower upfront capital." />
                <SubsidyBenefit icon={<TrendingUp />} title="Faster ROI" desc="Quicker payback." />
                <SubsidyBenefit icon={<Leaf />} title="Eco-Savings" desc="Long-term utility reduction." />
                <SubsidyBenefit icon={<ShieldCheck />} title="Energy Independence" desc="Grid reliance decrease." />
              </div>
              <Button asChild className="bg-black text-white rounded-full px-10 h-14 font-bold hover:bg-neutral-800 transition-all">
                <Link href="/government-solar-subsidy">Check Eligibility</Link>
              </Button>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                <Image src="https://picsum.photos/seed/arka_h_subsidy/1000/750" alt="Solar Subsidy" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 10 – TECHNOLOGY PARTNERS */}
      <section className="py-24 border-y border-neutral-100 bg-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal className="mb-12">
            <h2 className="text-[20px] font-semibold text-black tracking-widest uppercase">Trusted Technology Partners</h2>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all">
            {partners.map((p, i) => (
              <span key={i} className="text-[20px] font-black text-black uppercase tracking-tighter">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 – TESTIMONIALS */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-4">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">What Our Customers Say</h2>
            <p className="text-[#555] text-[14px]">Trusted by homeowners and industries across India.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard name="Rajesh Kumar" loc="Ahmedabad" review="Switching to Arkā Solar was the best decision for our home. Our electricity bills have vanished." />
            <TestimonialCard name="Suresh Mehta" loc="Surat" review="Professional team and seamless installation. The government subsidy process was handled perfectly." />
            <TestimonialCard name="Dr. Ananya Singh" loc="Baroda" review="The ROI is impressive. The engineering-first approach of Arkā is evident in their structural quality." />
          </div>
        </div>
      </section>

      {/* SECTION 12 – FAQ */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Frequently Asked Questions</h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-4">
            <FaqItem value="q1" q="How much can I save with solar?" a="Typically, you can save 80-90% on your monthly electricity bills. Most residential systems pay for themselves within 4-5 years." />
            <FaqItem value="q2" q="What subsidy is available?" a="Under the PM-Suryodaya scheme, homeowners get up to ₹78,000 as a direct bank transfer subsidy." />
            <FaqItem value="q3" q="How long does installation take?" a="The physical installation takes 3-5 days. The complete process takes about 4-6 weeks." />
            <FaqItem value="q4" q="Do you provide AMC support?" a="Yes, we offer comprehensive Annual Maintenance Contracts with 24/7 IoT monitoring." />
            <FaqItem value="q5" q="What warranty is included?" a="We provide a 25-year performance warranty on modules and 5-year product warranty on inverters." />
          </Accordion>
        </div>
      </section>

      {/* SECTION 13 – FINAL CTA */}
      <section className="py-32 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-black rounded-[60px] p-20 text-center text-white space-y-10 relative overflow-hidden">
            <h2 className="text-[34px] lg:text-[64px] font-semibold leading-[1.05]">Ready To Switch To Solar Energy?</h2>
            <p className="text-white/50 text-[14px] max-w-xl mx-auto font-normal leading-[1.6]">
              Start saving on electricity bills and move towards a sustainable future with our expert solar solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
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

function SolutionCard({ icon, title, desc, href }: { icon: any, title: string, desc: string, href: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Link href={href}>
        <Card className="p-10 h-full rounded-[40px] border-none bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col items-center">
          <div className="size-16 rounded-2xl bg-[#F5F5F5] flex items-center justify-center mb-8 text-black group-hover:bg-black group-hover:text-white transition-colors">
            {React.cloneElement(icon, { className: "size-8" })}
          </div>
          <h3 className="text-[22px] font-semibold text-black mb-4">{title}</h3>
          <p className="text-[13px] text-[#555] leading-[1.6] mb-8 flex-grow">{desc}</p>
          <Button variant="link" className="p-0 h-auto text-black font-bold group-hover:gap-2 transition-all">
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
      <Card className="p-10 h-full rounded-[40px] border-none bg-[#F9F9F9] shadow-sm hover:shadow-xl transition-all group">
        <div className="size-14 rounded-2xl bg-white flex items-center justify-center mb-8 text-black group-hover:bg-black group-hover:text-white transition-colors shadow-sm">
          {React.cloneElement(icon, { className: "size-6" })}
        </div>
        <h3 className="text-[22px] font-semibold text-black mb-4">{title}</h3>
        <p className="text-[13px] text-[#555] leading-[1.6]">{desc}</p>
      </Card>
    </ScrollReveal>
  );
}

function ProcessCard({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <ScrollReveal direction="up" className="text-center space-y-6">
      <div className="text-[48px] font-bold text-black/5 leading-none">{num}</div>
      <div className="space-y-2">
        <h4 className="text-[13px] font-bold text-black uppercase tracking-widest">{title}</h4>
        <p className="text-[12px] text-[#777] leading-relaxed">{desc}</p>
      </div>
    </ScrollReveal>
  );
}

function SubsidyBenefit({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="space-y-3">
      <div className="size-10 bg-white rounded-xl flex items-center justify-center text-black shadow-sm">
        {React.cloneElement(icon, { className: "size-5" })}
      </div>
      <h4 className="text-[14px] font-bold text-black">{title}</h4>
      <p className="text-[12px] text-[#555] leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, loc, review }: { name: string, loc: string, review: string }) {
  return (
    <ScrollReveal direction="up">
      <Card className="p-10 rounded-[40px] border-none bg-white shadow-sm space-y-8 flex flex-col h-full">
        <div className="flex gap-1 text-black">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="size-4 fill-current" />)}
        </div>
        <p className="text-[14px] text-black italic leading-[1.7] flex-grow">"{review}"</p>
        <div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
          <div className="size-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#B8B8B8]">
            <Star className="size-5" />
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-black">{name}</h4>
            <p className="text-[11px] text-[#B8B8B8] font-bold uppercase tracking-widest">{loc}</p>
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
}

function FaqItem({ value, q, a }: { value: string, q: string, a: string }) {
  return (
    <AccordionItem value={value} className="bg-[#F9F9F9] rounded-[24px] border-none px-8 overflow-hidden shadow-sm">
      <AccordionTrigger className="text-left font-semibold text-[16px] text-black py-6 hover:no-underline">
        {q}
      </AccordionTrigger>
      <AccordionContent className="text-[#555] text-[14px] leading-[1.6] pb-6">
        {a}
      </AccordionContent>
    </AccordionItem>
  );
}

function Banknote() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></svg>;
}
