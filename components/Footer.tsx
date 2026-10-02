import { addressLine, business, directionsHref, telHref } from "@/data/business";

export function Footer() {
  const link = "inline-flex min-h-11 items-center hover:text-saffron";
  return (
    <footer className="on-dark bg-ink text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-3xl font-extrabold">{business.name}</p>
          <p className="mt-2 text-cream/75">{addressLine}</p>
          {business.phone.status === "verified" && (
            <a href={telHref ?? undefined} className={`${link} mt-1`}>{business.phone.value.display}</a>
          )}
        </div>
        <nav aria-label="Footer" className="flex flex-col">
          <a href="#story" className={link}>Story</a>
          <a href="#menu" className={link}>Menu</a>
          <a href="#visit" className={link}>Visit</a>
          <a href={directionsHref} target="_blank" rel="noopener noreferrer" className={link}>Get Directions</a>
        </nav>
        <p className="text-sm text-cream/60 md:text-end">
          &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
