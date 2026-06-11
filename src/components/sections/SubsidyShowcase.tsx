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
        <div className="grid lg:grid-cols-[45%_55%] gap-12 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <ScrollReveal direction="up" className="space-y-4 md:space-y-6">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-primary/20">
                PM Surya Ghar Yojana
              </span>
              <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-foreground leading-[1.2] tracking-tighter">
                Get Maximum Solar Subsidy <br />
                <span className="text-primary">With Expert Assistance</span>
              </h2>
              <p className="text-[14px] md:text-[15px] lg:text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Navigating government incentives shouldn't be complicated. We provide a turnkey experience for the PM-Suryodaya Yojana, handling everything from eligibility audits to direct bank transfers.
              </p>
            </ScrollReveal>

            {/* STATISTICS ROW */}
            <ScrollReveal direction="up" delay={0.3} className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-border">
              <div className="space-y-1">
                <p className="text-[18px] md:text-[22px] font-bold text-primary">₹78,000</p>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">Central Subsidy</p>
              </div>
              <div className="space-y-1">
                <p className="text-[18px] md:text-[22px] font-bold text-primary">₹30,000</p>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">State Benefit</p>
              </div>
              <div className="space-y-1">
                <p className="text-[18px] md:text-[22px] font-bold text-primary">100%</p>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">Doc Support</p>
              </div>
            </ScrollReveal>

            {/* CTA BUTTONS */}
            <ScrollReveal direction="up" delay={0.4} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Button asChild size="lg" className="bg-primary text-white rounded-full px-8 md:px-10 h-12 md:h-14 text-[14px] md:text-[15px] font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all w-full sm:w-auto">
                <Link href="/government-solar-subsidy">Check Eligibility</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border text-foreground rounded-full px-8 md:px-10 h-12 md:h-14 text-[14px] md:text-[15px] font-bold hover:bg-white transition-all w-full sm:w-auto">
                <Link href="/contact-us">Talk To Expert</Link>
              </Button>
            </ScrollReveal>
          </div>

          {/* RIGHT SIDE IMAGE CARD - Turn 15 height-based container */}
          <ScrollReveal direction="left">
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[520px] rounded-[32px] overflow-hidden shadow-xl bg-neutral-100">
              <Image 
                src="https://picsum.photos/seed/arka_subsidy_showcase/1200/1500" 
                alt="Solar Subsidy Assistance" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
                data-ai-hint="solar finance"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
