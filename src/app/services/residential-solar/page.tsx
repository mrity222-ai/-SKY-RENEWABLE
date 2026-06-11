'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Banknote, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
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
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase">
                  Home Solutions
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-semibold text-black leading-[1.05] tracking-tight">
                    Residential Solar: <br />
                    <span className="text-[#B8B8B8]">Zero Bill Homes Made Easy</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.8]">
                    Custom rooftop systems for modern homes. Reduce your electricity bills by up to 90% while benefiting from central government subsidies.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-black text-white rounded-full px-10 h-16 text-sm font-semibold hover:bg-neutral-800 transition-all">
                    <Link href="/get-quote">Get Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-black/10 text-black rounded-full px-10 h-16 text-sm font-semibold hover:bg-neutral-50">
                    <Link href="/government-solar-subsidy">Check Subsidy</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4} className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/arka_res_hero/1200/1500" 
                alt="Residential Solar Installation" 
                fill 
                className="object-cover"
                priority
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
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

      {/* FINAL CTA */}
      <CTASection />
    </div>
  );
}
