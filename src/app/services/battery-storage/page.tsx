
'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Zap, 
  BatteryFull, 
  RotateCcw, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
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
      answer: "A hybrid solar system combines the benefits of on-grid and off-grid systems. It connects to the grid to export excess energy while also using batteries to store power for use during night-time or power cuts."
    },
    {
      question: "How long is the lifespan of modern solar batteries?",
      answer: "We exclusively use Tier-1 Lithium Ferro Phosphate (LFP) batteries which typically last for 10 to 12 years (approx. 4000 to 6000 cycles) before needing replacement."
    },
    {
      question: "Can I add batteries to my existing solar system?",
      answer: "Yes. By using a 'battery-ready' hybrid inverter or an AC-coupled storage system, we can retrofit high-performance battery storage to your existing grid-tie solar installation."
    },
    {
      question: "Are solar batteries safe to install inside my home?",
      answer: "Yes, our Lithium LFP batteries are significantly safer than traditional lead-acid batteries. They do not emit gases and come with advanced Battery Management Systems (BMS) that protect against overheating and overcharging."
    },
    {
      question: "Can battery storage power heavy loads like ACs during power cuts?",
      answer: "Yes, depending on the inverter capacity and battery bank size. Our engineers design systems specifically to handle your critical and heavy loads during grid outages."
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">
                  Energy Independence
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[28px] md:text-[34px] lg:text-[48px] font-semibold text-black leading-[1.05] tracking-tight">
                    Battery Storage: <br />
                    <span className="text-[#B8B8B8]">Smart Backup & Independence</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.6]">
                    Take control of your energy. Store your solar power during the day.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <Button asChild size="lg" className="bg-black text-white rounded-full px-10 py-7 text-[14px] font-semibold">
                  <Link href="/get-quote">Get Backup Quote</Link>
                </Button>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4} className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/arka_batt_hero/1200/800" 
                alt="Battery Storage System" 
                fill 
                className="object-cover"
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
