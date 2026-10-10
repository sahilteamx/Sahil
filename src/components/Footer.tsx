import { PROFILE } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-[0.9rem] text-mute sm:px-6">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <a href="#top" className="font-medium text-ink hover:underline hover:underline-offset-4">
          Back to top
        </a>
      </div>
    </footer>
  );
}
