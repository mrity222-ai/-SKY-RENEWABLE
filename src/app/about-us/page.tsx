
'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Zap, 
  Building2, 
  MapPin, 
  TrendingUp, 
  Globe, 
  BadgeCheck, 
  Star,
  Users,
  Clock,
  Headset,
  Target,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";
import { CTASection } from "@/components/sections/CTASection";

export default function AboutPage() {
  const partners = [
    "Tata Power Solar", "Waaree", "Adani Solar", "Luminous", "Havells", "Exide", "Microtek"
  ];

  const valueProps = [
    {
      icon: <Users />,
      title: "Experienced Solar Professionals",
      desc: "Our team consists of veteran engineers and certified technicians with years of on-ground expertise."
    },
    {
      icon: <Target />,
      title: "End-to-End Project Execution",
      desc: "From technical site surveys to net-metering and subsidy handling, we manage every detail."
    },
    {
      icon: <Shield />,
      title: "High-Quality Components",
      desc: "We exclusively use Tier-1 modules and top-rated smart inverters to ensure long-term performance."
    },
    {
      icon: <Clock />,
      title: "Timely Project Delivery",
      desc: "Our optimized workflow ensures residential installations are completed within 3-5 working days."
    },
    {
      icon: <Headset />,
      title: "Dedicated After-Sales Support",
      desc: "Experience peace of mind with our 48-hour service guarantee and 24/7 IoT generation monitoring."
    },
    {
      icon: <TrendingUp />,
      title: "Focus on Safety and Performance",
      desc: "Our structures are wind-tested for 180kmph, prioritizing structural integrity and maximum yield."
    },
    {
      icon: <Star />,
      title: "Customer-Centric Approach",
      desc: "Personalized energy audits and tailored financial modeling to ensure maximum ROI for every client."
    }
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-primary/20 selection:text-primary">
      {/* SECTION 1 – HERO INTRO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl text-left space-y-8">
            <ScrollReveal direction="up">
              <span className="inline-block bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[12px] font-bold tracking-wider uppercase border border-primary/10">
                Who We Are
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-[34px] md:text-[56px] lg:text-[72px] font-bold text-foreground leading-[1] tracking-tighter max-w-4xl">
                Empowering India With <br /><span className="text-primary">Smart Solar Solutions</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-2xl font-medium leading-relaxed">
                SKY RENEWABLE is dedicated to transforming India&apos;s energy landscape through engineering excellence, 
                unwavering integrity, and a commitment to a carbon-free future.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary text-white rounded-full px-10 h-16 text-sm font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all">
                  <Link href="/get-quote">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border text-foreground rounded-full px-10 h-16 text-sm font-bold hover:bg-muted transition-all">
                  <Link href="/get-quote">Book Site Survey</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="up" delay={0.4} className="mt-20">
            <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl border border-border">
              <Image 
                src="https://picsum.photos/seed/arka_about_hero/1600/700" 
                alt="Solar Field" 
                fill 
                className="object-cover"
                priority
                data-ai-hint="solar field"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2 – OUR STORY */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right" className="space-y-8">
              <span className="inline-block bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[12px] font-bold tracking-wider uppercase">Our Story</span>
              <h2 className="text-[40px] lg:text-[56px] font-bold text-foreground leading-tight tracking-tighter">
                A Journey Rooted In <br /><span className="text-secondary">Innovation & Integrity</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded with a core belief that solar energy is the most democratized form of power, SKY RENEWABLE started as a specialized team of engineers. Today, we have successfully installed over 5,000+ rooftop systems across India.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our focus has always been on quality components and hassle-free customer experience. We don&apos;t just sell panels; we build long-term relationships through performance monitoring and maintenance.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-4 p-5 bg-muted rounded-3xl border border-border">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <span className="text-sm font-bold text-foreground">Certified Engineers</span>
                </div>
                <div className="flex items-center gap-4 p-5 bg-muted rounded-3xl border border-border">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <span className="text-sm font-bold text-foreground">MNRE Registered</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative aspect-square rounded-[40px] overflow-hidden group shadow-2xl border border-border">
                <Image 
                  src="https://picsum.photos/seed/arka_about_story/800/800" 
                  alt="Solar Engineers" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint="solar engineers"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 – VISION & MISSION */}
      <section className="py-32 bg-foreground text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 size-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 space-y-40">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right" className="space-y-8">
              <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-[12px] font-bold tracking-wider uppercase border border-primary/20">Our Vision</span>
              <h2 className="text-[40px] lg:text-[56px] font-bold leading-tight tracking-tighter">
                Most Trusted <br /><span className="text-primary">Energy Partner</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed max-w-xl font-medium">
                To become the most trusted solar energy partner by delivering innovative, efficient, and sustainable renewable energy solutions.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
                <Image src="https://picsum.photos/seed/arka_vision/800/600" alt="Sustainable Future" fill className="object-cover opacity-80" data-ai-hint="sustainable energy" />
              </div>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right" className="lg:order-2 space-y-8">
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-[12px] font-bold tracking-wider uppercase border border-secondary/20">Our Mission</span>
              <h2 className="text-[40px] lg:text-[56px] font-bold leading-tight text-white tracking-tighter">
                Saving Money & <br /><span className="text-secondary">Cleaner Future</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed max-w-xl font-medium">
                To provide high-quality solar solutions that help customers save money, achieve energy independence, and contribute to a cleaner and brighter future.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
                <Image src="https://picsum.photos/seed/arka_mission/800/600" alt="Making Solar Simple" fill className="object-cover opacity-80" data-ai-hint="solar home" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 – COMPANY ACHIEVEMENTS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <AchievementItem count={5000} suffix="+" label="Projects Completed" />
            <AchievementItem count={120} suffix=" MW+" label="Installed Capacity" />
            <AchievementItem count={98} suffix="%" label="Customer Satisfaction" />
            <AchievementItem count={25} suffix="Y" label="Warranty Support" />
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY CHOOSE US */}
      <section className="py-32 bg-muted relative">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-24 space-y-4">
            <span className="inline-block bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[12px] font-bold tracking-wider uppercase border border-primary/10">The SKY RENEWABLE Advantage</span>
            <h2 className="text-[40px] lg:text-[56px] font-bold text-foreground tracking-tighter leading-tight">Why Choose SKY RENEWABLE?</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {valueProps.map((prop, i) => (
              <FeatureCard 
                key={i} 
                icon={prop.icon} 
                title={prop.title} 
                desc={prop.desc} 
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – CORE VALUES */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-[40px] lg:text-[56px] font-bold text-foreground tracking-tighter">Our Core Values</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <ValueCard icon={<ShieldCheck />} title="Integrity" desc="Transparency and ethical business practices in every interaction." />
            <ValueCard icon={<TrendingUp />} title="Innovation" desc="Adopting modern solar technologies for maximum harvest." />
            <ValueCard icon={<Award />} title="Quality" desc="Unwavering commitment to engineering excellence and reliability." />
            <ValueCard icon={<Globe />} title="Sustainability" desc="Building a greener tomorrow for future generations." />
          </div>
        </div>
      </section>

      {/* SECTION 12 – FINAL CTA */}
      <CTASection />
    </div>
  );
}

function AchievementItem({ count, suffix, label }: { count: number, suffix: string, label: string }) {
  return (
    <div className="space-y-4">
      <div className="text-[48px] lg:text-[64px] font-bold text-primary leading-none">
        <Counter value={count} suffix={suffix} />
      </div>
      <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
  return (
    <ScrollReveal direction="up" delay={delay} className="h-full">
      <Card className="p-10 h-full rounded-[32px] border-none shadow-[0_10px_40px_rgba(0,0,0,0.03)] bg-white hover:shadow-[0_30px_60px_rgba(37,99,235,0.08)] transition-all duration-500 group">
        <div className="size-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
           {React.cloneElement(icon, { className: "size-7" })}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">{title}</h3>
        <p className="text-[14px] text-muted-foreground leading-relaxed">{desc}</p>
      </Card>
    </ScrollReveal>
  );
}

function ValueCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <ScrollReveal direction="up" className="text-center space-y-6 group">
      <div className="size-20 bg-primary/5 rounded-[24px] flex items-center justify-center mx-auto text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
        {React.cloneElement(icon, { className: "size-8" })}
      </div>
      <div className="space-y-3">
        <h4 className="text-xl font-bold text-foreground">{title}</h4>
        <p className="text-[14px] text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </ScrollReveal>
  );
}
