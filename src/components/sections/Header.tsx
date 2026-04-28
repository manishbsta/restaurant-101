"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Clock } from "lucide-react";
import { LiveStatusBadge } from "@/components/live-status-badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { RESTAURANT_NAME } from "@/lib/hours";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#estate", label: "Estate" },
  { href: "#contact", label: "Reservations" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      setTimeout(() => {
        const headerHeight = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }, 50);
    }
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isMobileMenuOpen
          ? `bg-background ${isScrolled ? "py-3" : "py-5"}`
          : isScrolled
            ? "glassmorphism py-3"
            : "bg-transparent py-5"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="group flex items-center gap-3"
          aria-label={`${RESTAURANT_NAME} — Home`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 transition-colors group-hover:border-gold">
            <span className="font-serif text-lg font-bold text-gold">M</span>
          </div>
          <span className="hidden font-serif text-xl font-semibold tracking-wide text-cream sm:block">
            {RESTAURANT_NAME}
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium tracking-wider text-cream/70 uppercase transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <LiveStatusBadge />
          <a
            href="#contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-charcoal transition-all hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20"
          >
            Reserve a Table
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-cream transition-colors hover:text-gold lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-6 mt-2 flex flex-col gap-4 border-t border-gold/10 pb-6 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  className="text-lg font-medium text-cream/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <ThemeToggle />
                <LiveStatusBadge />
              </div>
              <div className="flex items-center gap-2 pt-1 text-sm text-cream/50">
                <MapPin className="h-4 w-4" />
                Lalitpur, Nepal
              </div>
              <div className="flex items-center gap-2 text-sm text-cream/50">
                <Clock className="h-4 w-4" />
                Mon–Fri 11 AM – 10 PM &middot; Sat–Sun 8 AM – 1 PM
              </div>
              <a
                href="#contact"
                onClick={(e) => handleMobileNavClick(e, "#contact")}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal"
              >
                Reserve a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}