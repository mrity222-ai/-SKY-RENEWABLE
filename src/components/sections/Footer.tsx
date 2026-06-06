
import Link from "next/link";
import { Sun, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ArrowRight, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-24 opacity-5 rotate-12 pointer-events-none">
        <Sun className="size-[500px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-accent p-2 rounded-xl">
                <Sun className="size-8 text-primary" />
              </div>
              <span className="font-headline text-3xl font-bold tracking-tight">Arkā<span className="text-accent">Solar</span></span>
            </Link>
            <p className="text-white/60 leading-relaxed text-lg">
              Empowering India's transition to sustainable energy through engineering excellence and customer-centric solar solutions. 
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Facebook className="size-5" />} />
              <SocialLink icon={<Twitter className="size-5" />} />
              <SocialLink icon={<Instagram className="size-5" />} />
              <SocialLink icon={<Linkedin className="size-5" />} />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-lg font-bold font-headline border-l-4 border-accent pl-4">Company</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <FooterLink href="/about-us">About Our Story</FooterLink>
              <FooterLink href="/company/why-choose-us">Why Choose Us</FooterLink>
              <FooterLink href="/company/process">Our Process</FooterLink>
              <FooterLink href="/company/team">Leadership Team</FooterLink>
              <FooterLink href="/projects">Case Studies</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-lg font-bold font-headline border-l-4 border-accent pl-4">Solar Solutions</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <FooterLink href="/services/residential-solar">Residential Rooftop</FooterLink>
              <FooterLink href="/services/commercial-solar">Commercial Solar</FooterLink>
              <FooterLink href="/services/industrial-solar">Industrial EPC</FooterLink>
              <FooterLink href="/services/maintenance">Maintenance (AMC)</FooterLink>
              <FooterLink href="/solar-calculator">Savings Calculator</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-lg font-bold font-headline border-l-4 border-accent pl-4">Get Support</h4>
            <ul className="space-y-6">
              <ContactItem icon={<Phone className="size-5 text-accent" />} text="+91 98765 43210" />
              <ContactItem icon={<Mail className="size-5 text-accent" />} text="contact@arkasolar.in" />
              <ContactItem icon={<MapPin className="size-5 text-accent" />} text="Solar Plaza, MG Road, Ahmedabad - 380001" />
            </ul>
            <Link href="/get-quote" className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-full font-bold hover:gap-4 transition-all w-full justify-center">
              Request Free Proposal <Zap className="size-4" />
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <div className="space-y-1">
            <p>© 2024 Arkā Solar Systems Private Limited. All Rights Reserved.</p>
            <p className="text-[10px] uppercase tracking-widest font-bold">GSTIN: 24AAACA0000A1Z5</p>
          </div>
          <div className="flex gap-8 font-medium">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/legal/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-accent transition-colors flex items-center gap-2 group">
        <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ icon }: { icon: any }) {
  return (
    <Link href="#" className="p-3 bg-white/5 rounded-xl hover:bg-accent hover:text-primary transition-all border border-white/5">
      {icon}
    </Link>
  );
}

function ContactItem({ icon, text }: { icon: any, text: string }) {
  return (
    <li className="flex gap-4 items-start">
      <div className="shrink-0 mt-1">{icon}</div>
      <span className="text-white/80">{text}</span>
    </li>
  );
}
