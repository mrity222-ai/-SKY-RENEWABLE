
'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <footer className="bg-[#0F172A] text-white pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* TOP FOOTER */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 mb-12 md:mb-24">
          {/* LEFT SIDE */}
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <Link href="/" className="inline-block relative h-12 w-48 mb-2">
                <Image 
                  src="/ab/lo.png" 
                  alt="Sky Renewable Logo" 
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <div className="space-y-4">
                <span className="text-[#3B82F6] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em]">
                  CONTACT US
                </span>
                <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold leading-[1.1] tracking-tighter max-w-xl text-white">
                  Powering the next <span className="text-secondary">Green Revolution.</span>
                </h2>
                <p className="text-[#94A3B8] text-[9px] md:text-[10px] font-bold tracking-widest uppercase">GST: 22BKRPC8874Q1Z9</p>
              </div>
            </div>
            
            <nav className="flex flex-wrap gap-x-6 md:gap-x-12 gap-y-4">
              <Link href="/" className="text-[13px] md:text-[14px] font-semibold text-[#CBD5E1] hover:text-primary transition-colors">Home</Link>
              <Link href="/about-us" className="text-[13px] md:text-[14px] font-semibold text-[#CBD5E1] hover:text-primary transition-colors">About Us</Link>
              <Link href="/services" className="text-[13px] md:text-[14px] font-semibold text-[#CBD5E1] hover:text-primary transition-colors">Services</Link>
              <Link href="/projects" className="text-[13px] md:text-[14px] font-semibold text-[#CBD5E1] hover:text-primary transition-colors">Projects</Link>
            </nav>
            
            <div className="flex gap-4">
              <SocialLink icon={<Facebook className="size-4" />} />
              <SocialLink icon={<Twitter className="size-4" />} />
              <SocialLink icon={<Instagram className="size-4" />} />
              <SocialLink icon={<Linkedin className="size-4" />} />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid gap-8 md:gap-12 self-center lg:pl-20">
            <ContactInfoBlock 
              icon={<MapPin />} 
              label="HQ Location" 
              text="Bazar Chowk Complex , Kachandur, Gunderdehi, Balod C.G. 491223" 
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] md:text-[12px] font-medium text-[#94A3B8] text-center md:text-left">
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
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[80] bg-[#22C55E] text-white p-4 md:p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
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
        {React.cloneElement(icon as React.ReactElement, { className: "size-5 md:size-6 text-[#2563EB]" })}
      </div>
      <div className="space-y-1 md:space-y-2">
        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#94A3B8]">{label}</p>
        <p className="text-base md:text-lg font-bold leading-tight text-white">{text}</p>
        {secondaryText && <p className="text-base md:text-lg font-bold text-white/60 leading-tight">{secondaryText}</p>}
      </div>
    </div>
  );
}

function SocialLink({ icon }: { icon: any }) {
  return (
    <Link href="#" className="size-10 md:size-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500 text-[#3B82F6] hover:text-white">
      {icon}
    </Link>
  );
}
