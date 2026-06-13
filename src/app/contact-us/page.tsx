'use client';

import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent Successfully!",
      description: "Our solar consultants will reach out to you within 24 hours.",
    });
  };

  return (
    <div className="bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* HERO & FORM */}
      <section className="relative pt-24 pb-12 md:pt-48 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-start">
            <div className="space-y-8 md:space-y-12">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#EEF7FF] text-[#91C8FF] px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase">
                  Contact Us
                </span>
              </ScrollReveal>
              <div className="space-y-4 md:space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[32px] sm:text-[42px] lg:text-[64px] font-semibold text-black leading-[1.1] tracking-tight">
                    Let's Talk About <br /><span className="text-[#B8B8B8]">Your Solar Project</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[15px] lg:text-[16px] text-[#555] max-w-xl leading-[1.6]">
                    Whether you're looking to slash your home electricity bills or power your entire industrial complex, our experts are here to guide you.
                  </p>
                </ScrollReveal>
              </div>

              <div className="grid gap-4 md:gap-6">
                <ContactInfo icon={<Mail />} text="skyrenewable06@gmail.com" />
                <ContactInfo icon={<Phone />} text="+91 88711 05807 / 70002 09519" />
                <ContactInfo icon={<MapPin />} text="Bazar Chowk Complex , Kachandur, Gunderdehi, Balod C.G. 491223" />
              </div>

              <div className="grid gap-4 pt-4">
                <SmallFeatureCard icon={<Zap />} title="Consultation" desc="Get expert advice for your specific solar requirements." />
                <SmallFeatureCard icon={<ShieldCheck />} title="Support" desc="Dedicated assistance for installation and maintenance." />
              </div>
            </div>

            <ScrollReveal direction="left" delay={0.3}>
              <Card className="rounded-[30px] md:rounded-[40px] border-none bg-[#F9F9F9] shadow-sm overflow-hidden">
                <CardContent className="p-6 md:p-12 space-y-6 md:space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-[20px] md:text-[22px] font-semibold text-black">Request a Quote</h3>
                    <p className="text-[13px] md:text-[14px] text-[#777]">Fill out the form and we'll get back to you within 24 hours.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input placeholder="First Name" className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-white border-neutral-100 focus:ring-black" required />
                      <Input placeholder="Last Name" className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-white border-neutral-100 focus:ring-black" required />
                    </div>
                    <Input type="email" placeholder="Email Address" className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-white border-neutral-100 focus:ring-black" required />
                    <Input type="tel" placeholder="Phone Number" className="h-12 md:h-14 rounded-xl md:rounded-2xl bg-white border-neutral-100 focus:ring-black" required />
                    <select className="w-full h-12 md:h-14 rounded-xl md:rounded-2xl bg-white border border-neutral-100 px-4 text-[13px] md:text-[14px] text-black focus:ring-black outline-none appearance-none">
                      <option>Residential Installation</option>
                      <option>Commercial Solutions</option>
                      <option>Industrial EPC</option>
                      <option>Maintenance (AMC)</option>
                    </select>
                    <Textarea placeholder="Tell us about your roof size or power needs..." className="min-h-[100px] md:min-h-[120px] rounded-xl md:rounded-2xl bg-white border-neutral-100 focus:ring-black" />
                    <Button type="submit" variant="default" size="lg" className="w-full rounded-full py-6 md:py-7 font-bold text-[14px] transition-all">
                      Send Inquiry <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-20 md:py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal direction="right">
              <div className="h-[300px] md:h-[500px] w-full rounded-[24px] md:rounded-[40px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.753366917637!2d81.2587888!3d20.9624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU3JzQ0LjYiTiA4McKwMTUnMzEuNiJF!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                ></iframe>
              </div>
            </ScrollReveal>
            <div className="space-y-8 md:space-y-10 lg:pl-12 text-center lg:text-left">
              <ScrollReveal direction="up" className="space-y-4">
                <h2 className="text-[28px] md:text-[40px] font-semibold text-black leading-tight">Visit Our Headquarters</h2>
                <p className="text-[15px] text-[#555] leading-[1.6]">Our engineers are available for in-person consultations at our main facility in Balod.</p>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-8 md:gap-12 text-left">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px] md:text-[16px]">Head Office</h4>
                    <p className="text-[#555] text-[13px] leading-[1.6]">Bazar Chowk Complex , Kachandur, Gunderdehi, Balod, Chhattisgarh - 491223</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[15px] md:text-[16px]">Working Hours</h4>
                    <p className="text-[#555] text-[13px]">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <Button variant="outline" asChild className="rounded-full flex gap-2 transition-all h-12 px-8">
                    <a href="https://wa.me/918871105807" target="_blank">
                      <MessageSquare className="size-4" /> Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal direction="up" className="text-center mb-12 md:mb-20">
            <h2 className="text-[28px] md:text-[40px] font-semibold text-black">Common Questions</h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q1" className="bg-[#F9F9F9] rounded-[20px] md:rounded-[24px] border-none px-6 md:px-8">
              <AccordionTrigger className="text-left py-4 md:py-6 font-bold text-black hover:no-underline text-sm md:text-base">How much can I save with solar?</AccordionTrigger>
              <AccordionContent className="text-[#555] text-[13px] md:text-[14px] pb-6 leading-relaxed">Most residential customers reduce their electricity bills by 80-90%.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="bg-[#F9F9F9] rounded-[20px] md:rounded-[24px] border-none px-6 md:px-8">
              <AccordionTrigger className="text-left py-4 md:py-6 font-bold text-black hover:no-underline text-sm md:text-base">What subsidy is available?</AccordionTrigger>
              <AccordionContent className="text-[#555] text-[13px] md:text-[14px] pb-6 leading-relaxed">Homeowners can get up to ₹78,000 under current government schemes.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

function ContactInfo({ icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-4 text-black">
      <div className="bg-[#EEF7FF] p-3 rounded-xl shrink-0">{React.cloneElement(icon, { className: "size-5 text-[#91C8FF]" })}</div>
      <span className="text-[14px] md:text-[16px] font-medium leading-tight">{text}</span>
    </div>
  );
}

function SmallFeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-4 md:gap-6 p-6 md:p-8 bg-[#F9F9F9] rounded-[24px] md:rounded-[32px] border border-neutral-50">
      <div className="size-10 md:size-12 bg-[#EEF7FF] text-[#91C8FF] rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
        {React.cloneElement(icon, { className: "size-5 md:size-6" })}
      </div>
      <div className="space-y-1">
        <h4 className="font-bold text-black text-[15px] md:text-[16px] leading-tight">{title}</h4>
        <p className="text-[#555] text-[12px] md:text-[13px] leading-[1.6]">{desc}</p>
      </div>
    </div>
  );
}
