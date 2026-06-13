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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
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
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
      <header 
        className={cn(
          "pointer-events-auto w-full max-w-[1400px] rounded-full transition-all duration-500 border flex items-center justify-between px-6 md:px-10 h-[60px] md:h-[72px] bg-white/82 backdrop-blur-[24px] border-white/35 shadow-lg"
        )}
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center group relative h-12 md:h-16 w-56 md:w-72">
            <Image 
              src="/ab/lo.png" 
              alt="Sky Renewable Logo" 
              fill
              className="object-contain object-left transition-transform group-hover:scale-105"
              priority
            />
          </Link>
        </div>

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
                      "relative px-4 py-2 rounded-full text-[14px] font-semibold flex items-center gap-1.5 transition-all outline-none",
                      isActive 
                        ? "bg-white text-[#14213D] shadow-sm" 
                        : "text-[#14213D] hover:text-[#2563EB]"
                    )}>
                      {link.name} <ChevronDown className="size-3 opacity-50 group-hover/nav:rotate-180 transition-transform" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="center" 
                      sideOffset={15} 
                      className={cn(
                        "rounded-[24px] p-4 shadow-2xl border border-primary/10 bg-white/95 backdrop-blur-3xl overflow-hidden",
                        link.isMega ? "min-w-[560px]" : "min-w-[240px]"
                      )}
                    >
                      <div className={cn(
                        "grid gap-1",
                        link.isMega ? "grid-cols-2" : "grid-cols-1"
                      )}>
                        {link.submenu.map((sub) => (
                          <DropdownMenuItem key={sub.name} asChild>
                            <Link 
                              href={sub.href} 
                              className="w-full cursor-pointer p-3 rounded-2xl hover:bg-primary/5 flex items-center gap-4 group/item transition-all"
                            >
                              <div className={cn(
                                "p-2 rounded-xl transition-all",
                                pathname === sub.href ? "bg-[rgba(245,158,11,0.12)] text-[#F59E0B]" : "bg-[#EEF6FF] text-[#2563EB] group-hover/item:bg-[rgba(245,158,11,0.12)] group-hover/item:text-[#F59E0B]"
                              )}>
                                {sub.icon}
                              </div>
                              <span className={cn(
                                "font-bold text-[14px] tracking-tight transition-colors",
                                pathname === sub.href ? "text-[#F59E0B]" : "text-[#14213D] group-hover/item:text-[#F59E0B]"
                              )}>{sub.name}</span>
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
                      "relative px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 block",
                      isActive 
                        ? "bg-white text-[#14213D] shadow-sm" 
                        : "text-[#14213D] hover:text-[#2563EB]"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            asChild 
            variant="default"
            className="hidden sm:flex rounded-full px-8 font-bold h-[42px] text-[14px] transition-all hover:scale-105 active:scale-95 border-none text-white"
          >
            <Link href="/get-quote">Get Quote</Link>
          </Button>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#14213D] hover:bg-primary/10 rounded-full">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-none w-[85%] sm:max-w-[340px] p-0 text-[#14213D] shadow-2xl">
                <div className="p-8 h-full flex flex-col">
                  <SheetHeader className="mb-12 text-left">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <SheetDescription className="sr-only">Navigate Sky Renewable services.</SheetDescription>
                    <div className="flex items-center justify-between">
                      <div className="relative h-12 w-48">
                        <Image src="/ab/lo.png" alt="Sky Renewable" fill className="object-contain" />
                      </div>
                    </div>
                  </SheetHeader>
                  
                  <nav className="flex flex-col gap-3 flex-grow overflow-y-auto">
                    {navLinks.map((link) => (
                      <div key={link.name} className="space-y-2">
                        {link.href !== "#" ? (
                          <Link 
                            href={link.href} 
                            className={cn(
                              "text-[16px] font-bold px-4 py-2.5 rounded-2xl block transition-all",
                              pathname === link.href ? "bg-white text-[#14213D] shadow-sm" : "text-[#14213D] hover:text-[#2563EB]"
                            )}
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <span className="text-[11px] font-black px-4 py-2 block text-[#64748B] uppercase tracking-[0.2em] pt-4">
                            {link.name}
                          </span>
                        )}
                        {link.submenu && (
                          <div className="grid gap-1 ml-6 border-l-2 border-primary/10 pl-4">
                            {link.submenu.map((sub) => (
                              <Link 
                                key={sub.name} 
                                href={sub.href} 
                                className={cn(
                                  "text-[14px] font-semibold py-2.5 px-3 rounded-xl block transition-all",
                                  pathname === sub.href ? "text-[#2563EB] bg-[#EEF6FF]" : "text-[#14213D] hover:text-[#2563EB]"
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
                  
                  <div className="pt-8 border-t border-primary/10 mt-auto">
                    <Button 
                      asChild 
                      variant="default"
                      className="w-full rounded-full py-7 font-bold text-[15px] transition-all border-none text-white"
                    >
                      <Link href="/get-quote">Request Proposal</Link>
                    </Button>
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
