"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger button — only visible on mobile (hidden md+) */}
      <button
        className="md:hidden flex items-center justify-center w-9 h-9 border border-(--line) text-(--muted-ink) hover:text-(--ink) hover:border-(--muted-ink) transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X size={16} /> : <Menu size={16} />}
      </button>

      {/* Overlay starts below the header so the header stays fully visible */}
      {open && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 md:hidden"
          style={{ top: "var(--header-h, 56px)", background: "rgba(22,19,15,.7)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-down nav panel */}
      <nav
        aria-label="Mobile navigation"
        className={`
          fixed top-[var(--header-h,56px)] left-0 right-0 z-50 md:hidden
          flex flex-col gap-0 border-b border-[var(--line)]
          transition-all duration-300 ease-in-out
          ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
        style={{ background: "var(--bg)" }}
      >
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="nav-link flex items-center gap-3 px-5 py-5 border-t border-[var(--faint)] text-base hover:bg-[var(--panel)]"
            style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
          >
            <span className="acc font-mono text-[11px]">0{i + 1}</span>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
