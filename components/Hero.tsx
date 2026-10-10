import Image from "next/image";
import { ArrowDown, MapPin, Navigation, Phone } from "lucide-react";

import { business, directionsHref, telHref } from "@/data/business";
import { Button } from "./Button";

const heroPhoto = {
  src: "/images/special-plate.png",
  alt: "Fresh chaat plate with chickpeas, crispy papri and chutneys at Van Street, Empress Market, Karachi",
  width: 400,
  height: 400,
};

export function Hero() {
  return (
    <section
      id="top"
      className="on-dark relative isolate overflow-hidden bg-ink text-cream"
    >
      {/* Decorative background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-saffron/10 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-80 w-80 rounded-full bg-saffron/5 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 md:grid-cols-2 md:gap-8 md:px-10 md:pb-24 md:pt-20 lg:gap-14 lg:px-12 lg:pt-24">
        {/* Hero content */}
        <div className="relative z-10 min-w-0 text-center md:text-left">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2.5 md:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-4 py-2 text-xs font-semibold tracking-wide text-saffron sm:text-sm">
              <MapPin size={15} aria-hidden="true" />
              Saddar, Empress Market, Karachi
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-cream/80">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-saffron"
              />
              Since 1990
            </span>
          </div>

          <h1 className="mx-auto max-w-3xl break-words font-display text-[clamp(2.8rem,11vw,5.5rem)] font-extrabold leading-[0.96] tracking-tight text-balance sm:text-6xl md:mx-0 md:text-[clamp(3.5rem,6.5vw,6.5rem)] md:leading-[0.94] lg:text-8xl">
            {business.name}
            <span
              aria-hidden="true"
              className="ml-2 inline-block text-saffron"
            >
              .
            </span>
          </h1>

          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-1 w-20 rounded-full bg-saffron md:mx-0"
          />

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-cream/80 sm:text-lg sm:leading-8 md:mx-0 md:text-xl">
            Your late-night chaat craving starts here. Enjoy delicious
            single, double, and special plates on Van Street, Empress
            Market — serving Karachi since 1990.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-cream/65 md:justify-start">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-saffron"
            />
            Open daily, 11 PM – 1 AM
          </div>

          {/* Action buttons */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:mx-auto sm:max-w-lg sm:grid-cols-2 md:mx-0 md:max-w-none md:flex md:flex-wrap md:items-center">
            <Button
              href="#menu"
              variant="primary"
              className="w-full sm:col-span-2 md:w-auto"
            >
              Explore Menu
              <ArrowDown
                size={18}
                aria-hidden="true"
                className="ml-2"
              />
            </Button>

            <Button href={directionsHref} external>
              <Navigation size={18} aria-hidden="true" />
              Get Directions
            </Button>

            {telHref && (
              <Button href={telHref}>
                <Phone size={18} aria-hidden="true" />
                Call Us
              </Button>
            )}
          </div>

          <p className="mt-6 text-xs leading-6 text-cream/50 sm:text-sm">
            Authentic flavours. Generous plates. Karachi&apos;s late-night
            favourite.
          </p>
        </div>

        {/* Hero food image */}
        <div
          data-hero-slot
          className="relative mx-auto w-full max-w-[440px] min-w-0 md:max-w-none md:justify-self-end"
        >
          {/* Decorative image frame */}
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2rem] border border-saffron/20 sm:-inset-4 sm:rounded-[2.5rem]"
          />

          <div className="relative mx-auto aspect-square w-full max-w-[440px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.65)] sm:rounded-[2.25rem] md:max-w-none">
            <Image
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              width={heroPhoto.width}
              height={heroPhoto.height}
              priority
              sizes="(min-width: 1280px) 44vw, (min-width: 768px) 46vw, (min-width: 480px) 80vw, 92vw"
              className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />

            {/* Subtle image overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/5"
            />
          </div>

          {/* Image caption */}
          <div className="relative mx-auto mt-5 flex max-w-[440px] items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm sm:px-5">
            <div className="min-w-0">
              <p className="text-sm font-bold text-cream sm:text-base">
                Made for your cravings
              </p>
              <p className="mt-1 text-xs leading-5 text-cream/60 sm:text-sm">
                A Karachi street-food classic
              </p>
            </div>

            <span className="shrink-0 rounded-full border border-saffron/25 bg-saffron/10 px-3 py-1.5 text-xs font-semibold text-saffron">
              Since 1990
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
