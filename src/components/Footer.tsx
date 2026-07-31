export default function Footer() {
  return (
    <footer className="relative border-t border-line py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-6 sm:flex-row">
        <a href="#top" className="text-[15px] font-bold tracking-tight text-ink">
          SurfingLeads
        </a>

        <p className="text-[13px] text-ink-faint">
          &copy; {new Date().getFullYear()} SurfingLeads. Landing pages & websites for entrepreneurs.
        </p>

        <a href="mailto:hello@surfingleads.co" className="text-[13px] text-ink-dim transition-colors hover:text-ink">
          hello@surfingleads.co
        </a>
      </div>
    </footer>
  );
}
