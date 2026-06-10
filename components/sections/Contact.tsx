import ScrollReveal from "@/components/shared/ScrollReveal";
import { PORTFOLIO } from "@/lib/content";

export default function Contact() {
  const P = PORTFOLIO;
  return (
    <footer
      id="contact"
      className="pt-14 pb-9 md:pt-20 lg:pt-[80px]"
      style={{ borderTop: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <ScrollReveal>
          <span className="mono inline-block">
            <span className="acc">006</span> — contact
          </span>
        </ScrollReveal>

        {/* CTA heading — fluid size */}
        <ScrollReveal delay={0.08}>
          <h2
            className="font-light mt-4 mb-10 md:mb-12"
            style={{
              fontSize: "clamp(32px, 5.4vw, 76px)",
              lineHeight: 1.04,
              letterSpacing: "-.015em",
              maxWidth: 880,
            }}
          >
            Have something worth building?{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent-ink)" }}>Write to me.</em>
          </h2>
        </ScrollReveal>

        {/* email + socials: stacked on mobile, row on md+ */}
        <ScrollReveal delay={0.12}>
          <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-end">
            <a className="email-link" href={`mailto:${P.email}`}>{P.email}</a>
            {/* socials: left-aligned on mobile, right-aligned on md+ */}
            <div className="flex flex-col gap-2 items-start md:items-end">
              {P.socials.map((s) => (
                <a key={s.label} className="social-link" href={s.href} target="_blank" rel="noreferrer">
                  {s.short}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* colophon */}
        <div
          className="flex flex-wrap justify-between gap-4 mt-12 md:mt-[72px] pt-4"
          style={{ borderTop: "1px solid var(--faint)" }}
        >
          <span className="mono">spectral &amp; ibm plex mono · no template harmed</span>
          <a className="mono totop" href="#top">↑ top</a>
          <span className="mono">© 2026 {P.name.toLowerCase()}</span>
        </div>
      </div>
    </footer>
  );
}
