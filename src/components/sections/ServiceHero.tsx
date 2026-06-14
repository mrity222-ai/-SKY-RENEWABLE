'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface ServiceHeroProps {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export function ServiceHero({
  badge,
  titleLine1,
  titleLine2,
  description,
  image,
  primaryButtonText = "Get Free Quote",
  secondaryButtonText = "Book Site Survey",
}: ServiceHeroProps) {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <ScrollReveal direction="right" delay={0.4} className="order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-lg">
              <Image 
                src={image} 
                alt={titleLine1} 
                fill 
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-[#14213D]/5 pointer-events-none" />
            </div>
          </ScrollReveal>

          <div className="space-y-5 md:space-y-6 text-center lg:text-left order-1 lg:order-2">
            <ScrollReveal direction="up">
              <span className="inline-block bg-white text-[#14213D] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase border border-[#DCE7F5] shadow-sm">
                {badge}
              </span>
            </ScrollReveal>
            
            <div className="space-y-3 md:space-y-4">
              <ScrollReveal direction="up" delay={0.1}>
                <h1 className="leading-[1.1] tracking-tight text-[#14213D]">
                  <span className="block">{titleLine1}</span>
                  <span className="text-[#2563EB] block">{titleLine2}</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-[#475569] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  {description}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <Button asChild variant="default" size="lg" className="rounded-full w-full sm:w-auto text-white">
                  <Link href="/get-quote">{primaryButtonText}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full w-full sm:w-auto border-[#DCE7F5] text-[#14213D]">
                  <Link href="/get-quote">{secondaryButtonText}</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
