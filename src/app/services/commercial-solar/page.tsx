'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight,
  Factory,
  Zap,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";
import { CTASection } from "@/components/sections/CTASection";

export default function CommercialSolarPage() {
  const features = [
    { icon: <TrendingUp />, title: "Accelerated Depreciation", desc: "Claim 40% depreciation in Year 1 for massive tax savings on your business profits." },
    { icon: <BarChart3 />, title: "Fixed Energy Costs", desc: "Protect your bottom line from rising utility tariffs for the next 25 years." },
    { icon: <ShieldCheck />, title: "ESG Compliance", desc: "Boost your brand value and meet sustainability targets for global corporate standards." },
    { icon: <Zap />, title: "Smart ROI", desc: "Average payback period of 3-5 years followed by 20+ years of free energy." },
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
                  Business Solutions
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[28px] md:text-[34px] lg:text-[48px] font-semibold text-black leading-[1.05] tracking-tight">
                    Commercial Solar: <br />
                    <span className="text-[#B8B8B8]">Reduce Operational Overheads</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.6]">
                    Strategic solar investments for offices, shops, and hospitals. Lock in your costs.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-black text-white rounded-full px-10 py-7 text-[14px] font-semibold hover:bg-neutral-800 transition-all">
                    <Link href="/get-quote">Request Proposal</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-black/10 text-black rounded-full px-10 py-7 text-[14px] font-semibold hover:bg-neutral-50">
                    <Link href="/get-quote">Book Site Audit</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4} className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/arka_comm_hero/1200/800" 
                alt="Commercial Solar Installation" 
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
            <StatItem value={1200} suffix="+" label="Commercial Projects" />
            <StatItem value={40} suffix="%" label="Tax Depreciation" />
            <StatItem value={4} suffix="Y" label="Average Payback" />
            <StatItem value={50} suffix="MW+" label="Installed Capacity" />
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-4">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">A Strategic Financial Tool</h2>
            <p className="text-[#777] text-[14px] max-w-xl mx-auto">Solar isn't just energy; it's a way to boost your business EBITDA.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <Card className="p-10 h-full rounded-[40px] border-none bg-white shadow-sm hover:shadow-xl transition-all group">
                  <div className="size-14 rounded-2xl bg-[#F5F5F5] flex items-center justify-center mb-8 text-black group-hover:bg-black group-hover:text-white transition-colors">
                    {React.cloneElement(feature.icon as React.ReactElement, { className: "size-6" })}
                  </div>
                  <h3 className="text-[20px] font-semibold text-black mb-4">{feature.title}</h3>
                  <p className="text-[13px] text-[#555] leading-[1.6]">{feature.desc}</p>
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
