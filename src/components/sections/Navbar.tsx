
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Menu, X, Sun, ChevronDown, Zap, Home, Factory, Wrench, ShieldCheck, Info, Users, BookOpen, Calculator as CalcIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Company", 
      href: "/about-us",
      submenu: [
        { name: "About Us", href: "/about-us", icon: <Info className="size-4" /> },
        { name: "Why Choose Us", href: "/company/why-choose-us", icon: <ShieldCheck className="size-4" /> },
        { name: "Our Process", href: "/company/process", icon: <Zap className="size-4" /> },
        { name: "Our Team", href: "/company/team", icon: <Users className="size-4" /> },
      ]
    },
    { 
      name: "Services", 
      href: "/services",
      submenu: [
        { name: "Residential Solar", href: "/services/residential-solar", icon: <Home className="size-4" /> },
        { name: "Commercial Solar", href: "/services/commercial-solar", icon: <Factory className="size-4" /> },
        { name: "Industrial Solutions", href: "/services/industrial-solar", icon: <Zap className="size-4" /> },
        { name: "Maintenance & AMC", href: "/services/maintenance", icon: <Wrench className="size-4" /> },
      ]
    },
    { name: "Projects", href: "/projects" },
    { 
      name: "Resources", 
      href: "/resources",
      submenu: [
        { name: "Solar Calculator", href: "/solar-calculator", icon: <CalcIcon className="size-4" /> },
        { name: "Subsidy Guide", href: "/resources/subsidy-guide", icon: <BookOpen className="size-4" /> },
        { name: "Blog", href: "/blog", icon: <BookOpen className="size-4" /> },
      ]
    },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className={cn(
        "bg-primary text-primary-foreground py-2 text-xs transition-all duration-300 hidden md:block",
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><Phone className="size-3 text-accent" /> +91 98765 43210</span>
            <span className="flex items-center gap-1.5"><Mail className="size-3 text-accent" /> contact@arkasolar.in</span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5"><MapPin className="size-3 text-accent" /> Ahmedabad, Gujarat</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={cn(
        "transition-all duration-300 border-b border-black/5",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-white/90 backdrop-blur-sm py-4"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/20">
              <Sun className="size-6 text-accent" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-headline text-2xl font-bold text-primary tracking-tight">ARKĀ</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase">Solar Energy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              link.submenu ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className={cn(
                    "px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1.5 hover:bg-primary/5 transition-all outline-none",
                    pathname.startsWith(link.href) ? "text-accent" : "text-primary/80"
                  )}>
                    {link.name} <ChevronDown className="size-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="rounded-2xl p-2 min-w-[220px] shadow-2xl border-none">
                    {link.submenu.map((sub) => (
                      <DropdownMenuItem key={sub.name} asChild>
                        <Link href={sub.href} className="w-full cursor-pointer py-3 px-4 rounded-xl hover:bg-primary/5 flex items-center gap-3 group">
                          <div className="bg-primary/5 p-2 rounded-lg group-hover:bg-accent group-hover:text-primary transition-colors">
                            {sub.icon}
                          </div>
                          <span className="font-bold text-primary/80 group-hover:text-primary">{sub.name}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-bold transition-all hover:bg-primary/5",
                    pathname === link.href ? "text-accent" : "text-primary/80"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="h-6 w-px bg-primary/10 mx-2" />
            <Button asChild className="bg-primary text-white rounded-full px-8 hover:bg-primary/90 shadow-lg shadow-primary/20 font-bold">
              <Link href="/get-quote">Get Free Quote</Link>
            </Button>
          </nav>

          {/* Mobile Trigger */}
          <div className="lg:hidden flex items-center gap-2">
             <Button variant="ghost" size="icon" asChild className="text-primary">
                <Link href="/get-quote"><Zap className="size-5" /></Link>
             </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background overflow-y-auto w-full sm:max-w-md">
                <div className="flex flex-col gap-8 pt-10">
                  <Link href="/" className="flex items-center gap-2 mb-4">
                    <Sun className="size-8 text-accent" />
                    <span className="font-headline text-2xl font-bold text-primary tracking-tight">Arkā Solar</span>
                  </Link>
                  {navLinks.map((link) => (
                    <div key={link.name} className="flex flex-col gap-4">
                      <Link 
                        href={link.href}
                        className={cn(
                          "text-xl font-black uppercase tracking-tight",
                          pathname === link.href ? "text-accent" : "text-primary"
                        )}
                      >
                        {link.name}
                      </Link>
                      {link.submenu && (
                        <div className="grid grid-cols-1 gap-4 ml-4">
                          {link.submenu.map((sub) => (
                            <Link key={sub.name} href={sub.href} className="text-sm font-bold text-muted-foreground hover:text-accent flex items-center gap-3">
                              <span className="bg-primary/5 p-1.5 rounded">{sub.icon}</span>
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-8 space-y-4">
                    <Button asChild className="w-full bg-primary text-white rounded-full py-6 font-bold text-lg">
                      <Link href="/get-quote">Request Site Survey</Link>
                    </Button>
                    <div className="flex justify-center gap-6">
                       <Link href="tel:+919876543210" className="p-3 bg-primary/5 rounded-full text-primary"><Phone className="size-5" /></Link>
                       <Link href="mailto:contact@arkasolar.in" className="p-3 bg-primary/5 rounded-full text-primary"><Mail className="size-5" /></Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
