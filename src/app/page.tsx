
import { Hero } from "@/components/sections/Hero";
import { AIAdvisor } from "@/components/sections/AIAdvisor";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Banknote, BadgeCheck, Zap, ArrowRight, Sun, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const installImg = PlaceHolderImages.find(img => img.id === "solar-installation");
  const projectImg = PlaceHolderImages.find(img => img.id === "project-residential");

  return (
    <div className="space-y-0">
      <Hero />

      {/* Benefits Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold font-headline text-primary">Why Choose Arkā Solar?</h2>
            <p className="text-muted-foreground">We provide end-to-end solar solutions designed for the Indian climate and market.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldCheck className="size-10 text-accent" />}
              title="End-to-End Handling"
              desc="From structural survey to government subsidy filing, we manage everything."
            />
            <FeatureCard 
              icon={<BarChart3 className="size-10 text-accent" />}
              title="Maximum ROI"
              desc="Our systems typically pay for themselves within 4-6 years."
            />
            <FeatureCard 
              icon={<Users className="size-10 text-accent" />}
              title="Expert Support"
              desc="Dedicated maintenance team and real-time generation monitoring."
            />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-[40px] overflow-hidden aspect-video shadow-2xl">
              {installImg?.imageUrl && (
                <Image 
                  src={installImg.imageUrl} 
                  alt="Solar Installation" 
                  fill 
                  className="object-cover"
                  data-ai-hint="solar installation"
                />
              )}
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold font-headline text-primary">Powering India's Sustainable Future</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Arkā Solar is more than just a solar company. We are energy consultants dedicated to helping Indian homeowners and businesses transition to clean energy with zero hassle.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-bold text-2xl text-accent">5000+</h4>
                  <p className="text-sm text-muted-foreground">Successful Installations</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-2xl text-accent">120 GWh</h4>
                  <p className="text-sm text-muted-foreground">Energy Generated</p>
                </div>
              </div>
              <Button asChild className="rounded-full px-8 py-6">
                <Link href="/about-us">Learn Our Story <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-headline text-primary mb-16">Our Specialized Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard 
              title="Residential Rooftop"
              desc="Save up to 90% on your home electricity bills with PM-Suryodaya Yojana subsidies."
              href="/services/residential-solar"
            />
            <ServiceCard 
              title="Commercial & Industrial"
              desc="Reduce operational costs and improve your ESG ratings with high-efficiency solar farms."
              href="/services/commercial-solar"
            />
          </div>
        </div>
      </section>

      {/* AI Advisor Preview */}
      <AIAdvisor />

      {/* Projects Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold font-headline text-primary">Recent Projects</h2>
              <p className="text-muted-foreground mt-2">See how we've helped our clients save.</p>
            </div>
            <Button variant="ghost" asChild className="text-primary font-bold">
              <Link href="/projects">View All Projects <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-lg">
                <Image 
                  src={`https://picsum.photos/seed/arkahome${i}/800/600`} 
                  alt="Project" 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 text-white">
                  <h4 className="text-xl font-bold">5kW Residential Setup</h4>
                  <p className="text-sm opacity-80">Ahmedabad, Gujarat</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[48px] p-12 md:p-20 text-center text-white space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Sun className="size-64" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-headline max-w-4xl mx-auto">Ready to make the switch to solar?</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Get a free consultation and customized quote from our experts today.</p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" asChild className="bg-accent text-primary font-bold rounded-full px-10">
                <Link href="/contact-us">Get Started Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/20 text-white rounded-full px-10">
                <Link href="/solar-calculator">Calculate Savings</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <Card className="p-10 border-none shadow-sm rounded-[32px] bg-white text-center hover:shadow-xl transition-all">
      <div className="bg-primary/5 w-20 h-20 rounded-[24px] flex items-center justify-center mx-auto mb-8">
        {icon}
      </div>
      <h3 className="text-2xl font-bold font-headline text-primary mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </Card>
  );
}

function ServiceCard({ title, desc, href }: { title: string, desc: string, href: string }) {
  return (
    <Link href={href} className="group">
      <div className="p-12 bg-primary/5 rounded-[40px] text-left space-y-6 border border-transparent transition-all hover:border-accent hover:bg-white hover:shadow-2xl">
        <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center text-primary">
          <Zap className="size-8" />
        </div>
        <h3 className="text-3xl font-bold font-headline text-primary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{desc}</p>
        <div className="flex items-center text-accent font-bold group-hover:gap-2 transition-all">
          Explore Service <ArrowRight className="ml-2 size-5" />
        </div>
      </div>
    </Link>
  );
}
