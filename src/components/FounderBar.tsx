import { Stagger, StaggerItem } from "./ui/FadeIn";
import { UserCheck, Timer, HandCoins } from "lucide-react";

const POINTS = [
  {
    icon: UserCheck,
    title: "Founder-led, every time",
    desc: "You work directly with me, start to finish — no account managers, no handoffs.",
  },
  {
    icon: Timer,
    title: "Fixed price, fixed timeline",
    desc: "You know the cost and the delivery date before we start. No surprise invoices.",
  },
  {
    icon: HandCoins,
    title: "Founding-client pricing",
    desc: "I'm new and building my portfolio, so early clients get in below my long-term rates.",
  },
];

export default function FounderBar() {
  return (
    <section className="relative border-y border-white/8 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <Stagger className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {POINTS.map((p) => (
            <StaggerItem key={p.title} className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <p.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-[15px] font-medium text-white">{p.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">{p.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
