import { addressLine, business, directionsHref, telHref } from "@/data/business";
import { BrandLogo } from "./BrandLogo";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const link = "inline-flex min-h-11 items-center hover:text-saffron";
  return (
    <footer className="on-dark bg-ink text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <BrandLogo className="h-24 w-auto max-w-[min(100%,18rem)] object-contain object-left md:h-28 md:max-w-md" />
          <p className="mt-2 text-cream/75">{addressLine}</p>
          {business.phone.status === "verified" && (
            <a href={telHref ?? undefined} className={`${link} mt-1`}>{business.phone.value.display}</a>
          )}
        </div>
        <nav aria-label="Footer" className="flex flex-col">
          <a href="#story" className={link}>Story</a>
          <a href="#menu" className={link}>Menu</a>
          <a href="#gallery" className={link}>Gallery</a>
          <a href="#faq" className={link}>FAQ</a>
          <a href="#visit" className={link}>Visit</a>
          <a href={directionsHref} target="_blank" rel="noopener noreferrer" className={link}>Get Directions</a>
        </nav>
        <div>
          <p className="text-sm font-semibold text-cream/70">Follow us</p>
          <SocialLinks theme="dark" />
        </div>
        <p className="text-sm text-cream/60 lg:text-end">
          &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
