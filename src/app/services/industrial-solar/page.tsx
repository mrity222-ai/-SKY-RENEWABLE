
import Image from "next/image";
import Link from "next/link";
import { Factory, TrendingDown, ShieldCheck, Zap, BarChart3, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function IndustrialSolarPage() {
  const industrialImg = PlaceHolderImages.find(img => img.id === "project-industrial");

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">INDUSTRIAL EPC SOLUTIONS</div>
            <h1 className="text-5xl md:text-8xl font-bold font-headline leading-tight">Heavy Duty Power for <span className="text-accent">Industry</span></h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Turn your factory roof into a profit center. Claim accelerated depreciation, reduce heavy load bills, and meet your green energy targets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-primary font-bold rounded-full px-10">
                <Link href="/get-quote">Get Industrial Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white rounded-full px-10">
                <Link href="/projects">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          {industrialImg?.imageUrl && (
            <Image src={industrialImg.imageUrl} alt="Industrial Solar" fill className="object-cover" />
          )}
        </div>
      </section>

      {/* Strategic Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-primary font-headline">Strategic Solar Investment</h2>
            <p className="text-lg text-muted-foreground">For Indian industries, solar is not just an energy choice—it's a financial tool to combat rising operational costs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <IndustrialCard 
              icon={<TrendingDown className="size-10" />}
              title="Operational Savings"
              desc="Lock in your electricity costs at ₹2-3 per unit for the next 25 years vs grid rates of ₹8-11."
            />
            <IndustrialCard 
              icon={<BarChart3 className="size-10" />}
              title="Accelerated Depreciation"
              desc="Industrial clients can claim 40% depreciation in Year 1, providing massive tax offsets."
            />
            <IndustrialCard 
              icon={<Building2 className="size-10" />}
              title="ESG & Compliance"
              desc="Fulfill Renewable Purchase Obligations (RPO) and boost your brand's global sustainability rating."
            />
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-primary font-headline leading-tight">Flexible Financing Models</h2>
              <div className="space-y-6">
                <div className="p-8 bg-white rounded-[32px] shadow-sm space-y-4 border-l-8 border-accent">
                   <h3 className="text-2xl font-bold text-primary">CAPEX Model</h3>
                   <p className="text-muted-foreground">You own the system from Day 1. Maximize tax benefits and enjoy 100% of the energy savings directly.</p>
                </div>
                <div className="p-8 bg-white rounded-[32px] shadow-sm space-y-4 border-l-8 border-primary">
                   <h3 className="text-2xl font-bold text-primary">RESCO / OPEX Model</h3>
                   <p className="text-muted-foreground">Zero investment. Pay only for the energy generated at a rate significantly lower than the grid.</p>
                </div>
              </div>
              <Button asChild size="lg" className="rounded-full px-12">
                <Link href="/contact-us">Consult an Expert <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl">
              <Image src="https://picsum.photos/seed/arkaindustrial2/800/800" alt="Industrial Installation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function IndustrialCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <Card className="p-12 border-none shadow-sm rounded-[40px] bg-white space-y-6 hover:shadow-2xl hover:-translate-y-2 transition-all">
      <div className="bg-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center text-primary">{icon}</div>
      <h3 className="text-2xl font-bold font-headline text-primary">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </Card>
  );
}
