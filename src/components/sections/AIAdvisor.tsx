"use client";

import React, { useState } from "react";
import { aiEnergyAdvisorRecommendation, AIEnergyAdvisorOutput } from "@/ai/flows/ai-energy-advisor-recommendation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

export function AIAdvisor() {
  const [consumption, setConsumption] = useState("");
  const [roofArea, setRoofArea] = useState("");
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<AIEnergyAdvisorOutput | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consumption || !roofArea) return;
    
    setLoading(true);
    try {
      const result = await aiEnergyAdvisorRecommendation({
        monthlyElectricityConsumptionKwh: parseFloat(consumption),
        roofAreaSquareMeters: parseFloat(roofArea),
      });
      setRecommendation(result);
    } catch (error) {
      console.error("AI Recommendation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkles className="size-3" /> AI Driven
            </div>
            <h2 className="text-4xl font-bold font-headline text-foreground">AI Energy Advisor</h2>
            <p className="text-muted-foreground">
              Our advanced AI analyzes your consumption patterns to provide a custom solar blueprint.
            </p>
          </div>

          <LayoutGroup>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <motion.div layout>
                <Card className="rounded-[24px] shadow-xl border-none p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Monthly Consumption (kWh/Units)</label>
                      <Input 
                        placeholder="e.g. 450" 
                        type="number" 
                        value={consumption}
                        onChange={(e) => setConsumption(e.target.value)}
                        className="rounded-xl border-border h-12 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Available Roof Area (sq. meters)</label>
                      <Input 
                        placeholder="e.g. 50" 
                        type="number" 
                        value={roofArea}
                        onChange={(e) => setRoofArea(e.target.value)}
                        className="rounded-xl border-border h-12 focus:ring-primary"
                      />
                    </div>
                    <Button 
                      disabled={loading} 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-12 text-lg font-bold shadow-lg transition-all active:scale-95"
                    >
                      {loading ? <><Loader2 className="mr-2 animate-spin size-5" /> Analyzing Patterns...</> : "Get AI Recommendation"}
                    </Button>
                  </form>
                </Card>
              </motion.div>

              <motion.div layout className="min-h-[300px]">
                <AnimatePresence mode="wait">
                  {recommendation ? (
                    <motion.div 
                      key="recommendation"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="bg-white p-8 rounded-[24px] shadow-lg space-y-4 border border-border">
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="font-bold text-foreground">System Size:</span>
                          <span className="text-2xl font-bold text-primary">{recommendation.recommendedSystemSizeKw} kW</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="font-bold text-foreground">Est. Subsidy:</span>
                          <span className="text-2xl font-bold text-secondary">₹{recommendation.estimatedSubsidyAmountRupees.toLocaleString()}</span>
                        </div>
                        <div className="pt-4">
                          <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                            <AlertCircle className="size-4 text-accent" /> Subsidy Details
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                            {recommendation.subsidyDetails}
                          </p>
                        </div>
                      </div>
                      
                      <motion.div 
                        layout
                        className="bg-primary/5 border border-primary/10 p-6 rounded-[24px]"
                      >
                        <h4 className="font-bold text-primary mb-2">Our Recommendation</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {recommendation.recommendationSummary}
                        </p>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center p-8 bg-white/50 border border-dashed border-border rounded-[24px]"
                    >
                      <Sparkles className="size-12 text-primary/20 mb-4" />
                      <p className="text-muted-foreground">Enter your electricity consumption and roof area to see your personalized solar recommendation.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </LayoutGroup>
        </div>
      </div>
    </section>
  );
}
