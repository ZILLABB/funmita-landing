import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/sections/contact-form";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="rounded-lg bg-foreground p-6 text-background shadow-2xl sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Quote request</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal sm:text-5xl">
              Let’s plan food, drinks, and presentation your guests will talk about.
            </h2>
            <p className="mt-5 text-base leading-8 text-background/72">
              Use the form to organize your event details, then reach Funmita directly for confirmation and pricing.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-background/78">
              <p className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{siteConfig.phone.join(" / ")}</span>
              </p>
              <p className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{siteConfig.email}</span>
              </p>
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{siteConfig.locations[0]}</span>
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <a href={`tel:${siteConfig.phone[0]}`}>Call now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10">
                <a href={`mailto:${siteConfig.email}`}>Email details</a>
              </Button>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
