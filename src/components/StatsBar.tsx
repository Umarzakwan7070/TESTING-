import { Counter } from "./ui/Counter";
import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";

const STATS = [
  { value: 120, suffix: "+", label: "Landing pages shipped" },
  { value: 3.4, suffix: "x", label: "Avg. lift in lead conversion", decimals: 1 },
  { value: 6, suffix: " days", label: "Average turnaround" },
  { value: 98, suffix: "%", label: "Clients who reorder" },
];

export default function StatsBar() {
  return (
    <section className="relative border-y border-white/5 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                <Counter to={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              </div>
              <p className="mt-2 text-[13.5px] text-white/50">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn delay={0.2} className="mt-10 text-center text-[12px] uppercase tracking-[0.2em] text-white/25 md:text-left">
          Illustrative results based on client engagements — ask us for the case studies
        </FadeIn>
      </div>
    </section>
  );
}
