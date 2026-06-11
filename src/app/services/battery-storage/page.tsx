'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Zap, 
  BatteryFull, 
  RotateCcw, 
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";

export default function BatteryStoragePage() {
  const benefits = [
    { icon: <Zap />, title: "24/7 Power", desc: "Never worry about grid outages again with automatic backup switching." },
    { icon: <BatteryFull />, title: "Peak Shaving", desc: "Use stored solar energy during peak tariff hours to maximize savings." },
    { icon: <Cpu />, title: "Smart Management", desc: "AI-driven energy management for optimized charging and discharging." },
    { icon: <RotateCcw />, title: "Retrofit Ready", desc: "Add batteries to your existing solar system with our hybrid inverters." },
  ];

  const faqs = [
    {
      question: "What is a hybrid solar system?",
      answer: "A system that connects to the grid to export excess energy while using batteries for backup power."
    },
    {
      question: "How long is the lifespan of modern solar batteries?",
      answer: "Tier-1 Lithium LFP batteries typically last for 10 to 12 years before needing replacement."
    },
    {
      question: "Can I add batteries to my existing solar system?",
      answer: "Yes, by retrofitting high-performance battery storage with hybrid inverters."
    },
    {
      question: "Are solar batteries safe to install inside my home?",
      answer: "Yes, Lithium LFP batteries do not emit gases and have advanced protection systems."
    },
    {
      question: "Can battery storage power heavy loads like ACs?",
      answer: "Yes, our engineers design systems specifically to handle heavy loads during outages."
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase">
                  Energy Independence
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-semibold text-black leading-[1.05] tracking-tight">
                    Battery Storage: <br />
                    <span className="text-[#B8B8B8]">Smart Backup & Independence</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.8]">
                    Take control of your energy. Store your solar power during the day and power your life through the night or during outages.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-black text-white rounded-full px-10 h-16 text-sm font-semibold hover:bg-neutral-800 transition-all">
                    <Link href="/get-quote">Get Backup Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-black/10 text-black rounded-full px-10 h-16 text-sm font-semibold hover:bg-neutral-50">
                    <Link href="/get-quote">Book Site Survey</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4} className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/arka_batt_hero/1200/1500" 
                alt="Battery Storage System" 
                fill 
                className="object-cover"
                priority
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <Card className="p-10 h-full rounded-[40px] border-none bg-white shadow-sm hover:shadow-xl transition-all group text-center">
                  <div className="size-16 rounded-2xl bg-[#F5F5F5] flex items-center justify-center mb-8 mx-auto text-black group-hover:bg-black group-hover:text-white transition-colors">
                    {React.cloneElement(benefit.icon as React.ReactElement, { className: "size-8" })}
                  </div>
                  <h3 className="text-[20px] font-semibold text-black mb-4">{benefit.title}</h3>
                  <p className="text-[13px] text-[#555] leading-[1.6]">{benefit.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ serviceName="Battery Storage" faqs={faqs} />

      <CTASection />
    </div>
  );
}
