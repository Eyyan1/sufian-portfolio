import { ArrowRight, Crosshair, ShieldCheck } from "lucide-react";
import { careerGoal } from "@/data/portfolio";
import { MotionSection } from "./MotionSection";

export function CareerGoalSection() {
  return (
    <MotionSection className="section-shell">
      <div className="grid gap-8 rounded-md border border-cyan-300/20 bg-cyan-300/[0.055] p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">
            Career Roadmap
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From SOC analyst to security engineer.
          </h2>
        </div>

        <div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="rounded-md border border-white/10 bg-[#050812]/60 p-4">
              <div className="flex items-center gap-3 text-cyan-100">
                <Crosshair size={20} aria-hidden="true" />
                <span className="text-sm font-semibold uppercase tracking-[0.18em]">Immediate</span>
              </div>
              <p className="mt-3 text-xl font-semibold text-white">{careerGoal.immediate}</p>
            </div>
            <ArrowRight className="hidden text-slate-500 sm:block" aria-hidden="true" />
            <div className="rounded-md border border-white/10 bg-[#050812]/60 p-4">
              <div className="flex items-center gap-3 text-emerald-100">
                <ShieldCheck size={20} aria-hidden="true" />
                <span className="text-sm font-semibold uppercase tracking-[0.18em]">Long term</span>
              </div>
              <p className="mt-3 text-xl font-semibold text-white">{careerGoal.longTerm}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {careerGoal.interests.map((interest) => (
              <span key={interest} className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-semibold text-slate-200">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
