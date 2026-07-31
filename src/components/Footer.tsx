export default function Footer() {
  return (
    <footer className="relative border-t border-separator py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-6 sm:flex-row">
        <a href="#top" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-label">
          <span className="flex h-6 w-6 items-center justify-center rounded-[8px] bg-accent">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          Launchframe
        </a>

        <p className="text-[13px] text-label-tertiary">
          &copy; {new Date().getFullYear()} Launchframe. Landing pages & websites for entrepreneurs.
        </p>

        <a href="mailto:hello@launchframe.co" className="text-[13px] text-label-secondary transition-colors hover:text-label">
          hello@launchframe.co
        </a>
      </div>
    </footer>
  );
}
