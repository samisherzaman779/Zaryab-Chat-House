import { faqItems } from "@/data/faq";
import { Reveal, RevealHeading } from "./motion/Reveal";

export function Faq() {
  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-5 py-20 md:px-8 md:py-32">
      <RevealHeading className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
        Questions about chaat in Saddar
      </RevealHeading>
      <p className="mt-4 text-lg text-ink/75">
        Quick answers about Zaryab Chat House at Empress Market—hours, location, and menu prices.
      </p>
      <ul className="mt-10 divide-y divide-ink/15 border-y border-ink/15">
        {faqItems.map((item) => (
          <li key={item.id}>
            <Reveal>
              <details className="group py-5">
                <summary className="cursor-pointer list-none font-display text-xl font-bold leading-snug marker:content-none md:text-2xl [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span
                      aria-hidden
                      className="mt-1 shrink-0 text-chili motion-safe:transition-transform motion-safe:group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-lg leading-relaxed text-ink/80">{item.answer}</p>
              </details>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
