
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Menu, X, Sun, ChevronDown } from "lucide-react";
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
    { name: "About Us", href: "/about-us" },
    { 
      name: "Services", 
      href: "/services",
      submenu: [
        { name: "All Services", href: "/services" },
        { name: "Residential Solar", href: "/services/residential-solar" },
        { name: "Commercial Solar", href: "/services/commercial-solar" },
      ]
    },
    { name: "Projects", href: "/projects" },
    { name: "Solar Calculator", href: "/solar-calculator" },
    { name: "Blog", href: "/blog" },
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
            <span className="flex items-center gap-1.5"><Phone className="size-3" /> +91 98765 43210</span>
            <span className="flex items-center gap-1.5"><Mail className="size-3" /> contact@arkasolar.in</span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5"><MapPin className="size-3" /> Ahmedabad, Gujarat</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={cn(
        "transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-white/50 backdrop-blur-sm py-5"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-accent p-1.5 rounded-lg">
              <Sun className="size-6 text-primary" />
            </div>
            <span className="font-headline text-2xl font-bold text-primary tracking-tight">Arkā<span className="text-accent">Solar</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              link.submenu ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className={cn(
                    "text-sm font-semibold flex items-center gap-1 hover:text-accent transition-colors outline-none",
                    pathname.startsWith(link.href) ? "text-accent" : "text-primary"
                  )}>
                    {link.name} <ChevronDown className="size-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="rounded-xl p-2 min-w-[200px]">
                    {link.submenu.map((sub) => (
                      <DropdownMenuItem key={sub.name} asChild>
                        <Link href={sub.href} className="w-full cursor-pointer py-2 px-3 rounded-lg hover:bg-accent/10">
                          {sub.name}
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
                    "text-sm font-semibold hover:text-accent transition-colors",
                    pathname === link.href ? "text-accent" : "text-primary"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button size="sm" asChild className="bg-primary text-white rounded-full px-6 hover:bg-primary/90">
              <Link href="/contact-us">Get A Quote</Link>
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
              <SheetContent side="right" className="bg-background overflow-y-auto">
                <div className="flex flex-col gap-6 pt-10">
                  <div className="font-headline text-xl font-bold text-primary mb-4">Menu</div>
                  {navLinks.map((link) => (
                    <div key={link.name} className="flex flex-col gap-2">
                      <Link 
                        href={link.href}
                        className={cn(
                          "text-lg font-bold",
                          pathname === link.href ? "text-accent" : "text-primary"
                        )}
                      >
                        {link.name}
                      </Link>
                      {link.submenu && (
                        <div className="ml-4 flex flex-col gap-2 border-l-2 border-accent/20 pl-4">
                          {link.submenu.slice(1).map((sub) => (
                            <Link key={sub.name} href={sub.href} className="text-sm text-muted-foreground hover:text-accent">
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Button asChild className="w-full bg-primary text-white rounded-full mt-4">
                    <Link href="/contact-us">Contact Us</Link>
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
