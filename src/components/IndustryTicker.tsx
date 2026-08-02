import { FadeIn } from "./ui/FadeIn";

const INDUSTRIES = ["SaaS", "Clinics", "Agencies", "Restaurants", "Real Estate", "Fitness", "Consulting", "Retail"];

export default function IndustryTicker() {
  return (
    <section className="relative border-y border-line bg-foam py-10">
      <FadeIn className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink-faint">
          Built for retail, clinics, real estate, hospitality and professional services
        </p>
      </FadeIn>

      <div
        className="glass relative mx-auto mt-7 max-w-4xl overflow-hidden !rounded-[22px] py-4"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-3 px-3 will-change-transform hover:[animation-play-state:paused]">
          {[...INDUSTRIES, ...INDUSTRIES].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="shrink-0 rounded-full bg-white/85 px-5 py-2 text-[13.5px] font-bold text-ink-dim shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_3px_rgba(6,49,61,0.08)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
