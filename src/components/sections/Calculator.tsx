
"use client";

import React, { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TreeDeciduous, Cloud, Zap, Banknote, CalendarCheck, RotateCcw } from "lucide-react";

export function Calculator() {
  const [bill, setBill] = useState(3000);
  const [area, setArea] = useState(100);

  const stats = useMemo(() => {
    // Basic heuristics for solar calculation in India
    const systemSize = Math.max(1, Math.min(Math.ceil(bill / 800), 10)); // ~800 INR bill reduction per kW
    const monthlyGen = systemSize * 120; // ~120 units per month per kW
    const monthlySavings = Math.min(bill, monthlyGen * 8); // Average 8 INR per unit
    const yearlySavings = monthlySavings * 12;
    const subsidy = systemSize <= 3 ? 18000 * systemSize : (systemSize > 3 && systemSize <= 10 ? 54000 + (systemSize - 3) * 9000 : 78000);
    const grossCost = systemSize * 65000; // Average 65k per kW
    const netCost = grossCost - subsidy;
    const lifetimeSavings = yearlySavings * 25;
    const payback = netCost / yearlySavings;
    const co2Offset = systemSize * 1.5; // Tons per year
    const treesEquivalent = Math.floor(co2Offset * 45); // 45 trees per ton of CO2

    return {
      systemSize,
      monthlySavings,
      yearlySavings,
      netCost,
      lifetimeSavings,
      payback: payback.toFixed(1),
      co2Offset: co2Offset.toFixed(1),
      treesEquivalent
    };
  }, [bill]);

  return (
    <section id="calculator" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">Smart Solar Calculator</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estimate your potential savings and environmental impact in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-10">
            <Card className="rounded-[24px] shadow-lg border-none bg-white overflow-hidden">
              <CardHeader className="bg-primary text-white">
                <CardTitle className="font-headline">Input Your Details</CardTitle>
                <CardDescription className="text-white/70">Adjust sliders to match your usage.</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-10">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-primary">Average Monthly Bill</label>
                    <span className="text-xl font-bold text-accent">₹{bill.toLocaleString()}</span>
                  </div>
                  <Slider 
                    value={[bill]} 
                    onValueChange={(v) => setBill(v[0])} 
                    max={20000} 
                    step={100}
                    className="accent-accent"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-primary">Roof Area (sq. ft.)</label>
                    <span className="text-xl font-bold text-accent">{area} sq.ft.</span>
                  </div>
                  <Slider 
                    value={[area]} 
                    onValueChange={(v) => setArea(v[0])} 
                    max={2000} 
                    step={10}
                    className="accent-accent"
                  />
                </div>

                <Button className="w-full bg-accent text-primary font-bold rounded-full py-6">
                  Book Free Site Survey
                </Button>
              </CardContent>
            </Card>

            <div className="bg-primary/5 p-6 rounded-[24px] border border-primary/10 flex items-start gap-4">
              <Zap className="size-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-primary">Why Arkā Solar?</h4>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Our calculations use regional irradiation data and current government subsidy schemes (PM-Suryodaya Yojana) for the most accurate estimates.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MetricCard 
              icon={<Zap className="size-5 text-accent" />} 
              label="Recommended System" 
              value={`${stats.systemSize} kW`}
              description="Ideal for your energy needs"
            />
            <MetricCard 
              icon={<Banknote className="size-5 text-accent" />} 
              label="Monthly Savings" 
              value={`₹${stats.monthlySavings.toLocaleString()}`}
              description="Instant bill reduction"
            />
            <MetricCard 
              icon={<CalendarCheck className="size-5 text-accent" />} 
              label="Payback Period" 
              value={`${stats.payback} Years`}
              description="ROI faster than bank FD"
            />
            <MetricCard 
              icon={<RotateCcw className="size-5 text-accent" />} 
              label="Lifetime Savings" 
              value={`₹${(stats.lifetimeSavings / 100000).toFixed(1)}L`}
              description="Over 25 years"
            />
            
            <div className="sm:col-span-2 bg-primary text-white p-8 rounded-[24px] shadow-xl relative overflow-hidden group">
              <div className="absolute right-[-20px] bottom-[-20px] opacity-10 rotate-12 transition-transform group-hover:rotate-0 duration-500">
                <TreeDeciduous className="size-48" />
              </div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-bold font-headline">Environmental Impact</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-2xl">
                      <Cloud className="size-8 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stats.co2Offset} Tons</div>
                      <div className="text-sm text-white/60">CO2 Offset/Year</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-2xl">
                      <TreeDeciduous className="size-8 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stats.treesEquivalent}</div>
                      <div className="text-sm text-white/60">Trees Planted Equivalent</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ icon, label, value, description }: { icon: any, label: string, value: string, description: string }) {
  return (
    <Card className="rounded-[24px] shadow-sm border-none bg-white p-6 transition-all hover:shadow-md inner-shadow">
      <div className="bg-primary/5 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-sm font-medium text-muted-foreground mb-1">{label}</div>
      <div className="text-3xl font-bold text-primary mb-2 font-headline">{value}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </Card>
  );
}
