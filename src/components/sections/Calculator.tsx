"use client";

import React, { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Banknote, CalendarCheck, RotateCcw, TreeDeciduous, Info } from "lucide-react";

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
    const yearlySavingsVal = yearlySavings;
    const payback = netCost / yearlySavingsVal;
    const co2Offset = systemSize * 1.5;

    return {
      systemSize,
      monthlySavings,
      yearlySavings,
      netCost,
      payback: payback.toFixed(1),
      co2Offset: co2Offset.toFixed(1),
    };
  }, [bill]);

  return (
    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
      <div className="space-y-8 md:space-y-10">
        <div className="space-y-3 text-center lg:text-left">
          <span className="text-[10px] md:text-[11px] font-bold text-[#3B82F6] uppercase tracking-[0.2em] md:tracking-[0.3em]">Smart ROI Tool</span>
          <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-semibold text-white leading-tight">Calculate Your <br />Solar Potential</h2>
          <p className="text-[#CBD5E1] text-[13px] md:text-[14px] max-w-sm mx-auto lg:mx-0">Estimate your monthly savings and environmental impact instantly.</p>
        </div>

        <Card className="rounded-[24px] md:rounded-[32px] border-none bg-white/5 backdrop-blur-xl p-6 md:p-8 space-y-8">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="text-[13px] md:text-[14px] font-medium text-white/60">Monthly Bill</label>
              <span className="text-[16px] md:text-[18px] font-bold text-white">₹{bill.toLocaleString()}</span>
            </div>
            <Slider 
              value={[bill]} 
              onValueChange={(v) => setBill(v[0])} 
              max={20000} 
              step={100}
            />
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="text-[13px] md:text-[14px] font-medium text-white/60">Roof Area (sq. ft.)</label>
              <span className="text-[16px] md:text-[18px] font-bold text-white">{area} sq.ft.</span>
            </div>
            <Slider 
              value={[area]} 
              onValueChange={(v) => setArea(v[0])} 
              max={2000} 
              step={10}
            />
          </div>
          
          <Button asChild className="w-full h-12 md:h-14 rounded-full bg-white text-[#2563EB] font-bold hover:bg-[#F8FAFC] transition-all text-[14px]">
            <a href="/get-quote">Book Free Site Survey</a>
          </Button>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-5">
        <ResultCard icon={<Zap />} label="System Size" value={`${stats.systemSize} kW`} />
        <ResultCard icon={<Banknote />} label="Monthly Saving" value={`₹${stats.monthlySavings.toLocaleString()}`} />
        <ResultCard icon={<CalendarCheck />} label="Payback" value={`${stats.payback} Yrs`} />
        <ResultCard icon={<RotateCcw />} label="Net Invest" value={`₹${(stats.netCost / 1000).toFixed(0)}k`} />
        <div className="col-span-2 p-6 md:p-8 bg-white/5 rounded-[24px] md:rounded-[32px] flex items-center justify-between">
           <div className="flex items-center gap-4 md:gap-6">
              <div className="size-10 md:size-12 bg-[#22C55E]/20 rounded-xl flex items-center justify-center text-[#22C55E] shrink-0">
                <TreeDeciduous className="size-5 md:size-5" />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">CO2 Offset</p>
                <p className="text-[18px] md:text-[22px] font-bold text-[#06B6D4]">{stats.co2Offset} Tons / Yr</p>
              </div>
           </div>
           <Info className="size-4 text-white/20 hidden sm:block" />
        </div>
      </div>
    </div>
  );
}

function ResultCard({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="p-6 md:p-8 bg-white/5 rounded-[24px] md:rounded-[32px] space-y-4 hover:bg-white/10 transition-colors">
      <div className="size-9 md:size-10 bg-white/10 rounded-lg flex items-center justify-center text-[#2563EB] shrink-0">
        {React.cloneElement(icon, { className: "size-4.5" })}
      </div>
      <div>
        <p className="text-[9px] md:text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest leading-tight">{label}</p>
        <p className="text-[18px] md:text-[22px] font-bold text-[#3B82F6]">{value}</p>
      </div>
    </div>
  );
}