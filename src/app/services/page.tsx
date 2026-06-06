
'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Home, Factory, Wrench, ShieldCheck, Sun, BatteryFull, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Solar",
      desc: "Comprehensive rooftop solutions for homes with subsidy handling and EMI options.",
      icon: <Home className="size-6" />,
      href: "/services/residential-solar",
      image: "https://picsum.photos/seed/arka_s_res/800/600"
    },
    {
      title: "Commercial Solar",
      desc: "Large scale solar setups for offices and shops to reduce high-tariff electricity bills.",
      icon: <Factory className="size-6" />,
      href: "/services/commercial-solar",
      image: "https://picsum.photos/seed/arka_s_comm/800/600"
    },
    {
      title: "Industrial Solar",
      desc: "Heavy-duty installations for factories and warehouses with CAPEX and OPEX models.",
      icon: <Zap className="size-6" />,
      href: "/services/industrial-solar",
      image: "https://picsum.photos/seed/arka_s_ind/800/600"
    },
    {
      title: "Rooftop Installation",
      desc: "Precision engineering-first deployment using hot-dip galvanized mounting structures.",
      icon: <Layout className="size-6" />,
      href: "/services/rooftop-installation",
      image: "https://picsum.photos/seed/arka_s_roof/800/600"
    },
    {
      title: "Battery Storage",
      desc: "Smart lithium-ion storage solutions for 24/7 power independence and backup.",
      icon: <BatteryFull className="size-6" />,
      href: "/services/battery-storage",
      image: "https://picsum.photos/seed/arka_s_batt/800/600"
    },
    {
      title: "Maintenance & AMC",
      desc: "Professional health audits, periodic cleaning, and 24/7 IoT generation monitoring.",
      icon: <Wrench className="size-6" />,
      href: "/services/solar-maintenance",
      image: "https://picsum.photos/seed/arka_s_maint/800/600"
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 text-center space-y-8">
          <ScrollReveal direction="up">
            <span className="inline-block bg-white text-[#777] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">
              Our Expertise
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-semibold text-black leading-[1.05] tracking-tight max-w-4xl mx-auto">
              Solar Solutions For <br /><span className="text-[#B8B8B8]">Every Requirement</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-[14px] lg:text-[16px] text-[#555] max-w-2xl mx-auto leading-[1.6]">
              From small homes to massive industrial complexes, we provide engineered solar solutions that deliver maximum savings and long-term reliability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="group flex flex-col h-full bg-white rounded-[40px] border border-neutral-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-video overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-10 flex flex-col flex-grow space-y-6">
                    <div className="size-12 bg-[#F5F5F5] rounded-xl flex items-center justify-center text-black">
                      {service.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-[22px] font-semibold text-black">{service.title}</h3>
                      <p className="text-[14px] text-[#555] leading-[1.6] line-clamp-3">{service.desc}</p>
                    </div>
                    <Button asChild variant="link" className="p-0 h-auto text-black font-bold justify-start group-hover:gap-2 transition-all mt-auto">
                      <Link href={service.href}>
                        Explore Solution <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-4 bg-black text-white text-center">
        <div className="container mx-auto max-w-5xl space-y-10">
          <ScrollReveal direction="up">
            <h2 className="text-[34px] lg:text-[48px] font-semibold leading-tight">Ready To Switch To Solar?</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-black font-semibold rounded-full px-12 py-8 text-[14px] hover:bg-neutral-200">
                <Link href="/get-quote">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white rounded-full px-12 py-8 text-[14px] font-semibold hover:bg-white/10">
                <Link href="/get-quote">Book Site Survey</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
