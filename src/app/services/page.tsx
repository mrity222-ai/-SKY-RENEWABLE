
import Link from "next/link";
import { ArrowRight, Zap, Home, Factory, Wrench, ShieldCheck, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Solar",
      desc: "Comprehensive rooftop solutions for homes with subsidy handling and EMI options.",
      icon: <Home className="size-8" />,
      href: "/services/residential-solar",
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Commercial Solar",
      desc: "Large scale solar setups for offices and shops to reduce high-tariff electricity bills.",
      icon: <Factory className="size-8" />,
      href: "/services/commercial-solar",
      color: "bg-green-500/10 text-green-600"
    },
    {
      title: "Industrial Solar",
      desc: "Heavy-duty installations for factories and warehouses with CAPEX and OPEX models.",
      icon: <Zap className="size-8" />,
      href: "/services/commercial-solar",
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      title: "Operation & Maintenance",
      desc: "Annual maintenance contracts (AMC) for cleaning, checking, and generation monitoring.",
      icon: <Wrench className="size-8" />,
      href: "/contact-us",
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  return (
    <div className="bg-white">
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold font-headline">Solar Services for <span className="text-accent">Everyone</span></h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">From small homes to massive industrial complexes, we provide engineered solar solutions that deliver maximum savings.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group p-12 bg-primary/5 rounded-[48px] border border-transparent hover:bg-white hover:shadow-2xl hover:border-accent transition-all">
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`}>
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold font-headline text-primary mb-4">{service.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.desc}</p>
                <Button variant="link" asChild className="text-accent font-bold p-0 text-lg group-hover:gap-2 transition-all">
                  <Link href={service.href}>Learn More <ArrowRight className="ml-2" /></Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Solar Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary rounded-[48px] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 opacity-10">
              <ShieldCheck className="size-80" />
            </div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl font-bold font-headline">The Arkā Advantage</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <BenefitItem title="Quality First" desc="We use only Tier-1 panels and high-efficiency inverters." />
                <BenefitItem title="Easy Finance" desc="Zero cost EMI options and loan support available." />
                <BenefitItem title="Warranty" desc="25-year performance warranty on all solar panels." />
                <BenefitItem title="24/7 Monitoring" desc="Monitor your energy production live on our app." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BenefitItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Sun className="size-5 text-accent" />
        <h4 className="font-bold text-lg">{title}</h4>
      </div>
      <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
