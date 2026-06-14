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
    <div className="bg-[#F8FAFC] selection:bg-primary/20 selection:text-[#14213D] overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden hero-gradient">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source src="/vio/3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#14213D]/55 pointer-events-none" />
        </div>

        <div className="container relative z-20 h-full mx-auto px-4 flex flex-col justify-center items-center text-center">
          <ScrollReveal direction="up" className="max-w-4xl space-y-4 md:space-y-6">
            <h1 className="font-bold text-white leading-[1.1] tracking-tighter drop-shadow-lg">
              The Future of <br />
              <span className="text-[#2563EB]">Clean Energy</span>
            </h1>
            
            <p className="text-white/85 max-w-2xl mx-auto leading-relaxed font-medium px-2">
              Switch to SKY RENEWABLE. High-yield engineering, smart monitoring, and guaranteed government subsidies.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 w-full max-w-md mx-auto sm:max-w-none">
              <Button asChild variant="default" size="lg" className="rounded-full w-full sm:w-auto text-white">
                <Link href="/get-quote" className="flex items-center gap-2">Get Your Quote <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full w-full sm:w-auto border-white/20 text-white hover:bg-white/10">
                <Link href="/get-quote">Book Site Survey</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PartnerLogos />

      <SubsidyShowcase />

      <section className="py-12 md:py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatItem val={500} suffix="+" label="Solar Projects" />
            <StatItem val={10} suffix="MW+" label="Installed Capacity" />
            <StatItem val={98} suffix="%" label="Client Satisfaction" />
            <StatItem val={25} suffix="Y" label="Performance Warranty" />
          </div>
        </div>
      </section>

      {/* LEADING SOLAR AUTHORITY SECTION */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#EEF6FF]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-5 md:space-y-6 text-center lg:text-left order-1 lg:order-1">
              <ScrollReveal direction="up">
                <span className="inline-block bg-white text-[#14213D] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase border border-[#DCE7F5] shadow-sm">
                  Leading Solar Authority
                </span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="leading-[1.2] tracking-tight">
                  Empowering India <br />Through <span className="text-[#2563EB]">Smart Solar</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="leading-relaxed max-w-xl mx-auto lg:mx-0">
                  SKY RENEWABLE is redefining how homes and industries harvest the sun. We provide end-to-end EPC services, from custom structural engineering to seamless subsidy approvals.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <Button asChild variant="outline" size="sm" className="rounded-full border-[#DCE7F5] text-[#14213D]">
                  <Link href="/about-us">Our Engineering Legacy</Link>
                </Button>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="left" className="order-2 lg:order-2">
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-md">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/vio/2.mp4" type="video/mp4" />
                </video>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center space-y-3 mb-10 md:mb-12">
            <h2 className="leading-tight">Advanced Energy Solutions</h2>
            <p className="text-[#64748B] max-w-xl mx-auto">Scalable solar architecture tailored for maximum yield and reliability.</p>
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

      <section className="py-12 md:py-16 lg:py-20 bg-[#EEF6FF] border-y border-[#DCE7F5]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-10 mb-10 items-end text-center lg:text-left">
            <h2 className="leading-tight tracking-tighter">
              Why Sky Renewable <br />Solar Solutions?
            </h2>
            <p className="leading-relaxed max-w-xl mx-auto lg:mx-0">
              Solar is a strategic asset. We maximize its value through engineering excellence and lifecycle support.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            <ValueItem title="Significant Savings" desc="Lock in your electricity tariff for 25 years and insulate your business from rising utility costs." />
            <ValueItem title="ESG Compliance" desc="Meet your sustainability mandates and boost your corporate brand value through clean energy." />
            <ValueItem title="Energy Security" desc="Eliminate production downtime with smart hybrid backup systems and stable voltage profiles." />
            <ValueItem title="Asset Appreciation" desc="Increase your property value with high-yield capital improvements and tax-efficient depreciation." />
            <ValueItem title="Subsidy Handling" desc="Zero-friction government liaison for CFA subsidies under PM-Suryodaya schemes." />
            <ValueItem title="Tier-1 Reliability" desc="We exclusively use Bloomberg-listed modules and high-efficiency smart inverters." />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#2563EB] to-[#14213D] text-white overflow-hidden relative border-t border-white/5">
        <div className="container relative z-10 mx-auto px-4">
          <Calculator />
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-10 space-y-3">
            <h2 className="leading-tight">Featured Case Studies</h2>
            <p className="text-[#64748B]">High-yield solar deployments across India's industrial landscape.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
            {projects.map((p) => (
              <ScrollReveal key={p.id} direction="up" delay={p.id * 0.1}>
                <Link href="/projects" className="group block">
                  <div className="relative h-[350px] md:h-[450px] rounded-[24px] overflow-hidden shadow-md transition-all duration-700 hover:-translate-y-2">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    >
                      <source src={p.video} type="video/mp4" />
                    </video>
                    
                    <div className="absolute bottom-0 left-0 bg-white pl-5 md:pl-6 pr-6 md:pr-8 py-4 md:py-5 flex items-center justify-center rounded-tr-[24px] border-r-[4px] border-[#2563EB] shadow-lg transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <div className="text-[28px] md:text-[34px] font-black text-[#14213D] tracking-tighter leading-none">
                        {p.id < 10 ? `0${p.id}` : p.id}
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full border-[#DCE7F5] text-[#14213D]">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-[#EEF6FF] border-t border-[#DCE7F5]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-10 space-y-3">
            <h2 className="leading-tight">Voice of our Clients</h2>
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
              <CarouselContent className="-ml-4 md:-ml-6">
                <CarouselItem className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3">
                  <TestimonialCard name="Rajesh Kumar" loc="Ahmedabad" review="Professional execution and visible savings. SKY RENEWABLE is easily the best solar company in Gujarat." />
                </CarouselItem>
                <CarouselItem className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3">
                  <TestimonialCard name="Suresh Mehta" loc="Surat" review="Seamless experience with PM-Suryodaya paperwork. Highly recommended for rooftop solar." />
                </CarouselItem>
                <CarouselItem className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3">
                  <TestimonialCard name="Dr. Ananya Singh" loc="Baroda" review="Our hospital's electricity bill dropped by 85%. Excellent engineering and technical support." />
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center gap-3 mt-8">
                <CarouselPrevious className="relative static translate-y-0 translate-x-0 border-[#2563EB]/20 text-[#14213D]" />
                <CarouselNext className="relative static translate-y-0 translate-x-0 border-[#2563EB]/20 text-[#14213D]" />
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
    <div className="space-y-1">
      <div className="text-[24px] md:text-[32px] font-bold text-[#2563EB] leading-none">
        <Counter value={val} suffix={suffix} />
      </div>
      <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#64748B]">{label}</p>
    </div>
  );
}

function SolutionCard({ icon, title, desc, href }: { icon: any, title: string, desc: string, href: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Link href={href} className="group block h-full">
        <Card className="p-6 md:p-8 h-full rounded-[24px] border-[#DCE7F5] bg-white shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 size-20 bg-[#EEF6FF] blur-[30px] rounded-full group-hover:bg-[rgba(245,158,11,0.12)] transition-colors" />
          <div className="size-10 rounded-xl bg-[#EEF6FF] flex items-center justify-center mb-5 text-[#2563EB] group-hover:bg-[rgba(245,158,11,0.12)] group-hover:text-[#F59E0B] transition-all duration-500">
            {React.cloneElement(icon, { className: "size-5" })}
          </div>
          <h3 className="text-base md:text-lg font-bold text-[#14213D] mb-2">{title}</h3>
          <p className="text-[13px] md:text-[14px] text-[#475569] leading-relaxed mb-4">{desc}</p>
          <div className="flex items-center gap-2 text-[#2563EB] font-bold text-[10px] uppercase tracking-wider group-hover:gap-3 transition-all">
            Explore <ArrowRight className="size-3" />
          </div>
        </Card>
      </Link>
    </ScrollReveal>
  );
}

function ValueItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="space-y-2">
      <div className="size-1.5 bg-[#2563EB] rounded-full" />
      <h3 className="text-base md:text-lg font-bold text-[#14213D]">{title}</h3>
      <p className="text-[13px] md:text-[14px] text-[#475569] leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, review, loc }: { name: string, review: string, loc: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Card className="p-6 md:p-8 rounded-[24px] border-[#DCE7F5] bg-white shadow-sm space-y-4 flex flex-col h-full hover-lift">
        <div className="flex gap-1 text-[#2563EB]">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="size-3 fill-current" />)}
        </div>
        <p className="text-[13px] md:text-[14px] text-[#475569] font-medium italic leading-relaxed flex-grow">"{review}"</p>
        <div className="flex items-center gap-3 border-t border-[#DCE7F5] pt-4">
          <div className="size-9 rounded-full bg-[#EEF7FF] flex items-center justify-center text-[#2563EB] font-bold text-sm shrink-0">
            {name[0]}
          </div>
          <div>
            <h4 className="font-bold text-[#14213D] text-xs">{name}</h4>
            <p className="text-[8px] text-[#64748B] font-bold uppercase tracking-widest">{loc}</p>
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
}
