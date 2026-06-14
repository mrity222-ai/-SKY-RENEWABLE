"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  ChevronDown, 
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Linkedin
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services",
      submenu: [
        { name: "Solar EPC Solutions", href: "/services/industrial-solar" },
        { name: "Rooftop Solar Installations", href: "/services/rooftop-installation" },
        { name: "Commercial & Industrial Projects", href: "/services/commercial-solar" },
        { name: "Operation & Maintenance", href: "/services/solar-maintenance" },
        { name: "Solar Panel Cleaning", href: "/solar-panel-cleaning-solutions" },
        { name: "Storage & Optimization", href: "/services/battery-storage" },
        { name: "Net Metering Assistance", href: "/net-metering-assistance" },
        { name: "PM Surya Ghar Support", href: "/government-solar-subsidy" },
      ]
    },
    { name: "Projects", href: "/projects" },
    { 
      name: "Resources", 
      href: "#",
      submenu: [
        { name: "Subsidy Guide", href: "/government-solar-subsidy" },
        { name: "Solar Calculator", href: "/solar-calculator" },
        { name: "Contact Us", href: "/contact-us" },
      ]
    },
    { name: "About Us", href: "/about-us" },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] w-full">
      <div className="bg-[#048037] h-[36px] md:h-[40px] flex items-center border-b border-black/5">
        <div className="container mx-auto px-6 max-w-[1400px] flex justify-between items-center">
          <p className="text-[11px] md:text-[13px] font-semibold text-white tracking-tight">
            Powering Chhattisgarh With Clean Solar Energy
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white hover:text-white/80 transition-colors"><Facebook className="size-3.5" /></Link>
            <Link href="#" className="text-white hover:text-white/80 transition-colors"><Instagram className="size-3.5" /></Link>
            <Link href="#" className="text-white hover:text-white/80 transition-colors"><Youtube className="size-3.5" /></Link>
            <Link href="#" className="text-white hover:text-white/80 transition-colors"><Linkedin className="size-3.5" /></Link>
          </div>
        </div>
      </div>

      <header 
        className={cn(
          "w-full bg-white transition-all duration-300 border-b border-[#E2E8F0]",
          isScrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-[64px] md:h-[80px]" : "h-[70px] md:h-[90px]"
        )}
      >
        <div className="container mx-auto px-6 max-w-[1400px] h-full flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="relative h-14 w-[180px] md:h-16 md:w-[240px] block">
              <Image 
                src="/ab/lo.png" 
                alt="Sky Renewable" 
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.submenu 
                ? link.submenu.some(sub => pathname === sub.href) || (link.href !== "#" && pathname === link.href)
                : pathname === link.href;

              return (
                <div key={link.name} className="relative group">
                  {link.submenu ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className={cn(
                        "text-[15px] font-semibold flex items-center gap-1 transition-colors outline-none h-full relative py-4",
                        isActive ? "text-[#2563EB]" : "text-[#14213D] hover:text-[#2563EB]"
                      )}>
                        {link.name} <ChevronDown className="size-4 opacity-50 transition-transform group-hover:rotate-180" />
                        <span className={cn(
                          "absolute bottom-0 left-0 w-0 h-[2px] bg-[#2563EB] transition-all duration-300 group-hover:w-full",
                          isActive && "w-full"
                        )} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="center" 
                        sideOffset={0} 
                        className="rounded-none p-2 shadow-2xl border border-[#E2E8F0] bg-white min-w-[240px]"
                      >
                        {link.submenu.map((sub) => (
                          <DropdownMenuItem key={sub.name} asChild>
                            <Link 
                              href={sub.href} 
                              className={cn(
                                "w-full cursor-pointer px-4 py-2.5 text-[14px] font-semibold transition-colors",
                                pathname === sub.href ? "text-[#2563EB] bg-blue-50" : "text-[#14213D] hover:text-[#2563EB] hover:bg-neutral-50"
                              )}
                            >
                              {sub.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link 
                      href={link.href}
                      className={cn(
                        "text-[15px] font-semibold transition-colors h-full flex items-center relative py-4",
                        isActive ? "text-[#2563EB]" : "text-[#14213D] hover:text-[#2563EB]"
                      )}
                    >
                      {link.name}
                      <span className={cn(
                        "absolute bottom-0 left-0 w-0 h-[2px] bg-[#2563EB] transition-all duration-300 group-hover:w-full",
                        isActive && "w-full"
                      )} />
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              href="tel:8871105807" 
              className="hidden md:flex items-center gap-3 bg-[#2563EB] text-white px-5 py-3 rounded-none hover:bg-[#1d4ed8] transition-all duration-300 group shadow-sm"
            >
              <div className="bg-white/10 p-1.5 group-hover:scale-110 transition-transform">
                <Phone className="size-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase font-bold tracking-widest opacity-80">Need Help?</span>
                <span className="text-[13px] font-bold">8871105807</span>
              </div>
            </Link>

            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-[#14213D] hover:bg-blue-50">
                    <Menu className="size-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white border-none w-full sm:max-w-[400px] p-0 text-[#14213D] shadow-2xl">
                  <div className="p-8 h-full flex flex-col">
                    <SheetHeader className="mb-8 text-left">
                      <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                      <SheetDescription className="sr-only">Navigation</SheetDescription>
                      <div className="flex items-center justify-between">
                        <Link href="/" className="relative h-10 w-40 block" onClick={() => setIsOpen(false)}>
                          <Image src="/ab/lo.png" alt="Sky Renewable" fill className="object-contain object-left" />
                        </Link>
                      </div>
                    </SheetHeader>
                    
                    <nav className="flex flex-col gap-1 overflow-y-auto flex-grow pr-2">
                      {navLinks.map((link) => (
                        <div key={link.name} className="py-1">
                          {link.submenu ? (
                            <div className="space-y-2">
                              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#64748B] px-4">{link.name}</p>
                              <div className="grid gap-1 border-l-2 border-blue-50 ml-4 pl-4">
                                {link.submenu.map((sub) => (
                                  <Link 
                                    key={sub.name} 
                                    href={sub.href} 
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                      "text-[14px] font-semibold py-1.5 transition-colors",
                                      pathname === sub.href ? "text-[#2563EB]" : "text-[#14213D] hover:text-[#2563EB]"
                                    )}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link 
                              href={link.href} 
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "text-[16px] font-bold px-4 py-2.5 block transition-colors",
                                pathname === link.href ? "text-[#2563EB]" : "text-[#14213D] hover:text-[#2563EB]"
                              )}
                            >
                              {link.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </nav>
                    
                    <div className="pt-6 border-t border-blue-50 mt-auto">
                      <Link 
                        href="tel:8871105807" 
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 bg-[#2563EB] text-white p-4 rounded-none justify-center transition-colors"
                      >
                        <Phone className="size-4" />
                        <div className="text-left">
                          <p className="text-[9px] uppercase font-bold tracking-widest opacity-80">Call Us Now</p>
                          <p className="text-[16px] font-bold">8871105807</p>
                        </div>
                      </Link>
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
