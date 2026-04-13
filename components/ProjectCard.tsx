"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, GitBranch, Layers3, ShieldAlert } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { SkillBadge } from "./SkillBadge";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const featured = index === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.08, 0.18) }}
      className={`group overflow-hidden rounded-md border transition ${
        featured ? "border-cyan-300/25 bg-cyan-300/[0.055]" : "border-white/10 bg-white/[0.04]"
      }`}
    >
      <div className={`grid ${featured ? "lg:grid-cols-[1.08fr_0.92fr]" : "lg:grid-cols-[0.95fr_1.05fr]"}`}>
        <div className="relative min-h-80 overflow-hidden border-b border-white/10 bg-[#07101d] p-4 lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(52,211,153,0.12),transparent_34%)]" />
          <div className="relative h-full min-h-72 overflow-hidden rounded-md border border-white/10 bg-[#050812] shadow-2xl shadow-black/30">
            <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4">
              <span className="size-2 rounded-full bg-red-400" />
              <span className="size-2 rounded-full bg-amber-300" />
              <span className="size-2 rounded-full bg-emerald-300" />
              <span className="ml-3 truncate text-xs font-medium text-slate-500">{project.title}</span>
            </div>
          <Image
            src={project.image}
            alt={`${project.title} interface preview`}
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover pt-9 transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,18,0)_45%,rgba(5,8,18,0.78)_100%)]" />
          </div>
          <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <span key={metric} className="rounded-md border border-cyan-300/25 bg-[#050812]/80 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur">
                {metric}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
                {project.subtitle}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {project.title}
              </h3>
            </div>
            {featured ? (
              <span className="inline-flex w-fit items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100">
                Flagship
              </span>
            ) : null}
          </div>

          <p className="mt-5 text-base leading-8 text-slate-300">{project.description}</p>

          <div className="mt-7 grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 md:grid-cols-3">
            <div>
              <div className="bg-[#050812] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
                <ShieldAlert size={16} aria-hidden="true" />
                Problem
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">{project.problem}</p>
              </div>
            </div>
            <div>
              <div className="bg-[#050812] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
                <Layers3 size={16} aria-hidden="true" />
                Architecture
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">{project.architecture}</p>
              </div>
            </div>
            <div>
              <div className="bg-[#050812] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
                <ShieldAlert size={16} aria-hidden="true" />
                SOC Value
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">{project.socValue}</p>
              </div>
            </div>
          </div>

          <div className="mt-7">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Key Highlights
            </h4>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <SkillBadge key={tech} tone={featured ? "cyan" : "slate"}>
                {tech}
              </SkillBadge>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06]">
              <GitBranch className="mr-2" size={17} aria-hidden="true" />
              GitHub
            </a>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Live Demo
                <ArrowUpRight className="ml-2" size={17} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
