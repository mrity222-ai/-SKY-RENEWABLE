
'use client';

import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Users,
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
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#F5F5F5] text-[#777] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">
                  Contact Us
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-semibold text-black leading-[1.05] tracking-tight">
                    Let's Talk About <br /><span className="text-[#B8B8B8]">Your Solar Project</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.6]">
                    Whether you're looking to slash your home electricity bills or power your entire industrial complex, our experts are here to guide you.
                  </p>
                </ScrollReveal>
              </div>

              <div className="grid gap-6">
                <ContactInfo icon={<Mail />} text="hello@arkasolar.in" />
                <ContactInfo icon={<Phone />} text="+91 98765 43210" />
                <ContactInfo icon={<MapPin />} text="Solar Plaza, MG Road, Ahmedabad - 380001" />
              </div>

              <div className="grid gap-4 pt-4">
                <SmallFeatureCard icon={<Zap />} title="Consultation" desc="Get expert advice for your specific solar requirements." />
                <SmallFeatureCard icon={<ShieldCheck />} title="Support" desc="Dedicated assistance for installation and maintenance." />
              </div>
            </div>

            <ScrollReveal direction="left" delay={0.3}>
              <Card className="rounded-[40px] border-none bg-[#F9F9F9] shadow-sm overflow-hidden">
                <CardContent className="p-10 md:p-12 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-[22px] font-semibold text-black">Request a Quote</h3>
                    <p className="text-[14px] text-[#777]">Fill out the form and we'll get back to you within 24 hours.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input placeholder="First Name" className="h-14 rounded-2xl bg-white border-neutral-100 focus:ring-black" required />
                      <Input placeholder="Last Name" className="h-14 rounded-2xl bg-white border-neutral-100 focus:ring-black" required />
                    </div>
                    <Input type="email" placeholder="Email Address" className="h-14 rounded-2xl bg-white border-neutral-100 focus:ring-black" required />
                    <Input type="tel" placeholder="Phone Number" className="h-14 rounded-2xl bg-white border-neutral-100 focus:ring-black" required />
                    <select className="w-full h-14 rounded-2xl bg-white border border-neutral-100 px-4 text-[14px] text-black focus:ring-black outline-none">
                      <option>Residential Installation</option>
                      <option>Commercial Solutions</option>
                      <option>Industrial EPC</option>
                      <option>Maintenance (AMC)</option>
                    </select>
                    <Textarea placeholder="Tell us about your roof size or power needs..." className="min-h-[120px] rounded-2xl bg-white border-neutral-100 focus:ring-black" />
                    <Button type="submit" size="lg" className="w-full bg-black text-white rounded-full py-7 font-bold text-[14px] hover:bg-neutral-800 transition-all">
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
      <section className="py-32 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right">
              <div className="h-[500px] w-full rounded-[40px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.38243177652!2d72.50766345820313!3d23.022505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd1170aff2f4!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                ></iframe>
              </div>
            </ScrollReveal>
            <div className="space-y-10 lg:pl-12">
              <ScrollReveal direction="up" className="space-y-4">
                <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Visit Our Headquarters</h2>
                <p className="text-[14px] text-[#555] leading-[1.6]">Our engineers are available for in-person consultations at our main facility in Ahmedabad.</p>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[16px]">Head Office</h4>
                    <p className="text-[#555] text-[13px] leading-[1.6]">Solar Plaza, 4th Floor, Ahmedabad, Gujarat - 380001</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-black text-[16px]">Working Hours</h4>
                    <p className="text-[#555] text-[13px]">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
                <Button variant="outline" className="rounded-full flex gap-2 border-black/10 hover:bg-black hover:text-white transition-all">
                  <MessageSquare className="size-4" /> Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal direction="up" className="text-center mb-20">
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-black">Common Questions</h2>
          </ScrollReveal>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q1" className="bg-[#F9F9F9] rounded-[24px] border-none px-8">
              <AccordionTrigger className="text-left py-6 font-bold text-black hover:no-underline">How much can I save with solar?</AccordionTrigger>
              <AccordionContent className="text-[#555] text-[14px] pb-6 leading-relaxed">Most residential customers reduce their electricity bills by 80-90%.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="bg-[#F9F9F9] rounded-[24px] border-none px-8">
              <AccordionTrigger className="text-left py-6 font-bold text-black hover:no-underline">What subsidy is available?</AccordionTrigger>
              <AccordionContent className="text-[#555] text-[14px] pb-6 leading-relaxed">Homeowners can get up to ₹78,000 under current government schemes.</AccordionContent>
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
      <div className="bg-[#F5F5F5] p-3 rounded-xl">{React.cloneElement(icon, { className: "size-5" })}</div>
      <span className="text-[16px] font-medium">{text}</span>
    </div>
  );
}

function SmallFeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-6 p-8 bg-[#F9F9F9] rounded-[32px] border border-neutral-50">
      <div className="size-12 bg-black text-white rounded-xl flex items-center justify-center shrink-0">
        {React.cloneElement(icon, { className: "size-6" })}
      </div>
      <div className="space-y-1">
        <h4 className="font-bold text-black text-[16px]">{title}</h4>
        <p className="text-[#555] text-[13px] leading-[1.6]">{desc}</p>
      </div>
    </div>
  );
}
