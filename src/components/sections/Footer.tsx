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
  Instagram
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
      <footer className="bg-[#F0F7FF] h-20" />
    );
  }

  return (
    <footer className="bg-[#F0F7FF] text-[#475569] pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden border-t border-[#DCE7F5]">
      {/* BACKGROUND IMAGE OVERLAY */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1509391366360-fe5bb6583e22?q=80&w=2070&auto=format&fit=crop"
          alt="Solar Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
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
                <span className="text-[#2563EB] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em]">
                  CONTACT US
                </span>
                <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold leading-[1.1] tracking-tighter max-w-xl text-[#14213D]">
                  Powering the next <span className="text-[#2563EB]">Green Revolution.</span>
                </h2>
                <p className="text-[#64748B] text-[9px] md:text-[10px] font-bold tracking-widest uppercase">GST: 22BKRPC8874Q1Z9</p>
              </div>
            </div>
            
            <nav className="flex flex-wrap gap-x-6 md:gap-x-12 gap-y-4">
              <Link href="/" className="text-[13px] md:text-[14px] font-semibold text-[#14213D] hover:text-[#2563EB] transition-colors">Home</Link>
              <Link href="/about-us" className="text-[13px] md:text-[14px] font-semibold text-[#14213D] hover:text-[#2563EB] transition-colors">About Us</Link>
              <Link href="/services" className="text-[13px] md:text-[14px] font-semibold text-[#14213D] hover:text-[#2563EB] transition-colors">Services</Link>
              <Link href="/projects" className="text-[13px] md:text-[14px] font-semibold text-[#14213D] hover:text-[#2563EB] transition-colors">Projects</Link>
            </nav>
            
            <div className="flex gap-4">
              <SocialLink 
                href="https://www.facebook.com/skyrenewable/" 
                icon={<Facebook className="size-4" />} 
              />
              <SocialLink 
                href="https://www.instagram.com/skyrenewableofficial/" 
                icon={<Instagram className="size-4" />} 
              />
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

        <div className="h-px bg-[#DCE7F5] w-full mb-12" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] md:text-[12px] font-medium text-[#64748B] text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>© 2025 SKY RENEWABLE. ALL RIGHTS RESERVED.</p>
            <span className="hidden md:block opacity-20">|</span>
            <p>A COMPLETE SOLAR SOLUTION</p>
          </div>

          <div className="flex gap-6 md:gap-10">
            <Link href="/terms-and-conditions" className="hover:text-[#14213D] transition-colors uppercase">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-[#14213D] transition-colors uppercase">Privacy</Link>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:text-[#14213D] transition-all group font-bold tracking-widest uppercase text-[10px]"
          >
            Scroll to Top 
            <div className="size-8 md:size-10 rounded-full border border-[#DCE7F5] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-all bg-white shadow-sm">
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
      <div className="size-12 md:size-14 rounded-xl md:rounded-2xl bg-white flex items-center justify-center shrink-0 border border-[#DCE7F5] shadow-sm">
        {React.cloneElement(icon as React.ReactElement, { className: "size-5 md:size-6 text-[#2563EB]" })}
      </div>
      <div className="space-y-1 md:space-y-2">
        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#64748B]">{label}</p>
        <p className="text-base md:text-lg font-bold leading-tight text-[#14213D]">{text}</p>
        {secondaryText && <p className="text-base md:text-lg font-bold text-[#475569] leading-tight">{secondaryText}</p>}
      </div>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: any, href: string }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="size-10 md:size-12 bg-white border border-[#DCE7F5] rounded-full flex items-center justify-center hover:bg-[#EEF7FF] hover:border-[#2563EB]/20 transition-all duration-500 text-[#2563EB] shadow-sm"
    >
      {socialMap[href.includes('facebook') ? 'facebook' : 'instagram']}
    </Link>
  );
}

const socialMap = {
  facebook: <Facebook className="size-4" />,
  instagram: <Instagram className="size-4" />
};