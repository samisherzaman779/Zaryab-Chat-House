"use client";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

const ease = [0.2, 0.8, 0.2, 1] as const;
const viewport = { once: true, margin: "0px 0px -10% 0px" } as const;

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <m.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </m.div>
  );
}

export function RevealHeading({ children, className }: { children: ReactNode; className?: string }) {
  // The observed wrapper stays in flow; only the inner span slides, so the observer is never clipped.
  return (
    <h2 className={className}>
      <m.span className="block overflow-hidden pb-[0.12em]" initial="hidden" whileInView="show" viewport={viewport}>
        <m.span
          data-reveal
          className="block"
          variants={{ hidden: { y: "105%" }, show: { y: 0 } }}
          transition={{ duration: 0.8, ease }}
        >
          {children}
        </m.span>
      </m.span>
    </h2>
  );
}

export function Parallax({ children, distance = 50, className }: { children: ReactNode; distance?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <div ref={ref} className={className}>
      <m.div style={reduce ? undefined : { y }}>{children}</m.div>
    </div>
  );
}
