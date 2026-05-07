import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { stats, trustSignals } from "@/config/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.18),transparent_34%),linear-gradient(135deg,hsl(var(--background)),hsl(var(--muted)))]" />
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <Reveal>
          <div>
            <Badge className="bg-background/70 backdrop-blur">
              <Sparkles className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
              Premium Nigerian catering for refined celebrations
            </Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-normal text-foreground sm:text-6xl lg:text-7xl">
              Catering that makes every table feel thoughtfully hosted.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Funmita Catering creates memorable food experiences with small chops, asun, signature Chapman,
              beautiful hampers, full-service catering, and event planning across Lagos and Ogun State.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">
                  Get a quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#menu">Explore menus</Link>
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border/80 bg-background/55 p-4 backdrop-blur">
                  <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-2 text-2xl font-bold text-foreground">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/20 shadow-2xl">
              <Image
                src="/funmita-event-spread.svg"
                alt="Illustrated Funmita Catering event spread with dishes, drinks, and hamper"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 46vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <Card className="absolute bottom-4 left-4 right-4 border-white/20 bg-background/82 p-4 shadow-2xl backdrop-blur-xl sm:left-6 sm:right-auto sm:w-80">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <CalendarDays className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold">Tasting and menu planning</p>
                    <p className="text-sm text-muted-foreground">Consultations tailored to your event.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-y border-border/80 bg-background/70 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
          {trustSignals.map((signal) => (
            <div key={signal.text} className="flex items-center justify-center gap-2 px-2 py-3 text-sm text-muted-foreground">
              <signal.icon className="h-4 w-4 text-primary" aria-hidden="true" />
              {signal.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
