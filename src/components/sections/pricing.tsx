import { Check, ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { packages } from "@/config/site";
import { cn } from "@/lib/utils";

import { SectionHeading } from "./section-heading";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-muted/45 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Packages are tailored, but planning stays transparent."
          description="Every event gets a custom quote based on guest count, location, menu, staffing, and presentation needs."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <div
                className={cn(
                  "relative h-full rounded-2xl p-6 transition-shadow duration-300",
                  item.featured
                    ? "border-2 border-primary bg-foreground text-background shadow-2xl"
                    : "border border-border bg-card hover:shadow-lg",
                )}
              >
                {item.featured ? (
                  <div className="absolute -top-3 left-6 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    Most popular
                  </div>
                ) : null}
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <p className={cn("mt-2 text-sm leading-relaxed", item.featured ? "text-background/65" : "text-muted-foreground")}>
                  {item.description}
                </p>
                <div className="mt-6 text-3xl font-bold">{item.price}</div>
                <ul className="mt-6 space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <Check className={cn("mt-0.5 h-4 w-4 shrink-0", item.featured ? "text-primary" : "text-primary")} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-full" variant={item.featured ? "secondary" : "default"}>
                  <a href="#contact">
                    Request quote
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
