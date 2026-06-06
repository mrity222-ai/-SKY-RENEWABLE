
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Banknote, ShieldCheck, Zap, Receipt, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ResidentialSolarPage() {
  const heroImg = PlaceHolderImages.find(img => img.id === "solar-roof");

  return (
    <div className="bg-white">
      <section className="relative py-24 bg-primary text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">RESIDENTIAL SOLUTIONS</div>
            <h1 className="text-5xl md:text-7xl font-bold font-headline">Zero Bill Homes <br /><span className="text-accent">Made Easy</span></h1>
            <p className="text-xl text-white/70">Slash your monthly electricity bills by up to 90% while contributing to a greener planet.</p>
            <Button size="lg" asChild className="bg-accent text-primary font-bold rounded-full px-10">
              <Link href="/contact-us">Check My Subsidy</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image src={heroImg?.imageUrl || ""} alt="Hero" fill className="object-cover" />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <InfoCard 
              icon={<Banknote className="size-8" />}
              title="PM-Suryodaya Subsidy"
              desc="We handle the complete application process for government subsidies, saving you up to ₹78,000 upfront."
            />
            <InfoCard 
              icon={<ShieldCheck className="size-8" />}
              title="25 Year Warranty"
              desc="Long-term peace of mind with extensive warranties on panels and 5+ years on inverters and workmanship."
            />
            <InfoCard 
              icon={<Receipt className="size-8" />}
              title="EMI Options"
              desc="Go solar with zero downpayment. Monthly EMI is often less than your current electricity bill."
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-headline text-primary mb-16">The Installation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep number="01" title="Free Consultation" desc="Experts analyze your bills and roof space." />
            <ProcessStep number="02" title="Site Survey" desc="Technical evaluation for structural stability." />
            <ProcessStep number="03" title="Installation" desc="Swift and safe installation within 3-5 days." />
            <ProcessStep number="04" title="Grid Connection" desc="Net-metering setup for bill credits." />
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-12 bg-white rounded-[40px] shadow-sm border border-primary/5 space-y-6 hover:shadow-xl transition-all">
      <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary">{icon}</div>
      <h3 className="text-2xl font-bold font-headline text-primary">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function ProcessStep({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="space-y-4">
      <div className="text-6xl font-black text-primary/5 font-headline">{number}</div>
      <h4 className="text-xl font-bold text-primary">{title}</h4>
      <p className="text-muted-foreground text-sm">{desc}</p>
    </div>
  );
}
