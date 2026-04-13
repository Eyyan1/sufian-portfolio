import { Activity, Code2, ServerCog } from "lucide-react";
import { skillCategories, skillHighlights, skillIconMap, skillMetrics } from "@/data/portfolio";
import { MotionSection } from "./MotionSection";
import { SectionHeading } from "./SectionHeading";
import { SkillBadge } from "./SkillBadge";

const highlightIcons = [Activity, ServerCog, Code2];

export function SkillsSection() {
  return (
    <MotionSection id="skills" className="section-shell border-y border-white/10 bg-white/[0.025]">
      <SectionHeading
        eyebrow="Skills"
        title="SOC-relevant skills grouped for fast recruiter scanning."
        description="Security operations, engineering, infrastructure, and AI systems capabilities kept clear and practical."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <aside className="rounded-md border border-cyan-300/20 bg-[#09111f]/90 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Capability Map
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            Built for analyst work, not just keyword matching.
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            The stack connects security operations concepts with the engineering and infrastructure
            habits needed to investigate, document, and ship reliable systems.
          </p>

          <dl className="mt-8 grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10">
            {skillMetrics.map((metric) => (
              <div key={metric.label} className="flex items-center justify-between gap-4 bg-[#050812] px-4 py-3">
                <dt className="text-sm text-slate-400">{metric.label}</dt>
                <dd className="text-xl font-semibold text-cyan-100">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className="grid gap-4">
          {skillHighlights.map((highlight, index) => {
            const Icon = highlightIcons[index];
            return (
              <article key={highlight.title} className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/25">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <span className="grid size-12 shrink-0 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{highlight.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {highlight.skills.map((skill) => (
                        <SkillBadge key={skill} iconSrc={skillIconMap[skill]} tone={index === 1 ? "green" : "cyan"}>
                          {skill}
                        </SkillBadge>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <div key={category.title} className="rounded-md border border-white/10 bg-[#050812]/80 p-5 transition hover:border-cyan-300/25">
            <h3 className="text-base font-semibold text-white">{category.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillBadge
                  key={skill}
                  iconSrc={skillIconMap[skill]}
                  tone={index === 0 ? "cyan" : index === 4 ? "green" : "slate"}
                >
                  {skill}
                </SkillBadge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
