'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, 
  Banknote, 
  Zap, 
  FileText, 
  Clock, 
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

export function SubsidyShowcase() {
  const features = [
    { icon: <Banknote className="size-4.5 text-primary" />, text: "Subsidy Application Support" },
    { icon: <Zap className="size-4.5 text-primary" />, text: "Net Metering Assistance" },
    { icon: <FileText className="size-4.5 text-primary" />, text: "Documentation Guidance" },
    { icon: <Clock className="size-4.5 text-primary" />, text: "Fast Approval Process" },
    { icon: <CheckCircle2 className="size-4.5 text-primary" />, text: "End-to-End Solar Installation" },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <ScrollReveal direction="up" className="space-y-4 md:space-y-6">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-primary/20">
                PM Surya Ghar Yojana
              </span>
              <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-foreground leading-[1.2] tracking-tighter">
                Get Maximum Solar Subsidy <br />
                <span className="text-primary">With Expert Assistance</span>
              </h2>
              <p className="text-[14px] md:text-[15px] lg:text-[16px] text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Navigating government incentives shouldn't be complicated. We provide a turnkey experience for the PM-Suryodaya Yojana, handling everything from eligibility audits to direct bank transfers.
              </p>
            </ScrollReveal>

            {/* FEATURE LIST */}
            <ScrollReveal direction="up" delay={0.2} className="grid sm:grid-cols-2 gap-y-3.5 gap-x-8 text-left max-w-lg mx-auto lg:mx-0">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="shrink-0 bg-white shadow-sm border border-border p-1.5 rounded-lg">
                    {feature.icon}
                  </div>
                  <span className="text-[13px] md:text-[14px] font-semibold text-foreground/80">{feature.text}</span>
                </div>
              ))}
            </ScrollReveal>

            {/* STATISTICS ROW */}
            <ScrollReveal direction="up" delay={0.3} className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-border">
              <div className="space-y-1">
                <p className="text-[18px] md:text-[22px] font-bold text-primary">₹78,000</p>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">Central Subsidy</p>
              </div>
              <div className="space-y-1">
                <p className="text-[18px] md:text-[22px] font-bold text-primary">₹30,000</p>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">State Benefit</p>
              </div>
              <div className="space-y-1">
                <p className="text-[18px] md:text-[22px] font-bold text-primary">100%</p>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">Doc Support</p>
              </div>
            </ScrollReveal>

            {/* CTA BUTTONS */}
            <ScrollReveal direction="up" delay={0.4} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Button asChild size="lg" className="bg-primary text-white rounded-full px-8 md:px-10 h-12 md:h-14 text-[14px] md:text-[15px] font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all w-full sm:w-auto">
                <Link href="/government-solar-subsidy">Check Eligibility</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border text-foreground rounded-full px-8 md:px-10 h-12 md:h-14 text-[14px] md:text-[15px] font-bold hover:bg-white transition-all w-full sm:w-auto">
                <Link href="/contact-us">Talk To Expert</Link>
              </Button>
            </ScrollReveal>
          </div>

          {/* RIGHT SIDE IMAGE CARD - Enforced 1:1 Ratio & Containment */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative aspect-square rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl group bg-neutral-100">
              <Image 
                src="https://picsum.photos/seed/arka_subsidy_showcase/1200/1500" 
                alt="Solar Subsidy Assistance" 
                fill 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="solar finance"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/20 to-transparent pointer-events-none" />
              
              {/* FLOATING ACHIEVEMENT CARD */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-[16px] md:rounded-[24px] shadow-2xl border border-white/20 max-w-[160px] md:max-w-[220px]"
              >
                <div className="size-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                  <Award className="size-5" />
                </div>
                <h4 className="text-[13px] md:text-[16px] font-bold text-foreground leading-tight">₹1,08,000 Total Subsidy Available</h4>
                <p className="text-[9px] md:text-[11px] text-muted-foreground mt-1">Maximum benefits applicable under standard configurations.</p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}