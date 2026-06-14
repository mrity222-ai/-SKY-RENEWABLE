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
    { id: 1, name: "Skyline Villa", video: "/project/1.mp4" },
    { id: 2, name: "GIDC Industrial Park", video: "/project/2.mp4" },
    { id: 3, name: "Emerald Heights", video: "/project/4.mp4" },
  ];

  return (
    <div className="bg-white selection:bg-primary/20 selection:text-[#14213D] overflow-x-hidden">
      {/* HERO SECTION - Premium Video Variant */}
      <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-[#14213D]">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="/vio/3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#14213D]/60 via-[#14213D]/40 to-[#14213D]/80 pointer-events-none" />
        </div>

        <div className="container relative z-20 h-full mx-auto px-4 flex flex-col justify-center items-center text-center">
          <ScrollReveal direction="up" className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h1 className="font-bold text-white leading-[1.05] tracking-tight font-headline drop-shadow-2xl text-[34px] md:text-[52px] lg:text-[64px]">
              The Future of <br />
              <span className="text-primary">Clean Energy</span>
            </h1>
            
            <p className="text-white/90 max-w-2xl mx-auto leading-relaxed font-medium px-2 text-[16px] md:text-[19px]">
              Switch to SKY RENEWABLE. High-yield engineering, smart monitoring, and guaranteed government subsidies.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 w-full max-w-md mx-auto sm:max-w-none">
              <Button asChild variant="default" size="lg" className="rounded-full w-full sm:w-auto text-white shadow-2xl shadow-primary/20 h-12 md:h-14 px-10">
                <Link href="/get-quote" className="flex items-center gap-2">Get Your Quote <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full w-full sm:w-auto border-white/30 text-white backdrop-blur-md hover:bg-white/10 h-12 md:h-14 px-10">
                <Link href="/get-quote">Book Site Survey</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PartnerLogos />

      <SubsidyShowcase />

      {/* STATS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatItem val={500} suffix="+" label="Solar Projects" />
            <StatItem val={10} suffix="MW+" label="Installed Capacity" />
            <StatItem val={98} suffix="%" label="Client Satisfaction" />
            <StatItem val={25} suffix="Y" label="Performance Warranty" />
          </div>
        </div>
      </section>

      {/* LEADING SOLAR AUTHORITY SECTION */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left order-1 lg:order-1">
              <ScrollReveal direction="up">
                <span className="inline-flex items-center bg-white text-[#14213D] px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase border border-border shadow-sm">
                  Leading Solar Authority
                </span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="leading-[1.1] tracking-tight font-headline text-[30px] md:text-[40px] lg:text-[48px]">
                  Empowering India <br />Through <span className="text-primary">Smart Solar</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="leading-relaxed max-w-xl mx-auto lg:mx-0 text-[#475569] text-[16px] md:text-[18px]">
                  SKY RENEWABLE is redefining how homes and industries harvest the sun. We provide end-to-end EPC services, from custom structural engineering to seamless subsidy approvals.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <Button asChild variant="outline" size="lg" className="rounded-full border-border text-[#14213D] h-12 px-8 font-bold">
                  <Link href="/about-us">Our Engineering Legacy</Link>
                </Button>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="left" className="order-2 lg:order-2 group">
              <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(20,33,61,0.12)] border border-border/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                >
                  <source src="/vio/2.mp4" type="video/mp4" />
                </video>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="leading-tight font-headline text-[30px] md:text-[40px]">Advanced Energy Solutions</h2>
            <p className="text-[#64748B] max-w-xl mx-auto">Scalable solar architecture tailored for maximum yield and reliability.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <SolutionCard icon={<HomeIcon />} title="Residential Solar" desc="Slash bills by 90% with subsidized rooftop systems." href="/services/residential-solar" />
            <SolutionCard icon={<Factory />} title="Commercial Solar" desc="Boost ROI with tax benefits and fixed energy costs." href="/services/commercial-solar" />
            <SolutionCard icon={<Zap />} title="Industrial EPC" desc="Mega-watt scale solar plants for heavy manufacturing." href="/services/industrial-solar" />
            <SolutionCard icon={<Layout />} title="Technical Survey" desc="Shadow mapping and structural health audits." href="/services/rooftop-installation" />
            <SolutionCard icon={<BatteryFull />} title="Storage & Backup" desc="Smart hybrid storage for true grid-independence." href="/services/battery-storage" />
            <SolutionCard icon={<Wrench />} title="Maintenance & AMC" desc="Proactive IoT monitoring and expert panel cleaning." href="/services/solar-maintenance" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-24 bg-[#F8FAFC] border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 mb-16 items-end text-center lg:text-left">
            <h2 className="leading-[1.1] tracking-tight font-headline text-[30px] md:text-[40px]">
              Why Sky Renewable <br />Solar Solutions?
            </h2>
            <p className="leading-relaxed max-w-xl mx-auto lg:mx-0 text-[#64748B]">
              Solar is a strategic asset. We maximize its value through engineering excellence and lifecycle support.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            <ValueItem title="Significant Savings" desc="Lock in your electricity tariff for 25 years and insulate your business from rising utility costs." />
            <ValueItem title="ESG Compliance" desc="Meet your sustainability mandates and boost your corporate brand value through clean energy." />
            <ValueItem title="Energy Security" desc="Eliminate production downtime with smart hybrid backup systems and stable voltage profiles." />
            <ValueItem title="Asset Appreciation" desc="Increase your property value with high-yield capital improvements and tax-efficient depreciation." />
            <ValueItem title="Subsidy Handling" desc="Zero-friction government liaison for CFA subsidies under PM-Suryodaya schemes." />
            <ValueItem title="Tier-1 Reliability" desc="We exclusively use Bloomberg-listed modules and high-efficiency smart inverters." />
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="py-24 bg-[#14213D] text-white overflow-hidden relative border-t border-white/5">
        <div className="container relative z-10 mx-auto px-4">
          <Calculator />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16 space-y-4">
            <h2 className="leading-tight font-headline text-[30px] md:text-[40px]">Featured Case Studies</h2>
            <p className="text-[#64748B]">High-yield solar deployments across India's industrial landscape.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
            {projects.map((p) => (
              <ScrollReveal key={p.id} direction="up" delay={p.id * 0.1}>
                <Link href="/projects" className="group block">
                  <div className="relative h-[400px] md:h-[500px] rounded-[32px] overflow-hidden shadow-xl transition-all duration-700 hover:-translate-y-2 border border-border/50">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    >
                      <source src={p.video} type="video/mp4" />
                    </video>
                    
                    <div className="absolute bottom-0 left-0 bg-white pl-6 md:pl-8 pr-10 md:pr-12 py-5 md:py-6 flex items-center justify-center rounded-tr-[32px] border-r-[6px] border-primary shadow-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <div className="text-[34px] md:text-[40px] font-black text-[#14213D] tracking-tighter leading-none">
                        {p.id < 10 ? `0${p.id}` : p.id}
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full border-border text-[#14213D] h-14 px-10 font-bold">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#F8FAFC] border-t border-border">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16 space-y-4">
            <h2 className="leading-tight font-headline text-[30px] md:text-[40px]">Voice of our Clients</h2>
            <p className="text-[#64748B]">Trusted by homeowners and industrial leaders alike.</p>
          </ScrollReveal>
          
          <div className="relative max-w-7xl mx-auto px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-6 md:-ml-8">
                <CarouselItem className="pl-6 md:pl-8 basis-full sm:basis-1/2 md:basis-1/3">
                  <TestimonialCard name="Rajesh Kumar" loc="Ahmedabad" review="Professional execution and visible savings. SKY RENEWABLE is easily the best solar company in Gujarat." />
                </CarouselItem>
                <CarouselItem className="pl-6 md:pl-8 basis-full sm:basis-1/2 md:basis-1/3">
                  <TestimonialCard name="Suresh Mehta" loc="Surat" review="Seamless experience with PM-Suryodaya paperwork. Highly recommended for rooftop solar." />
                </CarouselItem>
                <CarouselItem className="pl-6 md:pl-8 basis-full sm:basis-1/2 md:basis-1/3">
                  <TestimonialCard name="Dr. Ananya Singh" loc="Baroda" review="Our hospital's electricity bill dropped by 85%. Excellent engineering and technical support." />
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-12">
                <CarouselPrevious className="relative static translate-y-0 translate-x-0 border-primary/20 text-[#14213D] h-12 w-12" />
                <CarouselNext className="relative static translate-y-0 translate-x-0 border-primary/20 text-[#14213D] h-12 w-12" />
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
    <div className="space-y-2 text-center">
      <div className="text-[32px] md:text-[44px] font-bold text-primary leading-none tracking-tight">
        <Counter value={val} suffix={suffix} />
      </div>
      <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B]">{label}</p>
    </div>
  );
}

function SolutionCard({ icon, title, desc, href }: { icon: any, title: string, desc: string, href: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Link href={href} className="group block h-full">
        <Card className="p-8 md:p-10 h-full rounded-[32px] border-border/60 bg-white shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group-hover:-translate-y-2">
          <div className="absolute top-0 right-0 size-24 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/10 transition-colors" />
          <div className="size-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
            {React.cloneElement(icon, { className: "size-6" })}
          </div>
          <h3 className="text-xl font-bold text-[#14213D] mb-3 font-headline">{title}</h3>
          <p className="text-[14px] text-[#475569] leading-relaxed mb-6 line-clamp-2">{desc}</p>
          <div className="flex items-center gap-2 text-primary font-bold text-[11px] uppercase tracking-[0.1em] group-hover:gap-3 transition-all">
            Explore <ArrowRight className="size-3.5" />
          </div>
        </Card>
      </Link>
    </ScrollReveal>
  );
}

function ValueItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="space-y-3">
      <div className="size-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
      <h3 className="text-lg font-bold text-[#14213D] font-headline">{title}</h3>
      <p className="text-[14px] text-[#475569] leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, review, loc }: { name: string, review: string, loc: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Card className="p-8 md:p-10 rounded-[32px] border-border bg-white shadow-sm space-y-6 flex flex-col h-full transition-all hover:shadow-xl group">
        <div className="flex gap-1.5 text-primary">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="size-3.5 fill-current" />)}
        </div>
        <p className="text-[15px] text-[#475569] font-medium italic leading-relaxed flex-grow">"{review}"</p>
        <div className="flex items-center gap-4 border-t border-border/60 pt-6">
          <div className="size-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold text-sm shrink-0">
            {name[0]}
          </div>
          <div>
            <h4 className="font-bold text-[#14213D] text-[13px]">{name}</h4>
            <p className="text-[9px] text-[#64748B] font-bold uppercase tracking-widest">{loc}</p>
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
}
