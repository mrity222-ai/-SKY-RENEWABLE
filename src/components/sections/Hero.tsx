
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-solar");

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
      <div className="absolute inset-0 -z-10">
        {heroImg?.imageUrl && (
          <Image
            src={heroImg.imageUrl}
            alt="Arkā Solar Hero"
            fill
            className="object-cover brightness-50"
            priority
            data-ai-hint="solar panels"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl text-white space-y-8">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1 backdrop-blur-sm">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Trusted by 5000+ Homeowners</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-headline leading-tight">
            सूरज की शक्ति, <br />
            <span className="text-accent underline decoration-white/30 underline-offset-8">आपका सुनहरा भविष्य</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light">
            Go green, save big. Power your home with the most reliable solar rooftop solutions in India. 
            Reduce electricity bills by up to 90%.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-accent text-primary font-bold text-lg px-8 rounded-full hover:bg-accent/90">
              Get A Quote <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 text-lg px-8 rounded-full backdrop-blur-sm hover:bg-white/20">
              <Calculator className="mr-2 size-5" /> Calculate Savings
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-accent">90%</div>
              <div className="text-white/60 text-sm">Bill Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">5yr+</div>
              <div className="text-white/60 text-sm">Payback Period</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">25yr</div>
              <div className="text-white/60 text-sm">Panel Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
