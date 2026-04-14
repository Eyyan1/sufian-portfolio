import { Award, BadgeCheck, ExternalLink, Shield } from "lucide-react";
import Image from "next/image";
import { certifications, type Certification } from "@/data/portfolio";
import { MotionSection } from "./MotionSection";
import { SectionHeading } from "./SectionHeading";

function CertificationCard({ cert }: { cert: Certification }) {
  const Icon = cert.issuer.includes("Microsoft") ? BadgeCheck : Award;

  return (
    <article className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:border-emerald-300/25">
      <div className="relative mx-auto aspect-[16/10] w-full max-w-64 overflow-hidden rounded-md border border-white/10 bg-[#050812]">
        <Image
          src={cert.image}
          alt={`${cert.title} certification badge`}
          fill
          sizes="256px"
          className="object-contain p-2"
        />
      </div>

      <div className="mt-5 flex items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-md border border-emerald-300/25 bg-emerald-300/10 text-emerald-100">
          <Icon size={20} aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {cert.issuer}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">{cert.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{cert.note}</p>
          {cert.credentialUrl ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200"
            >
              View Credential
              <ExternalLink className="ml-2" size={15} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function CertificationsSection() {
  const featured = certifications.find((cert) => cert.featured);
  const otherCertifications = certifications.filter((cert) => !cert.featured);

  return (
    <MotionSection id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Security credentials and foundations for analyst readiness."
      />

      {featured ? (
        <article className="mt-12 overflow-hidden rounded-md border border-cyan-300/30 bg-cyan-300/[0.065]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-64 border-b border-cyan-300/20 bg-[#050812] p-6 lg:border-b-0 lg:border-r">
              <div className="relative mx-auto aspect-[16/10] h-full max-h-80 w-full max-w-xl">
                <Image
                  src={featured.image}
                  alt={`${featured.title} certification badge`}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
                  <Shield size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    {featured.issuer}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                    {featured.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300">{featured.note}</p>
                  {featured.credentialUrl ? (
                    <a
                      href={featured.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200"
                    >
                      View Credential
                      <ExternalLink className="ml-2" size={15} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-cyan-100">
                Prioritized credential for SOC Analyst screening, covering security concepts,
                threats, vulnerabilities, architecture, operations, and incident response basics.
              </p>
            </div>
          </div>
        </article>
      ) : null}

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {otherCertifications.map((cert) => (
          <CertificationCard key={cert.title} cert={cert} />
        ))}
      </div>
    </MotionSection>
  );
}
