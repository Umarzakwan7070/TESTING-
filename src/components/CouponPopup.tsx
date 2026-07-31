"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Percent, CheckCircle2, Clock } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";
import { supabase } from "@/lib/supabase";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const COUPON_CODE = "SURF30";
const WINDOW_MS = 3 * 60 * 60 * 1000; // 3 hours
const SHOW_DELAY_MS = 7000;

const DISCOUNTS = [
  { plan: "Landing Page", price: 399 },
  { plan: "Website", price: 700 },
  { plan: "Custom", price: 1499 },
];

function formatTime(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

export default function CouponPopup() {
  const [visible, setVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const expiresAtRef = useRef<number | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const claimed = localStorage.getItem("coupon_claimed");
    const dismissed = localStorage.getItem("coupon_dismissed");
    if (claimed || dismissed) return;

    let expiry = Number(localStorage.getItem("coupon_expires_at"));
    if (!expiry) {
      expiry = Date.now() + WINDOW_MS;
      localStorage.setItem("coupon_expires_at", String(expiry));
    }

    if (Date.now() >= expiry) return;
    expiresAtRef.current = expiry;

    const showTimer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);

    // Ticking countdown driven by a timer callback — an accepted exception
    // to the "no setState in effect body" rule, since this is a subscription
    // to an external clock, not a synchronous derivation from props/state.
    const interval = setInterval(() => {
      const remaining = expiry - Date.now();
      setTimeLeft(remaining);
      if (remaining <= 0) setVisible(false);
    }, 1000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  function close() {
    setVisible(false);
    localStorage.setItem("coupon_dismissed", "1");
  }

  async function submitEmail() {
    if (!email.trim() || status === "submitting") return;
    setStatus("submitting");

    const { error } = await supabase
      .from("coupon_leads")
      .insert({ email: email.trim(), coupon_code: COUPON_CODE });

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    localStorage.setItem("coupon_claimed", "1");
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="card relative w-full max-w-sm overflow-hidden p-7"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink-faint transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <X className="h-4 w-4" strokeWidth={2.5} />
            </button>

            {status === "success" ? (
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ocean/10">
                  <CheckCircle2 className="h-6 w-6 text-ocean" strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-balance font-display text-xl font-bold text-ink">
                  You&apos;re in! Here&apos;s your code
                </h3>
                <div className="mt-4 rounded-xl border-2 border-dashed border-ocean/40 bg-ocean/5 py-3 text-center">
                  <span className="font-display text-2xl font-bold tracking-widest text-ocean">
                    {COUPON_CODE}
                  </span>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-dim">
                  Mention this code when you book your free call and I&apos;ll
                  take 30% off any plan.
                </p>
                <MagneticButton href="mailto:hello@surfingleads.co" className="mt-5 w-full">
                  Book a free call
                </MagneticButton>
              </div>
            ) : (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-coral/10">
                  <Percent className="h-5 w-5 text-coral" strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-balance font-display text-xl font-bold text-ink">
                  Get 30% off your project
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-dim">
                  Leave your email and I&apos;ll send a code for 30% off any
                  plan. This offer is only good for the next few hours.
                </p>

                <div className="mt-4 flex items-center justify-center gap-1.5 rounded-full bg-coral/[0.08] px-3 py-2 text-[12.5px] font-bold text-coral">
                  <Clock className="h-3.5 w-3.5" strokeWidth={2.5} />
                  Offer expires in {formatTime(timeLeft)}
                </div>

                <div className="mt-4 flex flex-col gap-1.5 rounded-xl border border-line p-3">
                  {DISCOUNTS.map((d) => (
                    <div key={d.plan} className="flex items-center justify-between text-[13px]">
                      <span className="font-bold text-ink">{d.plan}</span>
                      <span>
                        <span className="mr-1.5 text-ink-faint line-through">
                          ${d.price.toLocaleString()}
                        </span>
                        <span className="font-bold text-ocean">
                          ${(d.price * 0.7).toFixed(2)}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitEmail();
                  }}
                  className="mt-5 flex flex-col gap-2.5"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@business.com"
                    className="rounded-xl border border-line px-4 py-3 text-[14.5px] font-bold text-ink outline-none transition-colors focus:border-ocean"
                  />
                  <MagneticButton onClick={submitEmail} className="w-full">
                    {status === "submitting" ? "Sending…" : "Claim my 30% off"}
                  </MagneticButton>
                  {status === "error" && (
                    <p className="text-center text-[12.5px] font-bold text-coral">
                      Something went wrong — try again in a moment.
                    </p>
                  )}
                </form>

                <p className="mt-3 text-center text-[11.5px] text-ink-faint">
                  No spam. Just your code, once.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
