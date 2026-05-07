import { Reveal } from "@/components/motion/reveal";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/config/site";

import { SectionHeading } from "./section-heading";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="One partner for food, drinks, gifting, and event flow."
          description="The service model is built around complete hosting: clear planning before the event, polished presentation on the day, and flexible packages for different budgets."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <Card className="h-full bg-card/80 transition-all duration-300 hover:border-primary/40 hover:shadow-soft">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
