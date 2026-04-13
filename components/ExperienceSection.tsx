import { Activity, CheckCircle2, Cloud, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { experience } from "@/data/portfolio";
import { MotionSection } from "./MotionSection";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <MotionSection id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="IT operations experience framed around visibility, reliability, and secure deployment."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <aside className="rounded-md border border-cyan-300/20 bg-cyan-300/[0.055] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
            {experience.company}
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">{experience.role}</h3>
          <p className="mt-3 text-sm text-slate-400">{experience.period}</p>
          <p className="mt-6 text-base leading-8 text-slate-300">{experience.summary}</p>

          <div className="mt-8 grid gap-3 text-sm text-slate-300">
            {[
              { icon: Activity, label: "Monitoring and log checks" },
              { icon: ShieldCheck, label: "SSL/TLS and DNS changes" },
              { icon: Cloud, label: "Alibaba Cloud ECS deployment" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3">
                  <Icon className="text-cyan-200" size={17} aria-hidden="true" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          <figure className="mt-8 overflow-hidden rounded-md border border-white/10 bg-[#050812]">
            <div className="relative aspect-[16/10]">
              <Image
                src="/internship-experience.png"
                alt="Muhammad Sufian during an internship meeting and technical presentation"
                fill
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-slate-400">
              Internship exposure across IT operations, deployment discussion, and technical support.
            </figcaption>
          </figure>
        </aside>

        <div className="space-y-4">
          {experience.achievements.map((achievement) => (
            <div key={achievement} className="flex gap-4 rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:border-emerald-300/25">
              <CheckCircle2 className="mt-1 shrink-0 text-emerald-300" size={20} aria-hidden="true" />
              <p className="leading-7 text-slate-300">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
