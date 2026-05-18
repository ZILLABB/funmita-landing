import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { process } from "@/config/site";

import { SectionHeading } from "./section-heading";

const processImages = [
  "https://plus.unsplash.com/premium_photo-1695297516698-fd7a320a55e5?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1665332195309-9d75071138f0?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1687422808277-2334638f09fb?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583946193644-49fe1fe958cf?w=400&q=80&auto=format&fit=crop",
];

export function Process() {
  return (
    <section className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="A calm path from first call to final guest served."
          description="The workflow keeps decisions clear and operations tidy, so your event feels considered instead of rushed."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <div className="group h-full overflow-hidden rounded-xl border border-border bg-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={processImages[index]}
                    alt={`Step ${index + 1}: ${step.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-3xl font-bold text-white/80">
                    0{index + 1}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
