'use client';

import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function GetQuotePage() {
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
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <ScrollReveal direction="up">
                <span className="inline-block bg-[#EEF7FF] text-[#2563EB] px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase">
                  Proposal Request
                </span>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal direction="up" delay={0.1}>
                  <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-semibold text-black leading-[1.05] tracking-tight">
                    Get Your Custom <br /><span className="text-[#B8B8B8]">Solar Blueprint</span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <p className="text-[14px] lg:text-[16px] text-[#555] max-w-xl leading-[1.6]">
                    Start your journey to zero electricity bills. Provide your details and our engineers will create a customized proposal including system sizing, ROI analysis, and subsidy eligibility.
                  </p>
                </ScrollReveal>
              </div>

              <div className="grid gap-8">
                <FeatureItem icon={<Zap />} title="Technical Site Survey" desc="Comprehensive audit of your roof structure and shadow mapping." />
                <FeatureItem icon={<ShieldCheck />} title="Financial Modeling" desc="Detailed breakdown of payback periods and long-term savings." />
                <FeatureItem icon={<Users />} title="Expert Guidance" desc="Direct access to our certified solar engineers and technicians." />
              </div>
            </div>

            <ScrollReveal direction="left" delay={0.3}>
              <Card className="rounded-[40px] border-none bg-[#F9F9F9] shadow-sm overflow-hidden">
                <CardContent className="p-10 md:p-12 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-[22px] font-semibold text-black">Request Free Consultation</h3>
                    <p className="text-[14px] text-[#777]">No commitment required. Get a detailed technical proposal.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input placeholder="First Name" className="h-14 rounded-2xl bg-white border-neutral-100 focus:ring-black" required />
                      <Input placeholder="Last Name" className="h-14 rounded-2xl bg-white border-neutral-100 focus:ring-black" required />
                    </div>
                    <Input type="email" placeholder="Email Address" className="h-14 rounded-2xl bg-white border-neutral-100 focus:ring-black" required />
                    <Input type="tel" placeholder="Phone Number" className="h-14 rounded-2xl bg-white border-neutral-100 focus:ring-black" required />
                    <div className="space-y-4">
                      <label className="text-[12px] font-bold text-[#777] uppercase tracking-widest">Solar Solution</label>
                      <select className="w-full h-14 rounded-2xl bg-white border border-neutral-100 px-4 text-[14px] text-black focus:ring-black outline-none">
                        <option>Residential Rooftop</option>
                        <option>Commercial Rooftop</option>
                        <option>Industrial Plant</option>
                        <option>Battery Backup System</option>
                      </select>
                    </div>
                    <Textarea placeholder="Share details about your average monthly bill or roof area..." className="min-h-[120px] rounded-2xl bg-white border-neutral-100 focus:ring-black" />
                    <Button type="submit" variant="default" size="lg" className="w-full rounded-full py-7 font-bold text-[14px] transition-all">
                      Request Proposal <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-6">
      <div className="size-12 bg-[#EEF7FF] text-[#2563EB] rounded-xl flex items-center justify-center shrink-0">
        {React.cloneElement(icon, { className: "size-6" })}
      </div>
      <div className="space-y-1">
        <h4 className="font-bold text-black text-[16px]">{title}</h4>
        <p className="text-[#555] text-[13px] leading-[1.6]">{desc}</p>
      </div>
    </div>
  );
}
