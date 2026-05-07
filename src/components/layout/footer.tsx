import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/35">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <Image
            src={siteConfig.logo}
            alt="Funmita Catering"
            width={190}
            height={64}
            className="mb-5 h-14 w-auto rounded-sm"
          />
          <p className="max-w-md text-sm leading-7 text-muted-foreground">{siteConfig.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="sm">
              <a href={`tel:${siteConfig.phone[0]}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call now
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={`mailto:${siteConfig.email}`}>Email us</a>
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Explore</h2>
          <ul className="mt-4 grid gap-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted-foreground transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <address className="not-italic">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">Contact</h2>
          <div className="mt-4 space-y-4 text-sm text-muted-foreground">
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
              <span>{siteConfig.locations.join(" | ")}</span>
            </p>
          </div>
        </address>
      </div>
      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground">
        © 2026 Funmita Catering. All rights reserved.
      </div>
    </footer>
  );
}
