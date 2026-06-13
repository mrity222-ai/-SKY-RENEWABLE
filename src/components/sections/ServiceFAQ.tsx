'use client';

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  serviceName: string;
  faqs: FAQ[];
}

export function ServiceFAQ({ serviceName, faqs }: ServiceFAQProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="py-24 md:py-32 bg-[#F5FAFF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal direction="up" className="text-center mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-white border border-[#E6EEF8] shadow-sm">
            <span className="text-[12px] font-medium text-[#1D2348] uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-[32px] md:text-[52px] font-bold text-[#1D2348] tracking-tight leading-[1.1]">
            Your Solar Questions, <br />Answered Clearly
          </h2>
          <p className="text-[#8DA3BD] text-[16px] md:text-[18px] max-w-[700px] mx-auto leading-relaxed">
            Everything you need to know about our {serviceName.toLowerCase()}. If you have other questions, feel free to reach out.
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.05} direction="up">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-[24px] border border-[#E6EEF8] px-7 md:px-8 py-2 shadow-[0_20px_60px_rgba(145,200,255,0.18)] transition-all hover:shadow-[0_25px_70px_rgba(145,200,255,0.22)] data-[state=open]:shadow-[0_25px_70px_rgba(145,200,255,0.25)]"
                >
                  <AccordionTrigger className="text-left py-6 font-medium text-[#1D2348] hover:no-underline text-[18px] md:text-[24px] group">
                    <span className="flex-1">{faq.question}</span>
                    <div className="size-[38px] rounded-full border border-[#1D2348]/10 flex items-center justify-center shrink-0 ml-4 group-data-[state=open]:text-[#91C8FF] group-data-[state=open]:border-[#91C8FF]/20 transition-colors">
                      <div className="group-data-[state=open]:hidden"><Plus className="size-5" /></div>
                      <div className="hidden group-data-[state=open]:block"><Minus className="size-5" /></div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4B587C] text-[16px] pb-6 leading-[1.8] pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
