import { Navigation, Phone } from "lucide-react";
import { business, directionsHref, telHref } from "@/data/business";
import { Button } from "./Button";

export function Hero() {
  return (
    <section id="top" className="on-dark relative overflow-hidden bg-ink text-cream">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pt-14 md:grid-cols-[1.15fr_1fr] md:gap-6 md:px-8 md:pb-20 md:pt-24">
        <div>
          <p className="mb-5 text-lg text-saffron">Saddar, Empress Market, Karachi</p>
          <h1 className="font-display text-[clamp(3.75rem,17vw,9.5rem)] font-extrabold leading-[0.88] tracking-tighter">
            {business.name}
          </h1>
          <p className="mt-7 max-w-md text-xl leading-relaxed text-cream/85">
            Chaat, pani puri and kathiyawari chana piyala, served on Van Street in Empress Market, Saddar.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <Button href="#menu" variant="primary" className="col-span-2">Explore Menu</Button>
            <Button href={directionsHref} external>
              <Navigation aria-hidden size={18} /> Get Directions
            </Button>
            {telHref && (
              <Button href={telHref}>
                <Phone aria-hidden size={18} /> Call
              </Button>
            )}
          </div>
        </div>
        {/* Phase 4: mount the lazy 3D canvas inside this slot; the CSS plate stays as the fallback. */}
        <div data-hero-slot className="relative mx-auto -mb-[18%] w-[82%] max-w-md md:mb-0 md:w-full md:max-w-none">
          <div aria-hidden className="plate" />
        </div>
      </div>
    </section>
  );
}
