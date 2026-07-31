import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";
import { IconTile } from "./ui/IconTile";
import { UserCheck, Timer, HandCoins } from "lucide-react";

const POINTS = [
  {
    icon: UserCheck,
    color: "ocean" as const,
    title: "Founder-led, every time",
    desc: "You work directly with me, start to finish — no account managers, no handoffs.",
  },
  {
    icon: Timer,
    color: "coral" as const,
    title: "Fixed price, fixed timeline",
    desc: "You know the cost and the delivery date before we start. No surprise invoices.",
  },
  {
    icon: HandCoins,
    color: "sun" as const,
    title: "Founding-client pricing",
    desc: "I'm new and building my portfolio, so early clients get in below my long-term rates.",
  },
];

export default function FounderBar() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-0 h-64 w-64 rounded-full bg-ocean/15 blur-3xl" />
        <div className="absolute right-[10%] bottom-0 h-64 w-64 rounded-full bg-sun/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <FadeIn className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-ocean">
            About
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            One person, building your site right
          </h2>
          <p className="mt-4 text-balance text-[16px] leading-relaxed text-ink-dim">
            SurfingLeads is me — a solo, no-code studio. No agency
            overhead, no junior handoffs. You work directly with the
            person actually building your site, from the first call to
            launch.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {POINTS.map((p) => (
            <StaggerItem key={p.title}>
              <div className="card h-full p-6 text-center transition-transform hover:-translate-y-1 sm:text-left">
                <IconTile icon={p.icon} color={p.color} />
                <h3 className="mt-4 text-[15px] font-bold text-ink">{p.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-dim">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
