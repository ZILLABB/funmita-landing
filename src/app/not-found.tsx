import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="mx-auto max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-normal">This page is not on the menu.</h1>
        <p className="mt-4 text-muted-foreground">
          The page you requested could not be found. Head back to the rebuilt landing page to explore services and booking details.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </section>
  );
}
