"use client";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";

// Motion is the single DOM animation library. LazyMotion keeps its footprint small, and
// reducedMotion="user" removes transform animation when prefers-reduced-motion is set.
export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
