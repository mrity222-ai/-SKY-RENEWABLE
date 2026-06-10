'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Factory, 
  Cpu, 
  ShieldAlert, 
  BarChart3, 
  ArrowRight,
  Zap,
  CheckCircle2,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";
import { CTASection } from "@/components/sections/CTASection";

export default function IndustrialSolarPage() {
  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">
                  Industrial EPC
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[28px] md:text-[34px] lg:text-[48px] font-semibold text-black leading-[1.05] tracking-tight">
                    Industrial Solar: <br />
                    <span className="text-[#B8B8B8]">High-Yield Energy Ecosystems</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.6]">
                    Large-scale high-yield solar arrays for factories. Engineering-first approach.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex wrap gap-4">
                  <Button asChild size="lg" className="bg-black text-white rounded-full px-10 py-7 text-[14px] font-semibold hover:bg-neutral-800 transition-all">
                    <Link href="/get-quote">Get Industrial Proposal</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4} className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/arka_ind_hero/1200/800" 
                alt="Industrial Solar Plant" 
                fill 
                className="object-cover"
                priority
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* EPC MODELS */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="right">
              <Card className="p-12 rounded-[60px] border-none bg-white shadow-sm space-y-6">
                <div className="size-16 rounded-2xl bg-black text-white flex items-center justify-center">
                  <Factory className="size-8" />
                </div>
                <h3 className="text-[28px] font-semibold text-black">CAPEX Model</h3>
                <p className="text-[#555] text-[15px] leading-[1.7]">Own the system directly. Maximize your tax benefits and enjoy 100% of the energy savings.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[14px] font-medium text-black"><CheckCircle2 className="size-4" /> 100% Ownership</li>
                  <li className="flex items-center gap-2 text-[14px] font-medium text-black"><CheckCircle2 className="size-4" /> Full Tax Credits</li>
                </ul>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <Card className="p-12 rounded-[60px] border-none bg-black text-white shadow-sm space-y-6">
                <div className="size-16 rounded-2xl bg-white text-black flex items-center justify-center">
                  <Globe className="size-8" />
                </div>
                <h3 className="text-[28px] font-semibold text-white">RESCO / OPEX Model</h3>
                <p className="text-white/60 text-[15px] leading-[1.7]">Zero investment. Pay only for the energy you consume at a rate significantly lower than the grid.</p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-2 text-[14px] font-medium"><CheckCircle2 className="size-4 text-accent" /> Zero Upfront Cost</li>
                  <li className="flex items-center gap-2 text-[14px] font-medium"><CheckCircle2 className="size-4 text-accent" /> Maintenance Included</li>
                </ul>
              </Card>
            </ScrollReveal>
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
