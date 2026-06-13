'use client';

import React from "react";
import { Factory, Globe, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ServiceHero } from "@/components/sections/ServiceHero";
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
      <ServiceHero 
        badge="OUR SERVICES"
        titleLine1="Industrial Solar"
        titleLine2="Energy Ecosystems"
        description="Large-scale high-yield solar arrays for factories and production units. Engineering-first approach for maximum generation and tax-efficient depreciation."
        image="/servie/2.png"
        primaryButtonText="Get Industrial Proposal"
        secondaryButtonText="Book Site Audit"
      />

      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="right">
              <Card className="p-12 rounded-[60px] border-none bg-white shadow-sm space-y-6">
                <div className="size-16 rounded-2xl bg-[#EEF7FF] text-[#2563EB] flex items-center justify-center">
                  <Factory className="size-8" />
                </div>
                <h3 className="text-[28px] font-semibold text-black">CAPEX Model</h3>
                <p className="text-[#555] text-[15px] leading-[1.7]">Own the system directly. Maximize your tax benefits and enjoy 100% of the energy savings.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[14px] font-medium text-black"><CheckCircle2 className="size-4 text-[#22C55E]" /> 100% Ownership</li>
                  <li className="flex items-center gap-2 text-[14px] font-medium text-black"><CheckCircle2 className="size-4 text-[#22C55E]" /> Full Tax Credits</li>
                </ul>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <Card className="p-12 rounded-[60px] border-none bg-black text-white shadow-sm space-y-6">
                <div className="size-16 rounded-2xl bg-[#rgba(255,152,0,0.12)] text-[#FF9800] flex items-center justify-center">
                  <Globe className="size-8" />
                </div>
                <h3 className="text-[28px] font-semibold text-white">RESCO / OPEX Model</h3>
                <p className="text-white/60 text-[15px] leading-[1.7]">Zero investment. Pay only for the energy you consume at a rate significantly lower than the grid.</p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-2 text-[14px] font-medium"><CheckCircle2 className="size-4 text-[#22C55E]" /> Zero Upfront Cost</li>
                  <li className="flex items-center gap-2 text-[14px] font-medium"><CheckCircle2 className="size-4 text-[#22C55E]" /> Maintenance Included</li>
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
