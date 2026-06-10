
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Zap, Home, Factory, Wrench, BatteryFull, Layout, BookOpen, Calculator as CalcIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
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
          name: "Residential Solar", 
          href: "/services/residential-solar", 
          icon: <Home className="size-5" />,
          desc: "Clean energy for modern homes with subsidy aid."
        },
        { 
          name: "Commercial Solar", 
          href: "/services/commercial-solar", 
          icon: <Factory className="size-5" />,
          desc: "Scale your business with sustainable power solutions."
        },
        { 
          name: "Industrial Solutions", 
          href: "/services/industrial-solar", 
          icon: <Zap className="size-5" />,
          desc: "High-yield EPC for manufacturing and plants."
        },
        { 
          name: "Rooftop Installation", 
          href: "/services/rooftop-installation", 
          icon: <Layout className="size-5" />,
          desc: "Precision engineering for all rooftop types."
        },
        { 
          name: "Battery Storage", 
          href: "/services/battery-storage", 
          icon: <BatteryFull className="size-5" />,
          desc: "Smart lithium-ion storage for 24/7 backup."
        },
        { 
          name: "Maintenance & AMC", 
          href: "/services/solar-maintenance", 
          icon: <Wrench className="size-5" />,
          desc: "Professional health audits and periodic cleaning."
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
    <div className="fixed top-0 left-0 right-0 z-[100]">
      <header className={cn(
        "transition-all duration-500",
        isScrolled 
          ? "bg-white/90 backdrop-blur-2xl shadow-xl py-4 border-b border-black/5" 
          : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* LOGO - LEFT */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center group shrink-0">
              {logoImage && (
                <Image 
                  src={logoImage.imageUrl} 
                  alt="Sky Renewable Branding" 
                  width={180} 
                  height={50} 
                  className="h-10 w-auto object-contain brightness-0 invert-0"
                  data-ai-hint={logoImage.imageHint}
                />
              )}
            </Link>
          </div>

          {/* NAV MENU - CENTER */}
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
                        "relative px-4 py-2 rounded-full text-[13px] font-bold flex items-center gap-1 transition-all outline-none text-primary",
                        isActive && "bg-primary/5"
                      )}>
                        {link.name} <ChevronDown className="size-3 opacity-50 group-hover/nav:rotate-180 transition-transform" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        align="center" 
                        sideOffset={15} 
                        className={cn(
                          "rounded-[32px] p-4 shadow-2xl border border-border bg-white/95 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200",
                          link.isMega ? "min-w-[700px] lg:min-w-[850px]" : "min-w-[260px]"
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
                                  "w-full cursor-pointer p-4 rounded-2xl hover:bg-primary hover:text-white flex flex-col gap-2 group/item transition-all text-primary",
                                  !link.isMega && "flex-row items-center gap-3"
                                )}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="bg-primary/5 p-2 rounded-xl group-hover/item:bg-white/20 transition-colors shrink-0">
                                    {sub.icon}
                                  </div>
                                  <span className="font-bold text-sm tracking-tight">{sub.name}</span>
                                </div>
                                {link.isMega && sub.desc && (
                                  <p className="text-[11px] font-medium leading-relaxed opacity-70 group-hover/item:text-white/80">
                                    {sub.desc}
                                  </p>
                                )}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </div>
                        {link.isMega && (
                          <div className="mt-4 pt-4 border-t border-muted flex items-center justify-between px-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Our Energy Ecosystem</p>
                            <Link href="/services" className="text-[11px] font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                              View All Solutions <ArrowRight className="size-3" />
                            </Link>
                          </div>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link 
                      href={link.href}
                      className={cn(
                        "relative px-4 py-2 rounded-full text-[13px] font-bold transition-all block text-primary",
                        isActive && "bg-primary/5"
                      )}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-full bg-primary/10 -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
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
            <div className="hidden lg:flex items-center">
              <Button asChild className="bg-primary text-white rounded-full px-6 hover:bg-primary/90 transition-all shadow-lg font-black border-none h-11 text-xs uppercase tracking-wider">
                <Link href="/get-quote">Get a Quote</Link>
              </Button>
            </div>

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/5">
                    <Menu className="size-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-white border-none overflow-y-auto w-full max-w-[320px] p-8">
                  <div className="flex flex-col gap-12 pt-8">
                    <Link href="/" className="flex items-center group">
                      {logoImage && (
                        <Image 
                          src={logoImage.imageUrl} 
                          alt="Sky Renewable" 
                          width={140} 
                          height={40} 
                          className="object-contain"
                          data-ai-hint={logoImage.imageHint}
                        />
                      )}
                    </Link>
                    <nav className="flex flex-col gap-8">
                      {navLinks.map((link) => (
                        <div key={link.name} className="space-y-4">
                          {link.href !== "#" ? (
                            <Link 
                              href={link.href}
                              className="text-xl font-black uppercase tracking-tight text-primary"
                            >
                              {link.name}
                            </Link>
                          ) : (
                            <span className="text-xl font-black uppercase tracking-tight text-primary">
                              {link.name}
                            </span>
                          )}
                          {link.submenu && (
                            <div className="grid gap-4 ml-4 border-l-2 border-muted pl-4">
                              {link.submenu.map((sub) => (
                                <Link key={sub.name} href={sub.href} className="text-sm font-bold text-primary hover:opacity-70 flex items-center gap-3 py-1">
                                  <span className="bg-muted p-1.5 rounded-lg">{sub.icon}</span>
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                    <div className="pt-8 border-t border-muted">
                      <Button asChild className="w-full bg-primary text-white rounded-full py-6 font-bold text-base shadow-xl">
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
