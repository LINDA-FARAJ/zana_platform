import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/zana-logo.jpg";

const nav = [
  { to: "/", label: "الرئيسية" },
  { to: "/stages", label: "المراحل التعليمية" },
  { to: "/services", label: "خدماتنا" },
  { to: "/about", label: "من نحن" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="شعار منصة زانا التعليمية"
            width={48}
            height={48}
            className="size-11 rounded-2xl object-cover shadow-soft"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl text-primary">زانا التعليمية</span>
            <span className="text-[11px] tracking-[0.3em] text-muted-foreground">
              PLATFORM
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/70 transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-primary"
              activeProps={{ className: "bg-secondary text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
          className="rounded-xl border border-border p-2 text-primary md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="animate-fade-in flex flex-col gap-1 border-t border-border/60 px-4 pb-4 pt-2 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-foreground/80 hover:bg-secondary"
              activeProps={{ className: "bg-secondary text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
