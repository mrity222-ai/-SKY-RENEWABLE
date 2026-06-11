'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Wrench, 
  Search, 
  BarChart3, 
  Headset
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";

export default function SolarMaintenancePage() {
  const services = [
    { icon: <Search />, title: "Health Audits", desc: "Comprehensive electrical health check of inverters, panels, and mounting structures." },
    { icon: <Wrench />, title: "Periodic Cleaning", desc: "Expert chemical-free cleaning to remove dust and bird droppings for 15% more yield." },
    { icon: <BarChart3 />, title: "IoT Monitoring", desc: "Real-time generation tracking and proactive fault detection through our app." },
    { icon: <Headset />, title: "48-Hour Response", desc: "Guaranteed on-site technical support within 48 hours for AMC customers." },
  ];

  const faqs = [
    {
      question: "How often should I clean my solar panels?",
      answer: "We recommend cleaning every 15 to 20 days for optimal generation."
    },
    {
      question: "Can I clean my solar panels with regular tap water?",
      answer: "We recommend purified water or specialized eco-friendly agents to prevent scale build-up."
    },
    {
      question: "What is covered under an Annual Maintenance Contract (AMC)?",
      answer: "Periodic cleaning, electrical audits, health checks, and 24/7 monitoring."
    },
    {
      question: "Why has my solar energy generation dropped recently?",
      answer: "Common causes include dust accumulation, shading, or electrical faults."
    },
    {
      question: "Do you provide maintenance for systems installed by others?",
      answer: "Yes, we offer 'System Rehabilitation' services to optimize underperforming plants."
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase">
                  Asset Management
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-semibold text-black leading-[1.05] tracking-tight">
                    Solar Maintenance: <br />
                    <span className="text-[#B8B8B8]">Protect Your Energy Assets</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.8]">
                    Your solar system is a long-term investment. AMC services ensure panels generate maximum power for their entire 25-year lifecycle.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-black text-white rounded-full px-10 h-16 text-sm font-semibold hover:bg-neutral-800 transition-all">
                    <Link href="/contact-us">Book Maintenance</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-black/10 text-black rounded-full px-10 h-16 text-sm font-semibold hover:bg-neutral-50">
                    <Link href="/get-quote">Get Service Quote</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4} className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/arka_maint_hero/1200/1500" 
                alt="Solar Maintenance Team" 
                fill 
                className="object-cover"
                priority
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <Card className="p-10 h-full rounded-[40px] border-none bg-white shadow-sm hover:shadow-xl transition-all group">
                  <div className="size-14 rounded-2xl bg-[#F5F5F5] flex items-center justify-center mb-8 text-black group-hover:bg-black group-hover:text-white transition-colors">
                    {React.cloneElement(service.icon as React.ReactElement, { className: "size-6" })}
                  </div>
                  <h3 className="text-[20px] font-semibold text-black mb-4">{service.title}</h3>
                  <p className="text-[13px] text-[#555] leading-[1.6]">{service.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ serviceName="Solar Maintenance" faqs={faqs} />

      <CTASection />
    </div>
  );
}
