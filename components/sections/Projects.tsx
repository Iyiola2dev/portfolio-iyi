import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { PORTFOLIO } from "@/lib/content";

export default function Projects() {
  const { projects } = PORTFOLIO;
  return (
    <section className="section-block" id="work">
      <div className="wrap">
        <SectionHeader num="004" label="selected work" annotation="2024 — 2026 · five entries" />
        <div className="ledger">
          {/* desktop header row — hidden by default, shown at lg+ via CSS */}
          <div className="ledger-head">
            <span className="mono">no.</span>
            <span className="mono">project</span>
            <span className="mono">summary</span>
            <span className="mono">stack / role</span>
          </div>

          {projects.map((pr, i) => (
            <ScrollReveal key={pr.num} delay={i * 0.06}>
              <article className="entry">
                {/* entry number */}
                <span className="mono" style={{ color: "var(--muted-ink)" }}>
                  {pr.num}
                </span>

                {/* name + kind */}
                <div>
                  <h3 className="text-[28px] md:text-[34px] font-normal m-0 leading-[1.1]">
                    {pr.name}
                  </h3>
                  <span className="mono block mt-2">{pr.kind} · {pr.year}</span>
                </div>

                {/* blurb + outcome */}
                <div>
                  <p className="m-0 text-[17px]" style={{ color: "var(--muted-ink)" }}>{pr.blurb}</p>
                  <p className="mt-3 mb-0 text-[17px] italic" style={{ color: "var(--accent-ink)" }}>
                    → {pr.outcome}
                  </p>
                </div>

                {/* role + stack */}
                <div className="flex flex-col gap-3 pt-1">
                  <span className="mono acc">{pr.role}</span>
                  <div className="entry-stack flex flex-wrap gap-[6px]">
                    {pr.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
