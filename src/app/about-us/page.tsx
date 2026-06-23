
'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  TrendingUp, 
  Target,
  Users,
  ShieldCheck,
  Zap,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Naimesh Chandraker",
      role: "Founder & Managing Director",
      desc: "Visionary leader driving the sustainable energy transition in Chhattisgarh.",
      image: "https://picsum.photos/seed/arka_t1/400/400"
    },
    {
      name: "Engr. Rajesh Kumar",
      role: "Solar Project Engineer",
      desc: "Expert in MW-scale solar design and electrical structural integrity.",
      image: "https://picsum.photos/seed/arka_t2/400/400"
    },
    {
      name: "Suresh Sahu",
      role: "Operations Manager",
      desc: "Specialist in rooftop installation workflows and DISCOM liaison.",
      image: "https://picsum.photos/seed/arka_t3/400/400"
    },
    {
      name: "Anjali Verma",
      role: "Technical Consultant",
      desc: "Advising residential and commercial clients on ROI and subsidies.",
      image: "https://picsum.photos/seed/arka_t4/400/400"
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-primary/20 selection:text-primary">
      {/* SECTION 1 – HERO INTRO */}
      <section className="relative pt-44 pb-16 lg:pt-52 lg:pb-24 overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
          <div className="absolute -top-24 -right-24 size-[500px] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 -left-24 size-[400px] bg-accent/5 blur-[100px] rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-5xl text-left space-y-8">
            <ScrollReveal direction="up">
              <span className="inline-flex items-center bg-[#048037] text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-white/10 shadow-sm">
                <span className="size-1.5 rounded-full bg-white mr-2 animate-pulse" />
                Who We Are
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-[28px] md:text-[40px] lg:text-[52px] font-bold text-[#14213D] leading-[1.05] tracking-tighter max-w-4xl font-headline">
                Empowering India With <br /><span className="text-primary">Smart Solar Solutions</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-[14px] lg:text-[16px] text-[#475569] max-w-2xl font-medium leading-relaxed opacity-90">
                SKY RENEWABLE is dedicated to transforming India's energy landscape through engineering excellence, 
                unwavering integrity, and a commitment to a carbon-free future.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild variant="default" size="lg" className="rounded-full px-10 h-10 md:h-12 text-[14px] font-bold transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30">
                  <Link href="/get-quote">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-10 md:h-12 text-[14px] font-bold transition-all border-border text-[#14213D] hover:bg-[#F8FAFC]">
                  <Link href="/get-quote">Book Site Survey</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="up" delay={0.4} className="mt-16 group">
            <div className="relative aspect-[21/9] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(20,33,61,0.12)] border border-border/50">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105"
              >
                <source src="/vio/1.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/10 to-transparent pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TECHNOLOGY PARTNERS SECTION */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-8">
            <span className="text-[10px] font-bold text-[#14213D] uppercase tracking-[0.3em] mb-2 block opacity-50">Our Technology Partners</span>
          </ScrollReveal>
          <PartnerLogos />
        </div>
      </section>

      {/* SECTION 2 – ABOUT SKY RENEWABLE */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <ScrollReveal direction="right" className="space-y-6 md:space-y-8">
              <span className="inline-flex items-center bg-[#048037] text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-white/10 shadow-sm">
                About Us
              </span>
              <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-[#14213D] leading-tight tracking-tighter font-headline">
                Trusted Partners In <br /><span className="text-primary">Clean Energy</span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-[14px] md:text-[16px] text-[#475569] leading-relaxed font-medium">
                  SKY RENEWABLE is a trusted solar energy solutions company committed to delivering clean, sustainable, and affordable power solutions for homes, businesses, industries, and institutions.
                </p>
                <p className="text-[14px] md:text-[16px] text-[#475569] leading-relaxed font-medium">
                  We specialize in complete Solar EPC Services, Rooftop Solar Installations, Operation & Maintenance, and Solar Panel Cleaning Solutions.
                </p>
                <div className="pt-2">
                  <p className="text-sm font-bold text-[#14213D] flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary" />
                    Owner: Naimesh Chandraker
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-4 p-5 bg-[#F8FAFC] rounded-3xl border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="size-10 rounded-xl bg-white border border-border flex items-center justify-center text-[#22C55E]">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <span className="text-[13px] md:text-sm font-bold text-[#14213D]">Certified Engineers</span>
                </div>
                <div className="flex items-center gap-4 p-5 bg-[#F8FAFC] rounded-3xl border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="size-10 rounded-xl bg-white border border-border flex items-center justify-center text-[#22C55E]">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <span className="text-[13px] md:text-sm font-bold text-[#14213D]">MNRE Registered</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2} className="group">
              <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(20,33,61,0.12)] border border-border/50">
                <Image 
                  src="/ab/5.png" 
                  alt="Solar Engineers" 
                  fill 
                  className="object-cover w-full h-full transition-transform duration-[2.5s] ease-out group-hover:scale-105"
                  data-ai-hint="solar engineers"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <ScrollReveal direction="up" className="p-10 md:p-12 bg-white rounded-[40px] shadow-[0_20px_60px_rgba(20,33,61,0.05)] border border-border space-y-6 hover:shadow-xl transition-all">
              <div className="size-14 rounded-2xl bg-[#EEF7FF] flex items-center justify-center text-primary">
                <Target className="size-8" />
              </div>
              <h3 className="text-[18px] md:text-[24px] font-bold text-[#14213D] font-headline">Our Mission</h3>
              <p className="text-[14px] md:text-[16px] text-[#475569] leading-relaxed font-medium">
                To accelerate India's transition to sustainable energy by providing reliable, high-yield solar solutions and exceptional engineering services that deliver long-term value to our customers and the environment.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} className="p-10 md:p-12 bg-white rounded-[40px] shadow-[0_20px_60px_rgba(20,33,61,0.05)] border border-border space-y-6 hover:shadow-xl transition-all">
              <div className="size-14 rounded-2xl bg-[#EEF7FF] flex items-center justify-center text-primary">
                <TrendingUp className="size-8" />
              </div>
              <h3 className="text-[18px] md:text-[24px] font-bold text-[#14213D] font-headline">Our Vision</h3>
              <p className="text-[14px] md:text-[16px] text-[#475569] leading-relaxed font-medium">
                To be the most trusted solar energy authority in India, empowering every homeowner and business to achieve energy independence through smart, clean, and affordable technology.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* OUR TEAM SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 md:mb-20">
            <ScrollReveal direction="up">
              <span className="inline-flex items-center bg-[#048037] text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-white/10 shadow-sm">
                Our Team
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-[30px] md:text-[40px] font-bold text-[#14213D] font-headline tracking-tighter">
                Meet The Experts Behind <span className="text-primary">SKY RENEWABLE</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-[#475569] leading-relaxed font-medium">
                Our experienced team of engineers, technicians, project managers, and energy consultants work together to deliver reliable, efficient, and high-performance solar and electrical solutions across Chhattisgarh.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <Card className="group relative overflow-hidden rounded-[32px] border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#F8FAFC]">
                  <div className="relative aspect-square overflow-hidden">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-8 space-y-3 relative z-10">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-[#14213D] group-hover:text-primary transition-colors">{member.name}</h3>
                      <p className="text-[12px] font-bold text-primary uppercase tracking-widest">{member.role}</p>
                    </div>
                    <p className="text-[13px] text-[#475569] leading-relaxed font-medium opacity-80">{member.desc}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.4} className="mt-16 pt-16 border-t border-border">
             <div className="grid md:grid-cols-3 gap-8">
                <HighlightItem icon={<Users />} title="Experienced Engineers" desc="Over 10 years of combined solar engineering experience." />
                <HighlightItem icon={<ShieldCheck />} title="Certified Technicians" desc="MNRE registered and certified installation specialists." />
                <HighlightItem icon={<Zap />} title="Electrical Experts" desc="Master electricians for end-to-end wiring solutions." />
             </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function HighlightItem({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-5">
      <div className="size-12 bg-[#EEF7FF] rounded-xl flex items-center justify-center text-primary shrink-0">
        {React.cloneElement(icon, { className: "size-6" })}
      </div>
      <div className="space-y-1">
        <h4 className="font-bold text-[#14213D] text-[15px]">{title}</h4>
        <p className="text-[13px] text-[#475569] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
