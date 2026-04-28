"use client";

export function SkipToContent() {
  return (
    <a
      href="#menu"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-charcoal focus:font-semibold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal"
    >
      Skip to Menu
    </a>
  );
}