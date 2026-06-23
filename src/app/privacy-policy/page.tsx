
import { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Privacy Policy | SKY RENEWABLE",
  description: "Read SKY RENEWABLE's Privacy Policy to understand how we collect, use, and protect customer information for solar services, consultations, and website usage.",
  keywords: ["Privacy Policy SKY RENEWABLE", "Solar Company Privacy Policy", "Renewable Energy Privacy Policy"],
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 lg:pt-52 lg:pb-32 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <ScrollReveal direction="up">
              <span className="inline-flex items-center bg-[#048037] text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase border border-white/10 shadow-sm mb-8">
                LEGAL INFORMATION
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-[36px] md:text-[52px] lg:text-[64px] font-bold text-[#14213D] leading-[1.1] tracking-tighter font-headline mb-8">
                Privacy Policy
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-[16px] md:text-[18px] text-[#475569] leading-relaxed max-w-2xl font-medium opacity-90">
                Your privacy matters to us. SKY RENEWABLE is committed to protecting your personal information and maintaining transparency regarding how we collect and use data.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-slate max-w-none space-y-12">
              <ScrollReveal direction="up">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#14213D] font-headline">1. Introduction</h2>
                  <p className="text-[#475569] leading-relaxed">
                    This Privacy Policy describes how SKY RENEWABLE ("we", "us", or "our") collects, uses, and shares your personal information when you visit our website or use our services. By accessing our website, you agree to the practices described in this policy.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#14213D] font-headline">2. Information We Collect</h2>
                  <p className="text-[#475569] leading-relaxed">
                    We collect information that you provide directly to us through our contact forms, calculators, and service requests. This includes:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 list-none p-0">
                    {["Name", "Mobile Number", "Email Address", "Location Information", "Service Inquiry Information"].map((item) => (
                      <li key={item} className="flex items-center gap-3 bg-[#F8FAFC] p-4 rounded-2xl border border-border/50 text-[#14213D] font-bold text-sm">
                        <div className="size-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#14213D] font-headline">3. How We Use Information</h2>
                  <p className="text-[#475569] leading-relaxed">
                    The information we collect is used to provide and improve our services, including:
                  </p>
                  <ul className="space-y-2 text-[#475569] list-disc pl-5">
                    <li>Solar consultation and technical assessments.</li>
                    <li>Site survey scheduling and execution.</li>
                    <li>Customer support and answering inquiries.</li>
                    <li>Communicating regarding service updates and policy changes.</li>
                    <li>Improving website functionality and user experience.</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#14213D] font-headline">4. Data Protection</h2>
                    <p className="text-[#475569] leading-relaxed text-sm">
                      We implement a variety of security measures to maintain the safety of your personal information. We use advanced encryption and secure servers to protect your data.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#14213D] font-headline">5. Third-Party Services</h2>
                    <p className="text-[#475569] leading-relaxed text-sm">
                      We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to provide our services (e.g., government subsidy liaison).
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#14213D] font-headline">6. Cookies Policy</h2>
                  <p className="text-[#475569] leading-relaxed text-sm">
                    Our website uses cookies to enhance user experience. You can choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-[#F8FAFC] rounded-[32px] border border-border/50">
                    <h3 className="text-lg font-bold text-[#14213D] mb-4">7. User Rights</h3>
                    <p className="text-sm text-[#475569]">You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.</p>
                  </div>
                  <div className="p-8 bg-[#F8FAFC] rounded-[32px] border border-border/50">
                    <h3 className="text-lg font-bold text-[#14213D] mb-4">8. Data Retention</h3>
                    <p className="text-sm text-[#475569]">We retain personal information as long as necessary to fulfill the purposes outlined in this policy.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up">
                <div className="pt-12 border-t border-border">
                  <h2 className="text-2xl font-bold text-[#14213D] font-headline mb-8">9. Contact Information</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <ContactDetail icon={<MapPin />} label="Address" text="Bazar Chowk Complex, Kachandur, Gunderdehi, Balod, CG" />
                    <ContactDetail icon={<Mail />} label="Email" text="skyrenewable06@gmail.com" />
                    <ContactDetail icon={<Phone />} label="Phone" text="+91 88711 05807" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function ContactDetail({ icon, label, text }: { icon: any, label: string, text: string }) {
  return (
    <div className="space-y-3">
      <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">{label}</p>
        <p className="text-sm font-bold text-[#14213D]">{text}</p>
      </div>
    </div>
  );
}
