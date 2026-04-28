"use client";

import { motion } from "framer-motion";
import { Phone, UtensilsCrossed } from "lucide-react";
import {
  RESTAURANT_PHONE,
} from "@/lib/hours";

export function MobileActionBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 w-full md:hidden glassmorphism"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <a
          href="#menu"
          className="flex min-w-0 flex-1 items-center justify-center gap-2 overflow-hidden rounded-lg border border-gold/30 bg-charcoal-light px-4 py-3 text-sm font-medium text-cream transition-colors hover:bg-charcoal-light/80"
        >
          <UtensilsCrossed className="h-4 w-4 shrink-0" />
          <span className="min-w-0 truncate">Menu</span>
        </a>
        <motion.a
          href={`tel:${RESTAURANT_PHONE}`}
          className="flex min-w-0 flex-1 items-center justify-center gap-2 overflow-hidden rounded-lg bg-gold px-4 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-gold/90"
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
        >
          <Phone className="h-4 w-4 shrink-0" />
          <span className="min-w-0 truncate">Call to Reserve</span>
        </motion.a>
      </div>
    </div>
  );
}