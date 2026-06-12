'use client';

import React from "react";
import { Zap, BatteryFull, RotateCcw, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";

export default function BatteryStoragePage() {
  const benefits = [
    { icon: <Zap />, title: "24/7 Power", desc: "Never worry about grid outages again with automatic backup switching." },
    { icon: <BatteryFull />, title: "Peak Shaving", desc: "Use stored solar energy during peak tariff hours to maximize savings." },
    { icon: <Cpu />, title: "Smart Management", desc: "AI-driven energy management for optimized charging and discharging." },
    { icon: <RotateCcw />, title: "Retrofit Ready", desc: "Add batteries to your existing solar system with our hybrid inverters." },
  ];

  const faqs = [
    {
      question: "What is a hybrid solar system?",
      answer: "A system that connects to the grid to export excess energy while using batteries for backup power."
    },
    {
      question: "How long is the lifespan of modern solar batteries?",
      answer: "Tier-1 Lithium LFP batteries typically last for 10 to 12 years before needing replacement."
    },
    {
      question: "Can I add batteries to my existing solar system?",
      answer: "Yes, by retrofitting high-performance battery storage with hybrid inverters."
    },
    {
      question: "Are solar batteries safe to install inside my home?",
      answer: "Yes, Lithium LFP batteries do not emit gases and have advanced protection systems."
    },
    {
      question: "Can battery storage power heavy loads like ACs?",
      answer: "Yes, our engineers design systems specifically to handle heavy loads during outages."
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      <ServiceHero 
        badge="OUR SERVICES"
        titleLine1="Battery Storage"
        titleLine2="Energy Independence"
        description="Take control of your energy ecosystem. Store your harvested solar power for night-time use or critical backup during grid outages."
        image="/servie/7.png"
        primaryButtonText="Get Backup Quote"
        secondaryButtonText="Book Site Survey"
      />

      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <Card className="p-10 h-full rounded-[40px] border-none bg-white shadow-sm hover:shadow-xl transition-all group text-center">
                  <div className="size-16 rounded-2xl bg-[#F5F5F5] flex items-center justify-center mb-8 mx-auto text-black group-hover:bg-black group-hover:text-white transition-colors">
                    {React.cloneElement(benefit.icon as React.ReactElement, { className: "size-8" })}
                  </div>
                  <h3 className="text-[20px] font-semibold text-black mb-4">{benefit.title}</h3>
                  <p className="text-[13px] text-[#555] leading-[1.6]">{benefit.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ serviceName="Battery Storage" faqs={faqs} />
      <CTASection />
    </div>
  );
}
