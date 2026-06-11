
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
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-white overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 size-1.5 bg-neutral-200 rounded-full hidden md:block" />
      
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 md:gap-20 items-center">
          {/* Content side */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <ScrollReveal direction="up">
              <span className="inline-block bg-neutral-100 text-neutral-500 px-4 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
                {badge}
              </span>
            </ScrollReveal>
            
            <div className="space-y-4 md:space-y-6">
              <ScrollReveal direction="up" delay={0.1}>
                <h1 className="text-[30px] md:text-[44px] lg:text-[52px] font-bold leading-[1.1] tracking-tight">
                  <span className="text-black block">{titleLine1}</span>
                  <span className="text-[#B8B8B8] block">{titleLine2}</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#555] max-w-xl mx-auto lg:mx-0 leading-[1.7]">
                  {description}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <Button asChild size="lg" className="bg-black text-white rounded-full px-8 md:px-10 h-12 md:h-14 text-[14px] md:text-[15px] font-bold hover:bg-neutral-800 transition-all w-full sm:w-auto">
                  <Link href="/get-quote">{primaryButtonText}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-neutral-200 text-black rounded-full px-8 md:px-10 h-12 md:h-14 text-[14px] md:text-[15px] font-bold hover:bg-neutral-50 transition-all w-full sm:w-auto">
                  <Link href="/get-quote">{secondaryButtonText}</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Image side - Updated to aspect-video (16:9) */}
          <ScrollReveal direction="left" delay={0.4}>
            <div className="relative aspect-video rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl bg-neutral-100">
              <Image 
                src={image} 
                alt={titleLine1} 
                fill 
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
