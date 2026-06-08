'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Users, 
  Award, 
  Sun, 
  Cpu, 
  Globe, 
  Star,
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  Factory,
  Wrench,
  BatteryFull,
  Layout,
  FileText,
  BadgeCheck,
  TrendingUp,
  Leaf,
  Banknote,
  MapPin,
  Phone,
  Mail,
  HelpCircle,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";
import { Calculator } from "@/components/sections/Calculator";
import { CTASection } from "@/components/sections/CTASection";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const HERO_IMAGES = [
  "https://picsum.photos/seed/arka_hero_1/1920/1080",
  "https://picsum.photos/seed/arka_hero_2/1920/1080",
  "https://picsum.photos/seed/arka_hero_3/1920/1080",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState<'basics' | 'support'>('basics');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  const partners = [
    "Tata Power Solar", "Waaree", "Adani Solar", "Havells", "Luminous", "Exide", "Microtek"
  ];

  const projects = [
    { id: 1, name: "Skyline Villa", capacity: "10kW", location: "Ahmedabad", type: "Residential", image: "https://picsum.photos/seed/arka_h_p1/800/1200" },
    { id: 2, name: "GIDC Industrial Park", capacity: "250kW", location: "Sanand", type: "Industrial", image: "https://picsum.photos/seed/arka_h_p2/800/1200" },
    { id: 3, name: "Emerald Heights", capacity: "50kW", location: "Surat", type: "Commercial", image: "https://picsum.photos/seed/arka_h_p3/800/1200" },
  ];

  const faqData = {
    basics: [
      { q: "Which is the best solar energy company for rooftop installation?", a: "Sky Renewable is widely recognized as a premier rooftop solar installer in India, offering turnkey engineering, procurement, and construction (EPC) services with a focus on high-yield generation and professional maintenance." },
      { q: "How can I find a reliable solar installer near me?", a: "Sky Renewable provides local service teams across multiple urban and industrial hubs. You can book a professional site survey through our website or contact our assistance desk to find our nearest office." },
      { q: "What is the approximate cost of solar system installation?", a: "The cost varies based on system size and component selection. Generally, a residential 3kW system starts from ₹1.8 Lakhs before subsidies. We provide detailed financial modeling during our free site audit." },
      { q: "How much government subsidy is available for solar panels?", a: "Under the PM-Suryodaya Yojana, residential homeowners can receive direct financial assistance (CFA) of up to ₹78,000 for system sizes up to 3kW." },
    ],
    support: [
      { q: "How long does a rooftop solar system last?", a: "Tier-1 solar panels are engineered for longevity, coming with a 25-year performance warranty. Most systems continue to generate clean energy efficiently for 30+ years." },
      { q: "What maintenance is required for solar panels?", a: "Maintenance is minimal but essential. It involves periodic cleaning (usually once or twice a month) and annual technical audits of electrical connections and inverter health to ensure peak performance." },
      { q: "Can solar panels work during cloudy weather?", a: "Yes, solar panels utilize daylight (diffused light) to generate electricity. While generation is lower than on clear sunny days, the system remains active and contributes to your daily power needs." },
      { q: "Is solar energy suitable for commercial properties?", a: "Absolutely. Commercial properties benefit significantly from solar through accelerated depreciation (tax benefits), lower operational costs, and ESG compliance, with average payback periods of 3-5 years." },
    ]
  };

  return (
    <div className="bg-white selection:bg-primary selection:text-white overflow-hidden">
      {/* HERO SLIDER */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image
                src={HERO_IMAGES[currentSlide]}
                alt="Sky Renewable Solar Energy Solutions"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent z-10" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="container relative z-20 h-full mx-auto px-4 flex flex-col justify-center">
          <ScrollReveal direction="up" className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
              <Zap className="size-4 text-primary" />
              <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Premium Solar Energy Solutions</span>
            </div>
            
            <h1 className="text-[40px] md:text-[64px] lg:text-[96px] font-black text-white leading-[1.05] tracking-tighter">
              Powering India With <br />
              <span className="text-primary">Best Solar Company</span>
            </h1>
            
            <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed font-medium">
              Switch to solar energy today with India's leading rooftop solar installer. High-yield systems, government subsidies, and long-term savings guaranteed.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <button className="bg-primary text-white rounded-full px-10 h-14 md:h-16 text-sm font-black hover:bg-white hover:text-primary transition-all shadow-2xl flex items-center justify-center">
                <Link href="/get-quote" className="flex items-center">Get a Free Quote <ArrowRight className="ml-2 size-4" /></Link>
              </button>
              <button className="border border-white/30 text-white backdrop-blur-sm rounded-full px-10 h-14 md:h-16 text-sm font-bold hover:bg-white/10 transition-all flex items-center justify-center">
                <Link href="/get-quote">Book Expert Site Survey</Link>
              </button>
            </div>
          </ScrollReveal>

          <div className="absolute bottom-12 right-4 md:right-12 flex gap-4">
            <button aria-label="Previous Slide" onClick={prevSlide} className="size-12 md:size-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all group">
              <ChevronLeft className="size-6 transition-transform group-active:scale-90" />
            </button>
            <button aria-label="Next Slide" onClick={nextSlide} className="size-12 md:size-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all group">
              <ChevronRight className="size-6 transition-transform group-active:scale-90" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 – TRUST & ACHIEVEMENTS */}
      <section className="py-24 border-b border-muted bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24 text-center">
            <StatItem val={500} suffix="+" label="Solar Projects Completed" />
            <StatItem val={10} suffix="MW+" label="Installed Solar Capacity" />
            <StatItem val={98} suffix="%" label="Client Satisfaction Rate" />
            <StatItem val={25} suffix="Y" label="Performance Warranty" />
          </div>
        </div>
      </section>

      {/* SECTION 3 – ABOUT COMPANY */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-muted text-muted-foreground px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase">
                  Leading Solar Company in India
                </span>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="text-[30px] lg:text-[40px] font-semibold text-foreground leading-tight">
                  Driving Sustainable Growth <br /><span className="text-primary">With Clean Solar Energy</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-[14px] text-muted-foreground leading-[1.8] max-w-xl">
                  Sky Renewable is a premier solar energy solutions provider in India. We specialize in end-to-end solar EPC services, rooftop installations, and government subsidy assistance to help you achieve energy independence.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <button className="rounded-full px-8 h-12 border border-primary/10 text-primary hover:bg-primary/5 transition-colors font-bold text-sm">
                  <Link href="/about-us">Explore Our Solar Journey</Link>
                </button>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left">
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/arka_h_about/800/800" 
                  alt="Sky Renewable Solar Installation Team" 
                  fill 
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 – OUR SOLAR SOLUTIONS */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal className="space-y-4 mb-20">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-foreground">Comprehensive Solar Energy Solutions</h2>
            <p className="text-muted-foreground text-[14px] max-w-xl mx-auto">From residential rooftops to industrial plants, we deliver customized solar systems optimized for maximum power generation.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SolutionCard icon={<HomeIcon />} title="Residential Solar" desc="High-efficiency rooftop solar systems for modern homes." href="/services/residential-solar" />
            <SolutionCard icon={<Factory />} title="Commercial Solar" desc="Scalable solar energy solutions for businesses and offices." href="/services/commercial-solar" />
            <SolutionCard icon={<Zap />} title="Industrial Systems" desc="Large-scale solar EPC for manufacturing and heavy industry." href="/services/industrial-solar" />
            <SolutionCard icon={<Layout />} title="Rooftop Installation" desc="Engineering-first approach for all rooftop types." href="/services/rooftop-installation" />
            <SolutionCard icon={<BatteryFull />} title="Battery Storage" desc="Smart solar backup for 24/7 energy independence." href="/services/battery-storage" />
            <SolutionCard icon={<Wrench />} title="Solar Maintenance" desc="Expert AMC and 24/7 solar power monitoring services." href="/services/solar-maintenance" />
          </div>
        </div>
      </section>

      {/* SECTION 5 – WHY CHOOSE SOLAR ENERGY? */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-end">
            <h2 className="text-[30px] lg:text-[40px] font-bold text-foreground leading-[1.1] tracking-tighter">
              Why Choose <br /> SKY RENEWABLE Solar Solutions?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl">
              Transitioning to solar power is more than an environmental choice—it's a strategic financial decision that delivers predictability, savings, and long-term asset value for decades.
            </p>
          </div>
          
          <div className="border-t border-border pt-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Significant Cost Savings</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  Eliminate or drastically reduce your monthly electricity expenses. By generating your own power, you protect yourself against rising utility tariffs and achieve ROI in record time.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Environmental Benefits</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  Join the green revolution by switching to clean, renewable energy. Solar systems significantly lower your carbon footprint, helping preserve the environment for future generations.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Energy Independence</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  Gain complete control over your power requirements. Solar energy reduces your dependence on the centralized grid, ensuring energy security and immunity from fluctuating prices.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Increased Property Value</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  Solar installations are high-value capital improvements. Properties equipped with high-yield solar systems often command a higher market value and attract premium buyers.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Government Subsidy Benefits</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  Leverage financial assistance through central and state government solar programs like PM-Suryodaya to maximize your financial incentives and lower upfront capital.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Long-Term Reliability</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  Solar panels are engineered for a lifespan of 25+ years with minimal maintenance. Our systems use Tier-1 components designed for durability and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – SOLAR SAVINGS CALCULATOR */}
      <section className="py-32 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <Calculator />
        </div>
      </section>

      {/* SECTION 7 – FEATURED PROJECTS */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-4">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-foreground">Featured Solar Projects Portfolio</h2>
            <p className="text-muted-foreground text-[14px]">Successful solar installations delivering clean energy across India.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((p, i) => (
              <ScrollReveal key={p.id} direction="up" delay={p.id * 0.1}>
                <Card className="rounded-[24px] border-none overflow-hidden group relative h-[560px] w-full shadow-md hover:shadow-2xl transition-all duration-500 bg-white">
                  <Image src={p.image} alt={`${p.name} Solar System`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  <div className="absolute bottom-0 left-0 bg-white pl-8 pr-12 py-6 flex items-center gap-6 rounded-tr-[32px] border-r-[6px] border-secondary shadow-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <div className="text-[40px] md:text-[48px] font-black text-foreground tracking-tighter leading-none">
                      0{p.id}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{p.type}</span>
                      <h3 className="text-[16px] md:text-[18px] font-bold text-foreground leading-tight max-w-[180px]">
                        {p.name}
                      </h3>
                    </div>
                  </div>

                  <Link href="/projects" className="absolute inset-0 z-10" />
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center">
            <button className="rounded-full px-10 h-14 border border-primary/10 text-primary hover:bg-primary hover:text-white transition-all font-bold text-sm">
              <Link href="/projects">Browse All Solar Projects</Link>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8 – INSTALLATION PROCESS */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-foreground">Our 6-Step Solar Installation Process</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <ProcessCard num="01" title="Consultation" desc="Detailed energy audit." />
            <ProcessCard num="02" title="Site Survey" desc="Technical analysis." />
            <ProcessCard num="03" title="Design" desc="Custom solar layout." />
            <ProcessCard num="04" title="Installation" desc="Precision deployment." />
            <ProcessCard num="05" title="Subsidy Aid" desc="Document handling." />
            <ProcessCard num="06" title="Support" desc="24/7 Monitoring." />
          </div>
        </div>
      </section>

      {/* SECTION 9 – GOVERNMENT SUBSIDY */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right" className="space-y-8">
              <span className="inline-block bg-white text-muted-foreground px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase">
                Government Solar Subsidy Guide 2026
              </span>
              <h2 className="text-[30px] lg:text-[40px] font-semibold text-foreground leading-tight">
                Claim Benefits Under <br /><span className="text-secondary">PM-Suryodaya Yojana</span>
              </h2>
              <div className="grid grid-cols-2 gap-6 md:gap-10">
                <SubsidyBenefit icon={<Banknote />} title="Direct Subsidy" desc="Up to ₹78,000 for homes." />
                <SubsidyBenefit icon={<TrendingUp />} title="Faster Payback" desc="ROI within 4-5 years." />
                <SubsidyBenefit icon={<Leaf />} title="Eco-Incentives" desc="Sustainable energy goals." />
                <SubsidyBenefit icon={<ShieldCheck />} title="Energy Security" desc="Grid independence." />
              </div>
              <button className="bg-primary text-white rounded-full px-10 h-14 font-bold hover:bg-primary/90 transition-all text-sm">
                <Link href="/government-solar-subsidy">Check Subsidy Eligibility</Link>
              </button>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                <Image src="https://picsum.photos/seed/arka_h_about/1000/750" alt="Solar Subsidy Schemes" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 10 – TECHNOLOGY PARTNERS */}
      <section className="py-24 border-y border-muted bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-12">
          <ScrollReveal>
            <h2 className="text-[12px] font-bold text-muted-foreground tracking-[0.3em] uppercase">Authorized Technology Partners</h2>
          </ScrollReveal>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all whitespace-nowrap py-4">
            {partners.map((p, i) => (
              <span key={`p1-${i}`} className="text-[16px] md:text-[22px] font-black text-foreground uppercase tracking-tighter px-4">{p}</span>
            ))}
            {partners.map((p, i) => (
              <span key={`p2-${i}`} className="text-[16px] md:text-[22px] font-black text-foreground uppercase tracking-tighter px-4">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 – TESTIMONIALS */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20 space-y-4">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-foreground">Verified Client Reviews</h2>
            <p className="text-muted-foreground text-[14px]">Trusted by thousands of residential and industrial solar users across India.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard name="Rajesh Kumar" loc="Ahmedabad" review="Sky Renewable is the best solar company in Ahmedabad. Their installation was professional and the bill savings are real." />
            <TestimonialCard name="Suresh Mehta" loc="Surat" review="Seamless experience with rooftop solar. They handled my PM-Suryodaya subsidy paperwork from start to finish." />
            <TestimonialCard name="Dr. Ananya Singh" loc="Baroda" review="Excellent solar EPC services. Our hospital's energy costs have significantly reduced thanks to their high-yield system." />
          </div>
        </div>
      </section>

      {/* SECTION 12 – FAQ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-12">
              <ScrollReveal direction="right" className="space-y-6">
                <span className="text-primary font-bold text-[12px] uppercase tracking-[0.3em]">EXPERT Q&A</span>
                <h2 className="text-[34px] lg:text-[48px] font-semibold text-foreground leading-[1.1]">
                  Comprehensive Energy <br /> Solutions Unfolded
                </h2>
                <p className="text-muted-foreground text-[14px] leading-relaxed max-w-lg">
                  Navigating the transition to renewable energy can be complex. Whether you're curious about rooftop solar installation, maintenance services, or government subsidy assistance, our experts provide clear, data-driven answers to help you achieve energy independence.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.1}>
                <div className="flex flex-row flex-wrap items-center justify-start gap-4">
                  <button 
                    onClick={() => setActiveFaqCategory('basics')}
                    className={cn(
                      "px-8 py-3 rounded-full text-[12px] font-black uppercase tracking-widest transition-all",
                      activeFaqCategory === 'basics' ? "bg-primary text-white shadow-lg" : "bg-muted text-muted-foreground hover:bg-primary/5 hover:text-primary"
                    )}
                  >
                    System Basics
                  </button>
                  <button 
                    onClick={() => setActiveFaqCategory('support')}
                    className={cn(
                      "px-8 py-3 rounded-full text-[12px] font-black uppercase tracking-widest transition-all",
                      activeFaqCategory === 'support' ? "bg-primary text-white shadow-lg" : "bg-muted text-muted-foreground hover:bg-primary/5 hover:text-primary"
                    )}
                  >
                    Client Support
                  </button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal direction="left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFaqCategory}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Accordion type="single" collapsible className="space-y-4">
                      {faqData[activeFaqCategory].map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`item-${index}`} 
                          className="bg-white rounded-[20px] border border-border px-8 overflow-hidden shadow-sm hover:shadow-md transition-all group"
                        >
                          <AccordionTrigger className="text-left font-bold text-[16px] md:text-[18px] text-foreground py-7 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-[14px] md:text-[15px] leading-[1.8] pb-8">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                </AnimatePresence>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13 – FINAL CTA */}
      <CTASection />
    </div>
  );
}

function StatItem({ val, suffix, label }: { val: number, suffix: string, label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-[34px] md:text-[56px] font-semibold text-accent leading-none">
        <Counter value={val} suffix={suffix} />
      </div>
      <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

function SolutionCard({ icon, title, desc, href }: { icon: any, title: string, desc: string, href: string }) {
  return (
    <ScrollReveal direction="up" className="h-full">
      <Link href={href}>
        <Card className="p-10 h-full rounded-[40px] border-none bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col items-center">
          <div className="size-16 rounded-2xl bg-muted flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            {React.cloneElement(icon, { className: "size-7" })}
          </div>
          <h3 className="text-[22px] font-semibold text-foreground mb-4">{title}</h3>
          <p className="text-[13px] text-muted-foreground leading-[1.8] mb-8 flex-grow">{desc}</p>
          <Button variant="link" className="p-0 h-auto text-primary font-bold group-hover:gap-2 transition-all">
            Learn More <ArrowRight className="ml-2 size-4" />
          </Button>
        </Card>
      </Link>
    </ScrollReveal>
  );
}

function ProcessCard({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <ScrollReveal direction="up" className="text-center space-y-4">
      <div className="text-[40px] md:text-[48px] font-bold text-primary/10 leading-none">{num}</div>
      <div className="space-y-1">
        <h4 className="text-[11px] font-bold text-foreground uppercase tracking-widest">{title}</h4>
        <p className="text-[12px] text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </ScrollReveal>
  );
}

function SubsidyBenefit({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="space-y-3">
      <div className="size-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
        {React.cloneElement(icon, { className: "size-5" })}
      </div>
      <h4 className="text-[14px] font-bold text-foreground">{title}</h4>
      <p className="text-[12px] text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, loc, review }: { name: string, loc: string, review: string }) {
  return (
    <ScrollReveal direction="up">
      <Card className="p-10 rounded-[40px] border-none bg-white shadow-sm space-y-8 flex flex-col h-full">
        <div className="flex gap-1 text-accent">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="size-4 fill-current" />)}
        </div>
        <p className="text-[14px] text-foreground italic leading-[1.8] flex-grow">"{review}"</p>
        <div className="flex items-center gap-4 border-t border-muted pt-6">
          <div className="size-10 rounded-full bg-muted flex items-center justify-center text-primary">
            <Star className="size-5" />
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-foreground">{name}</h4>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{loc}</p>
          </div>
        </div>
      </Card>
    </ScrollReveal>
  );
}
