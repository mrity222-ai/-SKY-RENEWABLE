'use client';

import React from "react";
import { TrendingUp, BarChart3, ShieldCheck, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ServiceHero } from "@/components/sections/ServiceHero";
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
      <ServiceHero 
        badge="OUR SERVICES"
        titleLine1="Commercial Solar"
        titleLine2="Strategic Savings"
        description="Slash operational overheads for offices, hospitals, and shops. Strategic solar investments that insulate your business from rising energy tariffs while boosting ESG metrics."
        image="/servie/3.png"
        primaryButtonText="Request Proposal"
        secondaryButtonText="Book Site Audit"
      />

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
                  <div className="size-14 rounded-2xl bg-[#EEF7FF] flex items-center justify-center mb-8 text-[#91C8FF] group-hover:bg-[rgba(255,152,0,0.12)] group-hover:text-[#FF9800] transition-colors">
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
