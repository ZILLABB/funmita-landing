import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/config/site";

import { SectionHeading } from "./section-heading";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-muted/45 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Helpful answers before the first consultation."
          description="Share your guest count, location, preferred menu, and event date when reaching out for the fastest quote."
        />
        <Accordion type="single" collapsible className="rounded-lg border border-border bg-card px-5">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
