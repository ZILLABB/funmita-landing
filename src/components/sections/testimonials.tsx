import { Quote, Star } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/config/site";

import { SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-muted/45 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Hospitality that guests remember after the event."
          description="Funmita Catering is built around taste, timing, and warm service, the three details that turn food into an experience."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <Card className="h-full p-6">
                <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
                <div className="mt-5 flex gap-1 text-amber-500" aria-label="Five star review">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-8 text-foreground">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </figcaption>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
