import { ShieldCheck } from "lucide-react";
import { recruiterSnapshot } from "@/data/portfolio";
import { MotionSection } from "./MotionSection";

export function RecruiterSnapshot() {
  return (
    <MotionSection className="border-b border-white/10 bg-[#07101d] px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
          <ShieldCheck size={17} aria-hidden="true" />
          Recruiter Snapshot
        </div>
        <dl className="grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {recruiterSnapshot.map((item) => (
            <div key={item.label} className="bg-[#050812] p-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {item.label}
              </dt>
              <dd className="mt-3 text-base font-semibold text-white">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </MotionSection>
  );
}
