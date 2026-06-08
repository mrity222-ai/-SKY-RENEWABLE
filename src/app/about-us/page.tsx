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

  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* SECTION 1 – HERO INTRO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl text-left space-y-8">
            <ScrollReveal direction="up">
              <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">
                Who We Are
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-[28px] md:text-[34px] lg:text-[48px] font-semibold text-black leading-[1.05] tracking-tight max-w-4xl">
                Empowering Homes, Businesses & Industries With <span className="text-[#B8B8B8]">Smart Solar Energy Solutions</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-[13px] lg:text-[14px] text-[#555] max-w-2xl font-normal leading-[1.6]">
                Arkā Solar is dedicated to transforming India's energy landscape through engineering excellence, 
                unwavering integrity, and a commitment to a carbon-free future. We believe in high-performance solar ecosystems that maximize harvest in every condition.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-black text-white rounded-full px-8 py-6 text-[14px] font-semibold transition-all hover:bg-neutral-800">
                  <Link href="/get-quote">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-black/10 text-black rounded-full px-8 py-6 text-[14px] font-semibold hover:bg-neutral-50">
                  <Link href="/get-quote">Book Site Survey</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="up" delay={0.4} className="mt-20">
            <div className="relative aspect-[21/9] rounded-[32px] overflow-hidden">
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
      <section className="py-24 border-t border-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right" className="space-y-6">
              <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">Our Story</span>
              <h2 className="text-[30px] lg:text-[40px] font-semibold text-black leading-tight">
                A Journey Rooted In <br />Innovation & Integrity
              </h2>
              <div className="space-y-4">
                <p className="text-[13px] lg:text-[14px] text-[#555] leading-[1.6]">
                  Founded with a core belief that solar energy is the most democratized form of power, Arkā Solar started as a small team of engineers in Ahmedabad. Today, we have successfully installed over 5,000+ rooftop systems across India.
                </p>
                <p className="text-[13px] lg:text-[14px] text-[#555] leading-[1.6]">
                  Our focus has always been on quality components and hassle-free customer experience. We don't just sell panels; we build long-term relationships through performance monitoring and maintenance.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-[#F9F9F9] rounded-2xl">
                  <CheckCircle2 className="text-black size-5" />
                  <span className="text-[13px] font-semibold text-black">Certified Engineers</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#F9F9F9] rounded-2xl">
                  <CheckCircle2 className="text-black size-5" />
                  <span className="text-[13px] font-semibold text-black">MNRE Registered</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative aspect-square rounded-[32px] overflow-hidden group">
                <Image 
                  src="https://picsum.photos/seed/arka_about_story/800/800" 
                  alt="Solar Engineers" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 – VISION & MISSION */}
      <section className="py-24 bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-4 space-y-40">
          {/* Vision Block */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right" className="space-y-8">
              <span className="inline-block bg-white/10 text-white/70 px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">Our Vision</span>
              <h2 className="text-[30px] lg:text-[40px] font-semibold leading-tight">
                Creating A Sustainable Future Through Clean Energy
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Promote adoption",
                  "Reduce footprint",
                  "Affordable solutions",
                  "Energy independence",
                  "Environmental support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[13px] text-white/60">
                    <div className="size-1.5 rounded-full bg-[#B8B8B8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden">
                <Image src="https://picsum.photos/seed/arka_vision/800/600" alt="Sustainable Future" fill className="object-cover opacity-80" />
              </div>
            </ScrollReveal>
          </div>

          {/* Mission Block */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right" className="lg:order-2 space-y-8">
              <span className="inline-block bg-white/10 text-white/70 px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">Our Mission</span>
              <h2 className="text-[30px] lg:text-[40px] font-semibold leading-tight text-white">
                Making Solar Energy Simple, Accessible & Affordable
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Premium Tier-1 installs",
                  "Expert professional consultation",
                  "Government subsidy aid",
                  "Financing support",
                  "24/7 After-sales service"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[13px] text-white/60">
                    <div className="size-1.5 rounded-full bg-[#B8B8B8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="left" className="lg:order-1">
              <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden">
                <Image src="https://picsum.photos/seed/arka_mission/800/600" alt="Making Solar Simple" fill className="object-cover opacity-80" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 – COMPANY ACHIEVEMENTS */}
      <section className="py-24 border-b border-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <AchievementItem count={5000} suffix="+" label="Projects Completed" />
            <AchievementItem count={120} suffix=" MW+" label="Installed Capacity" />
            <AchievementItem count={98} suffix="%" label="Customer Satisfaction" />
            <AchievementItem count={25} suffix="Y" label="Warranty Support" />
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY CHOOSE US */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16 space-y-4">
            <span className="inline-block bg-[#E5E5E5] text-[#777] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">The Arkā Advantage</span>
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Why Customers Trust Us</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard icon={<Star />} title="Certified Solar Experts" desc="Our team consists of certified in-house engineers with decades of combined experience." />
            <FeatureCard icon={<Award />} title="Tier-1 Components" desc="We exclusively use Tier-1 modules and high-efficiency inverters from global leaders." />
            <FeatureCard icon={<BadgeCheck />} title="Subsidy Assistance" desc="End-to-end handling of PM-Suryodaya and state government subsidy applications." />
            <FeatureCard icon={<Zap />} title="Fast Installation" desc="Turnkey project delivery within 3-5 working days for residential rooftop systems." />
            <FeatureCard icon={<ShieldCheck />} title="Project Management" desc="Dedicated project managers oversee every step from survey to grid connectivity." />
            <FeatureCard icon={<Building2 />} title="24/7 Support" desc="Live IoT monitoring and a guaranteed 48-hour on-site service response time." />
          </div>
        </div>
      </section>

      {/* SECTION 6 – CORE VALUES */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Our Core Values</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            <ValueCard icon={<ShieldCheck />} title="Integrity" desc="Transparency and ethical business practices in every interaction." />
            <ValueCard icon={<TrendingUp />} title="Innovation" desc="Adopting modern solar technologies for maximum harvest." />
            <ValueCard icon={<Award />} title="Quality" desc="Unwavering commitment to engineering excellence and reliability." />
            <ValueCard icon={<Globe />} title="Sustainability" desc="Building a greener tomorrow for future generations." />
          </div>
        </div>
      </section>

      {/* SECTION 7 – OUR PROCESS */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-2">
            <span className="text-[#B8B8B8] font-semibold text-[12px] uppercase tracking-widest">Workflow</span>
            <h2 className="text-[30px] lg:text-[40px] font-semibold">The 6-Step Installation</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-6 gap-8">
            <ProcessItem number="01" title="Consultation" desc="Energy audit." />
            <ProcessItem number="02" title="Site Survey" desc="Technical analysis." />
            <ProcessItem number="03" title="Design" desc="Custom layout." />
            <ProcessItem number="04" title="Installation" desc="Swift deployment." />
            <ProcessItem number="05" title="Subsidy" desc="Document filing." />
            <ProcessItem number="06" title="Maintenance" desc="Ongoing support." />
          </div>
        </div>
      </section>

      {/* SECTION 8 – TECHNOLOGY PARTNERS */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal className="mb-12">
             <h2 className="text-[24px] font-semibold text-black">Technology Partners</h2>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
            {partners.map((p, i) => (
              <span key={i} className="text-[14px] font-bold text-black uppercase tracking-widest cursor-default">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 – MEET OUR TEAM */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16 space-y-2">
            <span className="text-[#777] font-semibold text-[12px] uppercase tracking-widest">The Team</span>
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Meet The Experts</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="group space-y-4 text-center">
                  <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden">
                    <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-700 grayscale hover:grayscale-0" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[18px] font-bold text-black">{member.name}</h3>
                    <p className="text-[13px] text-[#777]">{member.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 – FINAL CTA */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal direction="zoom">
            <div className="text-center text-white space-y-10 relative overflow-hidden">
              <div className="space-y-6">
                <h2 className="text-[30px] lg:text-[48px] font-semibold leading-tight">Ready To Switch To Solar Energy?</h2>
                <p className="text-[13px] lg:text-[14px] text-white/50 max-w-xl mx-auto font-normal leading-[1.6]">
                  Start saving on electricity bills and move towards a sustainable future with our expert solar solutions.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-black font-semibold rounded-full px-10 py-6 text-[14px] hover:bg-neutral-200">
                  <Link href="/get-quote">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 text-white rounded-full px-10 py-6 text-[14px] font-semibold hover:bg-white/10">
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
    <div className="space-y-2">
      <div className="text-[40px] lg:text-[56px] font-semibold text-black leading-none">
        <Counter value={count} suffix={suffix} />
      </div>
      <p className="text-[12px] font-medium uppercase tracking-wider text-[#777]">{label}</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Card className="p-8 h-full rounded-[24px] border-none shadow-none bg-white hover:bg-neutral-50 transition-all group">
        <div className="size-10 rounded-xl bg-black/5 flex items-center justify-center mb-6 text-black group-hover:bg-black group-hover:text-white transition-colors">
           {React.cloneElement(icon, { className: "size-5" })}
        </div>
        <h3 className="text-[20px] lg:text-[22px] font-semibold text-black mb-3">{title}</h3>
        <p className="text-[13px] lg:text-[14px] text-[#555] leading-[1.6]">{desc}</p>
      </Card>
    </ScrollReveal>
  );
}

function ValueCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <ScrollReveal direction="up" className="text-center space-y-4">
      <div className="size-14 bg-[#F5F5F5] rounded-2xl flex items-center justify-center mx-auto text-black">
        {React.cloneElement(icon, { className: "size-6" })}
      </div>
      <h4 className="text-[18px] lg:text-[20px] font-semibold text-black">{title}</h4>
      <p className="text-[13px] text-[#555] leading-[1.6]">{desc}</p>
    </ScrollReveal>
  );
}

function ProcessItem({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <ScrollReveal direction="up" className="space-y-4">
      <div className="text-[40px] font-bold text-white/10">{number}</div>
      <div className="space-y-1">
        <h4 className="text-[14px] font-bold text-white uppercase tracking-wider">{title}</h4>
        <p className="text-white/40 text-[12px] leading-relaxed">{desc}</p>
      </div>
    </ScrollReveal>
  );
}