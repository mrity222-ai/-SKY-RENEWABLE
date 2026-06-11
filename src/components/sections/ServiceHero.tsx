'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <section className="relative pt-24 pb-12 md:pt-40 md:pb-24 bg-white overflow-hidden">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 size-1.5 bg-neutral-200 rounded-full hidden md:block" />
      
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 md:gap-24 items-center">
          {/* Content side */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <ScrollReveal direction="up">
              <span className="inline-block bg-neutral-100 text-neutral-500 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase">
                {badge}
              </span>
            </ScrollReveal>
            
            <div className="space-y-4 md:space-y-6">
              <ScrollReveal direction="up" delay={0.1}>
                <h1 className="text-[32px] sm:text-[42px] md:text-[60px] font-bold leading-[1.1] tracking-tight">
                  <span className="text-black block">{titleLine1}</span>
                  <span className="text-[#B8B8B8] block">{titleLine2}</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-[15px] md:text-[18px] text-[#555] max-w-xl mx-auto lg:mx-0 leading-[1.7]">
                  {description}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Button asChild size="lg" className="bg-black text-white rounded-full px-8 md:px-10 h-14 md:h-16 text-[14px] md:text-[15px] font-bold hover:bg-neutral-800 transition-all w-full sm:w-auto">
                  <Link href="/get-quote">{primaryButtonText}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-neutral-200 text-black rounded-full px-8 md:px-10 h-14 md:h-16 text-[14px] md:text-[15px] font-bold hover:bg-neutral-50 transition-all w-full sm:w-auto">
                  <Link href="/get-quote">{secondaryButtonText}</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Image side */}
          <ScrollReveal direction="left" delay={0.4}>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[430px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl group">
              <Image 
                src={image} 
                alt={titleLine1} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
