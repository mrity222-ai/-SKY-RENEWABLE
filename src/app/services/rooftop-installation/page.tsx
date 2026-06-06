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

export default function RooftopInstallationPage() {
  const steps = [
    { title: "Consultation", desc: "Detailed audit of your energy bills and goals." },
    { title: "Site Survey", desc: "Drone-based shadow mapping and structural analysis." },
    { title: "Custom Design", desc: "3D engineering for optimal irradiation yield." },
    { title: "Installation", desc: "Swift deployment using hot-dip galvanized structures." },
    { title: "Net Metering", desc: "Handling all government liaison and grid connectivity." },
    { title: "Support", desc: "24/7 IoT monitoring and lifecycle maintenance." },
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
                    Our rooftop installations are built to withstand 180kmph wind speeds and last for decades. We handle every detail from site survey to grid connectivity.
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

      <section className="py-32 px-4 bg-black">
        <div className="container mx-auto max-w-5xl text-center text-white space-y-10">
          <h2 className="text-[34px] lg:text-[48px] font-semibold leading-tight">Ready for a Technical Audit?</h2>
          <Button asChild size="lg" className="bg-white text-black font-semibold rounded-full px-12 py-8 text-[14px]">
            <Link href="/get-quote">Schedule Site Visit</Link>
          </Button>
        </div>
      </section>
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
