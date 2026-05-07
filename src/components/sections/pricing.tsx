import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { packages } from "@/config/site";
import { cn } from "@/lib/utils";

import { SectionHeading } from "./section-heading";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Packages are tailored, but planning stays transparent."
          description="Every event gets a custom quote based on guest count, location, menu, staffing, and presentation needs."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {packages.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <Card
                className={cn(
                  "relative h-full p-6",
                  item.featured && "border-primary bg-primary text-primary-foreground shadow-2xl",
                )}
              >
                {item.featured ? (
                  <div className="absolute right-5 top-5 rounded-full bg-primary-foreground px-3 py-1 text-xs font-semibold text-primary">
                    Best fit
                  </div>
                ) : null}
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <p className={cn("mt-2 text-sm", item.featured ? "text-primary-foreground/78" : "text-muted-foreground")}>
                  {item.description}
                </p>
                <div className="mt-6 text-3xl font-bold">{item.price}</div>
                <ul className="mt-6 space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-full" variant={item.featured ? "secondary" : "default"}>
                  <a href="#contact">Request quote</a>
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
