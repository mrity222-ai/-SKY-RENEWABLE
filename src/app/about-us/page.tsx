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
  Zap
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
                  <span className="text-[13px] md:sm font-bold text-[#14213D]">Certified Engineers</span>
                </div>
                <div className="flex items-center gap-4 p-5 bg-[#F8FAFC] rounded-3xl border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="size-10 rounded-xl bg-white border border-border flex items-center justify-center text-[#22C55E]">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <span className="text-[13px] md:sm font-bold text-[#14213D]">MNRE Registered</span>
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

      {/* SOLAR TEAM GALLERY SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center space-y-4 mb-16 md:mb-20">
            <ScrollReveal direction="up">
              <span className="inline-flex items-center bg-[#048037] text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-white/10 shadow-sm">
                Our Projects
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-[30px] md:text-[40px] font-bold text-[#14213D] font-headline tracking-tighter">
                Real Solar <span className="text-primary">Installation Gallery</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-[#475569] leading-relaxed font-medium max-w-2xl mx-auto">
                Professional rooftop solar installation work by our expert team.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-[20px]">
            {/* ROW 1 */}
            <ScrollReveal direction="up" className="md:col-span-8 h-[300px] md:h-[400px]">
               <div className="relative w-full h-full rounded-[22px] overflow-hidden shadow-xl group bg-muted">
                 <Image 
                   src="/project/5.png" 
                   alt="Solar Installation Work" 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                   data-ai-hint="solar rooftop"
                 />
               </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1} className="md:col-span-4 h-[300px] md:h-[400px]">
               <div className="relative w-full h-full rounded-[22px] overflow-hidden shadow-xl group bg-muted">
                 <Image 
                   src="/ab/1.jpg" 
                   alt="Installation Site Survey" 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                   data-ai-hint="solar survey"
                 />
               </div>
            </ScrollReveal>

            {/* ROW 2 */}
            <ScrollReveal direction="up" delay={0.15} className="md:col-span-4 h-[300px] md:h-[300px]">
               <div className="relative w-full h-full rounded-[22px] overflow-hidden shadow-xl group bg-muted">
                 <Image 
                   src="/ab/4.jpg" 
                   alt="Solar Mounting" 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                   data-ai-hint="solar structure"
                 />
               </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} className="md:col-span-4 h-[300px] md:h-[300px]">
               <div className="relative w-full h-full rounded-[22px] overflow-hidden shadow-xl group bg-muted">
                 <Image 
                   src="/ab/5.png" 
                   alt="Solar Team" 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                   data-ai-hint="solar engineering"
                 />
               </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.25} className="md:col-span-4 h-[300px] md:h-[300px]">
               <div className="relative w-full h-full rounded-[22px] overflow-hidden shadow-xl group bg-muted">
                 <Image 
                   src="https://picsum.photos/seed/arka_gal_5/600/600" 
                   alt="Residential Installation" 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                   data-ai-hint="solar home"
                 />
               </div>
            </ScrollReveal>

            {/* ROW 3 */}
            <ScrollReveal direction="up" delay={0.3} className="md:col-span-4 h-[300px] md:h-[400px]">
               <div className="relative w-full h-full rounded-[22px] overflow-hidden shadow-xl group bg-muted">
                 <Image 
                   src="https://picsum.photos/seed/arka_gal_6/600/800" 
                   alt="Solar Panels Close-up" 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                   data-ai-hint="solar panels"
                 />
               </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.35} className="md:col-span-8 h-[300px] md:h-[400px]">
               <div className="relative w-full h-full rounded-[22px] overflow-hidden shadow-xl group bg-muted">
                 <Image 
                   src="/project/6.png" 
                   alt="Completed Solar Project" 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                   data-ai-hint="industrial solar"
                 />
               </div>
            </ScrollReveal>
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
