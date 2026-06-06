
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Menu, X, Sun, ChevronDown, Zap, Home, Factory, Wrench, ShieldCheck, Info, Users, BookOpen, Calculator as CalcIcon, BatteryFull, Layout, BadgeCheck } from "lucide-react";
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
        { name: "Residential Solar", href: "/services/residential-solar", icon: <Home className="size-4" /> },
        { name: "Commercial Solar", href: "/services/commercial-solar", icon: <Factory className="size-4" /> },
        { name: "Industrial Solutions", href: "/services/industrial-solar", icon: <Zap className="size-4" /> },
        { name: "Rooftop Installation", href: "/services/rooftop-installation", icon: <Layout className="size-4" /> },
        { name: "Battery Storage", href: "/services/battery-storage", icon: <BatteryFull className="size-4" /> },
        { name: "Maintenance & AMC", href: "/services/solar-maintenance", icon: <Wrench className="size-4" /> },
      ]
    },
    { name: "Projects", href: "/projects" },
    { name: "Subsidy Guide", href: "/government-solar-subsidy" },
    { name: "Calculator", href: "/solar-calculator" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      {/* Top Bar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-primary text-primary-foreground py-2 text-[10px] md:text-xs hidden md:block overflow-hidden"
          >
            <div className="container mx-auto px-4 flex justify-between items-center">
              <div className="flex gap-8">
                <span className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"><Phone className="size-3 text-accent" /> +91 98765 43210</span>
                <span className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer"><Mail className="size-3 text-accent" /> contact@arkasolar.in</span>
              </div>
              <div className="flex gap-4">
                <span className="flex items-center gap-2"><MapPin className="size-3 text-accent" /> Ahmedabad, Gujarat</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <header className={cn(
        "transition-all duration-500 border-b",
        isScrolled 
          ? "bg-white/80 backdrop-blur-2xl shadow-2xl py-2 border-black/5" 
          : "bg-transparent py-4 border-white/5"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 90 }}
              className="bg-primary p-2.5 rounded-2xl shadow-xl shadow-primary/20"
            >
              <Sun className="size-6 text-accent" />
            </motion.div>
            <div className="flex flex-col -space-y-1">
              <span className={cn(
                "font-headline text-2xl font-black tracking-tight transition-colors duration-500",
                isScrolled ? "text-primary" : "text-white"
              )}>ARKĀ</span>
              <span className="text-[9px] font-black tracking-[0.3em] text-accent uppercase">Solar Energy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.submenu 
                ? link.submenu.some(sub => pathname === sub.href) || pathname.startsWith(link.href)
                : pathname === link.href;

              return (
                <div key={link.name} className="relative group/nav">
                  {link.submenu ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className={cn(
                        "relative px-4 py-2.5 rounded-full text-sm font-bold flex items-center gap-1.5 transition-all outline-none",
                        isScrolled 
                          ? (isActive ? "text-primary bg-primary/5" : "text-primary/70 hover:bg-primary/5") 
                          : (isActive ? "text-white bg-white/10" : "text-white/70 hover:bg-white/10")
                      )}>
                        {isActive && (
                          <motion.div 
                            layoutId="nav-indicator"
                            className={cn(
                              "absolute inset-0 rounded-full -z-10",
                              isScrolled ? "bg-primary/10" : "bg-white/20"
                            )}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        {link.name} <ChevronDown className="size-3 opacity-50 group-hover/nav:rotate-180 transition-transform" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="rounded-3xl p-3 min-w-[260px] shadow-2xl border-none glass-morphism animate-in fade-in zoom-in-95 duration-200">
                        <div className="grid gap-1">
                          {link.submenu.map((sub) => (
                            <DropdownMenuItem key={sub.name} asChild>
                              <Link href={sub.href} className="w-full cursor-pointer py-3.5 px-4 rounded-2xl hover:bg-primary hover:text-white flex items-center gap-4 group/item transition-all">
                                <div className="bg-primary/5 p-2 rounded-xl group-hover/item:bg-accent group-hover/item:text-primary transition-colors">
                                  {sub.icon}
                                </div>
                                <span className="font-bold text-sm">{sub.name}</span>
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
                        "relative px-5 py-2.5 rounded-full text-sm font-bold transition-all",
                        isScrolled 
                          ? (isActive ? "text-primary" : "text-primary/70 hover:bg-primary/5") 
                          : (isActive ? "text-white" : "text-white/70 hover:bg-white/10")
                      )}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="nav-indicator"
                          className={cn(
                            "absolute inset-0 rounded-full -z-10",
                            isScrolled ? "bg-primary/10" : "bg-white/20"
                          )}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}
            <div className={cn(
              "h-6 w-px mx-3 transition-colors",
              isScrolled ? "bg-primary/10" : "bg-white/10"
            )} />
            <Button asChild className="bg-accent text-primary rounded-full px-8 hover:bg-white transition-all shadow-xl shadow-accent/20 font-bold border-none h-12">
              <Link href="/get-quote">Request Proposal</Link>
            </Button>
          </nav>

          {/* Mobile UI */}
          <div className="lg:hidden flex items-center gap-3">
             <Button variant="ghost" size="icon" asChild className={cn(
               "transition-colors",
               isScrolled ? "text-primary" : "text-white"
             )}>
                <Link href="/get-quote"><Zap className="size-5" /></Link>
             </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(
                  "transition-colors",
                  isScrolled ? "text-primary" : "text-white"
                )}>
                  <Menu className="size-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-none overflow-y-auto w-full max-w-sm">
                <div className="flex flex-col gap-10 pt-12">
                  <Link href="/" className="flex items-center gap-3 mb-6">
                    <Sun className="size-10 text-accent" />
                    <span className="font-headline text-3xl font-black text-primary tracking-tight">Arkā Solar</span>
                  </Link>
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <div key={link.name} className="space-y-4">
                        <Link 
                          href={link.href}
                          className={cn(
                            "text-2xl font-black uppercase tracking-tight transition-colors",
                            pathname === link.href ? "text-accent" : "text-primary"
                          )}
                        >
                          {link.name}
                        </Link>
                        {link.submenu && (
                          <div className="grid gap-4 ml-6 border-l-2 border-primary/5 pl-6">
                            {link.submenu.map((sub) => (
                              <Link key={sub.name} href={sub.href} className="text-sm font-bold text-muted-foreground hover:text-accent flex items-center gap-3 py-1">
                                <span className="bg-primary/5 p-1.5 rounded-lg">{sub.icon}</span>
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                  <div className="pt-10 space-y-4 border-t border-primary/5">
                    <Button asChild className="w-full bg-primary text-white rounded-full py-7 font-bold text-xl shadow-2xl">
                      <Link href="/get-quote">Book Free Survey</Link>
                    </Button>
                    <div className="flex justify-center gap-8 py-4">
                       <Link href="tel:+919876543210" className="p-4 bg-primary/5 rounded-2xl text-primary hover:bg-accent transition-all"><Phone className="size-6" /></Link>
                       <Link href="mailto:contact@arkasolar.in" className="p-4 bg-primary/5 rounded-2xl text-primary hover:bg-accent transition-all"><Mail className="size-6" /></Link>
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
