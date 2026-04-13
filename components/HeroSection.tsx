"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Mail, Radar, ShieldCheck } from "lucide-react";
import { profile } from "@/data/portfolio";
import { assetPath } from "@/lib/assets";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 80]);

  return (
    <section
      id="top"
      className="relative min-h-svh overflow-hidden border-b border-white/10 bg-[#050812] pt-16"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 cyber-grid opacity-55" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(34,211,238,0.24),transparent_30%),radial-gradient(circle_at_78%_26%,rgba(52,211,153,0.16),transparent_28%),linear-gradient(180deg,rgba(5,8,18,0)_0%,#050812_92%)]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100"
          >
            <Radar size={16} aria-hidden="true" />
            {profile.badge}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="mt-8 text-base font-semibold uppercase tracking-[0.28em] text-emerald-200"
          >
            {profile.name}
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.7 }}
            className="mt-5 max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Software Engineering graduate with SOC-ready security skills.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7 }}
            className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.7 }}
            className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            {profile.value}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowDown className="ml-2" size={17} aria-hidden="true" />
            </a>
            <a href={profile.resumeUrl} download className="btn-secondary">
              Download Resume
              <Download className="ml-2" size={17} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-green">
              Contact Me
              <Mail className="ml-2" size={17} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.28, duration: 0.8 }}
          className="relative min-h-[420px] lg:min-h-[590px]"
          style={{ y }}
        >
          <div className="absolute inset-x-8 bottom-0 top-24 rounded-full bg-cyan-300/14 blur-3xl" aria-hidden="true" />
          <div className="absolute right-4 top-8 h-44 w-44 rounded-full border border-cyan-300/20" aria-hidden="true" />
          <div className="absolute bottom-12 left-2 h-24 w-24 rounded-full border border-emerald-300/20" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 mx-auto h-[96%] max-w-[560px] overflow-hidden rounded-md border border-cyan-300/18 bg-[#071423] shadow-2xl shadow-cyan-950/35">
            <Image
              src={assetPath("/muhammad-sufian-portrait.png")}
              alt="Portrait of Muhammad Sufian Bin Che Saad"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="object-cover object-[50%_35%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,18,0.34)_0%,rgba(5,8,18,0)_42%),linear-gradient(180deg,rgba(5,8,18,0)_58%,rgba(5,8,18,0.82)_100%)]" />
          </div>

        </motion.div>

        <div className="absolute bottom-6 left-5 right-5 mx-auto hidden max-w-7xl items-center gap-4 text-sm text-slate-500 sm:left-8 sm:right-8 lg:flex">
          <ShieldCheck className="text-cyan-300" size={18} aria-hidden="true" />
          <span>Security+ certified. Building SOC workflow projects. Ready for analyst interviews.</span>
        </div>
      </div>
    </section>
  );
}
