"use client";

import React, { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Banknote, CalendarCheck, RotateCcw, TreeDeciduous, Info } from "lucide-react";
import { motion, LayoutGroup } from "framer-motion";

export function Calculator() {
  const [bill, setBill] = useState(3000);
  const [area, setArea] = useState(100);

  const stats = useMemo(() => {
    const systemSize = Math.max(1, Math.min(Math.ceil(bill / 800), 10));
    const monthlyGen = systemSize * 120;
    const monthlySavings = Math.min(bill, monthlyGen * 8);
    const yearlySavings = monthlySavings * 12;
    const subsidy = systemSize <= 3 ? 18000 * systemSize : (systemSize > 3 && systemSize <= 10 ? 54000 + (systemSize - 3) * 9000 : 78000);
    const grossCost = systemSize * 65000;
    const netCost = grossCost - subsidy;
    const lifetimeSavings = yearlySavings * 25;
    const payback = netCost / yearlySavings;
    const co2Offset = systemSize * 1.5;

    return {
      systemSize,
      monthlySavings,
      yearlySavings,
      netCost,
      lifetimeSavings,
      payback: payback.toFixed(1),
      co2Offset: co2Offset.toFixed(1),
    };
  }, [bill]);

  return (
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div className="space-y-12">
        <div className="space-y-4">
          <span className="text-[12px] font-bold text-[#B8B8B8] uppercase tracking-[0.3em]">Smart ROI Tool</span>
          <h2 className="text-[30px] lg:text-[48px] font-semibold text-white leading-tight">Calculate Your <br />Solar Potential</h2>
          <p className="text-white/40 text-[14px] max-w-sm">Estimate your monthly savings and environmental impact instantly.</p>
        </div>

        <Card className="rounded-[40px] border-none bg-white/5 backdrop-blur-xl p-10 space-y-12">
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <label className="text-[14px] font-medium text-white/60">Monthly Electricity Bill</label>
              <span className="text-[20px] font-bold text-white">₹{bill.toLocaleString()}</span>
            </div>
            <Slider 
              value={[bill]} 
              onValueChange={(v) => setBill(v[0])} 
              max={20000} 
              step={100}
              className="accent-white"
            />
          </div>

          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <label className="text-[14px] font-medium text-white/60">Usable Roof Area (sq. ft.)</label>
              <span className="text-[20px] font-bold text-white">{area} sq.ft.</span>
            </div>
            <Slider 
              value={[area]} 
              onValueChange={(v) => setArea(v[0])} 
              max={2000} 
              step={10}
              className="accent-white"
            />
          </div>
          
          <Button asChild className="w-full h-16 rounded-full bg-white text-black font-bold hover:bg-neutral-200">
            <a href="/get-quote">Book Free Site Survey</a>
          </Button>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ResultCard icon={<Zap />} label="System Size" value={`${stats.systemSize} kW`} />
        <ResultCard icon={<Banknote />} label="Monthly Saving" value={`₹${stats.monthlySavings.toLocaleString()}`} />
        <ResultCard icon={<CalendarCheck />} label="Payback Period" value={`${stats.payback} Yrs`} />
        <ResultCard icon={<RotateCcw />} label="Net Investment" value={`₹${(stats.netCost / 1000).toFixed(0)}k`} />
        <div className="col-span-2 p-10 bg-white/5 rounded-[40px] flex items-center justify-between">
           <div className="flex items-center gap-6">
              <div className="size-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                <TreeDeciduous className="size-6" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest">CO2 Offset</p>
                <p className="text-[24px] font-bold text-white">{stats.co2Offset} Tons / Yr</p>
              </div>
           </div>
           <Info className="size-5 text-white/20" />
        </div>
      </div>
    </div>
  );
}

function ResultCard({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="p-10 bg-white/5 rounded-[40px] space-y-6 hover:bg-white/10 transition-colors">
      <div className="size-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
        {React.cloneElement(icon, { className: "size-5" })}
      </div>
      <div>
        <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest">{label}</p>
        <p className="text-[24px] font-bold text-white">{value}</p>
      </div>
    </div>
  );
}
