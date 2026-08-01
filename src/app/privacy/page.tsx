import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — SurfingLeads",
  description: "How SurfingLeads collects and uses the information you share on this website.",
};

export default function PrivacyPage() {
  return (
    <div className="relative flex flex-1 flex-col overflow-x-clip bg-foam">
      <Nav />
      <main className="flex flex-1 flex-col pt-32 pb-24">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-[14px] text-ink-faint">
            Last updated{" "}
            {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="mt-8 flex flex-col gap-6 text-[15px] leading-relaxed text-ink-dim">
            <p>
              SurfingLeads is a solo studio run by one person. This page explains, in
              plain language, what information this website collects and how it&apos;s used.
            </p>

            <div>
              <h2 className="text-[17px] font-bold text-ink">What we collect</h2>
              <p className="mt-2">
                If you submit your email address — for example to claim a discount
                code or through a contact link — we store that email so we can
                respond to you or send you what you asked for. We don&apos;t collect
                payment details, government ID, or any other sensitive personal
                information on this site.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold text-ink">How we use it</h2>
              <p className="mt-2">
                Your email is used only to follow up about SurfingLeads services or
                to deliver an offer you requested. We don&apos;t sell your
                information, and we don&apos;t share it with third parties for
                marketing.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold text-ink">Cookies &amp; tracking</h2>
              <p className="mt-2">
                This site doesn&apos;t run advertising trackers. Standard hosting and
                browser functionality (like smooth scrolling) may use minimal
                technical storage required for the page to work.
              </p>
            </div>

            <div>
              <h2 className="text-[17px] font-bold text-ink">Your data, your choice</h2>
              <p className="mt-2">
                You can ask to see or delete any information we hold on you at any
                time — just email{" "}
                <a href="mailto:hello@surfingleads.co" className="font-bold text-ocean hover:underline">
                  hello@surfingleads.co
                </a>
                .
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="mt-10 inline-block text-[13.5px] font-bold text-ink-dim transition-colors hover:text-ink"
          >
            &larr; Back to SurfingLeads
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
