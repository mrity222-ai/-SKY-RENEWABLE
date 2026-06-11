
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  ChevronDown, 
  Zap, 
  Home, 
  Factory, 
  Wrench, 
  Sun,
  Cpu,
  ClipboardCheck,
  Banknote,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const logoImage = PlaceHolderImages.find(img => img.id === 'company-logo-icon');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services",
      isMega: true,
      submenu: [
        { 
          name: "Solar EPC Solutions", 
          href: "/services/industrial-solar", 
          icon: <Zap className="size-5" />
        },
        { 
          name: "Rooftop Solar Installations", 
          href: "/services/rooftop-installation", 
          icon: <Home className="size-5" />
        },
        { 
          name: "Commercial & Industrial Solar Projects", 
          href: "/services/commercial-solar", 
          icon: <Factory className="size-5" />
        },
        { 
          name: "Operation & Maintenance Services", 
          href: "/services/solar-maintenance", 
          icon: <Wrench className="size-5" />
        },
        { 
          name: "Solar Panel Cleaning Solutions", 
          href: "/services/solar-maintenance", 
          icon: <Sun className="size-5" />
        },
        { 
          name: "Performance Monitoring & Optimization", 
          href: "/services/battery-storage", 
          icon: <Cpu className="size-5" />
        },
        { 
          name: "Net Metering Assistance", 
          href: "/services/rooftop-installation", 
          icon: <ClipboardCheck className="size-5" />
        },
        { 
          name: "PM Surya Ghar Yojana Support", 
          href: "/government-solar-subsidy", 
          icon: <Banknote className="size-5" />
        },
      ]
    },
    { name: "Projects", href: "/projects" },
    { 
      name: "Resources", 
      href: "#",
      submenu: [
        { name: "Subsidy Guide", href: "/government-solar-subsidy", icon: <Sun className="size-4" /> },
        { name: "Solar Calculator", href: "/solar-calculator", icon: <Zap className="size-4" /> },
      ]
    },
    { name: "About Us", href: "/about-us" },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 pt-6">
      <header className={cn(
        "max-w-7xl mx-auto rounded-full transition-all duration-500 border border-white/20",
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] py-3 px-6" 
          : "bg-white/40 backdrop-blur-md py-4 px-8"
      )}>
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center group shrink-0">
              {logoImage && (
                <Image 
                  src={logoImage.imageUrl} 
                  alt="Sky Renewable Logo" 
                  width={150} 
                  height={40} 
                  className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                  data-ai-hint={logoImage.imageHint}
                />
              )}
            </Link>
          </div>

          {/* NAV MENU */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.submenu 
                ? link.submenu.some(sub => pathname === sub.href) || (link.href !== "#" && pathname === link.href)
                : pathname === link.href;

              return (
                <div key={link.name} className="relative group/nav">
                  {link.submenu ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className={cn(
                        "relative px-4 py-2 rounded-full text-[13px] font-semibold flex items-center gap-1 transition-all outline-none",
                        isActive ? "text-primary bg-primary/5" : "text-foreground hover:bg-primary/5 hover:text-primary"
                      )}>
                        {link.name} <ChevronDown className="size-3 opacity-50 group-hover/nav:rotate-180 transition-transform" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="center" 
                        sideOffset={15} 
                        className={cn(
                          "rounded-[32px] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white/40 bg-white/95 backdrop-blur-2xl overflow-y-auto max-h-[85vh]",
                          link.isMega ? "min-w-[700px] lg:min-w-[850px]" : "min-w-[260px]"
                        )}
                      >
                        <div className={cn(
                          "grid gap-3",
                          link.isMega ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                        )}>
                          {link.submenu.map((sub) => (
                            <DropdownMenuItem key={sub.name} asChild>
                              <Link 
                                href={sub.href} 
                                className={cn(
                                  "w-full cursor-pointer p-4 rounded-2xl hover:bg-primary/5 flex items-center gap-4 group/item transition-all duration-300"
                                )}
                              >
                                <div className="bg-primary/10 p-2.5 rounded-xl group-hover/item:bg-primary group-hover/item:text-white group-hover/item:shadow-lg group-hover/item:shadow-primary/20 transition-all duration-300 shrink-0 text-primary">
                                  {sub.icon}
                                </div>
                                <span className="font-bold text-[14px] tracking-tight text-foreground group-hover/item:text-primary transition-colors">{sub.name}</span>
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link 
                      href={link.href}
                      className={cn(
                        "relative px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 block",
                        isActive ? "bg-primary/5 text-primary" : "text-foreground hover:bg-primary/5 hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA - RIGHT */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <Button asChild variant="ghost" className="hidden lg:flex text-foreground font-bold text-xs uppercase tracking-widest hover:bg-primary/5 rounded-full px-6 transition-all">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="hidden lg:flex bg-primary text-white rounded-full px-8 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 font-bold h-11 text-xs uppercase tracking-wider">
              <Link href="/get-quote">Get a Quote</Link>
            </Button>

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground hover:bg-primary/5 rounded-full">
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white border-none w-full max-w-[350px] p-0 overflow-y-auto rounded-l-[40px] shadow-2xl">
                  <div className="p-8 h-full flex flex-col">
                    <SheetHeader className="mb-10 text-left">
                      <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                      <SheetDescription className="sr-only">Navigate through Sky Renewable services and resources.</SheetDescription>
                      <div className="flex items-center justify-between">
                        {logoImage && (
                          <Image src={logoImage.imageUrl} alt="Sky Renewable" width={130} height={36} className="object-contain" />
                        )}
                      </div>
                    </SheetHeader>
                    
                    <nav className="flex flex-col gap-2 overflow-y-auto flex-grow pb-8 pr-2 custom-scrollbar">
                      {navLinks.map((link) => (
                        <div key={link.name} className="space-y-2 mb-4">
                          <Link 
                            href={link.href} 
                            className={cn(
                              "text-[16px] font-bold px-4 py-2 rounded-xl block transition-all",
                              pathname === link.href ? "bg-primary/5 text-primary" : "text-foreground hover:bg-primary/5"
                            )}
                          >
                            {link.name}
                          </Link>
                          {link.submenu && (
                            <div className="grid gap-1 ml-6 border-l-2 border-primary/10 pl-4">
                              {link.submenu.map((sub) => (
                                <Link 
                                  key={sub.name} 
                                  href={sub.href} 
                                  className={cn(
                                    "text-[14px] font-medium py-2 px-3 rounded-lg block transition-all",
                                    pathname === sub.href ? "bg-primary/5 text-primary" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                                  )}
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                    
                    <div className="pt-6 border-t border-border flex flex-col gap-4 mt-auto">
                      <Button asChild variant="outline" className="w-full border-primary text-primary rounded-full py-7 font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                        <Link href="/login">Login</Link>
                      </Button>
                      <Button asChild className="w-full bg-primary text-white rounded-full py-7 font-bold shadow-xl shadow-primary/20 text-sm uppercase tracking-widest hover:bg-primary/90 transition-all">
                        <Link href="/get-quote">Get a Quote</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
