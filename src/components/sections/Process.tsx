
import { Wrench, MapPin, ClipboardCheck, Layout, BadgeCheck, Headset } from "lucide-react";

export function Process() {
  const steps = [
    { icon: <ClipboardCheck className="size-8" />, title: "Consultation", desc: "Expert guidance on selecting the right system." },
    { icon: <MapPin className="size-8" />, title: "Site Survey", desc: "Technical evaluation of roof strength and shadow profile." },
    { icon: <Layout className="size-8" />, title: "System Design", desc: "Custom 3D layout for maximum irradiation efficiency." },
    { icon: <Wrench className="size-8" />, title: "Installation", desc: "Fast & compliant setup by certified Arkā engineers." },
    { icon: <BadgeCheck className="size-8" />, title: "Subsidy Filing", desc: "Hassle-free government incentive application support." },
    { icon: <Headset className="size-8" />, title: "After-Sales", desc: "24/7 monitoring and performance maintenance." },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Simple 6-Step Installation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">From first contact to grid-tie, we handle everything for your peace of mind.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative p-8 bg-background rounded-[24px] transition-all hover:bg-primary hover:text-white hover:-translate-y-2 duration-300 shadow-sm border border-primary/5">
              <div className="bg-accent group-hover:bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary group-hover:text-accent mb-6 transition-colors">
                {step.icon}
              </div>
              <div className="absolute top-8 right-8 text-4xl font-black text-primary/5 group-hover:text-white/5 font-headline">0{idx + 1}</div>
              <h3 className="text-2xl font-bold font-headline mb-3">{step.title}</h3>
              <p className="text-muted-foreground group-hover:text-white/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
