
import Link from "next/link";
import Image from "next/image";
import { Factory, TrendingDown, BarChart3, Building2, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CommercialSolarPage() {
  const industrialImg = PlaceHolderImages.find(img => img.id === "project-industrial");

  return (
    <div className="bg-white">
      <section className="relative py-24 bg-primary text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">COMMERCIAL & INDUSTRIAL</div>
            <h1 className="text-5xl md:text-7xl font-bold font-headline">Maximize Profits with <br /><span className="text-accent">Clean Power</span></h1>
            <p className="text-xl text-white/70">Reduce operational overheads, claim accelerated depreciation, and boost your sustainability credentials.</p>
            <Button size="lg" asChild className="bg-accent text-primary font-bold rounded-full px-10">
              <Link href="/contact-us">Get Industrial Quote</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image src={industrialImg?.imageUrl || ""} alt="Industrial Solar" fill className="object-cover" />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold font-headline text-primary leading-tight">Solar for Business: <br />A Strategic Investment</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For businesses in India, electricity tariffs are often the highest operating expense. By switching to solar, you lock in your energy costs for the next 25 years.
              </p>
              <div className="grid gap-6">
                <CommercialBenefitItem 
                  icon={<TrendingDown className="size-6 text-accent" />}
                  title="Accelerated Depreciation"
                  desc="Claim up to 40% depreciation in the first year for significant tax savings."
                />
                <CommercialBenefitItem 
                  icon={<BarChart3 className="size-6 text-accent" />}
                  title="Fixed Energy Costs"
                  desc="Protect your business from future electricity tariff hikes."
                />
                <CommercialBenefitItem 
                  icon={<Building2 className="size-6 text-accent" />}
                  title="ESG Compliance"
                  desc="Enhance your brand value by demonstrating environmental responsibility."
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 p-12 rounded-[48px] space-y-4 text-center">
                <div className="text-4xl font-black text-accent font-headline">4-5Y</div>
                <p className="text-sm font-bold text-primary">Average ROI Period</p>
              </div>
              <div className="bg-primary p-12 rounded-[48px] space-y-4 text-center text-white">
                <div className="text-4xl font-black text-accent font-headline">40%</div>
                <p className="text-sm font-bold opacity-70">Tax Benefits</p>
              </div>
              <div className="col-span-2 bg-accent/10 p-12 rounded-[48px] text-center">
                <h4 className="text-2xl font-bold text-primary mb-2">CAPEX & OPEX Models</h4>
                <p className="text-muted-foreground">Flexible ownership models to suit your cash flow requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CommercialBenefitItem({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-4 p-6 bg-white rounded-3xl border border-primary/5 shadow-sm">
      <div className="shrink-0">{icon}</div>
      <div>
        <h4 className="font-bold text-primary">{title}</h4>
        <p className="text-muted-foreground text-sm">{desc}</p>
      </div>
    </div>
  );
}
