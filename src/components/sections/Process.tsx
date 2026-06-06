"use client";

import { Wrench, MapPin, ClipboardCheck, Layout, BadgeCheck, Headset } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function Process() {
  const steps = [
    { icon: <ClipboardCheck className="size-8" />, title: "Consultation", desc: "Expert guidance on selecting the right system." },
    { icon: <MapPin className="size-8" />, title: "Site Survey", desc: "Technical evaluation of roof strength and shadow profile." },
    { icon: <Layout className="size-8" />, title: "System Design", desc: "Custom 3D layout for maximum irradiation efficiency." },
    { icon: <Wrench className="size-8" />, title: "Installation", desc: "Fast & compliant setup by certified Arkā engineers." },
    { icon: <BadgeCheck className="size-8" />, title: "Subsidy Filing", desc: "Hassle-free government incentive application support." },
    { icon: <Headset className="size-8" />, title: "After-Sales", desc: "24/7 monitoring and performance maintenance." },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-24 space-y-6">
            <span className="text-accent font-black tracking-widest text-sm uppercase">Workflow</span>
            <h2 className="text-5xl font-bold font-headline text-primary">Simple 6-Step Installation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">From first contact to grid-tie, we handle every detail for your complete peace of mind.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="group relative p-10 bg-background rounded-[40px] transition-all hover:bg-primary hover:text-white hover:-translate-y-3 duration-500 shadow-sm border border-primary/5">
                <div className="bg-accent group-hover:bg-white/10 w-20 h-20 rounded-[24px] flex items-center justify-center text-primary group-hover:text-accent mb-10 transition-colors">
                  {step.icon}
                </div>
                <div className="absolute top-10 right-10 text-6xl font-black text-primary/5 group-hover:text-white/5 font-headline transition-colors">0{idx + 1}</div>
                <h3 className="text-3xl font-bold font-headline mb-4">{step.title}</h3>
                <p className="text-muted-foreground group-hover:text-white/70 leading-relaxed text-lg">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
