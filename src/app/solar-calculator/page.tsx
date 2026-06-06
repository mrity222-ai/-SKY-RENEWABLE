
import { Calculator } from "@/components/sections/Calculator";
import { AIAdvisor } from "@/components/sections/AIAdvisor";

export default function CalculatorPage() {
  return (
    <div className="bg-white">
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold font-headline">Solar <span className="text-accent">Calculator</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">Get accurate estimates for your rooftop potential using our advanced algorithms and AI-powered energy advisor.</p>
        </div>
      </section>

      <Calculator />
      
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-12 bg-white rounded-[48px] shadow-xl text-center space-y-6">
            <h2 className="text-3xl font-bold font-headline text-primary">How our calculator works?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our calculator uses regional solar irradiation data provided by NASA, combined with current Indian government subsidy schemes (PM-Suryodaya Yojana) and local electricity tariffs to give you the most realistic ROI and payback period.
            </p>
          </div>
        </div>
      </div>

      <AIAdvisor />
    </div>
  );
}
