'use client';

import React from "react";
import Link from "next/link";
import { 
  Sun, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Clock, 
  Search, 
  Wrench, 
  Droplets,
  ArrowRight,
  MessageCircle,
  Leaf,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function SolarCleaningSolutionsPage() {
  const benefits = [
    { icon: <TrendingUp />, title: "Higher energy generation", desc: "Clean panels capture more sunlight, directly increasing your power output." },
    { icon: <Zap />, title: "Improved system efficiency", desc: "Maximize the conversion rate of your solar cells by removing light-blocking dirt." },
    { icon: <ShieldCheck />, title: "Longer panel lifespan", desc: "Prevent permanent staining or hot-spot damage caused by accumulated debris." },
    { icon: <BarChart3 />, title: "Better ROI", desc: "Shorten your payback period by ensuring your system performs at its peak potential." },
    { icon: <Leaf />, title: "Eco-Friendly Methods", desc: "We use safe, sustainable cleaning techniques that protect your equipment." },
    { icon: <CheckCircle2 />, title: "Lower maintenance costs", desc: "Proactive cleaning prevents larger, more expensive technical failures." },
  ];

  const services = [
    "Residential Solar Panel Cleaning",
    "Commercial Rooftop Solar Cleaning",
    "Industrial Solar Plant Cleaning",
    "Ground-Mounted Solar Cleaning",
    "Preventive Maintenance Cleaning",
    "Scheduled Cleaning Contracts",
    "Water-Based Cleaning",
    "Eco-Friendly Cleaning Methods",
  ];

  const problems = [
    { title: "Dust accumulation", desc: "Fine particles that create a light-blocking film over time." },
    { title: "Bird droppings", desc: "Corrosive spots that can cause permanent cell damage and hot spots." },
    { title: "Pollution deposits", desc: "Chemical residues from industrial or urban environments." },
    { title: "Mud and debris buildup", desc: "Accumulated soil or leaves that shade large portions of the array." },
    { title: "Water stains", desc: "Mineral deposits from improper cleaning or hard rainwater." },
    { title: "Reduced solar output", desc: "Visible performance drops in your generation monitoring app." },
  ];

  const steps = [
    { title: "Site Inspection", desc: "Technical & safety assessment of your rooftop." },
    { title: "Panel Evaluation", desc: "Checking for existing damage or micro-cracks." },
    { title: "Safe Cleaning", desc: "Using professional-grade, approved techniques." },
    { title: "Debris Removal", desc: "Thorough removal of all shading contaminants." },
    { title: "Performance Audit", desc: "Verifying generation increases post-cleaning." },
    { title: "Quality Reporting", desc: "Final check and maintenance report provided." },
  ];

  const faqs = [
    {
      question: "Why is solar panel cleaning important?",
      answer: "Regular cleaning removes dust and debris that block sunlight, helping solar panels generate maximum electricity. Even a thin layer of dust can reduce efficiency by 10-15%."
    },
    {
      question: "How often should solar panels be cleaned?",
      answer: "Most systems benefit from cleaning every 3–6 months. However, in dustier areas of Chhattisgarh, we recommend every 15-20 days for peak performance."
    },
    {
      question: "Can dirty solar panels reduce energy production?",
      answer: "Yes. Dirty panels lose a significant percentage of their energy generation capacity, directly increasing your reliance on grid power and lengthening your ROI."
    },
    {
      question: "Do you provide commercial and industrial solar cleaning?",
      answer: "Yes. SKY RENEWABLE provides specialized cleaning services for residential, commercial, and industrial solar installations, including large MW-scale plants."
    },
    {
      question: "Do you offer maintenance contracts?",
      answer: "Yes. We provide scheduled Annual Maintenance Contracts (AMC) that include regular cleaning to ensure consistent solar performance throughout the year."
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-primary/20 selection:text-primary">
      <ServiceHero 
        badge="SOLAR PANEL CLEANING"
        titleLine1="Professional Solar Panel"
        titleLine2="Cleaning Solutions"
        description="Dust, dirt, bird droppings, and environmental pollutants can significantly reduce solar panel efficiency. SKY RENEWABLE provides professional cleaning to maintain peak system performance and maximize your power generation."
        image="/servie/6.png"
        primaryButtonText="Book Cleaning Service"
        secondaryButtonText="Get Free Inspection"
      />

      {/* SECTION 1: WHY IT MATTERS */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ScrollReveal direction="up" className="space-y-6">
            <h2 className="text-[30px] lg:text-[40px] font-bold text-[#0F172A]">Why Solar Panel Cleaning Matters</h2>
            <p className="text-[16px] md:text-[18px] text-[#64748B] leading-relaxed">
              Solar panels continuously face dust, pollution, leaves, and debris that reduce sunlight absorption. Regular cleaning helps improve energy production, system efficiency, and long-term performance.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.05} direction="up">
                <Card className="p-8 h-full rounded-[32px] border-none shadow-sm bg-white hover:shadow-md transition-all flex flex-col items-center text-center space-y-4">
                  <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {React.cloneElement(benefit.icon as React.ReactElement, { className: "size-6" })}
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A]">{benefit.title}</h3>
                  <p className="text-[13px] text-[#64748B] leading-relaxed">{benefit.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES INCLUDE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right" className="space-y-8">
              <h2 className="text-[30px] lg:text-[40px] font-bold text-[#0F172A]">Our Cleaning Services Include</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                    <span className="text-[14px] font-bold text-[#0F172A]">{service}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
               <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                 <img 
                   src="/servie/7.png" 
                   alt="Technician cleaning solar panels" 
                   className="object-cover w-full h-full"
                 />
               </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMMON PROBLEMS */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-[30px] lg:text-[40px] font-bold text-[#0F172A]">Common Problems We Solve</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, i) => (
              <ScrollReveal key={i} delay={i * 0.05} direction="up">
                <div className="p-8 bg-white rounded-[32px] border border-[#E2E8F0] shadow-sm hover:border-primary/20 transition-all group">
                  <h4 className="text-lg font-bold text-[#0F172A] mb-3 group-hover:text-primary transition-colors">{problem.title}</h4>
                  <p className="text-[14px] text-[#64748B] leading-relaxed">{problem.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PROCESS */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-20">
            <h2 className="text-[30px] lg:text-[40px] font-bold tracking-tight">Our Cleaning Process</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up" className="space-y-4 text-center">
                <div className="text-[48px] font-bold text-white/10 leading-none">0{i + 1}</div>
                <h4 className="text-[13px] font-bold uppercase tracking-widest text-primary">{step.title}</h4>
                <p className="text-[12px] text-white/60 leading-relaxed">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO NEEDS IT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                 <img 
                   src="https://picsum.photos/seed/sky_clean_industrial/1200/900" 
                   alt="Industrial solar plant" 
                   className="object-cover w-full h-full"
                 />
               </div>
            </ScrollReveal>
            <div className="space-y-10">
              <ScrollReveal direction="left">
                <h2 className="text-[30px] lg:text-[40px] font-bold text-[#0F172A]">Who Needs Solar Panel Cleaning?</h2>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    "Homeowners", "Factories", "Schools", "Industrial Plants", 
                    "Commercial Buildings", "Warehouses", "Hospitals", "Solar Farm Operators"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="size-2 bg-primary rounded-full shrink-0" />
                      <span className="text-[15px] font-bold text-[#0F172A]">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: SERVICE COVERAGE */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 text-center space-y-8">
          <ScrollReveal direction="up">
            <h2 className="text-[30px] lg:text-[40px] font-bold text-[#0F172A]">Service Coverage</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto mt-4">
              We provide professional solar panel cleaning solutions across major locations in Chhattisgarh.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {[
                "Balod", "Durg", "Rajnandgaon", "Raipur", "Dhamtari", "Kanker", "Bemetara", "Korba"
              ].map((city, i) => (
                <div key={i} className="px-6 py-3 bg-white rounded-2xl border border-[#E2E8F0] text-sm font-bold text-[#0F172A] shadow-sm">
                  {city}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ServiceFAQ serviceName="Solar Panel Cleaning" faqs={faqs} />

      {/* FINAL CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="relative overflow-hidden rounded-[48px] bg-[#0F172A] px-8 py-20 shadow-2xl">
            <div className="relative z-10 space-y-8">
              <h2 className="text-[32px] md:text-[48px] font-bold text-white tracking-tight">
                Keep Your Solar Panels Performing At Their Best
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Schedule a professional solar panel cleaning service with SKY RENEWABLE and maximize the efficiency of your solar investment.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-white rounded-full px-10 h-14 font-bold text-[15px] hover:bg-primary/90 transition-all w-full sm:w-auto">
                  <Link href="/get-quote">Schedule Cleaning</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-[#22C55E] border-none text-white rounded-full px-10 h-14 font-bold text-[15px] hover:bg-[#1BA850] transition-all w-full sm:w-auto">
                  <a href="https://wa.me/918871105807" target="_blank">
                    <MessageCircle className="size-5 mr-2" /> WhatsApp Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
