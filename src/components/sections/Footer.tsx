'use client';

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ArrowUp,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* TOP FOOTER */}
        <div className="grid lg:grid-cols-2 gap-24 mb-24">
          {/* LEFT SIDE */}
          <div className="space-y-14">
            <div className="space-y-8">
              <span className="text-primary font-bold text-[12px] uppercase tracking-[0.4em]">
                CONTACT US
              </span>
              <h2 className="text-[40px] md:text-[60px] lg:text-[72px] font-bold leading-[0.95] tracking-tighter max-w-xl">
                Powering the next <span className="text-secondary">Green Revolution.</span>
              </h2>
            </div>
            
            <nav className="flex flex-wrap gap-x-12 gap-y-6">
              <Link href="/" className="text-[14px] font-semibold hover:text-primary transition-colors">Home</Link>
              <Link href="/about-us" className="text-[14px] font-semibold hover:text-primary transition-colors">About Us</Link>
              <Link href="/services" className="text-[14px] font-semibold hover:text-primary transition-colors">Services</Link>
              <Link href="/projects" className="text-[14px] font-semibold hover:text-primary transition-colors">Projects</Link>
            </nav>
            
            <div className="flex gap-4">
              <SocialLink icon={<Facebook className="size-4" />} />
              <SocialLink icon={<Twitter className="size-4" />} />
              <SocialLink icon={<Instagram className="size-4" />} />
              <SocialLink icon={<Linkedin className="size-4" />} />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid gap-16 self-center lg:pl-20">
            <ContactInfoBlock 
              icon={<MapPin />} 
              label="HQ Location" 
              text="Solar Plaza, MG Road, Ahmedabad - 380001" 
            />
            <ContactInfoBlock 
              icon={<Phone />} 
              label="Project Assistance" 
              text="+91 98765 43210" 
            />
            <ContactInfoBlock 
              icon={<Mail />} 
              label="Business Inquiries" 
              text="hello@skyrenewable.in" 
              secondaryText="support@skyrenewable.in"
            />
          </div>
        </div>

        <div className="h-px bg-white/5 w-full mb-12" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[12px] font-medium text-muted-foreground/60">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© 2025 SKY RENEWABLE. ALL RIGHTS RESERVED.</p>
            <span className="hidden md:block opacity-20">|</span>
            <p>DESIGNED FOR THE FUTURE</p>
          </div>

          <div className="flex gap-10">
            <Link href="/legal/terms" className="hover:text-white transition-colors">TERMS</Link>
            <Link href="/legal/privacy" className="hover:text-white transition-colors">PRIVACY</Link>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:text-white transition-all group font-bold tracking-widest uppercase"
          >
            SCROLL TO TOP 
            <div className="size-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
              <ArrowUp className="size-4" />
            </div>
          </button>
        </div>
      </div>

      {/* FLOATING WHATSAPP */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="size-8 fill-current" />
      </a>
    </footer>
  );
}

function ContactInfoBlock({ icon, label, text, secondaryText }: { icon: any, label: string, text: string, secondaryText?: string }) {
  return (
    <div className="flex gap-8 items-start">
      <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
        {React.cloneElement(icon as React.ReactElement, { className: "size-6 text-primary" })}
      </div>
      <div className="space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">{label}</p>
        <p className="text-xl font-bold">{text}</p>
        {secondaryText && <p className="text-xl font-bold opacity-60">{secondaryText}</p>}
      </div>
    </div>
  );
}

function SocialLink({ icon }: { icon: any }) {
  return (
    <Link href="#" className="size-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500">
      {icon}
    </Link>
  );
}
