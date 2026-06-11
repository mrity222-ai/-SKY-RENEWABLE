'use client';

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const PARTNERS = [
  { name: "Tata Power", logo: "https://picsum.photos/seed/tata_solar/200/100" },
  { name: "Adani Solar", logo: "https://picsum.photos/seed/adani_solar/200/100" },
  { name: "Vikram Solar", logo: "https://picsum.photos/seed/vikram_solar/200/100" },
  { name: "Waaree", logo: "https://picsum.photos/seed/waaree_solar/200/100" },
  { name: "Luminous", logo: "https://picsum.photos/seed/luminous_solar/200/100" },
  { name: "Microtek", logo: "https://picsum.photos/seed/microtek_solar/200/100" },
  { name: "Growatt", logo: "https://picsum.photos/seed/growatt_solar/200/100" },
  { name: "Sungrow", logo: "https://picsum.photos/seed/sungrow_solar/200/100" },
];

export function PartnerLogos() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-border/50">
      <div className="container mx-auto px-4 mb-8">
        <ScrollReveal direction="up" className="text-center">
          <p className="text-[10px] md:text-[11px] font-bold text-muted-foreground uppercase tracking-[0.3em] mb-2">Our Technology Partners</p>
        </ScrollReveal>
      </div>
      
      <div className="relative overflow-hidden flex flex-nowrap">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <div 
              key={idx} 
              className="mx-8 md:mx-12 shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100"
            >
              <div className="relative w-32 h-12 md:w-40 md:h-16">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  data-ai-hint="logo icon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
