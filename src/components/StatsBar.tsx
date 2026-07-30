import { Counter } from "./ui/Counter";
import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";

const STATS = [
  { value: 120, suffix: "+", label: "Pages shipped" },
  { value: 3.4, suffix: "×", label: "Avg. conversion lift", decimals: 1 },
  { value: 6, suffix: " days", label: "Avg. turnaround" },
  { value: 98, suffix: "%", label: "Clients who reorder" },
];

export default function StatsBar() {
  return (
    <section className="relative border-y border-line">
      <div className="mx-auto max-w-6xl px-6">
        <Stagger className="grid grid-cols-2 divide-y divide-line md:grid-cols-4 md:divide-x md:divide-y-0">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="flex flex-col items-center gap-1.5 px-4 py-10 text-center">
              <div className="tabular font-display text-4xl italic text-paper sm:text-5xl">
                <Counter to={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              </div>
              <p className="font-mono-label text-[10.5px] text-paper-dim">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn delay={0.2} className="pb-6 text-center">
          <span className="font-mono-label text-[10px] text-line">
            Illustrative figures based on client engagements — case studies on request
          </span>
        </FadeIn>
      </div>
    </section>
  );
}
