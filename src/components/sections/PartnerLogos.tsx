
'use client';

import React from "react";
import Image from "next/image";

const PARTNERS = [
  { name: "Partner A", logo: "/par/A.jpg" },
  { name: "Partner B", logo: "/par/B.jpg" },
  { name: "Partner C", logo: "/par/C.jpg" },
  { name: "Partner D", logo: "/par/D.png" },
  { name: "Partner E", logo: "/par/E.png" },
  { name: "Partner F", logo: "/par/F.png" },
];

export function PartnerLogos() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-border/50">
      <div className="relative overflow-hidden flex flex-nowrap">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <div 
              key={idx} 
              className="mx-8 md:mx-12 shrink-0 transition-all duration-500"
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
