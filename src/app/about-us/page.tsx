'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  TrendingUp, 
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { PartnerLogos } from "@/components/sections/PartnerLogos";

export default function AboutPage() {
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

      <CTASection />
    </div>
  );
}