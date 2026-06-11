
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
  BatteryFull, 
  Layout, 
  BookOpen, 
  Calculator as CalcIcon, 
  ArrowRight,
  Sun,
  Cpu,
  ClipboardCheck,
  Banknote
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
          icon: <Zap className="size-5" />,
          desc: "Comprehensive Engineering, Procurement, and Construction services for utility-scale and large projects. Learn More"
        },
        { 
          name: "Rooftop Solar Installations", 
          href: "/services/rooftop-installation", 
          icon: <Home className="size-5" />,
          desc: "Specialized rooftop solar solutions for residential and commercial buildings designed for maximum efficiency. Learn More"
        },
        { 
          name: "Commercial & Industrial Solar Projects", 
          href: "/services/commercial-solar", 
          icon: <Factory className="size-5" />,
          desc: "Tailored solar power plants for industries and commercial hubs to drastically reduce operational electricity costs. Learn More"
        },
        { 
          name: "Operation & Maintenance Services", 
          href: "/services/solar-maintenance", 
          icon: <Wrench className="size-5" />,
          desc: "Complete O&M packages ensuring your solar asset performs at peak capacity throughout its 25-year lifecycle. Learn More"
        },
        { 
          name: "Solar Panel Cleaning Solutions", 
          href: "/services/solar-maintenance", 
          icon: <Sun className="size-5" />,
          desc: "Professional cleaning services using specialized equipment to remove debris and boost generation by up to 15%. Learn More"
        },
        { 
          name: "Performance Monitoring & Optimization", 
          href: "/services/battery-storage", 
          icon: <Cpu className="size-5" />,
          desc: "Advanced IoT-based monitoring to track generation in real-time and optimize energy output through AI analysis. Learn More"
        },
        { 
          name: "Net Metering Assistance", 
          href: "/services/rooftop-installation", 
          icon: <ClipboardCheck className="size-5" />,
          desc: "End-to-end liaison with government DISCOMs for seamless net-metering approvals and grid synchronization. Learn More"
        },
        { 
          name: "PM Surya Ghar Yojana Support", 
          href: "/government-solar-subsidy", 
          icon: <Banknote className="size-5" />,
          desc: "Expert guidance and application support for the latest government subsidy schemes for residential rooftop solar. Learn More"
        },
      ]
    },
    { name: "Projects", href: "/projects" },
    { 
      name: "Resources", 
      href: "#",
      submenu: [
        { name: "Subsidy Guide", href: "/government-solar-subsidy", icon: <BookOpen className="size-4" /> },
        { name: "Solar Calculator", href: "/solar-calculator", icon: <CalcIcon className="size-4" /> },
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
                        isActive ? "text-primary" : "text-primary hover:bg-primary/5"
                      )}>
                        {link.name} <ChevronDown className="size-3 opacity-50 group-hover/nav:rotate-180 transition-transform" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="center" 
                        sideOffset={15} 
                        className={cn(
                          "rounded-[24px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-none bg-white/95 backdrop-blur-xl overflow-y-auto max-h-[80vh]",
                          link.isMega ? "min-w-[700px] lg:min-w-[850px]" : "min-w-[240px]"
                        )}
                      >
                        <div className={cn(
                          "grid gap-2",
                          link.isMega ? "grid-cols-2 md:grid-cols-3" : "grid-cols-1"
                        )}>
                          {link.submenu.map((sub) => (
                            <DropdownMenuItem key={sub.name} asChild>
                              <Link 
                                href={sub.href} 
                                className={cn(
                                  "w-full cursor-pointer p-4 rounded-xl hover:bg-primary/5 flex flex-col gap-1.5 group/item transition-all text-primary",
                                  !link.isMega && "flex-row items-center gap-3"
                                )}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="bg-primary/5 p-2 rounded-lg group-hover/item:bg-primary group-hover/item:text-white transition-colors shrink-0">
                                    {sub.icon}
                                  </div>
                                  <span className="font-bold text-sm tracking-tight">{sub.name}</span>
                                </div>
                                {link.isMega && sub.desc && (
                                  <p className="text-[11px] font-medium leading-relaxed opacity-70 ml-11">
                                    {sub.desc}
                                  </p>
                                )}
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
                        "relative px-4 py-2 rounded-full text-[13px] font-semibold transition-all block text-primary",
                        isActive ? "bg-primary/5" : "hover:bg-primary/5"
                      )}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-full bg-primary/5 -z-10"
                        />
                      )}
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA - RIGHT */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <Button asChild variant="ghost" className="hidden lg:flex text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary/5 rounded-full px-6">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="hidden lg:flex bg-primary text-white rounded-full px-6 hover:shadow-lg hover:shadow-primary/20 transition-all font-bold h-10 text-xs uppercase tracking-wider">
              <Link href="/get-quote">Get a Quote</Link>
            </Button>

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-primary hover:bg-muted rounded-full">
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white border-none w-full max-w-[320px] p-8 overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <SheetDescription className="sr-only">Navigate through Sky Renewable services and resources.</SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col gap-10 pt-8">
                    <Link href="/" className="flex items-center">
                      {logoImage && (
                        <Image src={logoImage.imageUrl} alt="Sky Renewable" width={120} height={32} className="object-contain" />
                      )}
                    </Link>
                    <nav className="flex flex-col gap-6">
                      {navLinks.map((link) => (
                        <div key={link.name} className="space-y-4">
                          <Link href={link.href} className="text-lg font-bold text-primary hover:opacity-70">
                            {link.name}
                          </Link>
                          {link.submenu && (
                            <div className="grid gap-3 ml-4 border-l border-muted pl-4">
                              {link.submenu.map((sub) => (
                                <Link key={sub.name} href={sub.href} className="text-sm font-medium text-primary hover:opacity-70 py-1">
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                    <div className="flex flex-col gap-4">
                      <Button asChild variant="outline" className="w-full border-primary text-primary rounded-full py-6 font-bold">
                        <Link href="/login">Login</Link>
                      </Button>
                      <Button asChild className="w-full bg-primary text-white rounded-full py-6 font-bold shadow-lg shadow-primary/20">
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

