"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  RESTAURANT_NAME,
  RESTAURANT_PHONE,
  RESTAURANT_EMAIL,
  RESTAURANT_ADDRESS,
  operatingHours,
  formatHour,
} from "@/lib/hours";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-charcoal py-24 sm:py-32 scroll-mt-24"
      aria-label="Reservations and contact"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold/80">
              Reservations
            </p>
            <h2 className="mb-6 font-serif text-4xl font-bold tracking-tight text-cream sm:text-5xl">
              Your Table Awaits
            </h2>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-cream/50">
              Every visit to {RESTAURANT_NAME} is an experience crafted with care.
              Reserve your table and let us prepare something extraordinary.
            </p>

            <div className="space-y-6">
              <a
                href={`tel:${RESTAURANT_PHONE}`}
                className="group flex items-center gap-4 transition-colors hover:text-gold"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 transition-colors group-hover:border-gold group-hover:bg-gold/10">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-cream/40">Call to Reserve</p>
                  <p className="text-lg font-medium text-cream group-hover:text-gold transition-colors">
                    {RESTAURANT_PHONE}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${RESTAURANT_EMAIL}`}
                className="group flex items-center gap-4 transition-colors hover:text-gold"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 transition-colors group-hover:border-gold group-hover:bg-gold/10">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-cream/40">Email</p>
                  <p className="text-lg font-medium text-cream group-hover:text-gold transition-colors">
                    {RESTAURANT_EMAIL}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-cream/40">Address</p>
                  <p className="text-lg font-medium text-cream">
                    {RESTAURANT_ADDRESS.streetAddress},{" "}
                    {RESTAURANT_ADDRESS.addressLocality},{" "}
                    {RESTAURANT_ADDRESS.addressCountry}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            className="rounded-2xl border border-border/30 bg-card p-8 sm:p-10"
          >
            <div className="mb-8 flex items-center gap-3">
              <Clock className="h-5 w-5 text-gold" />
              <h3 className="font-serif text-xl font-semibold text-cream">
                Opening Hours
              </h3>
            </div>
            <div className="space-y-4">
              {Object.entries(operatingHours).map(([day, schedule]) => {
                const dayNames = [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ];
                return (
                  <div
                    key={day}
                    className="flex items-center justify-between border-b border-border/20 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-cream/70">
                      {dayNames[Number(day)]}
                    </span>
                    <span className="font-medium text-cream">
                      {formatHour(schedule.open)} –{" "}
                      {formatHour(schedule.close)}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <a
                href={`tel:${RESTAURANT_PHONE}`}
                className="inline-flex w-full items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-black transition-all hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call to Reserve
              </a>
              <p className="mt-3 text-center text-xs text-cream/30">
                For parties of 8+, please email us directly
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}