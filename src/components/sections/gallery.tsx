import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

const galleryItems = [
  {
    src: "https://plus.unsplash.com/premium_photo-1664360228209-bb15b0c5be8f?w=800&q=80&auto=format&fit=crop",
    alt: "Trays of Nigerian party food — jollof rice, fried rice, and sides ready for service",
    label: "Party food service",
  },
  {
    src: "https://images.unsplash.com/photo-1603496987674-79600a000f55?w=800&q=80&auto=format&fit=crop",
    alt: "Fried chicken on jollof rice plated for a Nigerian event",
    label: "Event plating, Lagos",
  },
  {
    src: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80&auto=format&fit=crop",
    alt: "Nigerian egusi soup in a white ceramic bowl — traditional cuisine",
    label: "Traditional soups",
  },
  {
    src: "https://images.unsplash.com/photo-1569058242252-623df46b5025?w=800&q=80&auto=format&fit=crop",
    alt: "Rice with fried meat and egg — Nigerian comfort food",
    label: "Rice and protein combos",
  },
  {
    src: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&q=80&auto=format&fit=crop",
    alt: "Skewered meat in a bowl — suya-style grilled preparation",
    label: "Suya and grills",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1695297516794-8bc77890e35c?w=800&q=80&auto=format&fit=crop",
    alt: "Full table spread with multiple Nigerian dishes on a blue tablecloth",
    label: "Family celebration spread",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our work"
          title="Real events. Real food. Real results."
          description="A look at recent events, kitchen prep, and presentations across Lagos and Ogun State."
        />
        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.05}>
              <div className="mb-4 break-inside-avoid overflow-hidden rounded-xl">
                <div className="group relative">
                  <div className={`relative ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <p className="absolute bottom-4 left-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {item.label}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
