import { Reveal } from "@/components/motion/reveal";
import { process } from "@/config/site";

import { SectionHeading } from "./section-heading";

export function Process() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="A calm path from first call to final guest served."
          description="The workflow keeps decisions clear and operations tidy, so your event feels considered instead of rushed."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {process.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <div className="relative h-full rounded-lg border border-border bg-card p-6">
                <div className="mb-6 text-5xl font-bold text-primary/20">0{index + 1}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
