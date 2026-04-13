import { Network, ScrollText, ServerCog } from "lucide-react";
import { aboutSummary } from "@/data/portfolio";
import { MotionSection } from "./MotionSection";
import { SectionHeading } from "./SectionHeading";

const strengths = [
  { icon: Network, label: "Threat detection interest", text: "Focused on signals, triage, and evidence-driven investigation." },
  { icon: ServerCog, label: "Infrastructure exposure", text: "Comfortable with deployment, DNS, TLS, monitoring, and logs." },
  { icon: ScrollText, label: "Analyst discipline", text: "Documents changes, rollback paths, and operational findings clearly." },
];

export function AboutSection() {
  return (
    <MotionSection id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Software engineering foundations, tuned for security operations."
        description="Positioned for entry-level cybersecurity roles where structured thinking, system awareness, and calm incident handling matter."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5 text-base leading-8 text-slate-300">
          {aboutSummary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="grid gap-4">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="panel hover:border-cyan-300/30 hover:bg-cyan-300/[0.055]">
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{item.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
