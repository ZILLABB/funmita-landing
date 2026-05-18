import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

const serviceItems = [
  {
    title: "Full-service catering",
    description:
      "Event menus, buffet service, plated meals, and professional setup for weddings, corporate events, and private celebrations.",
    image: "https://images.unsplash.com/photo-1665400808116-f0e6339b7e9a?w=600&q=80&auto=format&fit=crop",
    alt: "Full table spread of Nigerian dishes for an event — jollof, fried rice, chicken, and sides",
  },
  {
    title: "Small chops & asun",
    description:
      "Fresh puff puff, samosas, spring rolls, meat pies, and perfectly seasoned asun prepared for crowd-friendly service.",
    image: "https://images.unsplash.com/photo-1665833613236-7c1d087463b1?w=600&q=80&auto=format&fit=crop",
    alt: "Nigerian puff puff — golden fried dough balls, a party small chops favorite",
  },
  {
    title: "Drinks & Chapman",
    description:
      "Signature Chapman, mocktails, fresh juices, and curated beverage stations that keep guests refreshed.",
    image: "https://images.unsplash.com/photo-1665332561290-cc6757172890?w=600&q=80&auto=format&fit=crop",
    alt: "Nigerian food and drinks spread at a celebration",
  },
  {
    title: "Hampers & packaging",
    description:
      "Beautiful food hampers and corporate gift packages with thoughtful presentation and reliable delivery options.",
    image: "https://images.unsplash.com/photo-1638436684761-7e59f8a9072f?w=600&q=80&auto=format&fit=crop",
    alt: "Packaged Nigerian rice dishes and food items ready for delivery",
  },
  {
    title: "Event planning",
    description:
      "Coordination support, vendor alignment, menu planning, setup timelines, and day-of management for calm events.",
    image: "https://plus.unsplash.com/premium_photo-1664360228209-bb15b0c5be8f?w=600&q=80&auto=format&fit=crop",
    alt: "Trays of Nigerian party food set up for event service",
  },
  {
    title: "Custom consultations",
    description:
      "Personalized planning for guest count, dietary needs, theme, budget, and service style.",
    image: "https://images.unsplash.com/photo-1665332195309-9d75071138f0?w=600&q=80&auto=format&fit=crop",
    alt: "Nigerian food plate — customized menu planning for events",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="One partner for food, drinks, gifting, and event flow."
          description="The service model is built around complete hosting: clear planning before the event, polished presentation on the day, and flexible packages for different budgets."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <div className="group h-full overflow-hidden rounded-xl border border-border bg-card transition-shadow duration-300 hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
