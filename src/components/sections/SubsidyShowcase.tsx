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
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

export function SubsidyShowcase() {
  const features = [
    { icon: <Banknote className="size-5 text-primary" />, text: "Subsidy Application Support" },
    { icon: <Zap className="size-5 text-primary" />, text: "Net Metering Assistance" },
    { icon: <FileText className="size-5 text-primary" />, text: "Documentation Guidance" },
    { icon: <Clock className="size-5 text-primary" />, text: "Fast Approval Process" },
    { icon: <CheckCircle2 className="size-5 text-primary" />, text: "End-to-End Solar Installation" },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="grid lg:grid-cols-[45%_55%] gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-10">
            <ScrollReveal direction="up" className="space-y-6">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[12px] font-bold tracking-wider uppercase border border-primary/20">
                PM Surya Ghar Yojana
              </span>
              <h2 className="text-[34px] md:text-[40px] lg:text-[48px] font-bold text-foreground leading-[1.2] tracking-tighter">
                Get Maximum Solar Subsidy <br />
                <span className="text-primary">With Expert Assistance</span>
              </h2>
              <p className="text-[17px] text-muted-foreground leading-relaxed max-w-xl">
                Navigating government incentives shouldn't be complicated. We provide a turnkey experience for the PM-Suryodaya Yojana, handling everything from eligibility audits to direct bank transfers. Our engineers ensure your system is compliant with all central and state norms for seamless approvals.
              </p>
            </ScrollReveal>

            {/* FEATURE LIST */}
            <ScrollReveal direction="up" delay={0.2} className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="shrink-0 bg-white shadow-sm border border-border p-1.5 rounded-lg">
                    {feature.icon}
                  </div>
                  <span className="text-[15px] font-semibold text-foreground/80">{feature.text}</span>
                </div>
              ))}
            </ScrollReveal>

            {/* STATISTICS ROW */}
            <ScrollReveal direction="up" delay={0.3} className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
              <div className="space-y-1">
                <p className="text-[22px] font-bold text-primary">₹78,000</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Central Subsidy</p>
              </div>
              <div className="space-y-1">
                <p className="text-[22px] font-bold text-primary">₹30,000</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">State Benefit</p>
              </div>
              <div className="space-y-1">
                <p className="text-[22px] font-bold text-primary">100%</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Doc Support</p>
              </div>
            </ScrollReveal>

            {/* CTA BUTTONS */}
            <ScrollReveal direction="up" delay={0.4} className="flex flex-wrap gap-5 pt-4">
              <Button asChild size="lg" className="bg-primary text-white rounded-full px-10 h-16 text-[15px] font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all">
                <Link href="/government-solar-subsidy">Check Subsidy Eligibility</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border text-foreground rounded-full px-10 h-16 text-[15px] font-bold hover:bg-white transition-all">
                <Link href="/contact-us">Talk To Expert</Link>
              </Button>
            </ScrollReveal>
          </div>

          {/* RIGHT SIDE IMAGE CARD */}
          <ScrollReveal direction="left" className="relative">
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] group">
              <Image 
                src="https://picsum.photos/seed/arka_subsidy_showcase/1200/1500" 
                alt="Solar Subsidy Assistance" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="solar finance"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/20 to-transparent" />
              
              {/* FLOATING ACHIEVEMENT CARD */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-[24px] shadow-2xl border border-white/20 max-w-[240px]"
              >
                <div className="size-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <Award className="size-6" />
                </div>
                <h4 className="text-[18px] font-bold text-foreground leading-tight">₹1,08,000 Total Subsidy Available</h4>
                <p className="text-[12px] text-muted-foreground mt-2">Maximum benefits applicable under standard residential configurations.</p>
              </motion.div>
            </div>
            
            {/* SUBTLE DECORATIVE ELEMENT */}
            <div className="absolute -top-6 -left-6 size-24 bg-accent/20 blur-[50px] rounded-full -z-10" />
            <div className="absolute -bottom-10 -right-10 size-48 bg-primary/10 blur-[80px] rounded-full -z-10" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}