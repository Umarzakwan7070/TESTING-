import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Assessment from "@/components/Assessment";

export const metadata: Metadata = {
  title: "Free Scale-Up Assessment — SurfingLeads",
  description:
    "Answer 10 quick questions and find out in 3 minutes whether your online presence is holding your business back.",
};

export default function AssessmentPage() {
  return (
    <div className="relative flex flex-1 flex-col overflow-x-clip bg-foam">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Assessment />
      </main>
      <Footer />
    </div>
  );
}
