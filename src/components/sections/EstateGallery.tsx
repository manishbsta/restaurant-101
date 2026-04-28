"use client";

import { motion } from "framer-motion";

const estateImages = [
  {
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    alt: "Luxury estate surrounded by lush greenery",
    span: "col-span-1 row-span-2",
    containerClass: "h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    alt: "Elegant estate garden pathway with evening lighting",
    span: "col-span-1 row-span-1",
    containerClass: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80",
    alt: "Interior dining room with floor-to-ceiling windows",
    span: "col-span-1 row-span-1",
    containerClass: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    alt: "Mountain view from estate terrace at sunrise",
    span: "col-span-1 row-span-2",
    containerClass: "h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&q=80",
    alt: "Stone courtyard with ambient fire features",
    span: "col-span-1 row-span-1",
    containerClass: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80",
    alt: "Terrace dining setup overlooking the valley",
    span: "col-span-1 row-span-1",
    containerClass: "aspect-[4/3]",
  },
];

const marketImages = [
  {
    src: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600&q=80",
    alt: "Fresh organic produce at the farmers market",
    span: "col-span-1 row-span-1",
    containerClass: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80",
    alt: "Local herbs and spices arranged on a wooden table",
    span: "col-span-1 row-span-1",
    containerClass: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80",
    alt: "Farmers selecting produce at a mountain market",
    span: "col-span-1 row-span-2",
    containerClass: "h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    alt: "Fresh mountain greens and edible flowers",
    span: "col-span-1 row-span-1",
    containerClass: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
    alt: "Artisan cheese and bread from local producers",
    span: "col-span-1 row-span-1",
    containerClass: "aspect-[4/3]",
  },
];

interface GalleryGridProps {
  images: typeof estateImages;
  title: string;
  subtitle: string;
  description: string;
  reverse?: boolean;
}

function GalleryGrid({
  images,
  title,
  subtitle,
  description,
  reverse = false,
}: GalleryGridProps) {
  return (
    <div
      className={`flex flex-col gap-12 lg:flex-row lg:items-center ${reverse ? "lg:flex-row-reverse" : ""
        }`}
    >
      <div className="flex-1 lg:max-w-md">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold/80">
          {subtitle}
        </p>
        <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-cream sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg leading-relaxed text-cream/50">{description}</p>
      </div>

      <div className="flex-1">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {images.map((image, i) => (
            <motion.div
              key={i}
              className={`${image.span} group overflow-hidden rounded-xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <div className={`${image.containerClass} relative overflow-hidden`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EstateGallery() {
  return (
    <section
      id="estate"
      className="bg-charcoal py-24 sm:py-32 scroll-mt-24"
      aria-label="Estate and farmers market gallery"
    >
      <div className="mx-auto max-w-7xl space-y-24 px-6 lg:px-8 sm:space-y-32">
        <GalleryGrid
          images={estateImages}
          subtitle="The Estate"
          title="Where Nature Meets Nurture"
          description="Our estate sits at the foothills of the Himalayas — a sanctuary where every ingredient tells a story of the land. The architecture breathes with the seasons, and the views are as curated as the menu."
        />
        <GalleryGrid
          images={marketImages}
          subtitle="Farmers Market"
          title="From Earth to Plate"
          description="We source directly from local farmers — organic vegetables, heritage grains, and mountain herbs that define our cuisine. Every Saturday, our chefs visit the Kathmandu Valley markets to handpick what inspires the week's menu."
          reverse
        />
      </div>
    </section>
  );
}