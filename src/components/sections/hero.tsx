import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { stats } from "@/config/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1665400808116-f0e6339b7e9a?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
      </div>

      <div className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Lagos &middot; Ogun State &middot; Since 2009
            </p>
            <h1 className="mt-5 max-w-[18ch] text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Food that proves your event was worth attending.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
              Funmita Catering handles small chops, asun, jollof, Chapman, hampers, and full event service — so your
              guests remember the food long after the party.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-amber-500 text-black hover:bg-amber-400">
                <Link href="#contact">
                  Get a free quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white/10">
                <Link href="#menu">See the menu</Link>
              </Button>
            </div>

            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="text-3xl font-bold text-white">{stat.value}</dd>
                  <dt className="mt-1 text-sm text-white/60">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1664993101841-036f189719b6?w=800&q=80&auto=format&fit=crop"
                  alt="Jollof rice with chicken — a signature Nigerian party dish"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 0vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 aspect-square w-40 overflow-hidden rounded-xl border-4 border-black shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1603496987674-79600a000f55?w=400&q=80&auto=format&fit=crop"
                  alt="Fried chicken on jollof rice — Nigerian event catering staple"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
