import { EDUCATION, TRAINING } from "../lib/data";

export default function Training() {
  return (
    <section className="bg-panel">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-24">
        <h2 className="section-title md:col-span-4">Training</h2>

        <div className="md:col-span-8">
          <div className="border-t border-ink py-6">
            <h3 className="font-display text-3xl font-extrabold uppercase leading-none tracking-tight">{TRAINING.org}</h3>
            <p className="mt-2 text-lg font-semibold">
              {TRAINING.course} · {TRAINING.duration}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {TRAINING.focus.map((item) => (
                <li key={item} className="border border-line bg-concrete px-3 py-1 text-[0.95rem]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-ink py-6">
            <h3 className="font-display text-3xl font-extrabold uppercase leading-none tracking-tight">{EDUCATION.title}</h3>
            <p className="mt-2 text-lg font-semibold">{EDUCATION.board}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
