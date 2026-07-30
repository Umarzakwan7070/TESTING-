export default function Footer() {
  return (
    <footer className="relative border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <a href="#top" className="font-display text-[15px] italic text-paper">
          Launchframe
        </a>

        <p className="font-mono-label text-center text-[10px] text-paper-dim">
          © {new Date().getFullYear()} Launchframe — pages for founders who need leads, not likes
        </p>

        <a href="mailto:hello@launchframe.co" className="font-mono-label text-[10px] text-paper-dim transition-colors hover:text-brass">
          hello@launchframe.co
        </a>
      </div>
    </footer>
  );
}
