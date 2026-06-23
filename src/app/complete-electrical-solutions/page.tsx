
'use client';

import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Wrench, 
  BatteryFull, 
  CheckCircle2, 
  Lightbulb, 
  Phone,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function ElectricalSolutionsPage() {
  const services = [
    { title: "New House Electrical Wiring", icon: <Lightbulb /> },
    { title: "Commercial Electrical Wiring", icon: <Zap /> },
    { title: "Electrical Repair & Maintenance", icon: <Wrench /> },
    { title: "UPS & Inverter Installation", icon: <RotateCw /> },
    { title: "Battery Installation & Replacement", icon: <BatteryFull /> },
    { title: "Power Backup Solutions", icon: <ShieldCheck /> },
    { title: "Electrical Safety Inspection", icon: <CheckCircle2 /> },
    { title: "Load Distribution & Panel Work", icon: <Cpu /> },
    { title: "AMC & Maintenance Services", icon: <Headset /> },
    { title: "Industrial Electrical EPC", icon: <Factory /> },
  ];

  const benefits = [
    { title: "Experienced Electrical Technicians", desc: "Our team consists of certified experts with years of industrial experience." },
    { title: "Safe & Professional Installation", desc: "We follow strict safety protocols and international wiring standards." },
    { title: "Fast Service Support", desc: "Dedicated maintenance team for quick repairs and emergency support." },
    { title: "Quality Materials", desc: "We exclusively use top-rated, fire-retardant materials for durability." },
    { title: "Affordable Pricing", desc: "Premium engineering services at transparent and competitive rates." },
    { title: "Residential & Commercial Expertise", desc: "Proven track record in both home and business electrical projects." },
  ];

  const faqs = [
    {
      question: "Do you provide electrical wiring for new homes?",
      answer: "Yes, we specialize in complete end-to-end electrical wiring for new residential villas and apartments using high-grade materials."
    },
    {
      question: "Can you help with industrial power backup solutions?",
      answer: "Absolutely. We design and install high-capacity UPS and battery backup systems for industries and commercial buildings."
    },
    {
      question: "Do you offer Annual Maintenance Contracts (AMC)?",
      answer: "Yes, we provide comprehensive AMC services for residential and commercial complexes to ensure zero electrical downtime."
    },
    {
      question: "What is included in a safety inspection?",
      answer: "Our safety audits include checking for short circuits, proper grounding (earthing), load balancing, and panel health audits."
    },
    {
      question: "Do you provide emergency repair services?",
      answer: "Yes, we have a dedicated response team for our maintenance contract customers to handle urgent electrical failures."
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-primary/20 selection:text-primary">
      <ServiceHero 
        badge="ELECTRICAL SERVICES"
        titleLine1="Complete Electrical"
        titleLine2="Solutions For Everyone"
        description="SKY RENEWABLE provides reliable residential and commercial electrical services including wiring, repairs, UPS systems, inverter installations, and battery backup solutions."
        image="https://picsum.photos/seed/arka_elec_hero/1200/900"
        primaryButtonText="Book Electrical Service"
        secondaryButtonText="Talk to Expert"
      />

      {/* SERVICES INCLUDE */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-16 space-y-4">
            <h2 className="text-[30px] lg:text-[40px] font-bold text-[#14213D]">Our Services Include</h2>
            <p className="text-[#64748B]">Professional electrical engineering for every requirement.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.05} direction="up">
                <Card className="p-6 md:p-8 h-full rounded-[32px] border-none bg-white shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-4 group">
                  <div className="size-12 bg-[#EEF7FF] rounded-xl flex items-center justify-center text-[#2563EB] group-hover:bg-primary group-hover:text-white transition-all">
                    {React.cloneElement(s.icon as React.ReactElement, { className: "size-5" })}
                  </div>
                  <h3 className="text-[13px] md:text-sm font-bold text-[#14213D] leading-tight">{s.title}</h3>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-[30px] lg:text-[40px] font-bold text-[#14213D]">Why Choose SKY RENEWABLE?</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <Card className="p-10 h-full rounded-[40px] border-none bg-[#F8FAFC] shadow-sm hover:shadow-xl transition-all group">
                  <div className="size-12 rounded-full bg-[#EEF7FF] text-[#2563EB] flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#14213D] mb-3">{benefit.title}</h3>
                  <p className="text-[14px] text-[#64748B] leading-relaxed">{benefit.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ serviceName="Electrical Solutions" faqs={faqs} />

      {/* FINAL CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="relative overflow-hidden rounded-[48px] bg-[#14213D] px-8 py-20 shadow-2xl">
            <div className="relative z-10 space-y-8">
              <h2 className="text-[32px] md:text-[48px] font-bold text-white tracking-tight">
                Professional Electrical Support <br className="hidden md:block" /> At Your Doorstep
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Call +91 8871105807 to book your site survey or chat with our experts for custom backup solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-white rounded-full px-10 h-14 font-bold text-[15px] hover:bg-primary/90 transition-all w-full sm:w-auto">
                  <a href="/get-quote">Book Electrical Service</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-[#22C55E] border-none text-white rounded-full px-10 h-14 font-bold text-[15px] hover:bg-[#1BA850] transition-all w-full sm:w-auto">
                  <a href="tel:8871105807">
                    <Phone className="size-5 mr-2" /> Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}

function RotateCw(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-cw"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
  );
}

function Cpu(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 15h3"/><path d="M1 9h3"/><path d="M1 15h3"/></svg>
  );
}

function Headset(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5Z"/><path d="M21 16v2a2 2 0 0 1-2 2h-5"/></svg>
  );
}

function Factory(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-factory"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
  );
}
