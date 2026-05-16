import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`sticky top-0 z-50 bg-[#FDFBF7] border-b-4 border-black transition-shadow ${
        scrolled ? "shadow-[0_6px_0_0_rgba(10,10,10,1)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a
          href="#home"
          data-testid="logo-link"
          className="font-display font-black text-xl md:text-2xl tracking-tight"
        >
          UJEPA<span className="text-[#FDE047] bg-black px-2 ml-1">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-[0.2em] px-4 py-2 hover:bg-[#FDE047] border-2 border-transparent hover:border-black transition-all"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="nav-hire-btn"
            className="ml-3 inline-flex items-center gap-2 bg-[#FDE047] border-2 border-black px-4 py-2 font-display font-bold uppercase text-sm nb-shadow-sm"
          >
            Hire Me
          </a>
        </nav>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden border-2 border-black p-2 bg-white nb-shadow-sm"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div data-testid="nav-mobile-menu" className="md:hidden border-t-4 border-black bg-[#FDFBF7]">
          <div className="px-6 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                className="font-mono text-xs uppercase tracking-[0.2em] px-4 py-3 border-2 border-black bg-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-[#FDE047] border-2 border-black px-4 py-3 font-display font-bold uppercase text-sm text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
