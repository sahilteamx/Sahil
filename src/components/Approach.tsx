import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "motion/react";
import { APPROACH } from "../lib/data";

export default function Approach() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });

  return (
    <section id="approach" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="section-title">How I approach a fault</h2>
          <p className="mt-4 max-w-[40ch] text-ink-soft">
            The order I follow when I diagnose an electrical problem, built from what I practised in training.
          </p>
        </div>

        <ol ref={ref} className="relative md:col-span-8">
          <span aria-hidden="true" className="absolute bottom-3 left-[19px] top-3 w-0.5 bg-line" />
          <motion.span
            aria-hidden="true"
            className="absolute bottom-3 left-[19px] top-3 w-0.5 origin-top bg-ink"
            style={{ scaleY: reduce ? 1 : scrollYProgress }}
          />
          {APPROACH.map((step, index) => (
            <li key={step.title} className="relative flex gap-5 pb-9 last:pb-0">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center bg-hazard font-mono text-sm font-medium">
                {index + 1}
              </span>
              <div className="pt-1">
                <h3 className="font-display text-2xl font-extrabold uppercase leading-none tracking-tight sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[56ch] text-ink-soft">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
