'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Zap, 
  Home, 
  Factory, 
  Wrench, 
  Sun, 
  Gauge, 
  ClipboardCheck, 
  Banknote,
  Layout,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";

export default function ServicesPage() {
  const services = [
    {
      title: "Solar EPC Solutions",
      desc: "Comprehensive Engineering, Procurement, and Construction services for utility-scale and large commercial projects.",
      icon: <Zap className="size-6" />,
      href: "/services/industrial-solar",
      image: "/servie/2.png"
    },
    {
      title: "Rooftop Solar Installations",
      desc: "Specialized rooftop solar solutions for residential and commercial buildings designed for maximum efficiency.",
      icon: <Home className="size-6" />,
      href: "/services/rooftop-installation",
      image: "/servie/4.png"
    },
    {
      title: "Commercial & Industrial Solar Projects",
      desc: "Tailored solar power plants for industries and commercial hubs to drastically reduce operational electricity costs.",
      icon: <Factory className="size-6" />,
      href: "/services/commercial-solar",
      image: "/servie/3.png"
    },
    {
      title: "Operation & Maintenance Services",
      desc: "Complete O&M packages ensuring your solar asset performs at peak capacity throughout its 25-year lifecycle.",
      icon: <Wrench className="size-6" />,
      href: "/services/solar-maintenance",
      image: "/servie/5.png"
    },
    {
      title: "Solar Panel Cleaning Solutions",
      desc: "Professional cleaning services using specialized equipment to remove debris and boost generation by up to 15%.",
      icon: <Sun className="size-6" />,
      href: "/solar-panel-cleaning-solutions",
      image: "/servie/6.png"
    },
    {
      title: "Performance Monitoring & Optimization",
      desc: "Advanced IoT-based monitoring to track generation in real-time and optimize energy output through AI analysis.",
      icon: <Cpu className="size-6" />,
      href: "/services/battery-storage",
      image: "/servie/7.png"
    },
    {
      title: "Net Metering Assistance",
      desc: "End-to-end liaison with government DISCOMs for seamless net-metering approvals and grid synchronization.",
      icon: <ClipboardCheck className="size-6" />,
      href: "/net-metering-assistance",
      image: "/servie/1.png"
    },
    {
      title: "PM Surya Ghar Yojana Support",
      desc: "Expert guidance and application support for the latest government subsidy schemes for residential rooftop solar.",
      icon: <Banknote className="size-6" />,
      href: "/government-solar-subsidy",
      image: "/servie/9.png"
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-primary/20 selection:text-primary">
      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#0F172A] overflow-hidden">
        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/vio/1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center space-y-8">
          <ScrollReveal direction="up">
            <span className="inline-block bg-primary/20 text-white px-4 py-1.5 rounded-full text-[12px] font-bold tracking-wider uppercase border border-white/20 backdrop-blur-sm">
              Our Expertise
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-semibold text-white leading-[1.05] tracking-tight max-w-4xl mx-auto drop-shadow-lg">
              Our <span className="text-primary">Solar Services</span> <br /><span className="text-white/70">Built for Performance</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-[14px] lg:text-[16px] text-white/90 max-w-2xl mx-auto leading-[1.6] font-medium">
              From concept to commissioning and beyond, SKY RENEWABLE provides engineered solar solutions for every energy requirement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="group flex flex-col h-full bg-white rounded-[40px] border border-neutral-100 overflow-hidden hover:shadow-[0_40px_80px_rgba(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-500">
                  <div className="relative aspect-video overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint="solar installation"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow space-y-6">
                    <div className="size-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {service.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-black group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-[13px] text-[#555] leading-[1.6] line-clamp-3">{service.desc}</p>
                    </div>
                    <Button asChild variant="link" className="p-0 h-auto text-black font-bold justify-start group-hover:gap-2 transition-all mt-auto hover:text-primary">
                      <Link href={service.href}>
                        Learn More <ArrowRight className="ml-2 size-4" />
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
      <CTASection />
    </div>
  );
}
