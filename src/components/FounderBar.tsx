import { Stagger, StaggerItem } from "./ui/FadeIn";
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
    <section className="relative border-y border-line py-14">
      <div className="mx-auto max-w-4xl px-6">
        <Stagger className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {POINTS.map((p) => (
            <StaggerItem key={p.title} className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
              <IconTile icon={p.icon} color={p.color} />
              <h3 className="text-[15px] font-bold text-ink">{p.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-ink-dim">{p.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
