import { FadeIn } from "./ui/FadeIn";

const INDUSTRIES = ["SaaS", "Clinics", "Agencies", "Restaurants", "Real Estate", "Fitness", "Consulting", "Retail"];

export default function IndustryTicker() {
  return (
    <section className="relative border-y border-line bg-foam py-8">
      <FadeIn className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink-faint">
          Built for retail, clinics, real estate, hospitality and professional services
        </p>
      </FadeIn>

      <div
        className="relative mt-6 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {[...INDUSTRIES, ...INDUSTRIES].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="glass glass-pill shrink-0 px-5 py-2 text-[13.5px] font-bold text-ink-dim"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
