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

export default function BatteryStoragePage() {
  const benefits = [
    { icon: <Zap />, title: "24/7 Power", desc: "Never worry about grid outages again with automatic backup switching." },
    { icon: <BatteryFull />, title: "Peak Shaving", desc: "Use stored solar energy during peak tariff hours to maximize savings." },
    { icon: <Cpu />, title: "Smart Management", desc: "AI-driven energy management for optimized charging and discharging." },
    { icon: <RotateCcw />, title: "Retrofit Ready", desc: "Add batteries to your existing solar system with our hybrid inverters." },
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
                    Take control of your energy. Store your solar power during the day and use it at night or during power cuts with our advanced lithium-ion storage solutions.
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

      {/* FINAL CTA */}
      <section className="py-32 px-4 bg-black text-white text-center">
        <div className="container mx-auto max-w-5xl space-y-10">
          <h2 className="text-[34px] lg:text-[48px] font-semibold leading-tight">Achieve Energy Freedom Today</h2>
          <Button asChild size="lg" className="bg-white text-black font-semibold rounded-full px-12 py-8 text-[14px]">
            <Link href="/get-quote">Consult an Expert</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
