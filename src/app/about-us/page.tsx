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
  Twitter, 
  Linkedin, 
  TrendingUp, 
  Globe, 
  BadgeCheck, 
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";

export default function AboutPage() {
  const team = [
    { name: "Vikram Mehta", role: "Founder & CEO", image: "https://picsum.photos/seed/arka_t1/400/500" },
    { name: "Ananya Sharma", role: "Chief Technical Officer", image: "https://picsum.photos/seed/arka_t2/400/500" },
    { name: "Rahul Deshmukh", role: "Lead Solar Engineer", image: "https://picsum.photos/seed/arka_t3/400/500" },
    { name: "Priya Iyer", role: "Head of Operations", image: "https://picsum.photos/seed/arka_t4/400/500" },
  ];

  const partners = [
    "Tata Power Solar", "Waaree", "Adani Solar", "Luminous", "Havells", "Exide", "Microtek"
  ];

  const offices = [
    { city: "Ahmedabad", type: "Head Office", address: "Solar Plaza, MG Road, Ahmedabad - 380001", image: "https://picsum.photos/seed/arka_off1/600/400" },
    { city: "Surat", type: "Regional Office", address: "Green Tech Park, Vesu, Surat - 395007", image: "https://picsum.photos/seed/arka_off2/600/400" },
    { city: "Sanand", type: "Branch Office", address: "GIDC Industrial Estate, Sanand - 382110", image: "https://picsum.photos/seed/arka_off3/600/400" },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* SECTION 1 – HERO INTRO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <ScrollReveal direction="up">
              <span className="inline-block bg-accent/20 text-primary px-6 py-2 rounded-full text-sm font-black tracking-widest uppercase">
                Who We Are
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-8xl font-bold font-headline text-primary leading-tight">
                Empowering Homes & Industries With <span className="text-accent italic">Smart Solar</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                Arkā Solar is dedicated to transforming India's energy landscape through engineering excellence, 
                unwavering integrity, and a commitment to a carbon-free future.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-wrap justify-center gap-6">
                <Button asChild size="lg" className="bg-primary text-white rounded-full px-10 py-8 text-lg font-bold shadow-xl shadow-primary/20">
                  <Link href="/get-quote">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/20 text-primary rounded-full px-10 py-8 text-lg font-bold hover:bg-primary hover:text-white">
                  <Link href="/get-quote">Book Site Survey</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="up" delay={0.4} className="mt-20">
            <div className="relative aspect-[21/9] rounded-[48px] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="https://picsum.photos/seed/arka_about_hero/1600/700" 
                alt="Solar Field" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 2 – OUR STORY */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right" className="space-y-8">
              <span className="text-accent font-black tracking-widest text-sm uppercase">Our Story</span>
              <h2 className="text-4xl md:text-6xl font-bold font-headline text-primary leading-tight">
                A Journey Rooted In <br />Innovation & Integrity
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Founded with a core belief that solar energy is the most democratized form of power, Arkā Solar started as a small team of engineers in Ahmedabad. Today, we have successfully installed over 5,000+ rooftop systems across India.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Our focus has always been on quality components and hassle-free customer experience. We don't just sell panels; we build long-term relationships through performance monitoring and maintenance.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-3xl border border-primary/5">
                  <CheckCircle2 className="text-accent size-6" />
                  <span className="font-bold text-primary">Certified Engineers</span>
                </div>
                <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-3xl border border-primary/5">
                  <CheckCircle2 className="text-accent size-6" />
                  <span className="font-bold text-primary">MNRE Registered</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl group">
                <Image 
                  src="https://picsum.photos/seed/arka_about_story/800/800" 
                  alt="Solar Engineers" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 – VISION & MISSION (Alternating) */}
      <section className="py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 space-y-40">
          {/* Vision Block */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right" className="space-y-10">
              <span className="inline-block bg-white/10 px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase text-accent">Our Vision</span>
              <h2 className="text-4xl md:text-6xl font-bold font-headline leading-tight">
                Creating A Sustainable Future Through Clean Energy
              </h2>
              <ul className="space-y-6">
                {[
                  "Promote renewable energy adoption",
                  "Reduce carbon footprint across India",
                  "Deliver affordable solar solutions",
                  "Empower energy independence",
                  "Support environmental sustainability"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-white/70">
                    <div className="size-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-[60px] overflow-hidden shadow-2xl border-4 border-white/10">
                <Image src="https://picsum.photos/seed/arka_vision/800/600" alt="Sustainable Future" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>

          {/* Mission Block */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right" className="lg:order-2 space-y-10">
              <span className="inline-block bg-white/10 px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase text-accent">Our Mission</span>
              <h2 className="text-4xl md:text-6xl font-bold font-headline leading-tight">
                Making Solar Energy Simple, Accessible & Affordable
              </h2>
              <ul className="space-y-6">
                {[
                  "Premium Tier-1 solar installations",
                  "Expert professional consultation",
                  "Government subsidy assistance (CFA)",
                  "Zero-downpayment financing support",
                  "Reliable 24/7 after-sales service"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-white/70">
                    <div className="size-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] rounded-[60px] overflow-hidden shadow-2xl border-4 border-white/10">
                <Image src="https://picsum.photos/seed/arka_mission/800/600" alt="Making Solar Simple" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 – COMPANY ACHIEVEMENTS */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="bg-white border border-primary/5 rounded-[60px] p-20 shadow-2xl">
            <div className="grid md:grid-cols-4 gap-16 text-center">
              <AchievementItem count={5000} suffix="+" label="Projects Completed" />
              <AchievementItem count={120} suffix=" MW+" label="Installed Capacity" />
              <AchievementItem count={98} suffix="%" label="Customer Satisfaction" />
              <AchievementItem count={25} suffix="Y" label="Warranty Support" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY CHOOSE US */}
      <section className="py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-24 space-y-6">
            <span className="text-accent font-black tracking-widest text-xs uppercase">The Arkā Advantage</span>
            <h2 className="text-5xl font-bold font-headline text-primary">Why Customers Trust Us</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard icon={<Star />} title="Certified Solar Experts" desc="Our team consists of certified in-house engineers with decades of combined experience." />
            <FeatureCard icon={<Award />} title="Tier-1 Components" desc="We exclusively use Tier-1 modules and high-efficiency inverters from global leaders." />
            <FeatureCard icon={<BadgeCheck />} title="Subsidy Assistance" desc="End-to-end handling of PM-Suryodaya and state government subsidy applications." />
            <FeatureCard icon={<Zap />} title="Fast Installation" desc="Turnkey project delivery within 3-5 working days for residential rooftop systems." />
            <FeatureCard icon={<ShieldCheck />} title="Project Management" desc="Dedicated project managers oversee every step from survey to grid connectivity." />
            <FeatureCard icon={<Building2 />} iconColor="text-accent" title="24/7 Support" desc="Live IoT monitoring and a guaranteed 48-hour on-site service response time." />
          </div>
        </div>
      </section>

      {/* SECTION 6 – CORE VALUES */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl font-bold font-headline text-primary">Our Core Values</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            <ValueCard icon={<ShieldCheck />} title="Integrity" desc="Transparency and ethical business practices in every interaction." />
            <ValueCard icon={<TrendingUp />} title="Innovation" desc="Adopting modern solar technologies for maximum energy harvest." />
            <ValueCard icon={<Award />} title="Quality" desc="Unwavering commitment to engineering excellence and reliability." />
            <ValueCard icon={<Globe />} title="Sustainability" desc="Building a greener tomorrow for future generations." />
          </div>
        </div>
      </section>

      {/* SECTION 7 – OUR PROCESS */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-24 space-y-4">
            <span className="text-accent font-black tracking-widest text-xs uppercase">Workflow</span>
            <h2 className="text-5xl font-bold font-headline">The 6-Step Installation</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-6 gap-8">
            <ProcessItem number="01" title="Consultation" desc="Energy audit and initial analysis." />
            <ProcessItem number="02" title="Site Survey" desc="3D technical shadow mapping." />
            <ProcessItem number="03" title="Design" desc="Custom optimized engineering layout." />
            <ProcessItem number="04" title="Installation" desc="Certified swift deployment." />
            <ProcessItem number="05" title="Subsidy" desc="Paperwork and document filing." />
            <ProcessItem number="06" title="Maintenance" desc="AMC and cloud-based monitoring." />
          </div>
        </div>
      </section>

      {/* SECTION 8 – TECHNOLOGY PARTNERS */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal className="mb-20">
             <h2 className="text-3xl font-bold font-headline text-primary">Our Technology Partners</h2>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {partners.map((p, i) => (
              <span key={i} className="text-2xl font-black font-headline text-primary/40 hover:text-primary transition-colors cursor-default">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 – OUR OFFICES */}
      <section className="py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-24">
            <h2 className="text-4xl font-bold font-headline text-primary">Our Presence</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-10">
            {offices.map((office, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <Card className="rounded-[40px] overflow-hidden border-none shadow-xl bg-white group">
                  <div className="relative aspect-video">
                    <Image src={office.image} alt={office.city} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-10 space-y-4">
                    <span className="text-accent font-black text-xs uppercase tracking-widest">{office.type}</span>
                    <h3 className="text-2xl font-bold font-headline text-primary">{office.city}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{office.address}</p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <MapPin className="size-4 text-accent" /> Get Directions
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 – MEET OUR TEAM */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-24 space-y-4">
            <span className="text-accent font-black tracking-widest text-xs uppercase">The Team</span>
            <h2 className="text-5xl font-bold font-headline text-primary">Meet The Experts</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-10">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="group space-y-6">
                  <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl">
                    <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-8">
                       <div className="flex gap-4">
                          <SocialIcon icon={<Linkedin />} />
                          <SocialIcon icon={<Twitter />} />
                       </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold font-headline text-primary">{member.name}</h3>
                    <p className="text-muted-foreground font-medium">{member.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 – FINAL CTA */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal direction="zoom">
            <div className="bg-primary rounded-[80px] p-20 text-center text-white space-y-10 relative overflow-hidden shadow-2xl">
              <div className="absolute -top-40 -right-40 size-[600px] bg-accent/5 rounded-full blur-[150px] animate-blob" />
              <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold font-headline leading-tight">Ready To Switch To Solar Energy?</h2>
                <p className="text-xl text-white/60 font-light">
                  Start saving on electricity bills and move towards a sustainable future with our expert solar solutions.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 pt-10 relative z-10">
                <Button asChild size="lg" className="bg-accent text-primary font-bold rounded-full px-12 py-8 text-xl hover:bg-white hover:-translate-y-2 transition-all">
                  <Link href="/get-quote">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 text-white rounded-full px-12 py-8 text-xl hover:bg-white/10 transition-all">
                  <Link href="/get-quote">Schedule Site Visit</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function AchievementItem({ count, suffix, label }: { count: number, suffix: string, label: string }) {
  return (
    <div className="space-y-4">
      <div className="text-6xl font-black text-primary font-headline tracking-tighter">
        <Counter value={count} suffix={suffix} />
      </div>
      <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc, iconColor = "text-accent" }: { icon: any, title: string, desc: string, iconColor?: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Card className="p-12 h-full rounded-[48px] border-none shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group bg-white">
        <div className={`size-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors ${iconColor}`}>
           {React.cloneElement(icon, { className: "size-8 group-hover:text-white transition-colors" })}
        </div>
        <h3 className="text-2xl font-bold font-headline text-primary mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{desc}</p>
      </Card>
    </ScrollReveal>
  );
}

function ValueCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <ScrollReveal direction="up" className="text-center space-y-6">
      <div className="size-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto text-primary">
        {React.cloneElement(icon, { className: "size-10" })}
      </div>
      <h4 className="text-2xl font-bold font-headline text-primary">{title}</h4>
      <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
    </ScrollReveal>
  );
}

function ProcessItem({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <ScrollReveal direction="up" className="space-y-6">
      <div className="text-8xl font-black text-white/5 font-headline leading-none">{number}</div>
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-accent font-headline">{title}</h4>
        <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
      </div>
    </ScrollReveal>
  );
}

function SocialIcon({ icon }: { icon: any }) {
  return (
    <div className="size-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all cursor-pointer shadow-lg">
      {React.cloneElement(icon, { className: "size-5" })}
    </div>
  );
}
