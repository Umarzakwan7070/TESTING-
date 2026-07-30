export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <a href="#top" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-white">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-1)] via-[var(--accent-3)] to-[var(--accent-2)]">
            <span className="h-2 w-2 rounded-full bg-black/80" />
          </span>
          Launchframe
        </a>

        <p className="text-[13px] text-white/40">
          &copy; {new Date().getFullYear()} Launchframe. Landing pages for founders who need leads, not likes.
        </p>

        <div className="flex items-center gap-5 text-[13px] text-white/50">
          <a href="mailto:hello@launchframe.co" className="transition-colors hover:text-white">
            hello@launchframe.co
          </a>
        </div>
      </div>
    </footer>
  );
}
