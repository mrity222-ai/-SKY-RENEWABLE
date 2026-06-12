'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Button 
} from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function SubsidyShowcase() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* LEFT SIDE IMAGE CARD */}
          <ScrollReveal direction="right" className="order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl bg-neutral-100">
              <Image
                src="/servie/8.png"
                alt="Solar Subsidy Assistance"
                fill
                className="object-cover object-center"
              />
            </div>
          </ScrollReveal>

          {/* RIGHT CONTENT */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-1 lg:order-2">
            <ScrollReveal direction="up" className="space-y-4 md:space-y-6">
              <span className="inline-block bg-[#EFF6FF] text-[#2563EB] px-4 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-[#2563EB]/10">
                PM Surya Ghar Yojana
              </span>
              <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-[#0F172A] leading-[1.2] tracking-tighter">
                Get Maximum Solar Subsidy <br />
                <span className="text-[#2563EB]">With Expert Assistance</span>
              </h2>
              <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#64748B] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Navigating government incentives shouldn't be complicated. We provide a turnkey experience for the PM-Suryodaya Yojana, handling everything from eligibility audits to direct bank transfers.
              </p>
            </ScrollReveal>

            {/* STATISTICS ROW */}
            <ScrollReveal direction="up" delay={0.3} className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-[#E2E8F0]">
              <div className="space-y-1 text-center lg:text-left">
                <p className="text-[18px] md:text-[22px] font-bold text-[#2563EB]">₹78,000</p>
                <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest leading-tight">Central Subsidy</p>
              </div>
              <div className="space-y-1 text-center lg:text-left">
                <p className="text-[18px] md:text-[22px] font-bold text-[#06B6D4]">₹30,000</p>
                <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest leading-tight">State Benefit</p>
              </div>
              <div className="space-y-1 text-center lg:text-left">
                <p className="text-[18px] md:text-[22px] font-bold text-[#22C55E]">100%</p>
                <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest leading-tight">Doc Support</p>
              </div>
            </ScrollReveal>

            {/* CTA BUTTONS */}
            <ScrollReveal direction="up" delay={0.4} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Button asChild size="lg" className="bg-[#2563EB] text-white rounded-full px-8 md:px-10 h-12 md:h-14 text-[14px] md:text-[15px] font-bold shadow-xl shadow-[#2563EB]/20 hover:bg-[#1D4ED8] transition-all w-full sm:w-auto">
                <Link href="/government-solar-subsidy">Check Eligibility</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#CBD5E1] text-[#0F172A] rounded-full px-8 md:px-10 h-12 md:h-14 text-[14px] md:text-[15px] font-bold hover:bg-white hover:border-[#2563EB] transition-all w-full sm:w-auto">
                <Link href="/contact-us">Talk To Expert</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
