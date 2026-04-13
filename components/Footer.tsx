import { ShieldCheck } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050812] px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-slate-300">
          <ShieldCheck size={18} className="text-cyan-300" aria-hidden="true" />
          <span>{profile.name}</span>
        </div>
        <p>Copyright {new Date().getFullYear()} - Security-focused software engineering portfolio.</p>
      </div>
    </footer>
  );
}
