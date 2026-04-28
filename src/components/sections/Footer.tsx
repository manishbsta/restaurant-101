import { RESTAURANT_NAME } from "@/lib/hours";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-x-hidden border-t border-border/20 bg-charcoal pt-12 pb-20 md:pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30">
            <span className="font-serif text-xl font-bold text-gold">M</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-cream/40">
            <a
              href="#menu"
              className="transition-colors hover:text-gold"
            >
              Menu
            </a>
            <span className="text-cream/20">&middot;</span>
            <a
              href="#estate"
              className="transition-colors hover:text-gold"
            >
              Estate
            </a>
            <span className="text-cream/20">&middot;</span>
            <a
              href="#contact"
              className="transition-colors hover:text-gold"
            >
              Reservations
            </a>
          </div>

          <div className="flex items-center gap-4 text-cream/20">
            <div className="h-px w-12 bg-cream/10" />
            <span className="text-xs uppercase tracking-[0.2em]">Nepal</span>
            <div className="h-px w-12 bg-cream/10" />
          </div>

          <p className="text-xs text-cream/25">
            &copy; {currentYear} {RESTAURANT_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}