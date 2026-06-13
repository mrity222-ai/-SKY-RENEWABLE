
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
  Phone,
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

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

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
        { name: "Solar EPC Solutions", href: "/services/industrial-solar", icon: <Zap className="size-4" /> },
        { name: "Rooftop Solar Installations", href: "/services/rooftop-installation", icon: <Home className="size-4" /> },
        { name: "Commercial & Industrial Projects", href: "/services/commercial-solar", icon: <Factory className="size-4" /> },
        { name: "Operation & Maintenance", href: "/services/solar-maintenance", icon: <Wrench className="size-4" /> },
        { name: "Solar Panel Cleaning", href: "/solar-panel-cleaning-solutions", icon: <Sun className="size-4" /> },
        { name: "Storage & Optimization", href: "/services/battery-storage", icon: <Cpu className="size-4" /> },
        { name: "Net Metering Assistance", href: "/net-metering-assistance", icon: <ClipboardCheck className="size-4" /> },
        { name: "PM Surya Ghar Support", href: "/government-solar-subsidy", icon: <Banknote className="size-4" /> },
      ]
    },
    { name: "Projects", href: "/projects" },
    { 
      name: "Resources", 
      href: "#",
      submenu: [
        { name: "Subsidy Guide", href: "/government-solar-subsidy", icon: <Sun className="size-3.5" /> },
        { name: "Solar Calculator", href: "/solar-calculator", icon: <Zap className="size-3.5" /> },
        { name: "Contact Us", href: "/contact-us", icon: <Phone className="size-3.5" /> },
      ]
    },
    { name: "About Us", href: "/about-us" },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 pt-4 md:pt-6">
      <header className={cn(
        "max-w-6xl mx-auto rounded-full transition-all duration-500 border",
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl border-border shadow-sm py-2 md:py-3 px-4 md:px-6" 
          : "bg-transparent backdrop-blur-none border-transparent py-4 px-4 md:px-8"
      )}>
        <div className="flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center group shrink-0 relative">
              <div className="relative h-8 md:h-10 w-32 md:w-40">
                <Image 
                  src="/Logo.jpeg" 
                  alt="Sky Renewable Logo" 
                  fill
                  className="object-contain w-full h-full transition-transform group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center: Navigation */}
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
                        "relative px-4 py-1.5 rounded-full text-[14px] md:text-[15px] font-semibold flex items-center gap-1 transition-all outline-none",
                        isActive ? "text-primary bg-primary/5" : "text-foreground hover:bg-primary/5 hover:text-primary"
                      )}>
                        {link.name} <ChevronDown className="size-3 opacity-50 group-hover/nav:rotate-180 transition-transform" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="center" 
                        sideOffset={15} 
                        className={cn(
                          "rounded-[24px] md:rounded-[32px] p-4 md:p-6 shadow-xl border border-border bg-white/95 backdrop-blur-2xl overflow-y-auto max-h-[85vh]",
                          link.isMega ? "min-w-[500px] lg:min-w-[800px]" : "min-w-[240px]"
                        )}
                      >
                        <div className={cn(
                          "grid gap-2",
                          link.isMega ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                        )}>
                          {link.submenu.map((sub) => (
                            <DropdownMenuItem key={sub.name} asChild>
                              <Link 
                                href={sub.href} 
                                className="w-full cursor-pointer p-3 rounded-xl hover:bg-primary/5 flex items-center gap-3 group/item transition-all duration-300"
                              >
                                <div className="bg-primary/10 p-2 rounded-lg group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 shrink-0 text-primary">
                                  {sub.icon}
                                </div>
                                <span className="font-bold text-[13px] md:text-[14px] tracking-tight text-[#1E293B] group-hover/item:text-primary transition-colors">{sub.name}</span>
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
                        "relative px-4 py-1.5 rounded-full text-[14px] md:text-[15px] font-semibold transition-all duration-300 block",
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

          {/* Right: Actions */}
          <div className="flex-1 flex justify-end items-center gap-6">
            <Button asChild className="hidden sm:flex bg-primary text-white rounded-full px-6 hover:bg-primary/90 hover:shadow-lg transition-all duration-300 font-bold h-9 md:h-10 text-[13px] md:text-[14px] uppercase tracking-wider">
              <Link href="/get-quote">Get Quote</Link>
            </Button>

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground hover:bg-primary/5 rounded-full">
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white border-none w-[85%] sm:max-w-[320px] p-0 overflow-y-auto rounded-l-[24px] shadow-2xl">
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    <SheetHeader className="mb-6 text-left">
                      <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                      <SheetDescription className="sr-only">Navigate Sky Renewable services.</SheetDescription>
                      <div className="flex items-center justify-between">
                        <div className="relative h-8 w-32">
                          <Image src="/Logo.jpeg" alt="Sky Renewable" fill className="object-contain" />
                        </div>
                      </div>
                    </SheetHeader>
                    
                    <nav className="flex flex-col gap-1.5 overflow-y-auto flex-grow pb-8 pr-1">
                      {navLinks.map((link) => (
                        <div key={link.name} className="space-y-1 mb-3">
                          {link.href !== "#" ? (
                            <Link 
                              href={link.href} 
                              className={cn(
                                "text-[15px] md:text-[16px] font-bold px-4 py-1.5 rounded-lg block transition-all",
                                pathname === link.href ? "bg-primary/5 text-primary" : "text-foreground hover:bg-primary/5"
                              )}
                            >
                              {link.name}
                            </Link>
                          ) : (
                            <span className="text-[10px] font-bold px-4 py-1 block text-[#64748B] uppercase tracking-widest">
                              {link.name}
                            </span>
                          )}
                          {link.submenu && (
                            <div className="grid gap-1 ml-6 border-l-2 border-primary/10 pl-3">
                              {link.submenu.map((sub) => (
                                <Link 
                                  key={sub.name} 
                                  href={sub.href} 
                                  className={cn(
                                    "text-[13px] md:text-[14px] font-medium py-1.5 px-3 rounded-lg block transition-all",
                                    pathname === sub.href ? "bg-primary/5 text-primary" : "text-[#64748B] hover:text-primary hover:bg-primary/5"
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
                      <Button asChild className="w-full bg-primary text-white rounded-full py-6 font-bold text-[13px] uppercase tracking-widest hover:bg-primary/90 transition-all">
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
