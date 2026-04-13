"use client";

import { Menu, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [activeId, setActiveId] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050812]/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary navigation"
      >
        <a href="#top" className="group inline-flex items-center gap-3 text-white">
          <span className="grid size-9 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 transition group-hover:border-cyan-200">
            <ShieldCheck size={18} aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-wide">Sufian Cyber Portfolio</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-cyan-300/10 text-cyan-100"
                    : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden rounded-md border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-300/15 md:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-md border border-white/10 text-slate-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#050812] px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
