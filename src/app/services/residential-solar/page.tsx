'use client';

import React from "react";
import { Banknote, ShieldCheck, Zap, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";

export default function ResidentialSolarPage() {
  const benefits = [
    { icon: <Banknote />, title: "80-90% Bill Reduction", desc: "Slash your monthly electricity expenses and lock in your rates for 25 years." },
    { icon: <ShieldCheck />, title: "Government Subsidy", desc: "Get up to ₹78,000 as direct bank transfer under PM-Suryodaya Yojana." },
    { icon: <Zap />, title: "Energy Independence", desc: "Protect your home from power cuts and rising grid electricity tariffs." },
    { icon: <Sun />, title: "Eco-Friendly Living", desc: "Reduce your carbon footprint and contribute to a greener planet." },
  ];

  const faqs = [
    {
      question: "How much space do I need on my roof for solar?",
      answer: "A standard 3kW residential system requires approximately 250-300 square feet of shadow-free area."
    },
    {
      question: "Is there a maintenance cost for residential solar?",
      answer: "Residential systems are very low maintenance. Periodic cleaning of panels (every 15 days) is usually sufficient."
    },
    {
      question: "What is the lifespan of solar panels?",
      answer: "Most Tier-1 solar panels come with a 25-year performance warranty and can last over 30 years."
    },
    {
      question: "Can I power my AC with solar?",
      answer: "Yes, once synchronized with the grid via net-metering, solar energy can power all home appliances, including ACs and geysers."
    },
    {
      question: "What happens if it's a cloudy day?",
      answer: "Solar panels still generate electricity on cloudy days, though at a reduced output. Your home will seamlessly draw power from the grid if solar generation is insufficient."
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      <ServiceHero 
        badge="OUR SERVICES"
        titleLine1="Residential Solar"
        titleLine2="Zero Bill Homes"
        description="Custom rooftop systems for modern Indian households. Reduce your electricity bills by up to 90% while benefiting from seamless central government subsidy handling."
        image="https://picsum.photos/seed/arka_res_hero/1200/1500"
        primaryButtonText="Check Eligibility"
        secondaryButtonText="Book Site Survey"
      />

      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-4">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Why Switch to Home Solar?</h2>
            <p className="text-[#777] text-[14px] max-w-xl mx-auto">Investment that pays for itself in 4 years and lasts for 25.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <Card className="p-10 h-full rounded-[40px] border-none bg-white shadow-sm hover:shadow-xl transition-all group">
                  <div className="size-14 rounded-2xl bg-[#F5F5F5] flex items-center justify-center mb-8 text-black group-hover:bg-black group-hover:text-white transition-colors">
                    {React.cloneElement(benefit.icon as React.ReactElement, { className: "size-6" })}
                  </div>
                  <h3 className="text-[20px] font-semibold text-black mb-4">{benefit.title}</h3>
                  <p className="text-[13px] text-[#555] leading-[1.6]">{benefit.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ serviceName="Residential Solar" faqs={faqs} />
      <CTASection />
    </div>
  );
}
