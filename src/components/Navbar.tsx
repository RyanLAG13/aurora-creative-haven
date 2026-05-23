import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Coffee } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#coworking", label: "Coworking" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-10 h-18 flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground grid place-items-center transition-transform group-hover:scale-110">
            <Coffee className="w-4.5 h-4.5" strokeWidth={2.2} />
          </span>
          <span className="font-display font-bold text-lg tracking-tight">
            Aurora
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/75 hover:text-accent transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Alternar tema"
            className="w-10 h-10 rounded-full grid place-items-center text-foreground/70 hover:text-accent hover:bg-secondary transition-colors"
          >
            {dark ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>
          <a
            href="#contato"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold shadow-sm hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all"
          >
            Reservar Mesa
          </a>
          <button
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full hover:bg-secondary transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-[fade-in_0.2s_ease-out]">
          <ul className="container mx-auto px-6 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-2 rounded-lg text-base font-medium hover:bg-secondary hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold"
            >
              Reservar Mesa
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
