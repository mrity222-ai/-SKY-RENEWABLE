
"use client";

import React from "react";
import { ShieldCheck, Zap, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function GetQuotePage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Proposal Requested!",
      description: "Our engineers will contact you to schedule a site visit.",
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-primary pt-32 pb-20 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold font-headline leading-tight">
            Start Your <span className="text-accent">Solar Journey</span>
          </h1>
          <p className="text-xl text-white/70">
            Get a high-precision energy audit and a customized project proposal for your property. 
            Free of charge, zero commitment.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left: Benefits & Trust */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-primary font-headline">Why request a site visit?</h2>
                <p className="text-muted-foreground text-lg">
                  Every roof is unique. Our experts conduct a thorough structural and shadow analysis to ensure maximum energy yield.
                </p>
              </div>

              <div className="grid gap-8">
                <BenefitItem 
                  title="Professional Solar Audit" 
                  desc="Accurate assessment of your current consumption vs. solar potential."
                />
                <BenefitItem 
                  title="Shadow Analysis" 
                  desc="3D mapping of your roof to identify any potential generation bottlenecks."
                />
                <BenefitItem 
                  title="Subsidy Eligibility Check" 
                  desc="We verify your PM-Suryodaya eligibility and explain the paperwork."
                />
              </div>

              <Card className="p-8 bg-accent/10 border-none rounded-[40px] flex items-center gap-6">
                <div className="bg-primary p-4 rounded-2xl">
                  <ShieldCheck className="size-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Certified Engineers Only</h4>
                  <p className="text-sm text-primary/70">We never send sales agents. Only certified solar engineers visit our client sites.</p>
                </div>
              </Card>
            </div>

            {/* Right: The Form */}
            <div className="lg:col-span-7">
              <Card className="p-12 rounded-[48px] shadow-2xl border-none -mt-32 bg-white relative z-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-primary/40 uppercase tracking-widest">Full Name</label>
                      <Input placeholder="Arjun Sharma" className="h-14 rounded-2xl bg-primary/5 border-none" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-primary/40 uppercase tracking-widest">Phone Number</label>
                      <Input type="tel" placeholder="+91 98XXX XXXXX" className="h-14 rounded-2xl bg-primary/5 border-none" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-primary/40 uppercase tracking-widest">Project Address</label>
                    <Input placeholder="Building, Street, Landmark" className="h-14 rounded-2xl bg-primary/5 border-none" required />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-primary/40 uppercase tracking-widest">Average Monthly Bill</label>
                      <select className="w-full h-14 rounded-2xl bg-primary/5 border-none px-4 text-sm font-bold">
                        <option>Below ₹3,000</option>
                        <option>₹3,000 - ₹7,000</option>
                        <option>₹7,000 - ₹15,000</option>
                        <option>Above ₹15,000</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-primary/40 uppercase tracking-widest">Installation Type</label>
                      <select className="w-full h-14 rounded-2xl bg-primary/5 border-none px-4 text-sm font-bold">
                        <option>Residential Rooftop</option>
                        <option>Commercial Property</option>
                        <option>Industrial Factory</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-primary/40 uppercase tracking-widest">Additional Details</label>
                    <Textarea placeholder="Specific requirements or best time to call..." className="rounded-2xl bg-primary/5 border-none min-h-[120px]" />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-white py-8 rounded-full text-xl font-black shadow-xl hover:bg-primary/90 transition-all flex gap-3">
                    Request Site Survey <ArrowRight className="size-6" />
                  </Button>
                  
                  <p className="text-center text-xs text-muted-foreground font-medium">
                    By clicking, you agree to our privacy policy and data protection terms.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BenefitItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="bg-accent/20 p-2 rounded-lg mt-1">
        <CheckCircle2 className="size-5 text-primary" />
      </div>
      <div>
        <h4 className="font-bold text-primary text-xl">{title}</h4>
        <p className="text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
