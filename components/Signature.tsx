import { menuItems } from "@/data/menu";
import { PhotoSlot } from "./PhotoSlot";
import { Reveal, RevealHeading } from "./motion/Reveal";

const layout = [
  { col: "md:col-span-7", ratio: "aspect-[4/3] md:aspect-[5/4]", radius: "rounded-tl-[4rem]", tone: "bg-chili" },
  { col: "md:col-span-5 md:mt-28", ratio: "aspect-[4/3] md:aspect-[4/5]", radius: "rounded-tr-[4rem]", tone: "bg-saffron" },
  { col: "md:col-span-8 md:col-start-3", ratio: "aspect-[4/3] md:aspect-[16/9]", radius: "rounded-bl-[4rem]", tone: "bg-herb" },
];

export function Signature() {
  const featured = menuItems.filter((i) => i.featured);
  return (
    <section id="signature" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-32">
      <RevealHeading className="max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-7xl">
        What we serve on Van Street
      </RevealHeading>
      <ul className="mt-14 grid gap-14 md:grid-cols-12 md:gap-x-8 md:gap-y-16">
        {featured.map((item, i) => {
          const l = layout[i % layout.length];
          return (
            <li key={item.slug} className={l.col}>
              <Reveal className="group">
                <div className={`${l.ratio} ${l.radius} overflow-hidden shadow-[0_0_0_rgb(0_0_0/0)] motion-safe:transition-all motion-safe:duration-300 motion-safe:group-hover:-translate-y-2 motion-safe:group-hover:shadow-[0_24px_40px_-16px_rgb(42_20_16/0.45)]`}>
                  <PhotoSlot photo={item.photo} tone={l.tone} />
                </div>
                <h3 className="mt-5 font-display text-4xl font-extrabold leading-none tracking-tight md:text-6xl">{item.name}</h3>
                <p className="mt-2 text-lg text-ink/75">{item.tagline}</p>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
