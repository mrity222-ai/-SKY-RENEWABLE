'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal direction="zoom">
          <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-[#EFF6FF] to-[#F8FAFC] px-8 py-16 md:px-12 md:py-20 text-center shadow-xl border border-primary/5">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
              <Image 
                src="https://images.unsplash.com/photo-1509391366360-fe5bb6583e22?q=80&w=2070&auto=format&fit=crop"
                alt="Solar Panels Background"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-6 md:space-y-8">
              <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-black leading-[1.1] tracking-tighter">
                <span className="text-[#0F172A] block">Predictable Power for a</span>
                <span className="text-[#2563EB]">Sustainable Future</span>
              </h2>
              
              <p className="text-[#64748B] text-[14px] md:text-[15px] lg:text-[16px] font-medium max-w-2xl mx-auto leading-relaxed">
                Join homeowners and businesses who have already transitioned to affordable solar energy solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 md:pt-6">
                <Button asChild size="lg" className="w-full sm:w-auto bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full px-10 h-12 md:h-14 text-[14px] md:text-[15px] font-bold shadow-lg shadow-[#2563EB]/20 transition-all active:scale-95">
                  <Link href="/get-quote">Request Energy Audit</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-2 border-[#CBD5E1] text-[#0F172A] hover:bg-[#F8FAFC] hover:border-[#2563EB] rounded-full px-10 h-12 md:h-14 text-[14px] md:text-[15px] font-bold transition-all active:scale-95">
                  <Link href="/get-quote">Consult Solar Experts</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}