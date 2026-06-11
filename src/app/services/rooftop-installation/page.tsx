'use client';

import React from "react";
import { ShieldCheck, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";

export default function RooftopInstallationPage() {
  const steps = [
    { title: "Consultation", desc: "Detailed audit of your energy bills and goals." },
    { title: "Site Survey", desc: "Drone-based shadow mapping and structural analysis." },
    { title: "Custom Design", desc: "3D engineering for optimal irradiation yield." },
    { title: "Installation", desc: "Swift deployment using hot-dip galvanized structures." },
    { title: "Net Metering", desc: "Handling all government liaison and grid connectivity." },
    { title: "Support", desc: "24/7 IoT monitoring and lifecycle maintenance." },
  ];

  const faqs = [
    {
      question: "Is my roof strong enough to hold solar panels?",
      answer: "We conduct a professional structural analysis before any installation. Our mounts are designed to distribute weight safely."
    },
    {
      question: "How long does a standard rooftop installation take?",
      answer: "Physical installation takes 3 to 5 days; the entire process with paperwork spans 3 to 4 weeks."
    },
    {
      question: "Will solar panels damage my roof or cause leaks?",
      answer: "No. We use professional non-penetrative techniques or high-grade sealants for penetrative mounts."
    },
    {
      question: "How much space do I need for a 1kW solar system?",
      answer: "Approximately 80 to 100 square feet of shadow-free rooftop area is required."
    },
    {
      question: "What is net metering and how does it benefit me?",
      answer: "It allows you to export excess energy back to the grid and receive credits against your consumption."
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      <ServiceHero 
        badge="OUR SERVICES"
        titleLine1="Rooftop Installation"
        titleLine2="Precision Engineering"
        description="Engineered solar deployments for all rooftop types. Our structures are wind-tested for 180kmph and built with hot-dip galvanized steel for extreme durability."
        image="https://picsum.photos/seed/arka_roof_hero/1200/1500"
        primaryButtonText="Book Site Survey"
        secondaryButtonText="Get Free Quote"
      />

      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-24 space-y-4">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">The 6-Step Installation</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up" className="space-y-4 text-center">
                <div className="text-[48px] font-bold text-black/5 leading-none">0{i + 1}</div>
                <h4 className="text-[13px] font-bold text-black uppercase tracking-widest">{step.title}</h4>
                <p className="text-[12px] text-[#777] leading-relaxed">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-12 rounded-[40px] border-none bg-[#F9F9F9] shadow-sm space-y-6">
              <div className="size-14 rounded-2xl bg-black text-white flex items-center justify-center">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="text-[22px] font-semibold text-black">Wind Tested Structure</h3>
              <p className="text-[14px] text-[#555] leading-relaxed">Our hot-dip galvanized mounting structures are wind-tested for extreme weather conditions.</p>
            </Card>
            <Card className="p-12 rounded-[40px] border-none bg-[#F9F9F9] shadow-sm space-y-6">
              <div className="size-14 rounded-2xl bg-black text-white flex items-center justify-center">
                <Zap className="size-6" />
              </div>
              <h3 className="text-[22px] font-semibold text-black">Fast Deployment</h3>
              <p className="text-[14px] text-[#555] leading-relaxed">Residential systems typically installed and commissioned within 3-5 working days.</p>
            </Card>
          </div>
        </div>
      </section>

      <ServiceFAQ serviceName="Rooftop Installation" faqs={faqs} />
      <CTASection />
    </div>
  );
}
