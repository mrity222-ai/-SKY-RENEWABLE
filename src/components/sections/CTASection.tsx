'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal direction="zoom">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#EEF2FF] to-[#F5F3FF] px-8 py-20 md:px-12 md:py-28 text-center shadow-2xl border border-primary/5">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
              <Image 
                src="https://images.unsplash.com/photo-1509391366360-fe5bb6583e22?q=80&w=2070&auto=format&fit=crop"
                alt="Solar Panels Background"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <h2 className="text-[34px] md:text-[64px] lg:text-[76px] font-black leading-[1.05] tracking-tighter">
                <span className="text-primary block">Predictable Power for a</span>
                <span className="text-accent">Sustainable Future</span>
              </h2>
              
              <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Join homeowners and businesses who have already transitioned to affordable solar energy solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-16 text-base font-bold shadow-xl transition-all active:scale-95">
                  <Link href="/get-quote">Request Energy Audit</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-12 h-16 text-base font-bold transition-all active:scale-95">
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
