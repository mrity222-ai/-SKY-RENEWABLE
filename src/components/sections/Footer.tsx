
import Link from "next/link";
import { Sun, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-accent p-1.5 rounded-lg">
                <Sun className="size-6 text-primary" />
              </div>
              <span className="font-headline text-2xl font-bold tracking-tight">Arkā<span className="text-accent">Solar</span></span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Leading the solar revolution with premium rooftop installations and innovative energy monitoring solutions. Powering a sustainable tomorrow for India.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent hover:text-primary transition-all"><Facebook className="size-5" /></Link>
              <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent hover:text-primary transition-all"><Twitter className="size-5" /></Link>
              <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent hover:text-primary transition-all"><Instagram className="size-5" /></Link>
              <Link href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent hover:text-primary transition-all"><Linkedin className="size-5" /></Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-headline mb-8 border-l-4 border-accent pl-4">Navigation</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition-colors">Our Portfolio</Link></li>
              <li><Link href="/solar-calculator" className="hover:text-accent transition-colors">Savings Calculator</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog & News</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-headline mb-8 border-l-4 border-accent pl-4">Our Services</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/services/residential-solar" className="hover:text-accent transition-colors">Residential Rooftop</Link></li>
              <li><Link href="/services/commercial-solar" className="hover:text-accent transition-colors">Commercial Solar</Link></li>
              <li><Link href="/services/commercial-solar" className="hover:text-accent transition-colors">Industrial Solutions</Link></li>
              <li><Link href="/contact-us" className="hover:text-accent transition-colors">Maintenance (AMC)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-headline mb-8 border-l-4 border-accent pl-4">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-sm">
                <Phone className="size-5 text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-4 text-sm">
                <Mail className="size-5 text-accent shrink-0" />
                <span>hello@arkasolar.in</span>
              </li>
              <li className="flex gap-4 text-sm">
                <MapPin className="size-5 text-accent shrink-0" />
                <span>Solar Plaza, MG Road, Ahmedabad - 380001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2024 Arkā Solar Systems Private Limited.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
