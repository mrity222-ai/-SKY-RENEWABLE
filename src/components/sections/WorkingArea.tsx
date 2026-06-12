'use client';

import React from "react";
import { MapPin, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const AREAS = [
  { state: "Chhattisgarh", cities: ["Balod", "Raipur", "Durg", "Bhilai", "Bilaspur"] },
  { state: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"] },
  { state: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Noida", "Varanasi"] },
  { state: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Jabalpur"] },
];

export function WorkingArea() {
  return (
    <section className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <ScrollReveal direction="up">
              <span className="inline-block bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase border border-primary/10">
                Our Presence
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-[30px] md:text-[34px] lg:text-[40px] font-bold text-[#0F172A] leading-tight tracking-tight">
                Powering Communities <br /><span className="text-primary">Across India</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-[14px] md:text-[16px] text-[#64748B] leading-relaxed max-w-xl">
                With our headquarters in Chhattisgarh, SKY RENEWABLE has expanded its high-yield solar engineering services to multiple states, delivering clean energy to thousands of households and industrial units.
              </p>
            </ScrollReveal>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-4 p-5 bg-muted rounded-3xl border border-border">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Head Office</p>
                  <p className="text-sm font-bold text-foreground">Balod, Chhattisgarh</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-muted rounded-3xl border border-border">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Operational States</p>
                  <p className="text-sm font-bold text-foreground">5+ States Covered</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AREAS.map((area, idx) => (
              <ScrollReveal key={area.state} delay={idx * 0.1} direction="up">
                <div className="p-8 rounded-[32px] bg-white border border-border hover:shadow-xl hover:border-primary/20 transition-all group">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-4 flex items-center justify-between">
                    {area.state}
                    <div className="size-2 rounded-full bg-primary" />
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {area.cities.map(city => (
                      <span key={city} className="text-[11px] font-medium bg-muted text-muted-foreground px-3 py-1 rounded-full group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                        {city}
                      </span>
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