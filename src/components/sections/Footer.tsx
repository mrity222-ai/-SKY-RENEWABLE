import Link from "next/link";
import { Sun, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ArrowRight, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-black pt-24 pb-12 border-t border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <Sun className="size-8 text-black" />
              <span className="text-[24px] font-bold tracking-tight text-black uppercase">Arkā Solar</span>
            </Link>
            <p className="text-[13px] text-[#555] leading-[1.6] max-w-sm">
              Empowering India's transition to sustainable energy through engineering excellence and customer-centric solar solutions.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Facebook className="size-4" />} />
              <SocialLink icon={<Twitter className="size-4" />} />
              <SocialLink icon={<Instagram className="size-4" />} />
              <SocialLink icon={<Linkedin className="size-4" />} />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[12px] font-bold text-black uppercase tracking-widest">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/company/why-choose-us">Why Choose Us</FooterLink>
              <FooterLink href="/company/process">Our Process</FooterLink>
              <FooterLink href="/projects">Case Studies</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[12px] font-bold text-black uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-3">
              <FooterLink href="/services/residential-solar">Residential</FooterLink>
              <FooterLink href="/services/commercial-solar">Commercial</FooterLink>
              <FooterLink href="/services/industrial-solar">Industrial</FooterLink>
              <FooterLink href="/solar-calculator">Calculator</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[12px] font-bold text-black uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <ContactItem icon={<Phone className="size-4" />} text="+91 98765 43210" />
              <ContactItem icon={<Mail className="size-4" />} text="contact@arkasolar.in" />
              <ContactItem icon={<MapPin className="size-4" />} text="Solar Plaza, Ahmedabad" />
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-[#777]">
          <p>© 2024 Arkā Solar Systems Private Limited.</p>
          <div className="flex gap-8">
            <Link href="/legal/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[13px] text-[#555] hover:text-black transition-colors">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ icon }: { icon: any }) {
  return (
    <Link href="#" className="p-2.5 bg-[#F5F5F5] rounded-xl hover:bg-black hover:text-white transition-all text-black">
      {icon}
    </Link>
  );
}

function ContactItem({ icon, text }: { icon: any, text: string }) {
  return (
    <li className="flex gap-3 items-center text-[13px] text-[#555]">
      {icon}
      <span>{text}</span>
    </li>
  );
}