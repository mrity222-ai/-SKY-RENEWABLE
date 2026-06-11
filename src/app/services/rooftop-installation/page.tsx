
'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Layout, 
  Wrench, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  ClipboardCheck,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
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
      answer: "We conduct a professional site survey and structural analysis before any installation. Our mounting structures are lightweight yet durable, designed to distribute weight safely across your roof's load-bearing points."
    },
    {
      question: "How long does a standard rooftop installation take?",
      answer: "For most residential systems, the physical installation takes 3 to 5 days. The entire process, including paperwork for net-metering and grid connection, typically spans 3 to 4 weeks."
    },
    {
      question: "Will solar panels damage my roof or cause leaks?",
      answer: "No. We use professional non-penetrative mounting techniques where possible, or high-grade waterproofing sealants for penetrative mounts to ensure your roof remains leak-proof and structurally sound."
    },
    {
      question: "How much space do I need for a 1kW solar system?",
      answer: "A 1kW solar system typically requires about 80 to 100 square feet of shadow-free rooftop area, depending on the efficiency of the panels used."
    },
    {
      question: "What is net metering and how does it benefit me?",
      answer: "Net metering allows you to export excess solar energy generated during the day back to the grid. Your DISCOM credits this energy against your consumption, effectively reducing your monthly bills by up to 90%."
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">
                  Engineering Precision
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[28px] md:text-[34px] lg:text-[48px] font-semibold text-black leading-[1.05] tracking-tight">
                    Rooftop Solar: <br />
                    <span className="text-[#B8B8B8]">Seamless Turnkey Deployment</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.6]">
                    Our rooftop installations are built to withstand 180kmph wind speeds.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <Button asChild size="lg" className="bg-black text-white rounded-full px-10 py-7 text-[14px] font-semibold">
                  <Link href="/get-quote">Book Site Survey</Link>
                </Button>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4} className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/arka_roof_hero/1200/800" 
                alt="Solar Rooftop Detail" 
                fill 
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
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

      {/* QUALITY FEATURES */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <FeatureCard 
              icon={<ShieldCheck />} 
              title="Wind Tested Structure" 
              desc="Our hot-dip galvanized mounting structures are wind-tested for extreme weather conditions." 
            />
            <FeatureCard 
              icon={<Zap />} 
              title="Fast Deployment" 
              desc="Residential systems typically installed and commissioned within 3-5 working days." 
            />
          </div>
        </div>
      </section>

      <ServiceFAQ serviceName="Rooftop Installation" faqs={faqs} />

      <CTASection />
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <Card className="p-12 rounded-[40px] border-none bg-[#F9F9F9] shadow-sm space-y-6">
      <div className="size-14 rounded-2xl bg-black text-white flex items-center justify-center">
        {React.cloneElement(icon as React.ReactElement, { className: "size-6" })}
      </div>
      <h3 className="text-[22px] font-semibold text-black">{title}</h3>
      <p className="text-[14px] text-[#555] leading-relaxed">{desc}</p>
    </Card>
  );
}
