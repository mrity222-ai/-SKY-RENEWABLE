import Link from "next/link";
import { Sun, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-foreground pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-primary p-2 rounded-xl">
                <Sun className="size-6 text-accent" />
              </div>
              <span className="text-2xl font-black tracking-tight text-primary uppercase">SKY RENEWABLE</span>
            </Link>
            <p className="text-[13px] text-muted-foreground leading-[1.8] max-w-sm">
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
            <h4 className="text-[11px] font-bold text-foreground uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/projects">Our Projects</FooterLink>
              <FooterLink href="/contact-us">Contact Us</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[11px] font-bold text-foreground uppercase tracking-[0.2em]">Solutions</h4>
            <ul className="space-y-4">
              <FooterLink href="/services/residential-solar">Residential Solar</FooterLink>
              <FooterLink href="/services/commercial-solar">Commercial Solar</FooterLink>
              <FooterLink href="/services/industrial-solar">Industrial Systems</FooterLink>
              <FooterLink href="/solar-calculator">Solar Calculator</FooterLink>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[11px] font-bold text-foreground uppercase tracking-[0.2em]">Contact Information</h4>
            <ul className="space-y-5">
              <ContactItem icon={<Phone className="size-4 text-primary" />} text="+91 98765 43210" />
              <ContactItem icon={<Mail className="size-4 text-primary" />} text="contact@skyrenewable.in" />
              <ContactItem icon={<MapPin className="size-4 text-primary" />} text="Solar Plaza, Ahmedabad, Gujarat" />
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-muted-foreground font-medium">
          <p>© 2024 Sky Renewable Systems Private Limited. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[13px] text-muted-foreground hover:text-primary transition-colors">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ icon }: { icon: any }) {
  return (
    <Link href="#" className="p-3 bg-muted rounded-xl hover:bg-primary hover:text-white transition-all text-foreground">
      {icon}
    </Link>
  );
}

function ContactItem({ icon, text }: { icon: any, text: string }) {
  return (
    <li className="flex gap-4 items-start text-[13px] text-muted-foreground leading-tight">
      <div className="mt-0.5 shrink-0">{icon}</div>
      <span>{text}</span>
    </li>
  );
}
