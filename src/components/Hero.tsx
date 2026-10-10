import { motion, useReducedMotion } from "motion/react";
import { Download, MapPin, MessageCircle, Phone } from "lucide-react";
import { PROFILE } from "../lib/data";
import { buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  // One orchestrated entrance: the text block rises once, then the photo settles.
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  return (
    <section id="top" className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 pt-10 sm:px-6 md:grid-cols-12 md:items-end md:pb-16 md:pt-16">
      <div className="md:col-span-7">
        <motion.p {...rise(0)} className="flex items-center gap-2 text-[0.95rem] font-medium text-ink-soft">
          <MapPin aria-hidden="true" className="h-4 w-4" />
          {PROFILE.location}
        </motion.p>

        <motion.h1
          {...rise(0.08)}
          className="mt-3 font-display text-[clamp(3.75rem,13vw,8.5rem)] font-extrabold uppercase leading-[0.84] tracking-tight"
        >
          {PROFILE.name}
        </motion.h1>

        <motion.p {...rise(0.16)} className="mt-5 max-w-xl text-xl font-semibold leading-snug sm:text-2xl">
          {PROFILE.role}
        </motion.p>
        <motion.p {...rise(0.2)} className="mt-2 inline-block bg-hazard px-2 py-0.5 text-[0.95rem] font-semibold">
          {PROFILE.level} · 6 months hands-on training
        </motion.p>

        <motion.p {...rise(0.26)} className="mt-6 max-w-[62ch] text-[1.05rem] text-ink-soft">
          {PROFILE.summary}
        </motion.p>

        <motion.div {...rise(0.32)} className="mt-8 flex flex-wrap gap-3">
          <a href={PROFILE.phoneHref} className={cn(buttonVariants({ variant: "primary" }))}>
            <Phone aria-hidden="true" className="h-4 w-4" />
            Call {PROFILE.phone}
          </a>
          <a
            href={PROFILE.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            WhatsApp
          </a>
          <a href={PROFILE.resumePath} download className={cn(buttonVariants({ variant: "outline" }))}>
            <Download aria-hidden="true" className="h-4 w-4" />
            Resume (PDF)
          </a>
        </motion.div>
      </div>

      <motion.figure
        {...(reduce
          ? {}
          : {
              initial: { opacity: 0, scale: 0.97 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.7, delay: 0.4, ease: EASE },
            })}
        className="mx-auto w-full max-w-xs md:col-span-5 md:max-w-none"
      >
        <img
          src="./portrait.webp"
          alt="Portrait of Sahil Shekh"
          width={893}
          height={1200}
          className="aspect-[3/4] w-full bg-white object-cover object-top"
        />
      </motion.figure>
    </section>
  );
}
