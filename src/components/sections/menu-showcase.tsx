import Image from "next/image";
import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { menuHighlights } from "@/config/site";

import { SectionHeading } from "./section-heading";

export function MenuShowcase() {
  return (
    <section id="menu" className="scroll-mt-24 bg-muted/45 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <Reveal>
          <div className="relative aspect-[5/4] overflow-hidden rounded-lg border border-border shadow-xl">
            <Image
              src="/funmita-menu-spread.svg"
              alt="Illustrated Funmita menu spread with small chops, rice, drinks, and gift packaging"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex h-full flex-col justify-center">
            <SectionHeading
              align="left"
              eyebrow="Menu"
              title="Classic Nigerian favorites with a polished event finish."
              description="Menus stay flexible, but the promise is consistent: crowd-pleasing flavor, clean presentation, and practical serving formats for the occasion."
            />
            <Card className="mt-8 grid gap-3 p-5 sm:grid-cols-2">
              {menuHighlights.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-medium">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </div>
              ))}
            </Card>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
