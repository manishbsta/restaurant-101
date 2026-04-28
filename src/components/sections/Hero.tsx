"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { RESTAURANT_NAME } from "@/lib/hours";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920&q=80"
          alt="Elegant restaurant interior with warm ambient lighting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold/80">
            Fine Dining in the Heart of Nepal
          </p>
        </motion.div>

        <motion.h1
          className="mb-6 wrap-break-word font-serif text-5xl font-bold leading-tight tracking-tight text-[#f5f0e8] sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-gradient-gold">{RESTAURANT_NAME}</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#f5f0e8]/60 sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
        >
          Where the Himalayas meet haute cuisine. An intimate culinary journey
          forged in fire, rested in nature, and served with reverence.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-black transition-all hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20"
          >
            Explore the Menu
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[#f5f0e8]/20 px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-[#f5f0e8] transition-all hover:border-gold/50 hover:text-gold"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a
          href="#menu"
          aria-label="Scroll down to menu"
          className="flex flex-col items-center gap-2 text-[#f5f0e8]/40 transition-colors hover:text-gold"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}