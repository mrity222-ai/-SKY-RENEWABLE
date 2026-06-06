
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Calculator } from "@/components/sections/Calculator";
import { AIAdvisor } from "@/components/sections/AIAdvisor";
import { Process } from "@/components/sections/Process";
import { Footer } from "@/components/sections/Footer";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Banknote, Wrench, BadgeCheck, Zap, HeartHandshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Benefits Grid */}
      <section id="offerings" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<ShieldCheck className="size-10 text-accent" />}
              title="Expert Installation"
              desc="Certified engineers ensuring the highest safety standards and panel efficiency."
            />
            <BenefitCard 
              icon={<Banknote className="size-10 text-accent" />}
              title="Finance Support"
              desc="Partnered with leading banks for low-interest solar financing and easy EMIs."
            />
            <BenefitCard 
              icon={<BadgeCheck className="size-10 text-accent" />}
              title="Subsidy Handling"
              desc="Complete end-to-end documentation for state and central government subsidies."
            />
          </div>
        </div>
      </section>

      <Calculator />
      
      <AIAdvisor />

      <Process />

      {/* Why Choose Us / Service Area */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold font-headline leading-tight">
                Empowering India with <br />
                <span className="text-accent">Clean Energy Solutions</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Arkā Solar is dedicated to making green energy accessible and affordable. We combine 
                cutting-edge hardware with intelligent monitoring software to give you full control 
                over your power generation.
              </p>
              
              <div className="space-y-6">
                <FeatureItem title="Pan-India Service Network" desc="Available in over 20+ cities with local support teams." />
                <FeatureItem title="Low Maintenance Guarantee" desc="Sleek designs that require minimal cleaning and upkeep." />
                <FeatureItem title="Real-time App Monitoring" desc="Track your generation and savings live on our mobile app." />
              </div>

              <Button size="lg" className="bg-accent text-primary font-bold rounded-full px-10">
                Download Brochure <ArrowRight className="ml-2 size-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-white/5 rounded-[40px] p-12 relative z-10 border border-white/10 backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-8">
                  <Stat label="Installed Projects" value="5,200+" />
                  <Stat label="Energy Generated" value="120 GWh" />
                  <Stat label="Carbon Offset" value="85k Tons" />
                  <Stat label="Customer Rating" value="4.9/5" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-[-50px] right-[-50px] size-64 bg-accent/20 rounded-full blur-[100px] -z-10"></div>
              <div className="absolute bottom-[-50px] left-[-50px] size-64 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Form Integration Placeholder */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-background rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 bg-primary text-white flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-bold font-headline mb-6">Ready to Switch?</h3>
                <p className="text-white/60 mb-8">Get a customized proposal and quote for your home or business today.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-accent/20 rounded-lg"><Zap className="size-5 text-accent" /></div>
                    <span>No-obligation site assessment</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-accent/20 rounded-lg"><HeartHandshake className="size-5 text-accent" /></div>
                    <span>Personalized subsidy guide</span>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-sm text-white/40 italic">
                * Our experts will contact you within 24 hours of form submission.
              </div>
            </div>
            
            <div className="p-12">
              <form className="grid gap-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Full Name</label>
                    <input type="text" className="w-full border-none bg-primary/5 rounded-xl px-4 py-3 focus:ring-2 ring-accent" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Phone Number</label>
                    <input type="tel" className="w-full border-none bg-primary/5 rounded-xl px-4 py-3 focus:ring-2 ring-accent" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email Address</label>
                  <input type="email" className="w-full border-none bg-primary/5 rounded-xl px-4 py-3 focus:ring-2 ring-accent" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Monthly Bill Range</label>
                  <select className="w-full border-none bg-primary/5 rounded-xl px-4 py-3 focus:ring-2 ring-accent">
                    <option>Below ₹2,000</option>
                    <option>₹2,000 - ₹5,000</option>
                    <option>₹5,000 - ₹10,000</option>
                    <option>Above ₹10,000</option>
                  </select>
                </div>
                <Button className="w-full bg-primary text-white rounded-xl py-6 font-bold text-lg hover:bg-primary/90">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function BenefitCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <Card className="p-10 border-none shadow-sm rounded-[32px] bg-white text-center hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="bg-primary/5 w-20 h-20 rounded-[24px] flex items-center justify-center mx-auto mb-8">
        {icon}
      </div>
      <h3 className="text-2xl font-bold font-headline text-primary mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </Card>
  );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="size-6 bg-accent rounded-full flex items-center justify-center mt-1 shrink-0">
        <Zap className="size-3 text-primary" fill="currentColor" />
      </div>
      <div>
        <h5 className="font-bold text-lg">{title}</h5>
        <p className="text-sm text-white/50">{desc}</p>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div>
      <div className="text-4xl font-bold text-accent font-headline mb-1">{value}</div>
      <div className="text-sm text-white/60 font-medium">{label}</div>
    </div>
  );
}
