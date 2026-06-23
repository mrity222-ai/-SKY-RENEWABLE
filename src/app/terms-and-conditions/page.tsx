
import { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms & Conditions | SKY RENEWABLE",
  description: "Review the Terms & Conditions governing the use of SKY RENEWABLE's website, solar services, project consultations, and customer engagements.",
  keywords: ["Terms and Conditions SKY RENEWABLE", "Solar Installation Terms", "Solar EPC Legal Information"],
};

export default function TermsPage() {
  const terms = [
    { id: "1", title: "Acceptance of Terms", content: "By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these terms." },
    { id: "2", title: "Website Usage", content: "The content on this website is for general information and service inquiries. Unauthorized use is prohibited." },
    { id: "3", title: "Solar Service Information", content: "We provide solar engineering, procurement, and construction services. Performance depends on site-specific conditions." },
    { id: "4", title: "Quotations & Pricing", content: "All price estimates are based on current market rates and are subject to final site survey results." },
    { id: "5", title: "Project Timelines", content: "Installation timelines are estimates and may vary due to government approvals, material availability, and weather." },
    { id: "6", title: "Government Subsidy Disclaimer", content: "Subsidies are subject to government policies and eligibility verification. Amounts may change based on MNRE guidelines." },
    { id: "7", title: "Net Metering Disclaimer", content: "Net metering approvals depend on local DISCOM policies and grid technical feasibility." },
    { id: "8", title: "Intellectual Property", content: "All content, designs, and logos are the property of SKY RENEWABLE and protected by copyright laws." },
  ];

  return (
    <div className="bg-white selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 lg:pt-52 lg:pb-32 bg-[#14213D] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center bg-[#048037] text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-white/10 shadow-sm mb-8">
              LEGAL INFORMATION
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-[36px] md:text-[52px] lg:text-[64px] font-bold text-white leading-[1.1] tracking-tighter font-headline mb-8">
              Terms & Conditions
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-[16px] md:text-[18px] text-white/70 leading-relaxed max-w-2xl mx-auto font-medium">
              By using SKY RENEWABLE's website and services, you agree to the following terms and conditions designed to ensure transparency and customer satisfaction.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Terms Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {terms.map((term, i) => (
                <ScrollReveal key={term.id} direction="up" delay={i * 0.05}>
                  <div className="p-10 rounded-[40px] border border-border bg-[#F8FAFC] h-full space-y-4 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                    <div className="text-[48px] font-black text-primary/5 leading-none">0{term.id}</div>
                    <h3 className="text-xl font-bold text-[#14213D] font-headline">{term.title}</h3>
                    <p className="text-[#475569] leading-relaxed text-[15px]">{term.content}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Additional Clauses */}
            <div className="mt-16 p-10 md:p-16 rounded-[48px] bg-[#14213D] text-white">
              <ScrollReveal direction="up">
                <h3 className="text-2xl font-bold font-headline mb-10 flex items-center gap-4">
                  <ShieldCheck className="size-8 text-primary" />
                  Important Clauses
                </h3>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "Solar performance depends on site conditions.",
                    "Government subsidy policies may change.",
                    "Installation timelines may vary due to approvals.",
                    "Product specifications may vary based on availability.",
                    "Customers must provide accurate information."
                  ].map((clause, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-white/80 font-medium">{clause}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <ScrollReveal direction="up" className="space-y-8">
            <div className="size-16 rounded-full bg-primary/5 flex items-center justify-center mx-auto text-primary">
              <HelpCircle className="size-10" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-[#14213D] font-headline">Questions About Our Terms?</h2>
              <p className="text-lg text-[#475569] max-w-2xl mx-auto">Our team is available to help clarify any questions regarding our services, projects, or policies.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full h-14 px-10 text-white shadow-xl shadow-primary/20 w-full sm:w-auto">
                <Link href="/contact-us">Contact Us <ArrowRight className="size-4 ml-2" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-10 border-border text-[#14213D] bg-white w-full sm:w-auto">
                <a href="https://wa.me/918871105807" target="_blank" className="flex items-center gap-2">
                  <MessageCircle className="size-5" /> WhatsApp Support
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer Contact Info Inline */}
      <section className="py-12 border-t border-border bg-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.4em] mb-4">Official Registered Entity</p>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-sm font-bold text-[#14213D]">
            <p>SKY RENEWABLE</p>
            <p>skyrenewable06@gmail.com</p>
            <p>+91 8871105807</p>
          </div>
        </div>
      </section>
    </div>
  );
}
