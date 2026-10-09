"use client";

import { useEffect, useId, useRef, useState } from "react";
import { MapPin, Menu, X } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { addressLine, business, directionsHref } from "@/data/business";
import { BrandLogo } from "./BrandLogo";
import { Button } from "./Button";

const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  ...(galleryItems.length ? [{ href: "#gallery", label: "Gallery" }] : []),
  { href: "#faq", label: "FAQ" },
  { href: "#visit", label: "Visit" },
];

const desktopLink =
  "relative inline-flex min-h-11 items-center px-3 text-[0.95rem] font-semibold tracking-wide text-ink/80 transition-colors hover:text-chili after:pointer-events-none after:absolute after:inset-x-3 after:bottom-2 after:h-0.5 after:origin-left after:scale-x-0 after:bg-saffron after:transition-transform after:duration-200 hover:after:scale-x-100";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      menuBtnRef.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/92 pt-[env(safe-area-inset-top)] shadow-[0_8px_28px_-18px_rgb(42_20_16/0.45)] backdrop-blur-md">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />

      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 overflow-x-clip px-4 sm:px-5 md:h-[4.25rem] md:px-8">
        <a
          href="#top"
          className="inline-flex min-h-11 min-w-0 shrink items-center"
          onClick={closeMenu}
        >
          <BrandLogo
            priority
            className="h-12 w-auto max-w-full object-contain object-left sm:h-[3.35rem] md:h-14"
          />
          <span className="sr-only">{business.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={desktopLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden md:block">
            <Button
              href={directionsHref}
              variant="primary"
              external
              className="min-h-11 px-5 text-sm shadow-sm"
            >
              <MapPin aria-hidden size={16} />
              Directions
            </Button>
          </div>

          <button
            ref={menuBtnRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full bg-ink text-cream shadow-sm transition-colors hover:bg-tamarind lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden ${open ? "visible" : "invisible"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          className={`fixed inset-0 top-[calc(4rem+env(safe-area-inset-top))] z-30 bg-ink/40 transition-opacity duration-200 md:top-[calc(4.25rem+env(safe-area-inset-top))] ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          onClick={closeMenu}
        />

        <div
          ref={panelRef}
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute inset-x-0 top-full z-30 origin-top border-b border-ink/10 bg-cream px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_24px_40px_-20px_rgb(42_20_16/0.4)] sm:px-5 md:px-8 motion-safe:transition-transform motion-safe:duration-200 ${
            open ? "translate-y-0" : "pointer-events-none -translate-y-2"
          }`}
        >
          <nav aria-label="Primary" className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={open ? 0 : -1}
                className="flex min-h-12 items-center border-b border-ink/10 font-display text-2xl font-bold tracking-tight text-ink transition-colors hover:text-chili"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="mt-5 text-sm leading-relaxed text-ink/65">{addressLine}</p>

          <Button
            href={directionsHref}
            variant="primary"
            external
            className="mt-4 w-full"
          >
            <MapPin aria-hidden size={18} />
            Get Directions
          </Button>
        </div>
      </div>
    </header>
  );
}
