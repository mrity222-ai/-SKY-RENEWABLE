import { ShieldCheck, Award, Users, Banknote, Gauge, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

export default function WhyChooseUsPage() {
  const points = [
    {
      icon: <Award className="size-8" />,
      title: "Tier-1 Only Components",
      desc: "We exclusively use Tier-1 Bloomberg listed solar modules and top-rated inverters."
    },
    {
      icon: <ShieldCheck className="size-8" />,
      title: "Structural Integrity",
      desc: "Our mounting structures are hot-dip galvanized and wind-tested for 180kmph."
    },
    {
      icon: <Users className="size-8" />,
      title: "In-House Engineering",
      desc: "We have a dedicated team of certified in-house solar engineers and technicians."
    },
    {
      icon: <Banknote className="size-8" />,
      title: "Liaison Expertise",
      desc: "Unmatched success rate in government subsidy (CFA) approvals and net-metering applications."
    },
    {
      icon: <Gauge className="size-8" />,
      title: "Performance Monitoring",
      desc: "Every Arkā system comes with cloud-based IoT monitoring."
    },
    {
      icon: <Clock className="size-8" />,
      title: "Zero-Downtime Service",
      desc: "Our AMC customers enjoy a 48-hour service guarantee."
    }
  ];

  return (
    <div className="bg-white">
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold font-headline">The <span className="text-accent">Arkā Advantage</span></h1>
          <p className="text-xl text-white/70">Engineering excellence and uncompromising quality standards.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {points.map((point, i) => (
              <div key={i} className="p-10 bg-primary/5 rounded-[48px] space-y-6 hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-accent group">
                <div className="bg-primary group-hover:bg-accent p-4 w-fit rounded-2xl transition-colors">
                  <div className="text-white group-hover:text-primary">{point.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-primary font-headline">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center space-y-12">
           <h2 className="text-4xl font-bold font-headline">Built to last. Guaranteed.</h2>
           <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Stat value="25Y" label="Performance Warranty" />
              <Stat value="5000+" label="Happy Clients" />
              <Stat value="120MW" label="Total Capacity" />
              <Stat value="48H" label="Service Guarantee" />
           </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function Stat({ value, label }: { value: string, label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-5xl font-black text-accent">{value}</div>
      <p className="text-sm font-bold opacity-60 uppercase tracking-widest">{label}</p>
    </div>
  );
}
