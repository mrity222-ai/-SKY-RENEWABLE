'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Banknote, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";
import { CTASection } from "@/components/sections/CTASection";

export default function ResidentialSolarPage() {
  const benefits = [
    { icon: <Banknote />, title: "80-90% Bill Reduction", desc: "Slash your monthly electricity expenses and lock in your rates for 25 years." },
    { icon: <ShieldCheck />, title: "Government Subsidy", desc: "Get up to ₹78,000 as direct bank transfer under PM-Suryodaya Yojana." },
    { icon: <Zap />, title: "Energy Independence", desc: "Protect your home from power cuts and rising grid electricity tariffs." },
    { icon: <Sun />, title: "Eco-Friendly Living", desc: "Reduce your carbon footprint and contribute to a greener planet." },
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">
                  Home Solutions
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[28px] md:text-[34px] lg:text-[48px] font-semibold text-black leading-[1.05] tracking-tight">
                    Residential Solar: <br />
                    <span className="text-[#B8B8B8]">Zero Bill Homes Made Easy</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.6]">
                    Custom rooftop systems for modern homes. Reduce your electricity bills by up to 90%.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-black text-white rounded-full px-10 py-7 text-[14px] font-semibold hover:bg-neutral-800 transition-all">
                    <Link href="/get-quote">Get Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-black/10 text-black rounded-full px-10 py-7 text-[14px] font-semibold hover:bg-neutral-50">
                    <Link href="/get-quote">Check Subsidy</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4} className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/arka_res_hero/1200/800" 
                alt="Residential Solar Installation" 
                fill 
                className="object-cover"
                priority
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 border-y border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <StatItem value={5000} suffix="+" label="Happy Families" />
            <StatItem value={78000} prefix="₹" label="Max Subsidy" />
            <StatItem value={90} suffix="%" label="Bill Savings" />
            <StatItem value={25} suffix="Y" label="Performance Warranty" />
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-4">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Why Switch to Home Solar?</h2>
            <p className="text-[#777] text-[14px] max-w-xl mx-auto">Investment that pays for itself in 4 years and lasts for 25.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <Card className="p-10 h-full rounded-[40px] border-none bg-white shadow-sm hover:shadow-xl transition-all group">
                  <div className="size-14 rounded-2xl bg-[#F5F5F5] flex items-center justify-center mb-8 text-black group-hover:bg-black group-hover:text-white transition-colors">
                    {React.cloneElement(benefit.icon as React.ReactElement, { className: "size-6" })}
                  </div>
                  <h3 className="text-[20px] font-semibold text-black mb-4">{benefit.title}</h3>
                  <p className="text-[13px] text-[#555] leading-[1.6]">{benefit.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection />
    </div>
  );
}

function StatItem({ value, suffix = "", prefix = "", label }: { value: number, suffix?: string, prefix?: string, label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-[40px] lg:text-[56px] font-semibold text-black leading-none">
        <Counter value={value} suffix={suffix} prefix={prefix} />
      </div>
      <p className="text-[11px] font-bold uppercase tracking-widest text-[#B8B8B8]">{label}</p>
    </div>
  );
}
