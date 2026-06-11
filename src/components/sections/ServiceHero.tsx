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
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 bg-white overflow-hidden">
      {/* Decorative dot */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 size-1.5 bg-neutral-200 rounded-full" />
      
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid lg:grid-cols-[45%_55%] gap-16 lg:gap-24 items-center">
          {/* Content side */}
          <div className="space-y-8">
            <ScrollReveal direction="up">
              <span className="inline-block bg-neutral-100 text-neutral-500 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase">
                {badge}
              </span>
            </ScrollReveal>
            
            <div className="space-y-6">
              <ScrollReveal direction="up" delay={0.1}>
                <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.05] tracking-tight">
                  <span className="text-black block">{titleLine1}</span>
                  <span className="text-[#B8B8B8] block">{titleLine2}</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.8]">
                  {description}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-black text-white rounded-full px-10 h-16 text-sm font-bold hover:bg-neutral-800 transition-all">
                  <Link href="/get-quote">{primaryButtonText}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-neutral-200 text-black rounded-full px-10 h-16 text-sm font-bold hover:bg-neutral-50 transition-all">
                  <Link href="/get-quote">{secondaryButtonText}</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Image side */}
          <ScrollReveal direction="left" delay={0.4}>
            <div className="relative h-[300px] md:h-[400px] lg:h-[430px] rounded-[32px] overflow-hidden shadow-2xl group">
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
