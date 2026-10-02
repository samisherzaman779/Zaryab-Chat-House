import { menuItems, type MenuItem } from "@/data/menu";
import { Reveal, RevealHeading } from "./motion/Reveal";

function price(item: MenuItem) {
  return item.price.status === "verified" ? `Rs. ${item.price.value}` : "Price coming soon";
}

export function Menu() {
  return (
    <section id="menu" className="on-dark bg-tamarind text-cream">
      <div className="mx-auto w-full max-w-4xl px-5 py-20 md:px-8 md:py-32">
        <RevealHeading className="font-display text-5xl font-extrabold tracking-tight md:text-8xl">Menu</RevealHeading>
        <ul className="mt-12 divide-y divide-cream/20 border-y border-cream/20">
          {menuItems.map((item) => (
            <li key={item.slug}>
              <Reveal className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-6">
                <h3 className="font-display text-2xl font-bold md:text-4xl">{item.name}</h3>
                <span aria-hidden className="mb-1.5 hidden flex-1 border-b-2 border-dotted border-cream/35 sm:block" />
                <span className="text-cream/75">{price(item)}</span>
                <p className="basis-full text-cream/70">
                  {item.description.status === "verified" ? item.description.value : item.tagline}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
