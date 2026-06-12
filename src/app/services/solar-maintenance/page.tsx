'use client';

import React from "react";
import { Wrench, Search, BarChart3, Headset } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ServiceHero } from "@/components/sections/ServiceHero";
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
      <ServiceHero 
        badge="OUR SERVICES"
        titleLine1="Solar Maintenance"
        titleLine2="Asset Protection"
        description="Your solar system is a long-term investment. Our AMC services ensure your panels generate maximum power for their entire 25-year lifecycle through IoT monitoring and expert cleaning."
        image="/servie/5.png"
        primaryButtonText="Book Maintenance"
        secondaryButtonText="Get Service Quote"
      />

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
