
'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Banknote, 
  CheckCircle2, 
  FileText,
  UserCheck,
  Zap,
  TrendingUp,
  Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";

export default function SubsidyGuidePage() {
  const overviewCards = [
    { icon: <Banknote />, title: "Lower Installation Cost", desc: "Significant reduction in upfront capital required for your home solar system." },
    { icon: <TrendingUp />, title: "Faster ROI", desc: "Shorten the payback period of your investment through direct financial assistance." },
    { icon: <Leaf />, title: "Clean Energy Adoption", desc: "Supporting India's transition to a greener, carbon-neutral future." },
    { icon: <Zap />, title: "Reduced Electricity Bills", desc: "Maximize your monthly savings by combining solar generation with net-metering." },
  ];

  const benefitCards = [
    { title: "Reduced Upfront Investment", desc: "Direct bank transfers reduce your initial cash outflow." },
    { title: "Faster Payback Period", desc: "Most subsidized systems reach break-even within 4 to 5 years." },
    { title: "Long-Term Savings", desc: "Lock in your electricity costs for the next 25 years." },
    { title: "Environment-Friendly Energy", desc: "Offset tons of CO2 emissions while powering your home." },
    { title: "Energy Independence", desc: "Reduce reliance on the grid and protect yourself from rising tariffs." },
    { title: "Increased Property Value", desc: "Solar-powered homes often command a premium." },
  ];

  const faqs = [
    {
      question: "Who is eligible for the PM-Suryodaya Muft Bijli Yojana?",
      answer: "All residential households in India with a valid electricity connection and sufficient rooftop space are eligible. The scheme primarily targets homes looking to install 1kW to 10kW systems."
    },
    {
      question: "What is the maximum subsidy amount available in 2024?",
      answer: "Homeowners can get a subsidy of ₹30,000 per kW for the first 2kW, and ₹18,000 for the 3rd kW. For systems 3kW or larger, the total subsidy is capped at ₹78,000."
    },
    {
      question: "How long does it take for the subsidy to be credited?",
      answer: "Once the system is installed, inspected, and the net-meter is synchronized by the DISCOM, the subsidy is typically credited directly to your bank account within 30 days."
    },
    {
      question: "Does SKY RENEWABLE handle the subsidy paperwork?",
      answer: "Yes. We provide complete end-to-end liaison support, including portal registration, technical documentation, and coordination with your local electricity board for inspection."
    },
    {
      question: "What documents are required to apply for the solar subsidy?",
      answer: "You typically need your latest electricity bill, property ownership proof, Aadhaar card, PAN card, and a canceled cheque of the bank account where the subsidy will be credited."
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* SECTION 1 – HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-secondary text-white px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase">
                  Government Solar Subsidy
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-semibold text-black leading-[1.05] tracking-tight">
                    Save More With Government <br />
                    <span className="text-[#B8B8B8]">Solar Subsidy Programs</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.8]">
                    Reduce Your Solar Installation Cost With Official Subsidy Benefits.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-black text-white rounded-full px-10 h-16 text-sm font-semibold hover:bg-neutral-800 transition-all">
                    <Link href="/get-quote">Check Subsidy Eligibility</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4} className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/arka_subsidy_hero/1200/800" 
                alt="Solar Subsidy Overview" 
                fill 
                className="object-cover"
                priority
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 – SUBSIDY OVERVIEW */}
      <section className="relative py-32 bg-[#F9F9F9] overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
          <Image 
            src="https://picsum.photos/seed/arka_subsidy_bg/1920/1080" 
            alt="Solar Subsidy Background" 
            fill 
            className="object-cover"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">What Is Solar Subsidy?</h2>
                <p className="text-[14px] text-[#555] leading-[1.8]">
                  A solar subsidy is a financial incentive provided by the central and state governments to encourage adoption.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-6">
              {overviewCards.map((card, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                  <div className="p-8 bg-white rounded-[32px] shadow-sm space-y-4 h-full">
                    <div className="size-12 bg-[#F5F5F5] rounded-xl flex items-center justify-center text-black">
                      {React.cloneElement(card.icon as React.ReactElement, { className: "size-6" })}
                    </div>
                    <h3 className="text-[16px] font-bold text-black">{card.title}</h3>
                    <p className="text-[12px] text-[#777] leading-relaxed">{card.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – SUBSIDY BENEFITS */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Benefits Of Solar Subsidy</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitCards.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <Card className="p-10 h-full rounded-[40px] border-none bg-[#F9F9F9] shadow-sm hover:shadow-xl transition-all group">
                  <div className="size-10 rounded-full bg-black text-white flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-black mb-4">{benefit.title}</h3>
                  <p className="text-[13px] text-[#555] leading-[1.8]">{benefit.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ serviceName="Government Subsidy" faqs={faqs} />

      {/* SECTION 10 – FINAL CTA */}
      <CTASection />
    </div>
  );
}
