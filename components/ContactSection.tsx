import { GitBranch, Mail, MapPin, Network } from "lucide-react";
import { profile } from "@/data/portfolio";
import { MotionSection } from "./MotionSection";
import { SectionHeading } from "./SectionHeading";

const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-sufian-che-saad-76b731362",
    href: profile.linkedin,
    icon: Network,
  },
  { label: "GitHub", value: "github.com/Eyyan1", href: profile.github, icon: GitBranch },
  { label: "Location", value: profile.location, href: null, icon: MapPin },
];

export function ContactSection() {
  return (
    <MotionSection id="contact" className="section-shell border-t border-white/10 bg-white/[0.025]">
      <SectionHeading
        eyebrow="Contact"
        title="Open to SOC Analyst and entry-level cybersecurity interviews."
        description="Best fit: SOC analyst, junior security analyst, cybersecurity graduate trainee, IT security operations, or security-focused software roles."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {contactItems.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-center gap-4 rounded-md border border-white/10 bg-[#09111f]/80 p-5 transition hover:border-cyan-300/25 hover:bg-cyan-300/[0.05]">
              <span className="grid size-11 shrink-0 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 break-words text-base font-semibold text-white">{item.value}</p>
              </div>
            </div>
          );

          return item.href ? (
            <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {content}
            </a>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </div>
    </MotionSection>
  );
}
