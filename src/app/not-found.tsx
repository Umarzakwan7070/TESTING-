import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="relative flex flex-1 flex-col overflow-x-clip bg-foam">
      <Nav />
      <main id="main-content" className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
        <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-coral">404</span>
        <h1 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Looks like this page drifted away.
        </h1>
        <p className="mt-3 max-w-sm text-balance text-[15px] leading-relaxed text-ink-dim">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-ocean px-7 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-ocean-deep"
        >
          Back to SurfingLeads
        </Link>
      </main>
      <Footer />
    </div>
  );
}
