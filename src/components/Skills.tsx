import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { SKILL_GROUPS } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="section-title">What I can do</h2>
          <p className="mt-4 max-w-[40ch] text-ink-soft">
            Grouped by vehicle system, taken from my training and workshop practice. Open a group to see the full list.
          </p>
        </div>

        <div className="md:col-span-8">
          <Accordion type="multiple" defaultValue={SKILL_GROUPS.map((group) => group.id)}>
            {SKILL_GROUPS.map((group) => (
              <AccordionItem key={group.id} value={group.id}>
                <AccordionTrigger>{group.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="border-t border-line">
                    {group.items.map((item) => (
                      <li key={item} className="border-b border-line py-3 pr-2 text-[1rem] leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
