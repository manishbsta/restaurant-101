"use client";

import { useState, useTransition, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Leaf, WheatOff, MilkOff } from "lucide-react";
import {
  menuData,
  type DietaryTag,
  dietaryLabels,
  dietaryColors,
} from "@/lib/menu-data";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const dietaryIcons: Record<DietaryTag, React.ReactNode> = {
  vegan: <Leaf className="h-3.5 w-3.5" />,
  "gluten-free": <WheatOff className="h-3.5 w-3.5" />,
  "dairy-free": <MilkOff className="h-3.5 w-3.5" />,
};

const dietaryFilterOptions: DietaryTag[] = [
  "vegan",
  "gluten-free",
  "dairy-free",
];

const tabVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

export function MenuTab() {
  const [activeTab, setActiveTab] = useState(menuData[0].id);
  const [dietaryFilters, setDietaryFilters] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const [dragDirection, setDragDirection] = useState<"left" | "right" | null>(null);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  const handleTabChange = useCallback(
    (tabId: string) => {
      startTransition(() => {
        setActiveTab(tabId);
      });
    },
    [startTransition]
  );

  const handleDietaryFilter = useCallback(
    (value: string) => {
      startTransition(() => {
        setDietaryFilters((prev) =>
          prev.includes(value)
            ? prev.filter((v) => v !== value)
            : [...prev, value]
        );
      });
    },
    [startTransition]
  );

  const handleDragEnd = useCallback(
    (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
      const swipe = info.offset.x;
      const velocity = info.velocity.x;
      const currentIndex = menuData.findIndex((c) => c.id === activeTab);

      if (swipe < -80 || velocity < -500) {
        const nextIndex = Math.min(currentIndex + 1, menuData.length - 1);
        handleTabChange(menuData[nextIndex].id);
        setDragDirection("left");
      } else if (swipe > 80 || velocity > 500) {
        const prevIndex = Math.max(currentIndex - 1, 0);
        handleTabChange(menuData[prevIndex].id);
        setDragDirection("right");
      }
    },
    [activeTab, handleTabChange]
  );

  const activeCategory = menuData.find((c) => c.id === activeTab)!;

  const filteredItems = activeCategory.items.filter((item) =>
    dietaryFilters.length === 0
      ? true
      : dietaryFilters.every((filter) => item.dietary.includes(filter as DietaryTag))
  );

  return (
    <section
      id="menu"
      className="relative bg-charcoal py-24 sm:py-32"
      aria-label="Restaurant menu"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold/80">
            Curated by Our Chef
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold tracking-tight text-cream sm:text-5xl">
            The Menu
          </h2>
          <p className="mx-auto max-w-xl text-cream/50">
            Each dish is a narrative of the land — local ingredients, global
            technique, served with intention.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div
            className="flex gap-2 overflow-x-auto pb-2"
            role="tablist"
            aria-label="Menu categories"
          >
            {menuData.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeTab === category.id}
                aria-controls={`panel-${category.id}`}
                onClick={() => handleTabChange(category.id)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeTab === category.id
                    ? "bg-gold text-charcoal shadow-lg shadow-gold/20"
                    : "bg-charcoal-light text-cream/60 hover:text-cream"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <ToggleGroup
            value={dietaryFilters}
            onValueChange={handleDietaryFilter}
            type="multiple"
            className="flex flex-wrap gap-2"
            aria-label="Dietary filters"
          >
            {dietaryFilterOptions.map((tag) => (
              <ToggleGroupItem
                key={tag}
                value={tag}
                className={`gap-1.5 rounded-full border text-xs ${
                  dietaryFilters.includes(tag)
                    ? dietaryColors[tag]
                    : "border-border/50 text-cream/50 hover:text-cream"
                }`}
              >
                {dietaryIcons[tag]}
                {dietaryLabels[tag]}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div
          ref={tabContainerRef}
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-label={`${activeCategory.label} menu items`}
          className="relative"
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className="touch-pan-y"
          >
            <AnimatePresence mode="wait" custom={dragDirection}>
              <motion.div
                key={`${activeTab}-${dietaryFilters.join(",")}`}
                custom={dragDirection}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.25 }}
                className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
                  isPending ? "opacity-70 transition-opacity" : ""
                }`}
              >
                {filteredItems.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full py-16 text-center"
                  >
                    <p className="text-lg text-cream/40">
                      No items match your current filters.
                    </p>
                    <button
                      onClick={() =>
                        startTransition(() => setDietaryFilters([]))
                      }
                      className="mt-3 text-sm text-gold underline underline-offset-4 hover:text-gold/80"
                    >
                      Clear filters
                    </button>
                  </motion.div>
                ) : (
                  filteredItems.map((item, i) => (
                    <motion.article
                      key={item.id}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="group relative overflow-hidden rounded-2xl border border-border/30 bg-card transition-all hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 flex gap-1.5 p-3">
                          {item.dietary.map((tag) => (
                            <span
                              key={tag}
                              className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium ${dietaryColors[tag]}`}
                            >
                              {dietaryIcons[tag]}
                              {dietaryLabels[tag]}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <h3 className="font-serif text-lg font-semibold text-cream group-hover:text-gold transition-colors">
                            {item.name}
                          </h3>
                          <span className="shrink-0 text-gold font-semibold">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-cream/50">
                          {item.description}
                        </p>
                      </div>
                    </motion.article>
                  ))
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
            <button
              onClick={() => {
                const idx = menuData.findIndex((c) => c.id === activeTab);
                if (idx > 0) handleTabChange(menuData[idx - 1].id);
              }}
              disabled={menuData.findIndex((c) => c.id === activeTab) === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 text-cream/60 transition-all hover:border-gold/50 hover:text-gold disabled:opacity-30 disabled:hover:border-border/50 disabled:hover:text-cream/60"
              aria-label="Previous category"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm text-cream/40">
              {menuData.findIndex((c) => c.id === activeTab) + 1} /{" "}
              {menuData.length}
            </span>
            <button
              onClick={() => {
                const idx = menuData.findIndex((c) => c.id === activeTab);
                if (idx < menuData.length - 1)
                  handleTabChange(menuData[idx + 1].id);
              }}
              disabled={
                menuData.findIndex((c) => c.id === activeTab) ===
                menuData.length - 1
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 text-cream/60 transition-all hover:border-gold/50 hover:text-gold disabled:opacity-30 disabled:hover:border-border/50 disabled:hover:text-cream/60"
              aria-label="Next category"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}