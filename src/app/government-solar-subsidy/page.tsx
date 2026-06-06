
'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Banknote, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ClipboardCheck,
  FileText,
  UserCheck,
  Zap,
  HelpCircle,
  TrendingUp,
  Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calculator } from "@/components/sections/Calculator";

export default function SubsidyGuidePage() {
  const overviewCards = [
    { icon: <Banknote />, title: "Lower Installation Cost", desc: "Significant reduction in upfront capital required for your home solar system." },
    { icon: <TrendingUp />, title: "Faster ROI", desc: "Shorten the payback period of your investment through direct financial assistance." },
    { icon: <Leaf />, title: "Clean Energy Adoption", desc: "Supporting India's transition to a greener, carbon-neutral future." },
    { icon: <Zap />, title: "Reduced Electricity Bills", desc: "Maximize your monthly savings by combining solar generation with net-metering." },
  ];

  const benefitCards = [
    { title: "Reduced Upfront Investment", desc: "Direct bank transfers or billing adjustments reduce your initial cash outflow." },
    { title: "Faster Payback Period", desc: "Most subsidized systems reach break-even within 4 to 5 years." },
    { title: "Long-Term Savings", desc: "Lock in your electricity costs for the next 25 years with a high-performance system." },
    { title: "Environment-Friendly Energy", desc: "Offset tons of CO2 emissions while powering your home with the sun." },
    { title: "Energy Independence", desc: "Reduce reliance on the grid and protect yourself from rising utility tariffs." },
    { title: "Increased Property Value", desc: "Solar-powered homes with active net-metering often command a premium in the market." },
  ];

  const documentCards = [
    { icon: <FileText />, title: "Aadhaar Card", desc: "Identity proof for the property owner." },
    { icon: <FileText />, title: "PAN Card", desc: "Required for financial and tax verification." },
    { icon: <Zap />, title: "Electricity Bill", desc: "Last 6 months' bills for consumption audit." },
    { icon: <ShieldCheck />, title: "Property Proof", desc: "Ownership documents for the installation site." },
    { icon: <UserCheck />, title: "Bank Details", desc: "Canceled cheque for direct subsidy transfer." },
    { icon: <FileText />, title: "Photos", desc: "Passport-size photos and site preparation images." },
  ];

  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* SECTION 1 – HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">
                  Government Solar Subsidy
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[28px] md:text-[34px] lg:text-[48px] font-semibold text-black leading-[1.05] tracking-tight">
                    Save More With Government <br />
                    <span className="text-[#B8B8B8]">Solar Subsidy Programs</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.6]">
                    Reduce your solar installation cost with official subsidy benefits. Understand how government schemes can help you transition to clean energy faster.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-black text-white rounded-full px-10 py-7 text-[14px] font-semibold hover:bg-neutral-800 transition-all">
                    <Link href="/get-quote">Check Eligibility</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-black/10 text-black rounded-full px-10 py-7 text-[14px] font-semibold hover:bg-neutral-50">
                    <Link href="/get-quote">Get Free Solar Quote</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.4} className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/arka_subsidy_hero/1200/800" 
                alt="Solar Subsidy Overview" 
                fill 
                className="object-cover"
                priority
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 – SUBSIDY OVERVIEW */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">What Is Solar Subsidy?</h2>
                <p className="text-[14px] text-[#555] leading-[1.8]">
                  A solar subsidy is a financial incentive provided by the central and state governments to encourage the adoption of rooftop solar energy. These schemes are designed to make renewable energy accessible to everyone by bearing a portion of the installation cost. 
                  <br /><br />
                  In India, programs like the PM-Suryodaya Yojana provide direct bank transfers to homeowners, significantly lowering the barrier to entry and promoting national energy security.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-6">
              {overviewCards.map((card, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="up">
                  <div className="p-8 bg-white rounded-[32px] shadow-sm space-y-4 h-full">
                    <div className="size-12 bg-[#F5F5F5] rounded-xl flex items-center justify-center text-black">
                      {React.cloneElement(card.icon as React.ReactElement, { className: "size-6" })}
                    </div>
                    <h3 className="text-[16px] font-bold text-black">{card.title}</h3>
                    <p className="text-[12px] text-[#777] leading-relaxed">{card.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – SUBSIDY BENEFITS */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Benefits Of Solar Subsidy</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitCards.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <Card className="p-10 h-full rounded-[40px] border-none bg-[#F9F9F9] shadow-sm hover:shadow-xl transition-all group">
                  <div className="size-10 rounded-full bg-black text-white flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-black mb-4">{benefit.title}</h3>
                  <p className="text-[13px] text-[#555] leading-[1.6]">{benefit.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 – ELIGIBILITY CRITERIA */}
      <section className="py-32 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <ScrollReveal direction="right" className="space-y-6">
                <h2 className="text-[30px] lg:text-[40px] font-semibold">Who Can Apply?</h2>
                <p className="text-white/40 text-[14px]">Subsidy eligibility is primarily focused on the residential sector to drive mass adoption of rooftop solar.</p>
              </ScrollReveal>
              <div className="space-y-4">
                {[
                  "Individual Residential Property Owners",
                  "Valid Electricity Connection in Owner's Name",
                  "Adequate Shade-Free Rooftop Availability",
                  "Installation through MNRE/DISCOM Authorized Vendors",
                  "Complete KYC and Ownership Documentation"
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1} direction="right" className="flex items-center gap-4 group">
                    <div className="size-6 rounded-full border border-white/20 flex items-center justify-center text-accent">
                      <CheckCircle2 className="size-4" />
                    </div>
                    <span className="text-[14px] font-medium text-white/80">{item}</span>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <ScrollReveal direction="left" className="relative aspect-square rounded-[60px] overflow-hidden opacity-80">
              <Image src="https://picsum.photos/seed/arka_eligibility/800/800" alt="Eligibility Illustration" fill className="object-cover" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 – HOW TO APPLY */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-24">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Solar Subsidy Application Process</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { title: "Consultation", desc: "Energy audit & system sizing." },
              { title: "Site Survey", desc: "Technical inspection of roof." },
              { title: "Design", desc: "Custom 3D layout engineering." },
              { title: "Installation", desc: "Deployment by certified team." },
              { title: "Documentation", desc: "Filing of subsidy paperwork." },
              { title: "Processing", desc: "Verification & bank transfer." }
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up" className="text-center space-y-6">
                <div className="text-[48px] font-bold text-black/5 leading-none">0{i + 1}</div>
                <div className="space-y-2">
                  <h4 className="text-[13px] font-bold text-black uppercase tracking-widest">{step.title}</h4>
                  <p className="text-[12px] text-[#777] leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – DOCUMENTS REQUIRED */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Required Documents</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentCards.map((doc, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <Card className="p-8 rounded-[32px] border-none bg-white shadow-sm flex items-start gap-6 group hover:shadow-xl transition-all">
                  <div className="size-12 rounded-xl bg-[#F5F5F5] flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                    {React.cloneElement(doc.icon as React.ReactElement, { className: "size-6" })}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[16px] font-bold text-black">{doc.title}</h4>
                    <p className="text-[12px] text-[#777] leading-relaxed">{doc.desc}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – SOLAR SAVINGS CALCULATOR */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <Calculator />
        </div>
      </section>

      {/* SECTION 8 – FAQ SECTION */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Common Questions About Subsidy</h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q1" className="bg-[#F9F9F9] rounded-[24px] border-none px-8">
              <AccordionTrigger className="text-left font-semibold text-black py-6">What is a solar subsidy?</AccordionTrigger>
              <AccordionContent className="text-[#555] pb-6 leading-relaxed">It is a financial incentive from the government to lower the net cost of solar installation for homeowners, paid as a direct bank transfer after installation.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="bg-[#F9F9F9] rounded-[24px] border-none px-8">
              <AccordionTrigger className="text-left font-semibold text-black py-6">Who is eligible for solar subsidy?</AccordionTrigger>
              <AccordionContent className="text-[#555] pb-6 leading-relaxed">Currently, residential property owners with a valid domestic electricity connection are eligible. Industrial and commercial properties generally do not receive a direct subsidy but benefit from tax incentives like accelerated depreciation.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3" className="bg-[#F9F9F9] rounded-[24px] border-none px-8">
              <AccordionTrigger className="text-left font-semibold text-black py-6">How much subsidy can I receive?</AccordionTrigger>
              <AccordionContent className="text-[#555] pb-6 leading-relaxed">Under the PM-Suryodaya scheme, you can receive up to ₹78,000 for systems up to 3kW. The amount depends on the system size and the specific state-central blend of the scheme.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4" className="bg-[#F9F9F9] rounded-[24px] border-none px-8">
              <AccordionTrigger className="text-left font-semibold text-black py-6">How long does approval take?</AccordionTrigger>
              <AccordionContent className="text-[#555] pb-6 leading-relaxed">The technical approval (Feasibility) usually takes 1-2 weeks. The actual disbursement of funds after installation and net-metering can take 4-8 weeks depending on DISCOM processing times.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* SECTION 9 – WHY CHOOSE US */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Why Choose Our Subsidy Experts</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Certified Installation Team", desc: "Expert engineers ensuring 100% compliance with government safety standards." },
              { title: "Documentation Support", desc: "End-to-end handling of your application to ensure zero rejection rates." },
              { title: "Premium Components", desc: "We use only approved, high-efficiency Tier-1 solar modules and inverters." },
              { title: "End-To-End Service", desc: "From technical survey to final grid-tie and subsidy credit." },
              { title: "Fast Installation", desc: "Turnkey delivery within record timelines for residential systems." },
              { title: "Dedicated Support", desc: "Post-installation monitoring and lifecycle maintenance support." }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="space-y-4 text-center md:text-left">
                  <div className="size-12 bg-black text-white rounded-xl flex items-center justify-center mx-auto md:mx-0">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <h3 className="text-[18px] font-bold text-black">{item.title}</h3>
                  <p className="text-[13px] text-[#555] leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 – FINAL CTA */}
      <section className="py-32 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal direction="zoom">
            <div className="text-center text-white space-y-10 relative overflow-hidden">
              <div className="space-y-6">
                <h2 className="text-[30px] lg:text-[48px] font-semibold leading-tight">Ready To Reduce Your <br /> <span className="text-accent">Solar Installation Cost?</span></h2>
                <p className="text-white/50 text-[14px] max-w-xl mx-auto font-normal leading-[1.6]">
                  Get expert guidance on subsidy eligibility and start your solar journey today. Our consultants are ready to assist you.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-black font-semibold rounded-full px-12 py-8 text-[14px] hover:bg-neutral-200">
                  <Link href="/get-quote">Check Eligibility</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 text-white rounded-full px-12 py-8 text-[14px] font-semibold hover:bg-white/10">
                  <Link href="/get-quote">Book Free Consultation</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
