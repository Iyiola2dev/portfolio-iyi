import { Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="bar">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 p-3.5 md:p-4.5">

        {/* signature */}
        <a className="sig" href="#top">
          afuye.iyiola<span className="cursor blink" aria-hidden="true" />
        </a>

        {/* desktop nav — hidden on mobile, inline on md+ */}
        <nav
          className="hidden md:flex gap-[26px] items-center"
          aria-label="Sections"
        >
          <a className="nav-link" href="#about">about</a>
          <a className="nav-link" href="#work">work</a>
          <a className="nav-link" href="#experience">experience</a>
          <a className="nav-link" href="#contact">contact</a>
        </nav>

        {/* right actions */}
        <div className="flex gap-3 items-center">
          <ThemeToggle />
          <a className="cv-btn" href="/cv.pdf" download="Afuye-Iyiola-CV.pdf" aria-label="Download CV">
            {/* Mobile: download icon only */}
            <Download size={14} strokeWidth={2.2} className="md:hidden" />
            {/* Desktop: text label */}
            <span className="hidden md:inline">cv.pdf ↓</span>
          </a>
          {/* hamburger — only rendered on mobile */}
          <MobileNav />
        </div>

      </div>
    </header>
  );
}
