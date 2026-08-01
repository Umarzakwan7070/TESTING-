"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, MousePointerClick, ShieldCheck, RotateCcw, ArrowLeft, Compass } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";
import { IconTile } from "./ui/IconTile";
import ResearchStats from "./ResearchStats";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Category = "visibility" | "conversion" | "trust";

interface Question {
  category: Category;
  text: string;
  options: { label: string; points: 0 | 1 | 2 }[];
}

const QUESTIONS: Question[] = [
  {
    category: "visibility",
    text: "Can a stranger tell what your business does within 5 seconds of landing on your page?",
    options: [
      { label: "Yes, instantly", points: 2 },
      { label: "Kind of — they'd have to read a bit", points: 1 },
      { label: "No, or I don't have a page", points: 0 },
    ],
  },
  {
    category: "visibility",
    text: "Do you have a page or site dedicated to just one offer or service?",
    options: [
      { label: "Yes", points: 2 },
      { label: "It's mixed in with everything else", points: 1 },
      { label: "No", points: 0 },
    ],
  },
  {
    category: "visibility",
    text: "Is your site fast and effortless to use on a phone?",
    options: [
      { label: "Yes, it's smooth on mobile", points: 2 },
      { label: "It works, but it's clunky", points: 1 },
      { label: "No idea, or it's slow", points: 0 },
    ],
  },
  {
    category: "conversion",
    text: "Is there one clear action you want every visitor to take — book, buy, contact?",
    options: [
      { label: "Yes, front and center", points: 2 },
      { label: "It's there, but buried", points: 1 },
      { label: "Not really", points: 0 },
    ],
  },
  {
    category: "conversion",
    text: "Can visitors leave their contact info anywhere on your site?",
    options: [
      { label: "Yes, a form or booking link", points: 2 },
      { label: "Only my email in the footer", points: 1 },
      { label: "No", points: 0 },
    ],
  },
  {
    category: "conversion",
    text: "Do you know roughly how many leads your website brings in per month?",
    options: [
      { label: "Yes, I track it", points: 2 },
      { label: "I have a rough guess", points: 1 },
      { label: "No idea", points: 0 },
    ],
  },
  {
    category: "conversion",
    text: "Do you follow up with people who show interest but don't buy right away?",
    options: [
      { label: "Yes, consistently", points: 2 },
      { label: "Sometimes", points: 1 },
      { label: "No system for it", points: 0 },
    ],
  },
  {
    category: "trust",
    text: "Has your site's design or copy been updated in the last 12 months?",
    options: [
      { label: "Yes", points: 2 },
      { label: "It's been a while", points: 1 },
      { label: "No, or I don't have one", points: 0 },
    ],
  },
  {
    category: "trust",
    text: "Is your pricing or offer clearly explained anywhere online?",
    options: [
      { label: "Yes", points: 2 },
      { label: "Sort of", points: 1 },
      { label: "No, people have to ask", points: 0 },
    ],
  },
  {
    category: "trust",
    text: "If a stranger found you today, would your site make them trust you enough to reach out?",
    options: [
      { label: "Yes, confidently", points: 2 },
      { label: "Maybe", points: 1 },
      { label: "Honestly, probably not", points: 0 },
    ],
  },
];

const CATEGORY_META: Record<
  Category,
  { icon: typeof Eye; color: "ocean" | "coral" | "sun"; label: string; insight: string }
> = {
  visibility: {
    icon: Eye,
    color: "ocean",
    label: "Visibility",
    insight: "People can't quickly tell what you do, or find a page dedicated to it.",
  },
  conversion: {
    icon: MousePointerClick,
    color: "coral",
    label: "Conversion",
    insight: "You're not making it easy for visitors to take action or leave their info.",
  },
  trust: {
    icon: ShieldCheck,
    color: "sun",
    label: "Trust",
    insight: "Your site isn't yet doing enough to make strangers comfortable reaching out.",
  },
};

const TIER_COPY = {
  red: {
    label: "Red zone",
    dot: "bg-coral",
    headline: "Your online presence is likely costing you customers.",
    plan: "Landing Page",
    price: "From $399",
    planCopy: "Start with one focused page built around your best offer — it's the fastest way to start capturing leads.",
  },
  yellow: {
    label: "Yellow zone",
    dot: "bg-sun",
    headline: "You've got a foundation, but you're leaving leads on the table.",
    plan: "Website",
    price: "From $700",
    planCopy: "A proper multi-page site — Home, About, Services, Contact — would close the gaps you're feeling.",
  },
  green: {
    label: "Green zone",
    dot: "bg-ocean",
    headline: "Solid foundation — now it's about scaling it.",
    plan: "Custom",
    price: "From $1,499",
    planCopy: "If you're showcasing a catalog of properties, rentals, or inventory, a Custom build helps you scale what's already working.",
  },
} as const;

function ScoreRing({ score, max = 20 }: { score: number; max?: number }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / max);

  return (
    <svg width="104" height="104" viewBox="0 0 104 104" className="mx-auto">
      <circle cx="52" cy="52" r={radius} fill="none" stroke="var(--line)" strokeWidth="8" />
      <motion.circle
        cx="52"
        cy="52"
        r={radius}
        fill="none"
        stroke="var(--ocean)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1, ease: EASE }}
        transform="rotate(-90 52 52)"
      />
      <text x="52" y="59" textAnchor="middle" fontSize="26" fontWeight="800" fill="var(--ink)">
        {score}
      </text>
    </svg>
  );
}

export default function Assessment() {
  const [answers, setAnswers] = useState<number[]>([]);
  const currentIndex = answers.length;
  const isComplete = currentIndex >= QUESTIONS.length;

  function selectOption(points: number) {
    if (isComplete) return;
    setAnswers((a) => [...a, points]);
  }

  function goBack() {
    setAnswers((a) => a.slice(0, -1));
  }

  function restart() {
    setAnswers([]);
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  }

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const tierKey = totalScore <= 9 ? "red" : totalScore <= 15 ? "yellow" : "green";
  const tier = TIER_COPY[tierKey];

  const categoryScores: Record<Category, number> = { visibility: 0, conversion: 0, trust: 0 };
  const categoryMax: Record<Category, number> = { visibility: 0, conversion: 0, trust: 0 };
  QUESTIONS.forEach((q, i) => {
    categoryMax[q.category] += 2;
    categoryScores[q.category] += answers[i] ?? 0;
  });
  const categoryPct: Record<Category, number> = {
    visibility: categoryScores.visibility / categoryMax.visibility,
    conversion: categoryScores.conversion / categoryMax.conversion,
    trust: categoryScores.trust / categoryMax.trust,
  };
  const weakest = (Object.keys(categoryPct) as Category[]).reduce((a, b) =>
    categoryPct[a] <= categoryPct[b] ? a : b
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foam pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-10 h-64 w-64 rounded-full bg-ocean/15 blur-3xl" />
          <div className="absolute right-[10%] top-32 h-64 w-64 rounded-full bg-coral/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="card mx-auto mb-8 flex w-fit items-center gap-2 px-4 py-1.5 text-[13px] font-bold text-ink-dim"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-coral" />
            </span>
            Free 3-minute assessment
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="text-balance font-display text-[9vw] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl"
          >
            You&apos;re doing everything right. So why isn&apos;t your business scaling?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            className="mx-auto mt-6 max-w-lg text-balance text-[16.5px] leading-relaxed text-ink-dim"
          >
            You show up, you deliver, you hustle — and growth still feels
            stuck. Most of the time it&apos;s not your product. It&apos;s
            that nobody online can tell how good you actually are. Answer 10
            quick questions and find out exactly where you&apos;re losing
            customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="mt-9 flex flex-col items-center gap-3"
          >
            <a href="#quiz">
              <MagneticButton>
                Start my free assessment
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M3 7.5H12M12 7.5L8 3.5M12 7.5L8 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MagneticButton>
            </a>
            <span className="text-[13px] font-bold text-ink-faint">
              10 questions &middot; About 3 minutes &middot; Instant results
            </span>
          </motion.div>
        </div>
      </section>

      <ResearchStats
        heading="The gap between businesses with a real online presence — and businesses without one"
        closing="That's exactly the gap I close — with a Landing Page, a full Website, or a Custom build, depending on where you're starting from."
      />

      {/* Quiz */}
      <section id="quiz" className="relative py-24">
        <div className="mx-auto max-w-xl px-6">
          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="card p-8"
              >
                <div className="mb-4 flex items-center justify-between">
                  {currentIndex > 0 ? (
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-ink-faint transition-colors hover:text-ink"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
                      Back
                    </button>
                  ) : (
                    <span />
                  )}
                  <span className="text-[12.5px] font-bold text-ink-faint">
                    {currentIndex + 1} / {QUESTIONS.length}
                  </span>
                </div>

                <div className="h-2 w-full overflow-hidden rounded-full bg-ink/5">
                  <motion.div
                    className="h-full rounded-full bg-ocean"
                    animate={{ width: `${(currentIndex / QUESTIONS.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                </div>

                <div className="mt-5 flex items-center gap-2.5">
                  <IconTile
                    icon={CATEGORY_META[QUESTIONS[currentIndex].category].icon}
                    color={CATEGORY_META[QUESTIONS[currentIndex].category].color}
                    size="sm"
                  />
                  <span className="text-[12.5px] font-bold uppercase tracking-[0.08em] text-ocean">
                    {CATEGORY_META[QUESTIONS[currentIndex].category].label}
                  </span>
                </div>

                <h3 className="mt-4 text-balance text-xl font-bold text-ink">
                  {QUESTIONS[currentIndex].text}
                </h3>

                <div className="mt-6 flex flex-col gap-2.5">
                  {QUESTIONS[currentIndex].options.map((opt) => (
                    <motion.button
                      key={opt.label}
                      type="button"
                      whileTap={{ scale: 0.98 }}
                      onClick={() => selectOption(opt.points)}
                      className="group flex items-center gap-3 rounded-xl border border-line px-4 py-3.5 text-left text-[14.5px] font-bold text-ink transition-colors hover:border-ocean hover:bg-ocean/5"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-line transition-colors group-hover:border-ocean">
                        <span className="h-2 w-2 rounded-full bg-ocean opacity-0 transition-opacity group-hover:opacity-100" />
                      </span>
                      {opt.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="card overflow-hidden"
              >
                <div className="p-8 text-center">
                  <ScoreRing score={totalScore} />
                  <span className="mt-4 flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-[0.08em] text-ink-dim">
                    <span className={`h-2 w-2 rounded-full ${tier.dot}`} />
                    {tier.label}
                  </span>
                  <h3 className="mt-3 text-balance font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {tier.headline}
                  </h3>

                  <div className="mx-auto mt-7 grid max-w-lg grid-cols-1 gap-4 text-left sm:grid-cols-2">
                    <div className="rounded-2xl bg-coral/[0.08] p-5">
                      <IconTile icon={CATEGORY_META[weakest].icon} color="coral" size="sm" />
                      <p className="mt-3 text-[13.5px] font-bold text-ink">
                        Biggest opportunity: {CATEGORY_META[weakest].label}
                      </p>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-ink-dim">
                        {CATEGORY_META[weakest].insight}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-line p-5">
                      <IconTile icon={Compass} color="ocean" size="sm" />
                      <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.08em] text-ocean">
                        Recommended starting point
                      </p>
                      <p className="mt-1.5 text-[16px] font-bold text-ink">
                        {tier.plan} <span className="text-ink-faint">&middot; {tier.price}</span>
                      </p>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-ink-dim">
                        {tier.planCopy}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col items-center gap-3">
                    <MagneticButton href="mailto:hello@surfingleads.co">
                      Book a free call
                    </MagneticButton>
                    <div className="flex items-center gap-3 text-[13.5px] font-bold text-ink-dim">
                      <Link href="/#pricing" className="transition-colors hover:text-ink">
                        See pricing
                      </Link>
                      <span className="text-ink-faint">&middot;</span>
                      <button
                        type="button"
                        onClick={goBack}
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
                        Back
                      </button>
                      <span className="text-ink-faint">&middot;</span>
                      <button
                        type="button"
                        onClick={restart}
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
                      >
                        <RotateCcw className="h-3.5 w-3.5" strokeWidth={2.5} />
                        Retake
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
