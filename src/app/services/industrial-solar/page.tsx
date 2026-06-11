'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Factory, 
  Globe,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";

export default function IndustrialSolarPage() {
  const faqs = [
    {
      question: "What exactly is a Solar EPC contract?",
      answer: "A Solar EPC (Engineering, Procurement, and Construction) contract is a turnkey solution handling the entire lifecycle."
    },
    {
      question: "Can solar power heavy manufacturing machinery?",
      answer: "Absolutely. Industrial systems power heavy-duty motors and production lines without voltage drops."
    },
    {
      question: "What is the difference between CAPEX and OPEX models?",
      answer: "In CAPEX you own the system; in OPEX SKY RENEWABLE owns it and you pay for power consumed."
    },
    {
      question: "How long does a MW-scale solar project take to commission?",
      answer: "Typically between 4 to 6 months from design to full grid synchronization."
    },
    {
      question: "Do industrial systems come with performance guarantees?",
      answer: "Yes, our EPC projects include a guaranteed Performance Ratio (PR) with precision IoT monitoring."
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
                  Industrial EPC
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-semibold text-black leading-[1.05] tracking-tight">
                    Industrial Solar: <br />
                    <span className="text-[#B8B8B8]">High-Yield Energy Ecosystems</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.8]">
                    Large-scale high-yield solar arrays for factories and production units. Engineering-first approach for maximum generation.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex wrap gap-4">
                  <Button asChild size="lg" className="bg-black text-white rounded-full px-10 h-16 text-sm font-semibold hover:bg-neutral-800 transition-all">
                    <Link href="/get-quote">Get Industrial Proposal</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-black/10 text-black rounded-full px-10 h-16 text-sm font-semibold hover:bg-neutral-50">
                    <Link href="/get-quote">Book Site Audit</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4} className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/arka_ind_hero/1200/1500" 
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

      <ServiceFAQ serviceName="Industrial Solar" faqs={faqs} />

      <CTASection />
    </div>
  );
}
