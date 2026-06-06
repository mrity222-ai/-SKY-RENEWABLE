'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Wrench, 
  Search, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  ClipboardCheck,
  Headset
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function SolarMaintenancePage() {
  const services = [
    { icon: <Search />, title: "Health Audits", desc: "Comprehensive electrical health check of inverters, panels, and mounting structures." },
    { icon: <Wrench />, title: "Periodic Cleaning", desc: "Expert chemical-free cleaning to remove dust and bird droppings for 15% more yield." },
    { icon: <BarChart3 />, title: "IoT Monitoring", desc: "Real-time generation tracking and proactive fault detection through our app." },
    { icon: <Headset />, title: "48-Hour Response", desc: "Guaranteed on-site technical support within 48 hours for AMC customers." },
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
                  Asset Management
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[28px] md:text-[34px] lg:text-[48px] font-semibold text-black leading-[1.05] tracking-tight">
                    Solar Maintenance: <br />
                    <span className="text-[#B8B8B8]">Protect Your Energy Assets</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.6]">
                    Your solar system is a long-term investment. Our professional AMC services ensure your panels generate maximum power for all 25 years of their lifespan.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <Button asChild size="lg" className="bg-black text-white rounded-full px-10 py-7 text-[14px] font-semibold">
                  <Link href="/contact-us">Book Maintenance</Link>
                </Button>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4} className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/arka_maint_hero/1200/800" 
                alt="Solar Maintenance Team" 
                fill 
                className="object-cover"
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

      {/* FINAL CTA */}
      <section className="py-32 px-4 bg-black text-white text-center">
        <div className="container mx-auto max-w-5xl space-y-10">
          <h2 className="text-[34px] lg:text-[48px] font-semibold leading-tight">Maximize Your Solar Yield</h2>
          <Button asChild size="lg" className="bg-white text-black font-semibold rounded-full px-12 py-8 text-[14px]">
            <Link href="/contact-us">Get AMC Details</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
