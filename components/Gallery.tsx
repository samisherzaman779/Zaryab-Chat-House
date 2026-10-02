import Image from "next/image";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { Reveal, RevealHeading } from "./motion/Reveal";

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-32">
      <RevealHeading className="font-display text-4xl font-extrabold tracking-tight md:text-7xl">Gallery</RevealHeading>
      {galleryItems.length === 0 ? (
        <Reveal className="mt-10 rounded-[2rem] border-2 border-dashed border-ink/30 p-8 md:p-14">
          <p className="font-display text-2xl font-bold md:text-4xl">Photography coming soon</p>
          <p className="mt-3 max-w-md text-ink/75">Photos of the food and the street will appear here.</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Photo categories">
            {galleryCategories.map((c) => (
              <li key={c} className="rounded-full border border-ink/30 px-3 py-1 text-sm capitalize text-ink/75">{c}</li>
            ))}
          </ul>
        </Reveal>
      ) : (
        <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
          {galleryItems.map((g) => (
            <li key={g.id} className="break-inside-avoid overflow-hidden rounded-2xl">
              <Image src={g.src} alt={g.alt} width={g.width} height={g.height} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" loading="lazy" className="h-auto w-full" />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
