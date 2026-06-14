'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FinancePartners } from "./FinancePartners";

export function CTASection() {
  return (
    <>
      <FinancePartners />
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal direction="zoom">
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#EEF6FF] to-[#F8FAFC] px-8 py-12 md:px-12 md:py-16 text-center shadow-lg border border-[#2563EB]/10">
              <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                <Image 
                  src="https://images.unsplash.com/photo-1509391366360-fe5bb6583e22?q=80&w=2070&auto=format&fit=crop"
                  alt="Solar Panels Background"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative z-10 max-w-4xl mx-auto space-y-5 md:space-y-6">
                <h2 className="font-black leading-[1.1] tracking-tighter">
                  <span className="text-[#14213D] block">Predictable Power for a</span>
                  <span className="text-[#2563EB]">Sustainable Future</span>
                </h2>
                
                <p className="text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed">
                  Join homeowners and businesses who have already transitioned to affordable solar energy solutions.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button asChild variant="default" size="lg" className="w-full sm:w-auto rounded-full text-white">
                    <Link href="/get-quote">Request Energy Audit</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full border-[#DCE7F5] text-[#14213D]">
                    <Link href="/get-quote">Consult Solar Experts</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
