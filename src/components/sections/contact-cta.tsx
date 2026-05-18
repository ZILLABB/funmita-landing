import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/sections/contact-form";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="relative overflow-hidden rounded-2xl bg-foreground p-6 text-background shadow-2xl sm:p-8">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Get in touch</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s plan food your guests will talk about.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-background/65">
                Share your event details and get a custom quote. Funmita handles the food, drinks,
                presentation, and logistics — you handle the guest list.
              </p>

              <div className="mt-8 overflow-hidden rounded-xl">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?w=600&q=80&auto=format&fit=crop"
                    alt="Meat grilling over open flame — Nigerian suya preparation"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 35vw, 100vw"
                  />
                </div>
              </div>

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
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
