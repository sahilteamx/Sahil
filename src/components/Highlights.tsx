import { ALIGNMENT_DAYS, HIGHLIGHTS } from "../lib/data";

export default function Highlights() {
  return (
    <section className="bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="section-title">Hands-on work</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-[clamp(6rem,20vw,11rem)] font-extrabold leading-[0.8]" aria-hidden="true">
              {ALIGNMENT_DAYS.days}
            </p>
            <p className="mt-3 max-w-[28ch] text-lg font-semibold leading-snug">
              <span className="sr-only">{ALIGNMENT_DAYS.days} </span>
              {ALIGNMENT_DAYS.text}
            </p>
          </div>

          <ul className="md:col-span-7">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="border-t border-line py-5 text-lg leading-snug first:border-t-0 first:pt-0">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
