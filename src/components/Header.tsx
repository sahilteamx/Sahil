import { Download } from "lucide-react";
import { PROFILE } from "../lib/data";
import { buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";

const LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-concrete/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-display text-2xl font-extrabold uppercase tracking-tight">
          {PROFILE.name}
        </a>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="py-2 text-[0.95rem] font-medium hover:underline hover:underline-offset-4">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={PROFILE.resumePath}
            download
            className={cn(buttonVariants({ variant: "outline" }), "min-h-[44px] px-4")}
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
