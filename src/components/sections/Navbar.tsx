
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Menu, X, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Offerings", href: "#offerings" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Solar Calculator", href: "#calculator" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className={`bg-primary text-primary-foreground py-2 text-xs transition-all duration-300 hidden md:block ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5"><Phone className="size-3" /> +91 98765 43210</span>
            <span className="flex items-center gap-1.5"><Mail className="size-3" /> contact@arkasolar.in</span>
            <span className="flex items-center gap-1.5"><MapPin className="size-3" /> Solar Park, Ahmedabad, GJ</span>
          </div>
          <div className="flex gap-4">
            <Link href="#contact" className="hover:text-accent">Request Quote</Link>
            <Link href="#blog" className="hover:text-accent">Knowledge Base</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-accent p-1.5 rounded-lg">
              <Sun className="size-6 text-primary" />
            </div>
            <span className="font-headline text-2xl font-bold text-primary tracking-tight">Arkā<span className="text-accent">Solar</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button size="sm" className="bg-primary text-primary-foreground rounded-full px-6 hover:bg-primary/90">
              Get A Quote
            </Button>
          </nav>

          {/* Mobile Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background">
                <div className="flex flex-col gap-6 pt-10">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className="text-lg font-medium text-primary hover:text-accent"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button className="w-full bg-primary text-white rounded-full">
                    Contact Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
