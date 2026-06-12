'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Zap, 
  Home as HomeIcon,
  Factory,
  Wrench,
  BatteryFull,
  Layout,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";
import { Calculator } from "@/components/sections/Calculator";
import { CTASection } from "@/components/sections/CTASection";
import { SubsidyShowcase } from "@/components/sections/SubsidyShowcase";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { WorkingArea } from "@/components/sections/WorkingArea";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

export default function Home() {
  const projects = [
    { id: 1, name: "Skyline Villa", image: "https://picsum.photos/seed/arka_h_p1/800/1200" },
    { id: 2, name: "GIDC Industrial Park", image: "https://picsum.photos/seed/arka_h_p2/800/1200" },
    { id: 3, name: "Emerald Heights", image: "https://picsum.photos/seed/arka_h_p3/800/1200" },
  ];

  return (
    <div className="bg-background selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* HERO SECTION WITH VIDEO BACKGROUND - Set to h-screen for full size */}
      <section className="relative h-screen w-full overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="/vio/1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/40 via-transparent to-[#0F172A]/60 pointer-events-none" />
        </div>

        <div className="container relative z-20 h-full mx-auto px-4 flex flex-col justify-center items-center text-center">
          <ScrollReveal direction="up" className="max-w-4xl space-y-6 md:space-y-8">
            <h1 className="text-[30px] md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-tighter drop-shadow-lg">
              The Future of <br />
              <span className="text-[#06B6D4]">Clean Energy</span>
            </h1>
            
            <p className="text-[14px] md:text-[15px] lg:text-[16px] text-white/90 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md px-2">
              Switch to SKY RENEWABLE. High-yield engineering, smart monitoring, and guaranteed government subsidies.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5 pt-4 md:pt-6 w-full max-w-md mx-auto sm:max-w-none">
              <Button asChild size="lg" className="bg-[#2563EB] text-white rounded-full px-8 md:px-10 h-12 md:h-14 text-[14px] md:text-[15px] font-bold hover:bg-[#1D4ED8] hover:shadow-2xl hover:shadow-[#2563EB]/30 transition-all w-full sm:w-auto">
                <Link href="/get-quote" className="flex items-center gap-2">Get Your Quote <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white backdrop-blur-md rounded-full px-8 md:px-10 h-12 md:h-14 text-[14px] md:text-[15px] font-bold hover:bg-white hover:text-[#2563EB] transition-all w-full sm:w-auto">
                <Link href="/get-quote">Book Site Survey</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PartnerLogos />

      <SubsidyShowcase />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem val={500} suffix="+" label="Solar Projects" />
            <StatItem val={10} suffix="MW+" label="Installed Capacity" />
            <StatItem val={98} suffix="%" label="Client Satisfaction" />
            <StatItem val={25} suffix="Y" label="Performance Warranty" />
          </div>
        </div>
      </section>

      {/* LEADING SOLAR AUTHORITY SECTION */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal direction="right" className="order-2 lg:order-1">
              <div className="relative w-full aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl bg-neutral-100">
                <Image 
                  src="https://picsum.photos/seed/arka_subsidy_showcase/1200/900" 
                  alt="Solar Subsidy Assistance" 
                  fill 
                  className="object-cover object-center"
                />
              </div>
            </ScrollReveal>

            <div className="space-y-6 md:space-y-8 text-center lg:text-left order-1 lg:order-2">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#EFF6FF] text-[#2563EB] px-4 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-[#2563EB]/10">
                  Leading Solar Authority
                </span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-[#0F172A] leading-[1.2] tracking-tight">
                  Empowering India <br />Through <span className="text-[#2563EB]">Smart Solar</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#64748B] leading-relaxed max-w-xl mx-auto lg:mx-0">
                  SKY RENEWABLE is redefining how homes and industries harvest the sun. We provide end-to-end EPC services, from custom structural engineering to seamless subsidy approvals.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <Button asChild variant="outline" className="rounded-full px-6 md:px-8 h-11 md:h-12 border-[#CBD5E1] text-[#0F172A] hover:bg-[#F8FAFC] hover:border-[#2563EB] font-bold transition-all text-[13px] md:text-[14px]">
                  <Link href="/about-us">Our Engineering Legacy</Link>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-[#0F172A] leading-tight">Advanced Energy Solutions</h2>
            <p className="text-[#64748B] text-[14px] md:text-[15px] max-w-xl mx-auto">Scalable solar architecture tailored for maximum yield and reliability.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <SolutionCard icon={<HomeIcon />} title="Residential Solar" desc="Slash bills by 90% with subsidized rooftop systems." href="/services/residential-solar" />
            <SolutionCard icon={<Factory />} title="Commercial Solar" desc="Boost ROI with tax benefits and fixed energy costs." href="/services/commercial-solar" />
            <SolutionCard icon={<Zap />} title="Industrial EPC" desc="Mega-watt scale solar plants for heavy manufacturing." href="/services/industrial-solar" />
            <SolutionCard icon={<Layout />} title="Technical Survey" desc="Shadow mapping and structural health audits." href="/services/rooftop-installation" />
            <SolutionCard icon={<BatteryFull />} title="Storage & Backup" desc="Smart hybrid storage for true grid-independence." href="/services/battery-storage" />
            <SolutionCard icon={<Wrench />} title="Maintenance & AMC" desc="Proactive IoT monitoring and expert panel cleaning." href="/services/solar-maintenance" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 items-end text-center lg:text-left">
            <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-[#0F172A] leading-tight tracking-tighter">
              Why Sky Renewable <br />Solar Solutions?
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#64748B] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Solar is a strategic asset. We maximize its value through engineering excellence and lifecycle support.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-10">
            <ValueItem title="Significant Savings" desc="Lock in your electricity tariff for 25 years and insulate your business from rising utility costs." />
            <ValueItem title="ESG Compliance" desc="Meet your sustainability mandates and boost your corporate brand value through clean energy." />
            <ValueItem title="Energy Security" desc="Eliminate production downtime with smart hybrid backup systems and stable voltage profiles." />
            <ValueItem title="Asset Appreciation" desc="Increase your property value with high-yield capital improvements and tax-efficient depreciation." />
            <ValueItem title="Subsidy Handling" desc="Zero-friction government liaison for CFA subsidies under PM-Suryodaya schemes." />
            <ValueItem title="Tier-1 Reliability" desc="We exclusively use Bloomberg-listed modules and high-efficiency smart inverters." />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0F172A] text-white overflow-hidden relative border-t border-white/5">
        <div className="absolute top-0 right-0 size-[300px] md:size-[500px] bg-[#2563EB]/20 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4">
          <Calculator />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12 space-y-4">
            <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-[#0F172A] leading-tight">Featured Case Studies</h2>
            <p className="text-[#64748B] text-[14px] md:text-[15px]">High-yield solar deployments across India's industrial landscape.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {projects.map((p) => (
              <ScrollReveal key={p.id} direction="up" delay={p.id * 0.1}>
                <Link href="/projects" className="group block">
                  <div className="relative h-[400px] md:h-[500px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg md:shadow-xl transition-all duration-700 hover:-translate-y-2 bg-neutral-100">
                    <Image src={p.image} alt={p.name} fill className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110" />
                    
                    {/* Minimalist Numbering Box */}
                    <div className="absolute bottom-0 left-0 bg-white pl-6 md:pl-8 pr-8 md:pr-10 py-5 md:py-6 flex items-center justify-center rounded-tr-[32px] border-r-[6px] border-[#3B82F6] shadow-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <div className="text-[30px] md:text-[40px] font-black text-[#0F172A] tracking-tighter leading-none">
                        {p.id < 10 ? `0${p.id}` : p.id}
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full px-8 h-12 md:h-14 border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] font-bold transition-all text-[13px] md:text-[14px]">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background border-t border-[#E2E8F0]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12 space-y-4">
            <h2 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold text-[#0F172A]">Voice of our Clients</h2>
            <p className="text-[#64748B] text-[14px] md:text-[15px]">Trusted by homeowners and industrial leaders alike.</p>
          </ScrollReveal>
          
          <div className="relative max-w-7xl mx-auto px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-8">
                <CarouselItem className="pl-4 md:pl-8 basis-full sm:basis-1/2 md:basis-1/3">
                  <TestimonialCard name="Rajesh Kumar" loc="Ahmedabad" review="Professional execution and visible savings. SKY RENEWABLE is easily the best solar company in Gujarat." />
                </CarouselItem>
                <CarouselItem className="pl-4 md:pl-8 basis-full sm:basis-1/2 md:basis-1/3">
                  <TestimonialCard name="Suresh Mehta" loc="Surat" review="Seamless experience with PM-Suryodaya paperwork. Highly recommended for rooftop solar." />
                </CarouselItem>
                <CarouselItem className="pl-4 md:pl-8 basis-full sm:basis-1/2 md:basis-1/3">
                  <TestimonialCard name="Dr. Ananya Singh" loc="Baroda" review="Our hospital's electricity bill dropped by 85%. Excellent engineering and technical support." />
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center gap-3 mt-8">
                <CarouselPrevious className="relative static translate-y-0 translate-x-0" />
                <CarouselNext className="relative static translate-y-0 translate-x-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <WorkingArea />

      <CTASection />
    </div>
  );
}

function StatItem({ val, suffix, label }: { val: number, suffix: string, label: string }) {
  return (
    <div className="space-y-1.5 md:space-y-2">
      <div className="text-[28px] md:text-[40px] font-bold text-[#2563EB] leading-none">
        <Counter value={val} suffix={suffix} />
      </div>
      <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-[#64748B]">{label}</p>
    </div>
  );
}

function SolutionCard({ icon, title, desc, href }: { icon: any, title: string, desc: string, href: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Link href={href} className="group block h-full">
        <Card className="p-8 md:p-10 h-full rounded-[24px] md:rounded-[32px] border-none bg-background shadow-sm hover:shadow-[0_40px_80px_rgba(37,99,235,0.08)] transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 size-24 bg-[#2563EB]/5 blur-[30px] rounded-full group-hover:bg-[#2563EB]/10 transition-colors" />
          <div className="size-12 rounded-xl bg-[#2563EB]/5 flex items-center justify-center mb-6 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-500">
            {React.cloneElement(icon, { className: "size-6" })}
          </div>
          <h3 className="text-lg md:text-xl font-bold text-[#1E293B] mb-3">{title}</h3>
          <p className="text-[14px] md:text-[15px] text-[#64748B] leading-relaxed mb-6">{desc}</p>
          <div className="flex items-center gap-2 text-[#2563EB] font-bold text-xs uppercase tracking-wider group-hover:gap-4 transition-all">
            Explore <ArrowRight className="size-4" />
          </div>
        </Card>
      </Link>
    </ScrollReveal>
  );
}

function ValueItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="space-y-2 md:space-y-3">
      <div className="size-1.5 bg-[#2563EB] rounded-full" />
      <h3 className="text-lg md:text-xl font-bold text-[#0F172A]">{title}</h3>
      <p className="text-[14px] md:text-[15px] text-[#64748B] leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, loc, review }: { name: string, loc: string, review: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Card className="p-8 md:p-10 rounded-[24px] md:rounded-[32px] border-none bg-white shadow-sm space-y-6 flex flex-col h-full hover-lift">
        <div className="flex gap-1 text-[#06B6D4]">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="size-3.5 fill-current" />)}
        </div>
        <p className="text-[14px] md:text-[15px] text-[#334155] font-medium italic leading-relaxed flex-grow">"{review}"</p>
        <div className="flex items-center gap-4 border-t border-[#E2E8F0] pt-6">
          <div className="size-10 rounded-full bg-[#2563EB]/5 flex items-center justify-center text-[#2563EB] font-bold text-base shrink-0">
            {name[0]}
          </div>
          <div>
            <h4 className="font-bold text-[#0F172A] text-sm">{name}</h4>
            <p className="text-[9px] text-[#94A3B8] font-bold uppercase tracking-widest">{loc}</p>
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
}
