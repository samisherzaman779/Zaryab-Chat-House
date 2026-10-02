import { galleryItems } from "@/data/gallery";
import { business } from "@/data/business";

const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  ...(galleryItems.length ? [{ href: "#gallery", label: "Gallery" }] : []),
  { href: "#visit", label: "Visit" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-cream">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="inline-flex min-h-11 items-center font-display text-xl font-extrabold tracking-tight md:text-2xl">
          {business.name}
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="inline-flex min-h-11 items-center px-2.5 font-medium md:px-3 hover:text-chili">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
