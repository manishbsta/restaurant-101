"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  dish: string;
}

const reviews: Review[] = [
  {
    id: "r1",
    name: "Anika Sharma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    date: "2 weeks ago",
    text: "An unforgettable evening. The Wagyu A5 was cooked to absolute perfection — the bone marrow butter elevated it to something transcendent. The ambiance alone is worth the visit, but the food? It's art on a plate.",
    dish: "Wagyu A5 Tenderloin",
  },
  {
    id: "r2",
    name: "James Mitchell",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    date: "1 month ago",
    text: "I've dined at Michelin-starred restaurants across Europe, and this place holds its own. The Himalayan Truffle Soup was a revelation — earthy, smoky, and deeply comforting. The service is impeccable without being pretentious.",
    dish: "Himalayan Truffle Soup",
  },
  {
    id: "r3",
    name: "Priya Thapa",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    date: "3 weeks ago",
    text: "As a vegan, I'm used to being an afterthought at fine dining restaurants. Not here. The Coconut Curry Cauliflower was the best dish on the table — bold, complex, and beautifully presented. They truly understand plant-based cuisine.",
    dish: "Coconut Curry Cauliflower",
  },
  {
    id: "r4",
    name: "David Chen",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 4,
    date: "2 months ago",
    text: "The brunch here is a weekend ritual now. The Matcha Pancake Stack is dangerously good — light, fluffy, and the coconut cream is addictive. Only reason it's not 5 stars is the wait time on busy weekends, but it's worth every minute.",
    dish: "Matcha Pancake Stack",
  },
  {
    id: "r5",
    name: "Sarah Williams",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    rating: 5,
    date: "1 week ago",
    text: "We celebrated our anniversary here and it was magical. The herb-crusted lamb was cooked to a perfect medium-rare, and the rosemary reduction was poetry. The sommelier paired it with a Nepali wine I'd never heard of — absolutely brilliant.",
    dish: "Herb-Crusted Lamb Rack",
  },
  {
    id: "r6",
    name: "Rajesh Gurung",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    date: "1 month ago",
    text: "Finally, a restaurant in Nepal that respects local ingredients while pushing culinary boundaries. The Wild Mushroom Risotto showcased local porcini in a way I've never experienced. The estate tour before dinner was the cherry on top.",
    dish: "Wild Mushroom Risotto",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-gold text-gold"
              : "fill-none text-cream/20"
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-charcoal py-24 sm:py-32"
      aria-label="Guest reviews"
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
            Guest Experiences
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold tracking-tight text-cream sm:text-5xl">
            What They Say
          </h2>
          <p className="mx-auto max-w-xl text-cream/50">
            Every review tells a story. Here&apos;s what our guests remember most.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="group relative flex flex-col rounded-2xl border border-border/30 bg-card p-6 transition-all hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-gold/10 transition-colors group-hover:text-gold/20" />

              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gold/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={review.avatar}
                    alt={`${review.name}'s profile photo`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-cream">{review.name}</h3>
                  <time className="text-xs text-cream/40" dateTime={review.date}>
                    {review.date}
                  </time>
                </div>
              </div>

              <div className="mb-3">
                <StarRating rating={review.rating} />
              </div>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-cream/60">
                {review.text}
              </p>

              <div className="flex items-center gap-2 border-t border-border/20 pt-4">
                <span className="text-xs text-cream/30">Loved</span>
                <span className="rounded-full border border-gold/20 bg-gold/5 px-2.5 py-0.5 text-xs font-medium text-gold">
                  {review.dish}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}