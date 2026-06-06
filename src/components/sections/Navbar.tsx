
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sun, ChevronDown, Zap, Home, Factory, Wrench, BatteryFull, Layout, BookOpen, Calculator as CalcIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      <header className={cn(
        "transition-all duration-500",
        isScrolled 
          ? "bg-white/80 backdrop-blur-2xl shadow-xl py-4 border-b border-black/5" 
          : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="bg-primary p-2 rounded-xl shadow-lg transition-transform group-hover:rotate-12">
              <Sun className="size-5 text-accent" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className={cn(
                "font-headline text-xl md:text-2xl font-black tracking-tight transition-colors duration-500",
                isScrolled ? "text-primary" : "text-white"
              )}>ARKĀ</span>
              <span className="text-[8px] font-black tracking-[0.2em] text-accent uppercase">Solar Energy</span>
            </div>
          </Link>

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
                        "relative px-4 py-2 rounded-full text-[13px] font-bold flex items-center gap-1 transition-all outline-none",
                        isScrolled 
                          ? (isActive ? "text-primary bg-primary/5" : "text-primary/70 hover:bg-primary/5") 
                          : (isActive ? "text-white bg-white/10" : "text-white/70 hover:bg-white/10")
                      )}>
                        {link.name} <ChevronDown className="size-3 opacity-50 group-hover/nav:rotate-180 transition-transform" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center" sideOffset={10} className="rounded-[32px] p-2 min-w-[260px] shadow-2xl border border-black/5 bg-white/95 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
                        <div className="grid gap-0.5">
                          {link.submenu.map((sub) => (
                            <DropdownMenuItem key={sub.name} asChild>
                              <Link href={sub.href} className="w-full cursor-pointer py-3 px-4 rounded-2xl hover:bg-primary hover:text-white flex items-center gap-3 group/item transition-all">
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
                        "relative px-4 py-2 rounded-full text-[13px] font-bold transition-all",
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
              "h-5 w-px mx-4 transition-colors",
              isScrolled ? "bg-primary/10" : "bg-white/10"
            )} />
            <Button asChild className="bg-accent text-primary rounded-full px-6 hover:bg-white transition-all shadow-lg font-black border-none h-11 text-xs uppercase tracking-wider">
              <Link href="/get-quote">Get a Quote</Link>
            </Button>
          </nav>

          <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(
                  "transition-colors",
                  isScrolled ? "text-primary" : "text-white"
                )}>
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-none overflow-y-auto w-full max-w-[320px] p-8">
                <div className="flex flex-col gap-12 pt-8">
                  <Link href="/" className="flex items-center gap-3 group">
                    <Sun className="size-8 text-accent" />
                    <span className="font-headline text-2xl font-black text-primary tracking-tight">Arkā Solar</span>
                  </Link>
                  <nav className="flex flex-col gap-8">
                    {navLinks.map((link) => (
                      <div key={link.name} className="space-y-4">
                        {link.href !== "#" ? (
                          <Link 
                            href={link.href}
                            className={cn(
                              "text-xl font-black uppercase tracking-tight transition-colors",
                              pathname === link.href ? "text-accent" : "text-primary"
                            )}
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <span className="text-xl font-black uppercase tracking-tight text-primary/40">
                            {link.name}
                          </span>
                        )}
                        {link.submenu && (
                          <div className="grid gap-4 ml-4 border-l-2 border-primary/5 pl-4">
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
                  <div className="pt-8 border-t border-primary/5">
                    <Button asChild className="w-full bg-primary text-white rounded-full py-6 font-bold text-base shadow-xl">
                      <Link href="/get-quote">Get a Quote</Link>
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
