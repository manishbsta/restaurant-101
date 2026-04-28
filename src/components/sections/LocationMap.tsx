"use client";

import { motion } from "framer-motion";
import { RESTAURANT_COORDS, RESTAURANT_NAME } from "@/lib/hours";

const MAP_ZOOM = 15;

export function LocationMap() {
  const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
    RESTAURANT_COORDS.lng - 0.005
  },${RESTAURANT_COORDS.lat - 0.003},${RESTAURANT_COORDS.lng + 0.005},${
    RESTAURANT_COORDS.lat + 0.003
  }&layer=mapnik&marker=${RESTAURANT_COORDS.lat},${RESTAURANT_COORDS.lng}`;

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className="overflow-hidden rounded-2xl border border-border/30 bg-card"
    >
      <div className="relative aspect-[16/9] w-full">
        <iframe
          title={`${RESTAURANT_NAME} location on OpenStreetMap`}
          src={embedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex items-center justify-between border-t border-border/20 px-5 py-4">
        <div className="flex items-center gap-2 text-sm text-cream/60">
          <svg
            className="h-4 w-4 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>
            {RESTAURANT_COORDS.lat.toFixed(4)}&deg;N,{" "}
            {RESTAURANT_COORDS.lng.toFixed(4)}&deg;E
          </span>
        </div>
        <a
          href={`https://www.openstreetmap.org/?mlat=${RESTAURANT_COORDS.lat}&mlon=${RESTAURANT_COORDS.lng}#map=${MAP_ZOOM}/${RESTAURANT_COORDS.lat}/${RESTAURANT_COORDS.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium uppercase tracking-wider text-gold transition-colors hover:text-gold/80"
        >
          Open in OSM &rarr;
        </a>
      </div>
    </motion.div>
    </div>
  );
}