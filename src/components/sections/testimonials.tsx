import { Star } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { testimonials } from "@/config/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-foreground py-20 text-background sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Hospitality that guests remember after the event.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-background/60 sm:text-lg">
            Funmita Catering is built around taste, timing, and warm service — the three details
            that turn food into an experience.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <div className="h-full rounded-xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm">
                <div className="flex gap-1 text-amber-400" aria-label="Five star review">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-background/85">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-background/10 pt-4">
                  <div className="font-semibold text-background">{testimonial.name}</div>
                  <div className="text-sm text-background/50">{testimonial.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
