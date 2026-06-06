
'use client';

import React from "react";
import { Calculator } from "@/components/sections/Calculator";
import { AIAdvisor } from "@/components/sections/AIAdvisor";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function CalculatorPage() {
  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 text-center space-y-8">
          <ScrollReveal direction="up">
            <span className="inline-block bg-white text-[#777] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">
              ROI Analysis
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-semibold text-black leading-[1.05] tracking-tight max-w-4xl mx-auto">
              Solar Savings <br /><span className="text-[#B8B8B8]">& Potential Calculator</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-[14px] lg:text-[16px] text-[#555] max-w-2xl mx-auto leading-[1.6]">
              Get accurate estimates for your rooftop potential using our advanced algorithms and AI-powered energy advisor.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <Calculator />
        </div>
      </section>
      
      {/* METHODOLOGY */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" className="max-w-4xl mx-auto p-12 bg-[#F9F9F9] rounded-[48px] text-center space-y-6">
            <h2 className="text-[22px] font-semibold text-black">How our calculator works?</h2>
            <p className="text-[14px] text-[#555] leading-[1.8]">
              Our calculator uses regional solar irradiation data provided by NASA, combined with current Indian government subsidy schemes (PM-Suryodaya Yojana) and local electricity tariffs to give you the most realistic ROI and payback period.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* AI ADVISOR */}
      <section className="pb-32">
        <AIAdvisor />
      </section>
    </div>
  );
}
