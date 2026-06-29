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
  secondaryButtonText = "Download Brochure",
}: ServiceHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white overflow-hidden">
      {/* Subtle Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* IMAGE SIDE - Maintains 4:3 and Position */}
          <ScrollReveal direction="right" delay={0.3} className="order-2 lg:order-1 group">
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(20,33,61,0.12)] border border-border/50">
              <Image 
                src={image} 
                alt={titleLine1} 
                fill 
                className="object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/10 to-transparent pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* CONTENT SIDE - Maintains Position and Alignment */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-1 lg:order-2">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="inline-flex items-center bg-white text-primary px-5 py-2 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-primary/10 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse" />
                {badge}
              </span>
            </ScrollReveal>
            
            <div className="space-y-4 md:space-y-6">
              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="leading-[1.1] tracking-tight text-[#14213D] font-headline">
                  <span className="block">{titleLine1}</span>
                  <span className="text-primary block">{titleLine2}</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.3}>
                <p className="text-[#475569] max-w-xl mx-auto lg:mx-0 leading-relaxed text-[15px] md:text-[17px] font-medium opacity-90">
                  {description}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Button asChild variant="default" size="lg" className="rounded-full w-full sm:w-auto text-white shadow-xl shadow-primary/20 hover:shadow-primary/30 h-12 md:h-14 px-10">
                  <Link href="/get-quote">{primaryButtonText}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full w-full sm:w-auto border-border text-[#14213D] hover:bg-[#F8FAFC] h-12 md:h-14 px-10">
                  {secondaryButtonText === "Download Brochure" ? (
                    <a href="/P.pdf" target="_blank">Download Brochure</a>
                  ) : (
                    <Link href="/get-quote">{secondaryButtonText}</Link>
                  )}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
