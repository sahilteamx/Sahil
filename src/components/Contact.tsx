import { Download, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PROFILE } from "../lib/data";
import { buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-concrete">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-display text-[clamp(2.75rem,9vw,6.5rem)] font-extrabold uppercase leading-[0.88] tracking-tight">
          Looking for an entry-level technician role?
        </h2>
        <p className="mt-5 max-w-[56ch] text-lg text-[#C3CBD0]">
          I am open to entry-level diagnostic and electrical technician roles. Call or message me and I will reply as soon as I can.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <ul className="space-y-4 text-lg">
            <li>
              <a href={PROFILE.phoneHref} className="inline-flex items-center gap-3 hover:underline hover:underline-offset-4">
                <Phone aria-hidden="true" className="h-5 w-5 text-hazard" />
                {PROFILE.phone}
              </a>
            </li>
            <li>
              <a href={PROFILE.emailHref} className="inline-flex items-center gap-3 break-all hover:underline hover:underline-offset-4">
                <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-hazard" />
                {PROFILE.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-3">
              <MapPin aria-hidden="true" className="h-5 w-5 text-hazard" />
              {PROFILE.location}
            </li>
          </ul>

          <div className="flex flex-wrap content-start gap-3">
            <a href={PROFILE.phoneHref} className={cn(buttonVariants({ variant: "primary" }))}>
              <Phone aria-hidden="true" className="h-4 w-4" />
              Call now
            </a>
            <a
              href={PROFILE.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "border-concrete text-concrete hover:bg-concrete hover:text-ink")}
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={PROFILE.resumePath}
              download
              className={cn(buttonVariants({ variant: "outline" }), "border-concrete text-concrete hover:bg-concrete hover:text-ink")}
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
