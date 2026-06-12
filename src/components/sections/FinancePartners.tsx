'use client';

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const FINANCE_PARTNERS = [
  { name: "SBI", logo: "https://picsum.photos/seed/bank_sbi/200/100" },
  { name: "HDFC", logo: "https://picsum.photos/seed/bank_hdfc/200/100" },
  { name: "ICICI", logo: "https://picsum.photos/seed/bank_icici/200/100" },
  { name: "Axis Bank", logo: "https://picsum.photos/seed/bank_axis/200/100" },
  { name: "Bank of Baroda", logo: "https://picsum.photos/seed/bank_bob/200/100" },
  { name: "Union Bank", logo: "https://picsum.photos/seed/bank_union/200/100" },
];

export function FinancePartners() {
  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC] border-t border-border/50">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" className="text-center mb-12">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-3 block">
            Easy Financing
          </span>
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#0F172A] tracking-tight">
            Our Finance Partners
          </h2>
          <p className="text-[#64748B] text-sm max-w-xl mx-auto mt-3">
            We collaborate with leading financial institutions to provide easy solar loan options and low-interest EMI schemes for your clean energy transition.
          </p>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {FINANCE_PARTNERS.map((partner, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} direction="up" className="shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100">
              <div className="relative w-28 h-10 md:w-36 md:h-14">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  data-ai-hint="bank logo"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
