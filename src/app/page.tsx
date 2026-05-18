import { ContactCTA } from "@/components/sections/contact-cta";
import { FAQ } from "@/components/sections/faq";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { MenuShowcase } from "@/components/sections/menu-showcase";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <MenuShowcase />
      <Gallery />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactCTA />
    </>
  );
}
