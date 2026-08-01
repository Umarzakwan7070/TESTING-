import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/assessment", label: "Free Assessment" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <Link href="/#top" className="text-[15px] font-bold tracking-tight text-ink">
            SurfingLeads
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-bold text-ink-dim transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="text-[13px] text-ink-faint">
            &copy; {new Date().getFullYear()} SurfingLeads. Landing pages & websites for entrepreneurs.
          </p>
          <div className="flex items-center gap-4 text-[13px]">
            <Link href="/privacy" className="text-ink-dim transition-colors hover:text-ink">
              Privacy
            </Link>
            <a href="mailto:hello@surfingleads.co" className="text-ink-dim transition-colors hover:text-ink">
              hello@surfingleads.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
