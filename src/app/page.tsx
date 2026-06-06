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
    <div className="space-y-0">
      <Hero />

      {/* Partners Marquee */}
      <section className="py-12 bg-white border-y border-primary/5 overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em]">Our Technology Partners</p>
        </div>
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center py-4">
          {[...partners, ...partners].map((partner, i) => (
            <div key={i} className="flex items-center gap-4 text-primary/30 hover:text-primary transition-colors cursor-default group">
              <div className="grayscale group-hover:grayscale-0 transition-all">{partner.icon}</div>
              <span className="text-2xl font-black font-headline uppercase">{partner.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Preview */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
              <span className="text-accent font-black tracking-widest text-sm uppercase">Why Arkā Solar</span>
              <h2 className="text-5xl font-bold font-headline text-primary">Engineering Excellence in Every Panel</h2>
              <p className="text-muted-foreground text-lg">We don't just install panels; we engineer sustainable energy ecosystems designed for maximum yield and longevity.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-10">
            <ScrollReveal delay={0.1}>
              <FeatureCard 
                icon={<ShieldCheck className="size-12" />}
                title="End-to-End Handling"
                desc="From structural survey to government subsidy filing, we manage the entire lifecycle of your project."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <FeatureCard 
                icon={<BarChart3 className="size-12" />}
                title="Maximum ROI"
                desc="Our high-efficiency Tier-1 systems typically pay for themselves within 4-6 years of operation."
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <FeatureCard 
                icon={<Users className="size-12" />}
                title="Expert Support"
                desc="Dedicated maintenance team and 24/7 IoT-based generation monitoring for zero downtime."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Preview with Counters */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-32 opacity-5 animate-float pointer-events-none">
          <Sun className="size-[400px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right">
              <div className="relative rounded-[48px] overflow-hidden aspect-video shadow-2xl group">
                {installImg?.imageUrl && (
                  <Image 
                    src={installImg.imageUrl} 
                    alt="Solar Installation" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint="solar installation"
                  />
                )}
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" className="space-y-10">
              <div className="space-y-6">
                <span className="text-accent font-black tracking-widest text-sm uppercase">Our Impact</span>
                <h2 className="text-5xl font-bold font-headline leading-tight">Powering India's Sustainable Future</h2>
                <p className="text-xl text-white/70 leading-relaxed font-light">
                  Arkā Solar is dedicated to helping Indian homeowners and businesses transition to clean energy with zero hassle and maximum financial gain.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-2">
                  <div className="text-6xl font-black text-accent font-headline">
                    <Counter value={5000} suffix="+" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-60">Happy Clients</p>
                </div>
                <div className="space-y-2">
                  <div className="text-6xl font-black text-accent font-headline">
                    <Counter value={120} suffix=" MW" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-60">Total Capacity</p>
                </div>
              </div>
              <Button asChild size="lg" className="bg-accent text-primary font-bold rounded-full px-12 py-8 text-lg hover:bg-white transition-all">
                <Link href="/about-us">Learn Our Story <ArrowRight className="ml-2 size-5" /></Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="space-y-6 mb-20">
              <span className="text-accent font-black tracking-widest text-sm uppercase">Our Services</span>
              <h2 className="text-5xl font-bold font-headline text-primary">Tailored Solar Solutions</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10">
            <ScrollReveal direction="right" delay={0.1}>
              <ServiceCard 
                title="Residential Rooftop"
                desc="Save up to 90% on your home electricity bills with PM-Suryodaya Yojana subsidies and zero-cost EMI."
                href="/services/residential-solar"
              />
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.1}>
              <ServiceCard 
                title="Commercial & Industrial"
                desc="Reduce operational costs, claim accelerated depreciation, and improve your ESG ratings with high-yield EPC."
                href="/services/commercial-solar"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AI Advisor Preview */}
      <ScrollReveal>
        <AIAdvisor />
      </ScrollReveal>

      {/* Projects Preview */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="space-y-4">
                <span className="text-accent font-black tracking-widest text-sm uppercase">Recent Work</span>
                <h2 className="text-5xl font-bold font-headline text-primary">Case Studies</h2>
              </div>
              <Button variant="ghost" asChild className="text-primary font-bold hover:bg-primary/5 rounded-full px-8">
                <Link href="/projects" className="flex items-center">View All Projects <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group relative rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl">
                  <Image 
                    src={`https://picsum.photos/seed/arkahome${i}/800/600`} 
                    alt="Project" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 text-white">
                    <h4 className="text-2xl font-bold font-headline">5kW Residential Setup</h4>
                    <p className="text-sm opacity-80 mt-2">Ahmedabad, Gujarat</p>
                    <div className="h-px bg-white/20 my-4" />
                    <Link href="/projects" className="flex items-center text-accent font-bold text-sm">View Details <ArrowRight className="ml-2 size-4" /></Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="bg-primary rounded-[60px] p-16 md:p-28 text-center text-white space-y-10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-20 opacity-10 animate-float">
                <Zap className="size-64" />
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-5xl md:text-7xl font-bold font-headline leading-tight">Ready to Switch to <br /><span className="text-accent">Solar Energy?</span></h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">Join thousands of homeowners and businesses saving on energy every single day. Start your journey today.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 pt-6 relative z-10">
                <Button size="lg" asChild className="bg-accent text-primary font-bold rounded-full px-12 py-8 text-xl hover:bg-white hover:scale-105 transition-all shadow-xl shadow-accent/20">
                  <Link href="/get-quote">Get Free Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/20 text-white rounded-full px-12 py-8 text-xl backdrop-blur-sm hover:bg-white/10 transition-all">
                  <Link href="/solar-calculator">Calculate Savings</Link>
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
    <Card className="p-12 border-none shadow-sm rounded-[48px] bg-white text-center hover:shadow-2xl transition-all duration-500 group">
      <div className="bg-primary/5 w-24 h-24 rounded-[32px] flex items-center justify-center mx-auto mb-10 group-hover:bg-accent group-hover:text-primary transition-colors text-accent">
        {icon}
      </div>
      <h3 className="text-3xl font-bold font-headline text-primary mb-6">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-lg">{desc}</p>
    </Card>
  );
}

function ServiceCard({ title, desc, href }: { title: string, desc: string, href: string }) {
  return (
    <Link href={href} className="group h-full block">
      <div className="p-16 bg-primary/5 rounded-[60px] text-left space-y-8 border border-transparent transition-all duration-500 hover:border-accent hover:bg-white hover:shadow-2xl h-full">
        <div className="bg-accent w-20 h-20 rounded-[24px] flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
          <Zap className="size-10" />
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-bold font-headline text-primary">{title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">{desc}</p>
        </div>
        <div className="flex items-center text-accent font-black uppercase tracking-widest text-sm group-hover:gap-3 transition-all">
          Explore Solution <ArrowRight className="ml-2 size-5" />
        </div>
      </div>
    </Link>
  );
}
