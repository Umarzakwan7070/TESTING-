"use client";

import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

const TRANSFORMATIONS = [
  {
    problem: "Visitors land but don't immediately “get it”",
    solution: "A clear message that earns the next scroll",
  },
  {
    problem: "Your strongest work is buried",
    solution: "Relevant proof placed where doubt appears",
  },
  {
    problem: "Prospects keep asking the same basic questions",
    solution: "A page that explains and pre-qualifies for you",
  },
  {
    problem: "Your website represents an older version of the business",
    solution: "A presence that finally matches your standard",
  },
  {
    problem: "You keep spending evenings trying to fix it yourself",
    solution: "A guided, done-for-you process with clear milestones",
  },
];

export default function PainPoints() {
  return (
    <section className="relative bg-foam py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <FadeIn>
            <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-coral">
              The problem isn&apos;t always your business
            </span>
            <h2 className="mx-auto mt-3 max-w-xl text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Your business may be better than your website makes it look.
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] text-balance text-[15px] leading-relaxed text-ink-dim">
              When visitors can&apos;t quickly see what you do, why they
              should trust you, or what to do next, they leave before
              discovering what makes you worth choosing.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mx-auto mt-6 max-w-[560px]">
            <p className="text-[16px] font-bold text-ink">
              And the frustrating part?
            </p>
            <p className="mt-1.5 text-balance text-[15px] leading-relaxed text-ink-dim">
              Your service might already be excellent. The page just
              isn&apos;t making that value obvious fast enough.
            </p>
          </FadeIn>
        </div>

        <Stagger className="mt-10 flex flex-col gap-3 sm:mt-12">
          {TRANSFORMATIONS.map((t) => (
            <StaggerItem key={t.problem}>
              <div className="flex flex-col gap-3 rounded-2xl bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:px-6 lg:flex-row lg:items-center lg:gap-6 lg:py-4">
                <div className="flex-1">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-ink-faint">
                    Friction
                  </span>
                  <p className="mt-1 text-[14.5px] font-semibold leading-snug text-ink-dim">
                    {t.problem}
                  </p>
                </div>

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 rotate-90 text-coral lg:rotate-0"
                  strokeWidth={2.5}
                />

                <div className="flex-1">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-ocean/70">
                    Clarity
                  </span>
                  <p className="mt-1 text-[15px] font-bold leading-snug text-ocean">
                    {t.solution}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.2} className="mt-10 text-center sm:mt-12">
          <p className="mx-auto max-w-[600px] text-balance text-[17px] font-bold leading-snug text-ink sm:text-[18px]">
            So instead of wondering why good leads disappear, you have a
            website that explains, reassures and guides the right people
            towards an enquiry.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <MagneticButton href="/assessment#quiz" className="w-full sm:w-auto">
              Show me what my website is missing
            </MagneticButton>
            <p className="text-[12.5px] font-bold text-ink-faint">
              Free website assessment · No hard sell · Practical
              recommendations you can use
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
