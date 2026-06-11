
'use client';

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  serviceName: string;
  faqs: FAQ[];
}

export function ServiceFAQ({ serviceName, faqs }: ServiceFAQProps) {
  // Generate SEO-friendly JSON-LD Schema
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
    <section className="py-32 bg-white">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal direction="up" className="text-center mb-20 space-y-4">
          <span className="inline-block bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase">
            Questions & Answers
          </span>
          <h2 className="text-[30px] lg:text-[40px] font-semibold text-black tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#555] text-[14px] max-w-xl mx-auto">
            Everything you need to know about our {serviceName.toLowerCase()}. If you have other questions, feel free to reach out.
          </p>
        </ScrollReveal>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#F9F9F9] rounded-[24px] border-none px-8 transition-all hover:shadow-md"
            >
              <AccordionTrigger className="text-left py-6 font-bold text-black hover:no-underline text-[16px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#555] text-[14px] pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
