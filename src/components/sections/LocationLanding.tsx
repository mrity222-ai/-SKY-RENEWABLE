'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Zap, 
  Home, 
  Factory, 
  Wrench, 
  Sun, 
  Cpu, 
  ClipboardCheck, 
  Banknote,
  CheckCircle2,
  MapPin,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceFAQ } from "@/components/sections/ServiceFAQ";

interface LocationLandingProps {
  city: string;
  nearbyAreas: string[];
}

export function LocationLanding({ city, nearbyAreas }: LocationLandingProps) {
  const services = [
    { title: "Rooftop Solar Installation", desc: "Complete rooftop solar setup for homes and businesses.", icon: <Home /> },
    { title: "Residential Solar", desc: "Optimized solar solutions for independent houses and villas.", icon: <Sun /> },
    { title: "Commercial Solar", desc: "Reducing operational costs for shops, offices and hospitals.", icon: <Factory /> },
    { title: "Industrial Solar", desc: "Large-scale MW plants for heavy manufacturing units.", icon: <Zap /> },
    { title: "Solar EPC Solutions", desc: "Turnkey project execution from design to commissioning.", icon: <Cpu /> },
    { title: "Operation & Maintenance", desc: "Regular health checks and system optimization.", icon: <Wrench /> },
    { title: "Solar Panel Cleaning", desc: "Specialized cleaning to maximize energy generation.", icon: <Sun /> },
    { title: "Net Metering Assistance", desc: "End-to-end liaison for grid connectivity approvals.", icon: <ClipboardCheck /> },
    { title: "PM Surya Ghar Support", desc: "Expert guidance for central government solar subsidies.", icon: <Banknote /> },
  ];

  const benefits = [
    `Local service support in ${city}`,
    "Experienced solar professionals",
    "End-to-end project execution",
    "High-quality Tier-1 components",
    "Subsidy and net metering guidance",
    "Timely project delivery",
    "Dedicated after-sales support"
  ];

  const faqs = [
    {
      question: `Which is the best solar company in ${city}?`,
      answer: `SKY RENEWABLE is widely considered the best solar company in ${city}, providing comprehensive EPC, maintenance, and subsidy support with a focus on engineering excellence.`
    },
    {
      question: `Does SKY RENEWABLE provide rooftop solar installation in ${city}?`,
      answer: `Yes, we provide professional rooftop solar installations in ${city} for residential, commercial, and industrial properties using hot-dip galvanized mounting structures.`
    },
    {
      question: `Is PM Surya Ghar subsidy available in ${city}?`,
      answer: `Yes, residents of ${city} are eligible for central government subsidies up to ₹78,000 under the PM-Suryodaya / PM Surya Ghar Muft Bijli Yojana.`
    },
    {
      question: `Do you provide net metering assistance in ${city}?`,
      answer: `Absolutely. We handle the entire process of applying for net-metering and coordinating with the DISCOM in ${city} for meter synchronization.`
    },
    {
      question: `Do you provide solar maintenance services in ${city}?`,
      answer: `Yes, we offer specialized maintenance and Annual Maintenance Contracts (AMC) including panel cleaning and health audits for all solar systems in ${city}.`
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `SKY RENEWABLE ${city}`,
    "image": "https://skyrenewable.in/og-image.jpg",
    "@id": `https://skyrenewable.in/solar-company-in-${city.toLowerCase()}`,
    "url": `https://skyrenewable.in/solar-company-in-${city.toLowerCase()}`,
    "telephone": "+91-88711-05807",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "Chhattisgarh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCircle",
      "itemOffered": {
        "@type": "Service",
        "name": "Solar Panel Installation"
      },
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 21.2787,
        "longitude": 81.6296
      },
      "geoRadius": "50000"
    }
  };

  return (
    <div className="bg-white selection:bg-primary/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <ServiceHero 
        badge={`SKY RENEWABLE IN ${city.toUpperCase()}`}
        titleLine1={`Best Solar Company in`}
        titleLine2={`${city}, Chhattisgarh`}
        description={`SKY RENEWABLE provides professional rooftop solar installation, solar EPC solutions, maintenance, panel cleaning, net metering assistance, and PM Surya Ghar Yojana support in ${city}.`}
        image="/ab/4.jpg"
        primaryButtonText="Get Free Site Survey"
        secondaryButtonText="Call Solar Expert"
      />

      {/* SERVICES */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16 space-y-4">
            <h2 className="text-[30px] lg:text-[40px] font-bold text-[#0F172A]">Solar Services in {city}</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">Complete energy solutions tailored for {city}'s residential and industrial needs.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.05} direction="up">
                <Card className="p-8 h-full rounded-[32px] border-none shadow-sm hover:shadow-xl transition-all group bg-white">
                  <div className="size-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    {React.cloneElement(s.icon as React.ReactElement, { className: "size-6" })}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{s.title}</h3>
                  <p className="text-[14px] text-[#64748B] leading-relaxed">{s.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
               <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl">
                 <Image 
                   src="/ab/1.jpg" 
                   alt={`Solar Experts in ${city}`} 
                   fill 
                   className="object-cover" 
                   data-ai-hint="solar engineers"
                 />
               </div>
            </ScrollReveal>
            <div className="space-y-8">
              <ScrollReveal direction="left">
                <h2 className="text-[30px] lg:text-[40px] font-bold text-[#0F172A]">Why Choose Us in {city}?</h2>
                <div className="grid gap-4 mt-8">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                      <CheckCircle2 className="size-5 text-primary shrink-0" />
                      <span className="text-[15px] font-bold text-[#0F172A]">{b}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 text-center space-y-8">
          <ScrollReveal direction="up">
            <h2 className="text-[30px] lg:text-[40px] font-bold text-[#0F172A]">Location Coverage</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto mt-4">
              Providing top-tier solar engineering services in {city} and surrounding areas including {nearbyAreas.join(", ")}.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="p-6 bg-white rounded-[32px] border border-[#E2E8F0] shadow-sm flex items-center gap-4">
                <MapPin className="size-6 text-primary" />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Operating District</p>
                  <p className="text-lg font-bold text-[#0F172A]">{city}, CG</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ServiceFAQ serviceName={`Solar Energy in ${city}`} faqs={faqs} />

      {/* CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[48px] bg-[#0F172A] px-8 py-20 text-center shadow-2xl">
            <div className="relative z-10 space-y-8">
              <h2 className="text-[32px] md:text-[48px] font-bold text-white tracking-tight">
                Start Your Solar Journey in {city}
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Book a free consultation with SKY RENEWABLE and reduce your electricity bills with reliable solar energy solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-white rounded-full px-10 h-14 font-bold text-[15px] hover:bg-primary/90 transition-all w-full sm:w-auto">
                  <Link href="/get-quote">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-[#22C55E] border-none text-white rounded-full px-10 h-14 font-bold text-[15px] hover:bg-[#1BA850] transition-all w-full sm:w-auto">
                  <a href={`https://wa.me/918871105807?text=Hi, I am from ${city} and I'm interested in solar installation.`} target="_blank">
                    <MessageCircle className="size-5 mr-2" /> WhatsApp Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
