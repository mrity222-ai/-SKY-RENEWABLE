import { ClipboardCheck, MapPin, Layout, Wrench, BadgeCheck, Headset, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

export default function ProcessPage() {
  const steps = [
    {
      title: "Consultation & Bill Analysis",
      desc: "We start by analyzing your current electricity bills and power consumption patterns to determine the ideal system size.",
      icon: <ClipboardCheck className="size-10" />,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Technical Site Survey",
      desc: "Our engineers visit your site for a comprehensive structural analysis and detailed shadow mapping.",
      icon: <MapPin className="size-10" />,
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Custom 3D Engineering",
      desc: "Our design team creates a 3D layout of the solar array to maximize sunlight exposure.",
      icon: <Layout className="size-10" />,
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Swift Installation",
      desc: "Certified Arkā technicians install the system with Tier-1 components in record time.",
      icon: <Wrench className="size-10" />,
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      title: "Subsidy & Net Metering",
      desc: "We handle the entire government liaison process, from CFA subsidy filing to grid connection.",
      icon: <BadgeCheck className="size-10" />,
      color: "bg-red-500/10 text-red-600"
    },
    {
      title: "Generation Monitoring",
      desc: "Monitor your savings and carbon offset 24/7 through our dedicated client app.",
      icon: <Headset className="size-10" />,
      color: "bg-teal-500/10 text-teal-600"
    }
  ];

  return (
    <div className="bg-white">
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold font-headline">The <span className="text-accent">Arkā Path</span></h1>
          <p className="text-xl text-white/70">A seamless, engineering-first approach to powering your world.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-center group">
                <div className="flex flex-col items-center">
                   <div className="text-7xl font-black text-primary/5 group-hover:text-accent/20 transition-colors leading-none">0{i + 1}</div>
                   <div className="w-1 h-24 bg-primary/5 hidden md:block" />
                </div>
                <div className="flex-1 p-12 bg-white rounded-[40px] shadow-sm border border-primary/5 group-hover:shadow-2xl group-hover:-translate-y-1 transition-all">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${step.color}`}>
                    {step.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4 font-headline">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
