'use client';

import React, { useState, useEffect } from "react";
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

export function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!mounted) {
    return (
      <footer className="bg-[#EEF7FF] border-t border-[#E6EEF8] h-20" />
    );
  }

  return (
    <footer className="bg-[#EEF7FF] text-[#4B587C] pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden border-t border-[#E6EEF8]">
      <div className="container mx-auto px-4">
        {/* TOP FOOTER */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 mb-12 md:mb-24">
          {/* LEFT SIDE */}
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <Link href="/" className="inline-block relative h-16 md:h-20 w-64 md:w-80 mb-4">
                <Image 
                  src="/ab/lo.png" 
                  alt="Sky Renewable Logo" 
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <div className="space-y-4">
                <span className="text-[#91C8FF] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em]">
                  CONTACT US
                </span>
                <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold leading-[1.1] tracking-tighter max-w-xl text-[#1D2348]">
                  Powering the next <span className="text-[#91C8FF]">Green Revolution.</span>
                </h2>
                <p className="text-[#8A98B8] text-[9px] md:text-[10px] font-bold tracking-widest uppercase">GST: 22BKRPC8874Q1Z9</p>
              </div>
            </div>
            
            <nav className="flex flex-wrap gap-x-6 md:gap-x-12 gap-y-4">
              <Link href="/" className="text-[13px] md:text-[14px] font-semibold text-[#1D2348] hover:text-[#91C8FF] transition-colors">Home</Link>
              <Link href="/about-us" className="text-[13px] md:text-[14px] font-semibold text-[#1D2348] hover:text-[#91C8FF] transition-colors">About Us</Link>
              <Link href="/services" className="text-[13px] md:text-[14px] font-semibold text-[#1D2348] hover:text-[#91C8FF] transition-colors">Services</Link>
              <Link href="/projects" className="text-[13px] md:text-[14px] font-semibold text-[#1D2348] hover:text-[#91C8FF] transition-colors">Projects</Link>
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

        <div className="h-px bg-[#1D2348]/5 w-full mb-12" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] md:text-[12px] font-medium text-[#8A98B8] text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>© 2025 SKY RENEWABLE. ALL RIGHTS RESERVED.</p>
            <span className="hidden md:block opacity-20">|</span>
            <p>A COMPLETE SOLAR SOLUTION</p>
          </div>

          <div className="flex gap-6 md:gap-10">
            <Link href="/legal/terms" className="hover:text-[#1D2348] transition-colors uppercase">Terms</Link>
            <Link href="/legal/privacy" className="hover:text-[#1D2348] transition-colors uppercase">Privacy</Link>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:text-[#1D2348] transition-all group font-bold tracking-widest uppercase text-[10px]"
          >
            Scroll to Top 
            <div className="size-8 md:size-10 rounded-full border border-[#91C8FF]/20 flex items-center justify-center group-hover:bg-[#91C8FF] group-hover:text-white group-hover:border-[#91C8FF] transition-all">
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
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[80] bg-[#FF9800] text-white p-4 md:p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
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
      <div className="size-12 md:size-14 rounded-xl md:rounded-2xl bg-[#EEF7FF] flex items-center justify-center shrink-0 border border-[#91C8FF]/10 shadow-sm">
        {React.cloneElement(icon as React.ReactElement, { className: "size-5 md:size-6 text-[#91C8FF]" })}
      </div>
      <div className="space-y-1 md:space-y-2">
        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#8A98B8]">{label}</p>
        <p className="text-base md:text-lg font-bold leading-tight text-[#1D2348]">{text}</p>
        {secondaryText && <p className="text-base md:text-lg font-bold text-[#8A98B8] leading-tight">{secondaryText}</p>}
      </div>
    </div>
  );
}

function SocialLink({ icon }: { icon: any }) {
  return (
    <Link href="#" className="size-10 md:size-12 bg-[#EEF7FF] border border-[#91C8FF]/10 rounded-full flex items-center justify-center hover:bg-[rgba(255,152,0,0.12)] hover:border-[#FF9800]/20 transition-all duration-500 text-[#91C8FF] hover:text-[#FF9800] shadow-sm">
      {icon}
    </Link>
  );
}
