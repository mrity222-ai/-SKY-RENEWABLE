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
    <footer className="bg-[#0F766E] text-white pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* TOP FOOTER */}
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          {/* LEFT SIDE */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-[#CCFBF1] font-bold text-[12px] uppercase tracking-[0.3em]">
                CONTACT US
              </span>
              <h2 className="text-[34px] md:text-[48px] lg:text-[64px] font-bold leading-[1.1] tracking-tighter max-w-xl">
                Let’s Build a Brighter Future Together
              </h2>
            </div>
            
            <nav className="flex flex-wrap gap-x-12 gap-y-4">
              <Link href="/" className="text-[14px] font-bold hover:text-[#CCFBF1] transition-colors">Home</Link>
              <Link href="/about-us" className="text-[14px] font-bold hover:text-[#CCFBF1] transition-colors">About Us</Link>
              <Link href="/services" className="text-[14px] font-bold hover:text-[#CCFBF1] transition-colors">Services</Link>
              <Link href="/projects" className="text-[14px] font-bold hover:text-[#CCFBF1] transition-colors">Projects</Link>
            </nav>
            
            <div className="flex gap-4">
              <SocialLink icon={<Facebook className="size-4" />} />
              <SocialLink icon={<Twitter className="size-4" />} />
              <SocialLink icon={<Instagram className="size-4" />} />
              <SocialLink icon={<Linkedin className="size-4" />} />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid gap-12 self-center lg:pl-12">
            <ContactInfoBlock 
              icon={<MapPin />} 
              label="Address" 
              text="Solar Plaza, MG Road, Ahmedabad - 380001" 
            />
            <ContactInfoBlock 
              icon={<Phone />} 
              label="Phone" 
              text="+91 98765 43210" 
            />
            <ContactInfoBlock 
              icon={<Mail />} 
              label="Email" 
              text="hello@skyrenewable.in" 
              secondaryText="support@skyrenewable.in"
            />
          </div>
        </div>

        <div className="h-px bg-white/10 w-full mb-12" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[12px] font-medium text-[#CCFBF1]">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© 2025 SKY RENEWABLE. All Rights Reserved.</p>
            <span className="hidden md:block text-white/20">|</span>
            <p>Website Design by <span className="text-white">Sky Creative</span></p>
          </div>

          <div className="flex gap-8">
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms & conditions</Link>
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-all group"
          >
            BACK TO TOP 
            <div className="size-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
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
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="size-8 fill-current" />
      </a>
    </footer>
  );
}

function ContactInfoBlock({ icon, label, text, secondaryText }: { icon: any, label: string, text: string, secondaryText?: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
        {React.cloneElement(icon as React.ReactElement, { className: "size-5 text-[#CCFBF1]" })}
      </div>
      <div className="space-y-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#CCFBF1]">{label}</p>
        <p className="text-[16px] font-bold">{text}</p>
        {secondaryText && <p className="text-[16px] font-bold">{secondaryText}</p>}
      </div>
    </div>
  );
}

function SocialLink({ icon }: { icon: any }) {
  return (
    <Link href="#" className="size-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
      {icon}
    </Link>
  );
}
