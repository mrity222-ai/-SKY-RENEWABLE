
"use client";

import { Phone, Mail, MapPin, Zap, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Our solar experts will contact you within 24 hours.",
    });
  };

  return (
    <div className="bg-white">
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold font-headline">Let's <span className="text-accent">Talk Solar</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">Get a personalized proposal or speak with our energy consultants for free.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold font-headline text-primary">Get in Touch</h2>
                <p className="text-muted-foreground text-lg">We're available across multiple channels to answer your queries.</p>
              </div>

              <div className="grid gap-8">
                <ContactInfoItem 
                  icon={<Phone className="size-6 text-accent" />}
                  title="Call Us"
                  desc="+91 98765 43210"
                />
                <ContactInfoItem 
                  icon={<Mail className="size-6 text-accent" />}
                  title="Email Us"
                  desc="hello@arkasolar.in"
                />
                <ContactInfoItem 
                  icon={<MapPin className="size-6 text-accent" />}
                  title="Visit Office"
                  desc="Solar Plaza, MG Road, Ahmedabad - 380001"
                />
              </div>

              <Card className="p-8 bg-primary/5 border-none rounded-[32px] space-y-6">
                <div className="flex gap-4">
                  <div className="bg-accent/20 p-3 rounded-2xl"><Clock className="size-6 text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-primary">Working Hours</h4>
                    <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full flex gap-2">
                  <MessageSquare className="size-5" /> WhatsApp Support
                </Button>
              </Card>
            </div>

            <div className="lg:col-span-7">
              <Card className="p-12 rounded-[48px] shadow-2xl border-none">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary uppercase tracking-wider">Full Name</label>
                      <Input placeholder="John Doe" className="rounded-xl h-14 bg-primary/5 border-none focus:ring-2 ring-accent" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary uppercase tracking-wider">Phone Number</label>
                      <Input type="tel" placeholder="+91 00000 00000" className="rounded-xl h-14 bg-primary/5 border-none focus:ring-2 ring-accent" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="rounded-xl h-14 bg-primary/5 border-none focus:ring-2 ring-accent" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Select Interest</label>
                    <select className="w-full h-14 rounded-xl bg-primary/5 border-none px-4 focus:ring-2 ring-accent text-sm font-medium">
                      <option>Residential Rooftop</option>
                      <option>Commercial/Industrial</option>
                      <option>AMC / Maintenance</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Your Message</label>
                    <Textarea placeholder="How can we help you?" className="rounded-xl min-h-[150px] bg-primary/5 border-none focus:ring-2 ring-accent" />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-white rounded-full py-8 text-xl font-bold shadow-xl hover:bg-primary/90 transition-all">
                    Request Free Proposal
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-muted relative grayscale">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.38243177652!2d72.50766345820313!3d23.022505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd1170aff2f4!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
        ></iframe>
      </section>
    </div>
  );
}

function ContactInfoItem({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-6">
      <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <h4 className="font-bold text-primary text-lg">{title}</h4>
        <p className="text-muted-foreground text-lg">{desc}</p>
      </div>
    </div>
  );
}
