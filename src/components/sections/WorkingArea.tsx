'use client';

import React from "react";
import Link from "next/link";
import { MapPin, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const AREAS = [
  { 
    state: "Chhattisgarh", 
    cities: [
      { name: "Balod", slug: "balod" },
      { name: "Durg", slug: "durg" },
      { name: "Rajnandgaon", slug: "rajnandgaon" },
      { name: "Raipur", slug: "raipur" },
      { name: "Dhamtari", slug: "dhamtari" },
      { name: "Kanker", slug: "kanker" },
      { name: "Bemetara", slug: "bemetara" },
      { name: "Korba", slug: "korba" }
    ] 
  }
];

export function WorkingArea() {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="space-y-6 md:space-y-8">
            <ScrollReveal direction="up">
              <span className="inline-block bg-[#048037] text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase border border-border/10 shadow-sm">
                Our Presence
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="leading-tight tracking-tight font-headline text-[30px] md:text-[40px]">
                Powering Communities <br /><span className="text-primary">Across Chhattisgarh</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="leading-relaxed max-w-xl text-[#475569] text-[15px] md:text-[17px]">
                With our headquarters in Balod, SKY RENEWABLE provides high-yield solar engineering services across the state, delivering clean energy to thousands of households and industrial units.
              </p>
            </ScrollReveal>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 pt-4">
              <div className="flex items-center gap-4 p-5 bg-muted rounded-3xl border border-border">
                <div className="size-10 rounded-xl bg-[#EEF7FF] flex items-center justify-center text-[#2563EB]">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Head Office</p>
                  <p className="text-sm font-bold text-[#14213D]">Balod, Chhattisgarh</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-muted rounded-3xl border border-border">
                <div className="size-10 rounded-xl bg-[#EEF7FF] flex items-center justify-center text-[#22C55E]">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Operational Districts</p>
                  <p className="text-sm font-bold text-[#14213D]">Core Coverage</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {AREAS.map((area, idx) => (
              <ScrollReveal key={area.state} delay={idx * 0.1} direction="up">
                <div className="p-8 md:p-10 rounded-[40px] bg-white border border-border hover:shadow-xl hover:border-primary/20 transition-all group">
                  <h3 className="text-2xl font-bold text-[#14213D] mb-8 flex items-center justify-between font-headline">
                    {area.state}
                    <div className="size-3 rounded-full bg-primary" />
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {area.cities.map(city => (
                      <Link 
                        key={city.slug} 
                        href={`/solar-company-in-${city.slug}`}
                        className="text-[13px] font-bold bg-muted text-muted-foreground px-4 py-2.5 rounded-2xl group-hover:bg-primary/10 group-hover:text-primary transition-colors text-center hover:bg-primary/20"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}