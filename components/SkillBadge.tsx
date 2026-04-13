import Image from "next/image";

type SkillBadgeProps = {
  children: React.ReactNode;
  tone?: "cyan" | "green" | "slate";
  iconSrc?: string;
};

const toneClasses = {
  cyan: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  green: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  slate: "border-white/10 bg-white/[0.06] text-slate-200",
};

export function SkillBadge({ children, tone = "slate", iconSrc }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium ${toneClasses[tone]}`}
    >
      {iconSrc ? (
        <span className="relative size-5 shrink-0 overflow-hidden rounded-sm bg-white/90 p-0.5">
          <Image src={iconSrc} alt="" fill sizes="20px" className="object-contain p-0.5" />
        </span>
      ) : null}
      {children}
    </span>
  );
}
