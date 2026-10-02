import { Navigation, Phone } from "lucide-react";
import { addressLine, business, directionsHref, telHref } from "@/data/business";
import { Button } from "./Button";
import { ComingSoon } from "./ComingSoon";

export function Visit() {
  const { hours, phone, address } = business;
  return (
    <section id="visit" className="bg-cream-deep">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div>
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Find us at Empress Market
          </h2>
          <address className="mt-6 text-2xl not-italic leading-snug">
            {business.name}<br />
            {address.street}<br />
            {address.area}, {address.city}
          </address>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={directionsHref} variant="danger" external>
              <Navigation aria-hidden size={18} /> Get Directions
            </Button>
            {telHref && (
              <Button href={telHref}>
                <Phone aria-hidden size={18} /> Call
              </Button>
            )}
          </div>
        </div>
        <dl className="grid content-start gap-6 md:pt-3">
          <div>
            <dt className="text-sm font-semibold text-ink/70">Phone</dt>
            <dd className="mt-1 text-xl">
              {phone.status === "verified" ? (
                <a href={telHref ?? undefined} className="underline decoration-chili decoration-2 underline-offset-4">
                  {phone.value.display}
                </a>
              ) : <ComingSoon />}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-ink/70">Hours</dt>
            <dd className="mt-1 text-xl">{hours.status === "verified" ? hours.value : <ComingSoon />}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-ink/70">Address</dt>
            <dd className="mt-1 text-xl">{addressLine}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
