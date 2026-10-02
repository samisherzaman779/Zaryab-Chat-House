import { story } from "@/data/story";
import { ComingSoon } from "./ComingSoon";
import { Parallax, Reveal, RevealHeading } from "./motion/Reveal";

export function Story() {
  return (
    <section id="story" className="relative overflow-x-clip px-5 py-24 md:px-8 md:py-36">
      <span aria-hidden className="pointer-events-none absolute -top-3 left-0 select-none font-display text-[28vw] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:2px_rgb(42_20_16/0.12)]">
        Saddar
      </span>
      <div className="relative mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.1fr_0.8fr] md:items-center">
        <div>
          <Reveal><p className="font-semibold text-chili">{story.eyebrow}</p></Reveal>
          <RevealHeading className="mt-3 font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
            {story.headline}
          </RevealHeading>
          <div className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed">
            {story.paragraphs.map((p) => <Reveal key={p}><p>{p}</p></Reveal>)}
            {story.ownerStory.status === "todo" ? (
              <Reveal><p className="flex flex-wrap items-center gap-3 text-ink/70">The owner&rsquo;s own story <ComingSoon /></p></Reveal>
            ) : <Reveal><p>{story.ownerStory.value}</p></Reveal>}
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t-2 border-ink/20 pt-5">
            {story.details.map((d) => (
              <div key={d.label}>
                <dt className="text-sm text-ink/70">{d.label}</dt>
                <dd className="font-display text-lg font-bold leading-tight md:text-xl">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Parallax className="mx-auto w-full max-w-xs md:max-w-sm">
          {/* Concentric market arches: decorative until real storefront photography exists. */}
          <div aria-hidden className="rounded-t-full bg-tamarind p-4">
            <div className="rounded-t-full bg-chili p-4">
              <div className="stripes aspect-[3/4] rounded-t-full bg-saffron" />
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}
