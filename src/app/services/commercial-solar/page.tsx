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
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";

export default function CommercialSolarPage() {
  const features = [
    { icon: <TrendingUp />, title: "Accelerated Depreciation", desc: "Claim 40% depreciation in Year 1 for massive tax savings on your business profits." },
    { icon: <BarChart3 />, title: "Fixed Energy Costs", desc: "Protect your bottom line from rising utility tariffs for the next 25 years." },
    { icon: <ShieldCheck />, title: "ESG Compliance", desc: "Boost your brand value and meet sustainability targets for global corporate standards." },
    { icon: <Zap />, title: "Smart ROI", desc: "Average payback period of 3-5 years followed by 20+ years of free energy." },
  ];

  const faqs = [
    {
      question: "What are the tax benefits for commercial solar in India?",
      answer: "Businesses can leverage Accelerated Depreciation (AD), allowing them to claim 40% depreciation in the first year."
    },
    {
      question: "How long is the typical payback period for a commercial system?",
      answer: "Most commercial solar installations achieve a full return on investment (ROI) within 3 to 4 years."
    },
    {
      question: "Can we install solar on a rented commercial property?",
      answer: "Yes, provided you have a No Objection Certificate (NOC) from the property owner."
    },
    {
      question: "How does solar affect our corporate sustainability (ESG) reporting?",
      answer: "Solar directly reduces your Scope 2 emissions and we provide monthly reports on carbon offset."
    },
    {
      question: "Does solar energy fluctuate and affect our office equipment?",
      answer: "No. Modern solar inverters provide a stable, high-quality power output synchronized with the grid."
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase">
                  Business Solutions
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-semibold text-black leading-[1.05] tracking-tight">
                    Commercial Solar: <br />
                    <span className="text-[#B8B8B8]">Reduce Operational Overheads</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.8]">
                    Strategic solar investments for offices, shops, and hospitals. Lock in your energy costs and boost your business profitability.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-black text-white rounded-full px-10 h-16 text-sm font-semibold hover:bg-neutral-800 transition-all">
                    <Link href="/get-quote">Request Proposal</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-black/10 text-black rounded-full px-10 h-16 text-sm font-semibold hover:bg-neutral-50">
                    <Link href="/get-quote">Book Site Audit</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4} className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/arka_comm_hero/1200/1500" 
                alt="Commercial Solar Installation" 
                fill 
                className="object-cover"
                priority
              />
            </ScrollReveal>
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

      <ServiceFAQ serviceName="Commercial Solar" faqs={faqs} />

      <CTASection />
    </div>
  );
}
