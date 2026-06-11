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
    <footer className="bg-foreground text-white pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* TOP FOOTER */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 mb-12 md:mb-24">
          {/* LEFT SIDE */}
          <div className="space-y-8 md:space-y-14">
            <div className="space-y-4 md:space-y-8">
              <span className="text-primary font-bold text-[11px] md:text-[12px] uppercase tracking-[0.3em] md:tracking-[0.4em]">
                CONTACT US
              </span>
              <h2 className="text-[32px] md:text-[60px] lg:text-[72px] font-bold leading-[1] tracking-tighter max-w-xl">
                Powering the next <span className="text-secondary">Green Revolution.</span>
              </h2>
              <p className="text-white/40 text-[10px] md:text-sm font-bold tracking-widest uppercase">GST: 22BKRPC8874Q1Z9</p>
            </div>
            
            <nav className="flex flex-wrap gap-x-6 md:gap-x-12 gap-y-4">
              <Link href="/" className="text-[13px] md:text-[14px] font-semibold hover:text-primary transition-colors">Home</Link>
              <Link href="/about-us" className="text-[13px] md:text-[14px] font-semibold hover:text-primary transition-colors">About Us</Link>
              <Link href="/services" className="text-[13px] md:text-[14px] font-semibold hover:text-primary transition-colors">Services</Link>
              <Link href="/projects" className="text-[13px] md:text-[14px] font-semibold hover:text-primary transition-colors">Projects</Link>
            </nav>
            
            <div className="flex gap-4">
              <SocialLink icon={<Facebook className="size-4" />} />
              <SocialLink icon={<Twitter className="size-4" />} />
              <SocialLink icon={<Instagram className="size-4" />} />
              <SocialLink icon={<Linkedin className="size-4" />} />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid gap-8 md:gap-16 self-center lg:pl-20">
            <ContactInfoBlock 
              icon={<MapPin />} 
              label="HQ Location" 
              text="Solar Plaza, MG Road, Ahmedabad - 380001" 
            />
            <ContactInfoBlock 
              icon={<Phone />} 
              label="Project Assistance" 
              text="+91 88711 05807" 
              secondaryText="+91 70002 09519"
            />
            <ContactInfoBlock 
              icon={<Mail />} 
              label="Business Inquiries" 
              text="skyrenewable06@gmail.com" 
            />
          </div>
        </div>

        <div className="h-px bg-white/5 w-full mb-12" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] md:text-[12px] font-medium text-muted-foreground/60 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>© 2025 SKY RENEWABLE. ALL RIGHTS RESERVED.</p>
            <span className="hidden md:block opacity-20">|</span>
            <p>A COMPLETE SOLAR SOLUTION</p>
          </div>

          <div className="flex gap-6 md:gap-10">
            <Link href="/legal/terms" className="hover:text-white transition-colors uppercase">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-white transition-colors uppercase">Privacy</Link>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:text-white transition-all group font-bold tracking-widest uppercase text-[10px]"
          >
            Scroll to Top 
            <div className="size-8 md:size-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
              <ArrowUp className="size-3 md:size-4" />
            </div>
          </button>
        </div>
      </div>

      {/* FLOATING WHATSAPP */}
      <a 
        href="https://wa.me/918871105807" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[80] bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="size-6 md:size-8 fill-current" />
      </a>
    </footer>
  );
}

function ContactInfoBlock({ icon, label, text, secondaryText }: { icon: any, label: string, text: string, secondaryText?: string }) {
  return (
    <div className="flex gap-6 md:gap-8 items-start">
      <div className="size-12 md:size-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
        {React.cloneElement(icon as React.ReactElement, { className: "size-5 md:size-6 text-primary" })}
      </div>
      <div className="space-y-1 md:space-y-2">
        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground/60">{label}</p>
        <p className="text-lg md:text-xl font-bold leading-tight">{text}</p>
        {secondaryText && <p className="text-lg md:text-xl font-bold opacity-60 leading-tight">{secondaryText}</p>}
      </div>
    </div>
  );
}

function SocialLink({ icon }: { icon: any }) {
  return (
    <Link href="#" className="size-10 md:size-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500">
      {icon}
    </Link>
  );
}
