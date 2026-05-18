import Image from "next/image";
import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { menuHighlights } from "@/config/site";

import { SectionHeading } from "./section-heading";

const menuImages = [
  {
    src: "https://images.unsplash.com/photo-1664993101841-036f189719b6?w=600&q=80&auto=format&fit=crop",
    alt: "Nigerian jollof rice with chicken — the star of every party menu",
  },
  {
    src: "https://images.unsplash.com/photo-1583946193644-49fe1fe958cf?w=600&q=80&auto=format&fit=crop",
    alt: "Nigerian fried rice with chicken — classic event catering dish",
  },
  {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&auto=format&fit=crop",
    alt: "Grilled meat skewers — suya-style preparation for events",
  },
  {
    src: "https://images.unsplash.com/photo-1665833613236-7c1d087463b1?w=600&q=80&auto=format&fit=crop",
    alt: "Nigerian puff puff — golden small chops for celebrations",
  },
];

export function MenuShowcase() {
  return (
    <section id="menu" className="scroll-mt-24 bg-muted/45 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Menu"
          title="Classic Nigerian favorites with a polished event finish."
          description="Menus stay flexible, but the promise is consistent: crowd-pleasing flavor, clean presentation, and practical serving formats for the occasion."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              {menuImages.map((img, i) => (
                <div
                  key={img.src}
                  className={`relative overflow-hidden rounded-xl shadow-lg ${
                    i === 0 ? "aspect-[4/5]" : i === 1 ? "aspect-[4/5] mt-8" : i === 2 ? "aspect-[4/5] -mt-8" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, 45vw"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                Small chops to full spreads — every dish served event-ready.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                From intimate family gatherings to 500-guest weddings, the kitchen scales without
                cutting corners. Every plate is prepped fresh, presented clean, and served on time.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {menuHighlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
