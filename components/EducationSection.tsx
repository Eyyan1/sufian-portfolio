import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { MotionSection } from "./MotionSection";
import { SectionHeading } from "./SectionHeading";

export function EducationSection() {
  return (
    <MotionSection className="section-shell border-y border-white/10 bg-white/[0.025]">
      <SectionHeading eyebrow="Education" title="Computer science degree with software engineering focus." />

      <div className="mt-12 rounded-md border border-white/10 bg-[#09111f]/80 p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <span className="grid size-14 shrink-0 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
            <GraduationCap size={26} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-2xl font-semibold text-white">{education.degree}</h3>
            <p className="mt-3 text-lg text-slate-300">{education.institution}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-md border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-200">
                CGPA: {education.cgpa}
              </span>
              <span className="rounded-md border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100">
                {education.honors}
              </span>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
