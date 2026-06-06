
"use client";

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

export default function GetQuotePage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent Successfully!",
      description: "Our solar consultants will reach out to you within 24 hours.",
    });
  };

  const handleMiniSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscription Active",
      description: "You'll receive our latest solar insights shortly.",
    });
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* SECTION 1 – CONTACT HERO */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side: Info & Features */}
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-accent font-black tracking-widest text-sm uppercase">Get a Quote</span>
                <h1 className="text-5xl md:text-6xl font-bold font-headline text-primary leading-tight">
                  Let's Talk About Your <br /> Solar Project
                </h1>
                <p className="text-muted-foreground text-xl leading-relaxed max-w-xl">
                  Whether you're looking to slash your home electricity bills or power your entire industrial complex, our experts are here to guide you.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-center gap-4 text-primary">
                  <div className="bg-white p-3 rounded-xl shadow-sm"><Mail className="size-5" /></div>
                  <span className="text-lg font-medium">hello@arkasolar.in</span>
                </div>
                <div className="flex items-center gap-4 text-primary">
                  <div className="bg-white p-3 rounded-xl shadow-sm"><Phone className="size-5" /></div>
                  <span className="text-lg font-medium">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4 text-primary">
                  <div className="bg-white p-3 rounded-xl shadow-sm"><MapPin className="size-5" /></div>
                  <span className="text-lg font-medium">Solar Plaza, MG Road, Ahmedabad - 380001</span>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid gap-4 pt-4">
                <FeatureSmallCard 
                  icon={<Zap className="size-6 text-accent" />}
                  title="Solar Consultation"
                  desc="Get expert advice for your residential or commercial solar requirements."
                />
                <FeatureSmallCard 
                  icon={<ShieldCheck className="size-6 text-accent" />}
                  title="Project Support"
                  desc="Connect with our solar experts for planning, installation, and maintenance support."
                />
                <FeatureSmallCard 
                  icon={<Users className="size-6 text-accent" />}
                  title="Business Inquiry"
                  desc="Discuss partnerships, dealership opportunities, and business collaborations."
                />
              </div>
            </div>

            {/* Right Side: Contact Form Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-[40px] blur-3xl -z-10 opacity-50"></div>
              <Card className="rounded-[32px] border-none shadow-2xl overflow-hidden glass-morphism">
                <CardContent className="p-8 md:p-12 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary font-headline">Request a Free Quote</h3>
                    <p className="text-muted-foreground">Fill out the form and we'll get back to you shortly.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-primary/60 uppercase tracking-widest">First Name</label>
                        <Input placeholder="John" className="h-14 rounded-2xl bg-white/50 border-primary/5 focus:ring-accent" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-primary/60 uppercase tracking-widest">Last Name</label>
                        <Input placeholder="Doe" className="h-14 rounded-2xl bg-white/50 border-primary/5 focus:ring-accent" required />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-primary/60 uppercase tracking-widest">Email Address</label>
                        <Input type="email" placeholder="john@example.com" className="h-14 rounded-2xl bg-white/50 border-primary/5 focus:ring-accent" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-primary/60 uppercase tracking-widest">Phone Number</label>
                        <Input type="tel" placeholder="+91 00000 00000" className="h-14 rounded-2xl bg-white/50 border-primary/5 focus:ring-accent" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary/60 uppercase tracking-widest">Service Required</label>
                      <select className="w-full h-14 rounded-2xl bg-white/50 border border-primary/5 px-4 text-sm font-medium focus:ring-accent outline-none">
                        <option>Residential Installation</option>
                        <option>Commercial Solutions</option>
                        <option>Industrial EPC</option>
                        <option>Maintenance (AMC)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary/60 uppercase tracking-widest">Message</label>
                      <Textarea placeholder="Tell us about your roof size or power needs..." className="min-h-[120px] rounded-2xl bg-white/50 border-primary/5 focus:ring-accent" />
                    </div>
                    <Button type="submit" className="w-full h-16 rounded-full bg-primary text-white text-lg font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                      Send Message <ArrowRight className="ml-2 size-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – LOCATION SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Map */}
            <div className="h-[500px] w-full rounded-[40px] overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.38243177652!2d72.50766345820313!3d23.022505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd1170aff2f4!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
              ></iframe>
            </div>

            {/* Right Side: Location Info */}
            <div className="space-y-10 lg:pl-12">
              <div className="space-y-4">
                <span className="text-accent font-black tracking-widest text-sm uppercase">Our Location</span>
                <h2 className="text-4xl font-bold font-headline text-primary">Connecting Near and Far</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-bold text-primary text-lg">Head Office</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Solar Plaza, 4th Floor,<br />
                      Main MG Road, Ahmedabad,<br />
                      Gujarat - 380001
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-primary text-lg">Branch Office</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Industry Park, Block B,<br />
                      Sanand GIDC, Ahmedabad,<br />
                      Gujarat - 382110
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-bold text-primary text-lg">Working Hours</h4>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="size-4 text-accent" />
                      <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-primary text-lg">Contact Direct</h4>
                    <p className="text-muted-foreground text-sm">hello@arkasolar.in</p>
                    <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                  </div>
                  <Button variant="outline" className="rounded-full flex gap-2 border-primary/20 hover:bg-primary hover:text-white transition-all">
                    <MessageSquare className="size-4" /> Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – FAQ SECTION */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Side: FAQ Header & Mini Form */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold font-headline text-primary leading-tight">
                  Do You Have <br /> Any Questions?
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We've answered the most common questions about solar here. If you can't find what you're looking for, reach out to us directly.
                </p>
              </div>

              <Card className="p-8 rounded-[32px] border-none shadow-xl bg-primary text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10"><Zap className="size-32" /></div>
                <div className="relative z-10 space-y-6">
                  <h4 className="text-xl font-bold font-headline">Get Solar Insights</h4>
                  <form onSubmit={handleMiniSubmit} className="flex gap-2">
                    <Input placeholder="Your email" className="bg-white/10 border-white/20 text-white rounded-full h-12" required />
                    <Button type="submit" size="icon" className="bg-accent text-primary rounded-full h-12 w-12 shrink-0 hover:bg-white transition-colors">
                      <Send className="size-5" />
                    </Button>
                  </form>
                  <p className="text-xs text-white/60">Subscribe to receive the latest government subsidy updates.</p>
                </div>
              </Card>
            </div>

            {/* Right Side: Accordion FAQs */}
            <div className="lg:col-span-7">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <FaqItem 
                  value="item-1"
                  question="How much can I save with solar?"
                  answer="Most residential customers reduce their electricity bills by 80-90%. Depending on your usage, the system pays for itself in 4 to 6 years, providing free electricity for the remaining 20+ years of its lifespan."
                />
                <FaqItem 
                  value="item-2"
                  question="What government subsidy is available?"
                  answer="Under the PM-Suryodaya Yojana, homeowners can get up to ₹78,000 as a direct subsidy for systems up to 3kW. For systems above 3kW, additional state-specific incentives may apply."
                />
                <FaqItem 
                  value="item-3"
                  question="How long does installation take?"
                  answer="The physical installation for a residential system typically takes 3 to 5 days. However, the end-to-end process, including site survey, designing, and government approvals for net-metering, usually takes 4 to 6 weeks."
                />
                <FaqItem 
                  value="item-4"
                  question="Do you provide AMC support?"
                  answer="Yes, Arkā Solar offers comprehensive Annual Maintenance Contracts (AMC). This includes periodic cleaning, electrical health checks, and 24/7 performance monitoring to ensure maximum energy generation."
                />
                <FaqItem 
                  value="item-5"
                  question="What warranty is included?"
                  answer="We provide a 25-year performance warranty on solar panels, 5 to 10 years on inverters, and a 5-year workmanship warranty on our mounting structures and installation quality."
                />
                <FaqItem 
                  value="item-6"
                  question="How do I book a site survey?"
                  answer="You can book a survey by filling out our main inquiry form above, calling us directly, or clicking the 'Book Site Survey' button found across our website. One of our certified engineers will visit within 48 hours."
                />
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureSmallCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="group flex gap-6 p-6 bg-white rounded-2xl border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="bg-[#F8F9FA] group-hover:bg-accent/10 p-4 rounded-xl transition-colors h-fit shrink-0">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="font-bold text-primary text-lg">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FaqItem({ value, question, answer }: { value: string, question: string, answer: string }) {
  return (
    <AccordionItem value={value} className="bg-white rounded-2xl border-none shadow-sm px-8 overflow-hidden">
      <AccordionTrigger className="text-left py-6 font-bold text-primary hover:no-underline hover:text-accent transition-colors">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
