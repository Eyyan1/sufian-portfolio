import { projects } from "@/data/portfolio";
import { MotionSection } from "./MotionSection";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <MotionSection id="projects" className="section-shell border-y border-white/10 bg-white/[0.025]">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Hands-on systems that map directly to SOC analyst thinking."
        description="Projects are framed by operational workflow, system design, reliability, access control, and explainable technical decision-making."
      />

      <div className="mt-12 space-y-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </MotionSection>
  );
}
