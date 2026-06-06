
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, Award, Target, Heart } from "lucide-react";

export default function AboutPage() {
  const heroImg = PlaceHolderImages.find(img => img.id === "solar-roof");
  const installImg = PlaceHolderImages.find(img => img.id === "solar-installation");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold font-headline">Dedicated to <span className="text-accent">Solar Excellence</span></h1>
            <p className="text-xl text-white/70 max-w-2xl">
              We are on a mission to transform India's energy landscape one rooftop at a time, making clean energy affordable and accessible for all.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          {heroImg?.imageUrl && (
            <Image src={heroImg.imageUrl} alt="Background" fill className="object-cover" />
          )}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-accent/20 text-primary px-4 py-1 rounded-full text-sm font-bold">OUR STORY</div>
              <h2 className="text-4xl font-bold font-headline text-primary leading-tight">From a Vision to <br /> Pan-India Operations</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with a core belief that solar energy is the most democratized form of power, Arkā Solar started as a small team of engineers in Ahmedabad. Today, we have successfully installed over 5,000+ rooftop systems across 20+ cities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our focus has always been on quality components and hassle-free customer experience. We don't just sell panels; we build long-term relationships through performance monitoring and maintenance.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <StatItem icon={<CheckCircle2 className="text-accent" />} text="Certified Engineers" />
                <StatItem icon={<CheckCircle2 className="text-accent" />} text="Tier-1 Equipment" />
                <StatItem icon={<CheckCircle2 className="text-accent" />} text="MNRE Registered" />
                <StatItem icon={<CheckCircle2 className="text-accent" />} text="End-to-End Support" />
              </div>
            </div>
            <div className="relative aspect-square rounded-[48px] overflow-hidden shadow-2xl">
              {installImg?.imageUrl && (
                <Image src={installImg.imageUrl} alt="Team at work" fill className="object-cover" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Target className="size-12 text-accent" />}
              title="Our Mission"
              desc="To accelerate the world's transition to sustainable energy by delivering superior solar solutions with unmatched integrity and customer service."
            />
            <ValueCard 
              icon={<Award className="size-12 text-accent" />}
              title="Our Vision"
              desc="To be India's most trusted solar brand, recognized for innovation, reliability, and our contribution to a greener planet."
            />
            <ValueCard 
              icon={<Heart className="size-12 text-accent" />}
              title="Our Values"
              desc="Transparency, quality-first approach, and a commitment to customer satisfaction are the pillars that support everything we do."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <span className="font-semibold text-primary">{text}</span>
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-12 bg-white rounded-[40px] shadow-sm space-y-6 hover:shadow-xl transition-shadow">
      <div className="bg-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center">{icon}</div>
      <h3 className="text-2xl font-bold font-headline text-primary">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
