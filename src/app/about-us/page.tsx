'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  TrendingUp, 
  Star,
  Users,
  Clock,
  Headset,
  Target,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";
import { CTASection } from "@/components/sections/CTASection";

export default function AboutPage() {
  return (
    <div className="bg-white overflow-hidden selection:bg-primary/20 selection:text-primary">
      {/* SECTION 1 – HERO INTRO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl text-left space-y-8">
            <ScrollReveal direction="up">
              <span className="inline-block bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase border border-primary/10">
                Who We Are
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-[30px] md:text-[44px] lg:text-[52px] font-bold text-foreground leading-[1.1] tracking-tighter max-w-4xl">
                Empowering India With <br /><span className="text-primary">Smart Solar Solutions</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-[15px] lg:text-[17px] text-muted-foreground max-w-2xl font-medium leading-relaxed">
                SKY RENEWABLE is dedicated to transforming India's energy landscape through engineering excellence, 
                unwavering integrity, and a commitment to a carbon-free future.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary text-white rounded-full px-10 h-14 md:h-16 text-[14px] md:text-[15px] font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all">
                  <Link href="/get-quote">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border text-foreground rounded-full px-10 h-14 md:h-16 text-[14px] md:text-[15px] font-bold hover:bg-muted transition-all">
                  <Link href="/get-quote">Book Site Survey</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="up" delay={0.4} className="mt-20">
            <div className="relative aspect-[21/9] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border border-border bg-neutral-100">
              <Image 
                src="https://picsum.photos/seed/arka_about_hero/1600/700" 
                alt="Solar Field" 
                fill 
                className="object-cover w-full h-full"
                priority
                data-ai-hint="solar field"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2 – ABOUT SKY RENEWABLE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <ScrollReveal direction="right" className="space-y-6 md:space-y-8">
              <span className="inline-block bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase">About Us</span>
              <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-foreground leading-tight tracking-tighter">
                Trusted Partners In <br /><span className="text-secondary">Clean Energy</span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-[14px] md:text-[16px] text-muted-foreground leading-relaxed">
                  SKY RENEWABLE is a trusted solar energy solutions company committed to delivering clean, sustainable, and affordable power solutions for homes, businesses, industries, and institutions.
                </p>
                <p className="text-[14px] md:text-[16px] text-muted-foreground leading-relaxed">
                  We specialize in complete Solar EPC Services, Rooftop Solar Installations, Operation & Maintenance, and Solar Panel Cleaning Solutions.
                </p>
                <p className="text-sm font-bold text-primary">Owner: Naimesh Chandraker</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-4 p-4 md:p-5 bg-muted rounded-2xl md:rounded-3xl border border-border">
                  <div className="size-9 md:size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <span className="text-[13px] md:text-sm font-bold text-foreground">Certified Engineers</span>
                </div>
                <div className="flex items-center gap-4 p-4 md:p-5 bg-muted rounded-2xl md:rounded-3xl border border-border">
                  <div className="size-9 md:size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <span className="text-[13px] md:text-sm font-bold text-foreground">MNRE Registered</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative aspect-square rounded-[32px] md:rounded-[40px] overflow-hidden group shadow-2xl border border-border bg-neutral-100">
                <Image 
                  src="https://picsum.photos/seed/arka_about_story/800/800" 
                  alt="Solar Engineers" 
                  fill 
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint="solar engineers"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <AchievementItem count={5000} suffix="+" label="Projects Completed" />
            <AchievementItem count={120} suffix=" MW+" label="Installed Capacity" />
            <AchievementItem count={98} suffix="%" label="Customer Satisfaction" />
            <AchievementItem count={25} suffix="Y" label="Warranty Support" />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function AchievementItem({ count, suffix, label }: { count: number, suffix: string, label: string }) {
  return (
    <div className="space-y-4">
      <div className="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-primary leading-none">
        <Counter value={count} suffix={suffix} />
      </div>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  );
}