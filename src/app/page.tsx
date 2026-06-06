import { Hero } from "@/components/sections/Hero";
import { AIAdvisor } from "@/components/sections/AIAdvisor";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Zap, ArrowRight, Sun, BarChart3, Users, Award, Building2, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";

export default function Home() {
  const installImg = PlaceHolderImages.find(img => img.id === "solar-installation");

  const partners = [
    { name: "Fronius", icon: <Cpu className="size-8" /> },
    { name: "Sungrow", icon: <Zap className="size-8" /> },
    { name: "Enphase", icon: <Cpu className="size-8" /> },
    { name: "Waaree", icon: <Sun className="size-8" /> },
    { name: "Adani Solar", icon: <Globe className="size-8" /> },
    { name: "Vikram Solar", icon: <Award className="size-8" /> },
    { name: "Tata Power", icon: <Building2 className="size-8" /> },
  ];

  return (
    <div className="space-y-0 mesh-gradient min-h-screen">
      <Hero />

      {/* Partners Marquee - Enhanced */}
      <section className="py-20 bg-white/50 backdrop-blur-md border-y border-black/5 overflow-hidden">
        <div className="container mx-auto px-4 mb-10 text-center">
          <ScrollReveal direction="zoom">
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">Propelling India With Technology Partners</p>
          </ScrollReveal>
        </div>
        <div className="flex animate-marquee whitespace-nowrap gap-24 items-center">
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex items-center gap-6 text-primary/40 hover:text-primary transition-all duration-500 cursor-default group transform hover:scale-110">
              <div className="grayscale group-hover:grayscale-0 transition-all scale-125">{partner.icon}</div>
              <span className="text-3xl font-black font-headline uppercase tracking-tight">{partner.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Preview - Staggered */}
      <section className="py-40 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center max-w-4xl mx-auto mb-24 space-y-8">
              <span className="text-accent font-black tracking-[0.3em] text-[10px] uppercase bg-accent/10 px-4 py-1.5 rounded-full">Engineering Excellence</span>
              <h2 className="text-5xl md:text-7xl font-bold font-headline text-primary leading-tight">Superior Yield. <br /><span className="text-accent">Zero Compromise.</span></h2>
              <p className="text-muted-foreground text-xl font-light">We engineer high-performance solar ecosystems that maximize energy harvest even in challenging conditions.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-12">
            <ScrollReveal direction="up" delay={0.1}>
              <FeatureCard 
                icon={<ShieldCheck className="size-14" />}
                title="Liaison Mastery"
                desc="From structural audits to government subsidy filing, we handle the complex bureaucracy so you don't have to."
              />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <FeatureCard 
                icon={<BarChart3 className="size-14" />}
                title="Financial Alpha"
                desc="Our Tier-1 systems deliver an average ROI of 20-25% annually, outpacing traditional investment assets."
              />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <FeatureCard 
                icon={<Users className="size-14" />}
                title="IoT Ecosystem"
                desc="Cloud-based generation monitoring and dedicated service response within 48 hours for absolute uptime."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Impact Section - Counter Enhanced */}
      <section className="py-40 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-[150px] animate-blob" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal direction="right">
              <div className="relative rounded-[60px] overflow-hidden aspect-[4/3] shadow-2xl group border border-white/10">
                {installImg?.imageUrl && (
                  <Image 
                    src={installImg.imageUrl} 
                    alt="Solar Installation" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                    data-ai-hint="solar installation"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-12 left-12">
                   <Zap className="size-12 text-accent mb-4 animate-pulse" />
                   <h4 className="text-3xl font-bold font-headline">Unmatched Field <br /> Expertise</h4>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" className="space-y-12">
              <div className="space-y-8">
                <span className="text-accent font-black tracking-[0.3em] text-[10px] uppercase">The Arkā Footprint</span>
                <h2 className="text-5xl md:text-7xl font-bold font-headline leading-[1.1]">Decarbonizing <br />India's Grid.</h2>
                <p className="text-xl text-white/60 leading-relaxed font-light">
                  We are building a decentralized energy future. By empowering individual rooftops, we reduce the nation's reliance on fossil fuels one panel at a time.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-16">
                <div className="space-y-4">
                  <div className="text-7xl font-black text-accent font-headline tracking-tighter">
                    <Counter value={5000} suffix="+" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">Systems Deployed</p>
                </div>
                <div className="space-y-4">
                  <div className="text-7xl font-black text-accent font-headline tracking-tighter">
                    <Counter value={120} suffix=" MW" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">Renewable Offset</p>
                </div>
              </div>
              <Button asChild size="lg" className="bg-accent text-primary font-bold rounded-full px-12 py-9 text-xl hover:bg-white hover:-translate-y-2 transition-all shadow-2xl shadow-accent/20">
                <Link href="/about-us">Explore Our Impact <ArrowRight className="ml-2 size-6" /></Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services - Grid Enhanced */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="space-y-8 mb-32">
              <span className="text-accent font-black tracking-[0.3em] text-[10px] uppercase">Service Architecture</span>
              <h2 className="text-5xl md:text-7xl font-bold font-headline text-primary">Strategic Power Solutions</h2>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <ScrollReveal direction="right" delay={0.1}>
              <ServiceCard 
                title="Residential Rooftop"
                desc="Zero-downpayment solar for homes with direct PM-Suryodaya subsidy integration."
                href="/services/residential-solar"
              />
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.1}>
              <ServiceCard 
                title="Commercial & Industrial"
                desc="High-yield EPC solutions for high-tension industries looking to optimize OpEx."
                href="/services/commercial-solar"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AI Advisor - Layout Enhanced */}
      <div className="py-20 bg-primary/5">
        <AIAdvisor />
      </div>

      {/* Projects - Tilt & Zoom */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-l-8 border-accent pl-8">
              <div className="space-y-6">
                <span className="text-accent font-black tracking-[0.3em] text-[10px] uppercase">Engineering Showcase</span>
                <h2 className="text-5xl md:text-7xl font-bold font-headline text-primary">Case Portfolios</h2>
              </div>
              <Button variant="ghost" asChild className="text-primary font-bold hover:bg-primary hover:text-white rounded-full px-10 h-14 transition-all">
                <Link href="/projects" className="flex items-center">View Full Archive <ArrowRight className="ml-2 size-5" /></Link>
              </Button>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <ScrollReveal key={i} direction="zoom" delay={i * 0.1}>
                <div className="group relative rounded-[50px] overflow-hidden aspect-[4/3] shadow-2xl border border-black/5 bg-white">
                  <Image 
                    src={`https://picsum.photos/seed/arkahome${i}/800/600`} 
                    alt="Project" 
                    fill 
                    className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12 text-white transform translate-y-10 group-hover:translate-y-0">
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-4">Residential</span>
                    <h4 className="text-3xl font-bold font-headline leading-none mb-2">5kW Smart Array</h4>
                    <p className="text-sm opacity-60 mb-8 font-light tracking-wide">Ahmedabad, Gujarat</p>
                    <div className="h-px bg-white/20 mb-8" />
                    <Link href="/projects" className="flex items-center text-accent font-bold text-sm hover:gap-4 transition-all">View Analytics <ArrowRight className="ml-2 size-5" /></Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* High-End CTA */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="zoom">
            <div className="bg-primary rounded-[80px] p-20 md:p-32 text-center text-white space-y-12 relative overflow-hidden shadow-[0_50px_100px_rgba(20,41,33,0.3)]">
              <div className="absolute top-0 right-0 p-32 opacity-[0.03] animate-float pointer-events-none">
                <Zap className="size-[500px]" />
              </div>
              <div className="max-w-5xl mx-auto space-y-8">
                <h2 className="text-6xl md:text-8xl font-bold font-headline leading-[1.1]">The Future is <br /><span className="text-accent">Solar.</span></h2>
                <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">Join the thousands who have already decoupled their finances from the rising costs of the grid.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-8 pt-10 relative z-10">
                <Button size="lg" asChild className="bg-accent text-primary font-bold rounded-full px-14 py-9 text-2xl hover:bg-white hover:-translate-y-2 transition-all shadow-[0_20px_50px_rgba(251,191,36,0.3)]">
                  <Link href="/get-quote">Get Free Proposal</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/20 text-white rounded-full px-14 py-9 text-2xl backdrop-blur-xl hover:bg-white/10 transition-all">
                  <Link href="/solar-calculator">ROI Calculator</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-14 border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.02)] rounded-[60px] bg-white text-center hover:shadow-[0_40px_100px_rgba(0,0,0,0.05)] hover:-translate-y-4 transition-all duration-700 group">
      <div className="bg-primary/5 w-28 h-28 rounded-[40px] flex items-center justify-center mx-auto mb-12 group-hover:bg-accent group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 text-accent">
        {icon}
      </div>
      <h3 className="text-3xl font-bold font-headline text-primary mb-8 tracking-tight">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-lg font-light">{desc}</p>
    </div>
  );
}

function ServiceCard({ title, desc, href }: { title: string, desc: string, href: string }) {
  return (
    <Link href={href} className="group h-full block">
      <div className="p-20 bg-primary/5 rounded-[80px] text-left space-y-12 border border-transparent transition-all duration-700 hover:border-accent/20 hover:bg-white hover:shadow-[0_50px_100px_rgba(0,0,0,0.06)] h-full relative overflow-hidden">
        <div className="bg-accent w-24 h-24 rounded-[32px] flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-accent/20">
          <Zap className="size-12" />
        </div>
        <div className="space-y-6">
          <h3 className="text-5xl font-bold font-headline text-primary leading-tight">{title}</h3>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">{desc}</p>
        </div>
        <div className="flex items-center text-accent font-black uppercase tracking-[0.3em] text-[10px] group-hover:gap-6 transition-all">
          Explore Solution <ArrowRight className="ml-3 size-6" />
        </div>
        <div className="absolute top-10 right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
          <Sun className="size-64" />
        </div>
      </div>
    </Link>
  );
}
