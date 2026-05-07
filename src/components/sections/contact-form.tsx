"use client";

import { CheckCircle2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

const eventTypes = ["Wedding", "Corporate event", "Private celebration", "Small chops order", "Hampers", "Event planning"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-primary/30 bg-primary/10 p-6 text-foreground">
        <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold">Your quote request is ready.</h3>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          Thanks for sharing your event details. Call or email Funmita Catering with this same information for the fastest confirmation.
        </p>
        <Button type="button" className="mt-5" onClick={() => setSubmitted(false)}>
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-border bg-card p-5 text-foreground shadow-xl">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Full name
          <input
            name="name"
            required
            className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Phone number
          <input
            name="phone"
            type="tel"
            required
            className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
            placeholder="070..."
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Event type
          <select
            name="eventType"
            required
            className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            {eventTypes.map((eventType) => (
              <option key={eventType}>{eventType}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Guest count
          <input
            name="guestCount"
            type="number"
            min="1"
            className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
            placeholder="100"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium">
        Event date
        <input
          name="eventDate"
          type="date"
          className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        What should we prepare?
        <textarea
          name="message"
          rows={5}
          className="rounded-md border border-input bg-background px-3 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
          placeholder="Tell us about your menu, drinks, hampers, location, and timing."
        />
      </label>
      <Button type="submit" size="lg" className="w-full">
        Submit quote details
        <Send className="h-4 w-4" aria-hidden="true" />
      </Button>
    </form>
  );
}
