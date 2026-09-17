import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const links = [
  ["#home", "Home"],
  ["#projects", "Projects"],
  ["#skills", "Skills"],
  ["#experience", "Experience"],
  ["#education", "Education"],
  ["#contact", "Contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="/#home" className="font-mono text-sm font-medium text-foreground" onClick={() => setOpen(false)} aria-label="Aradhay Sharda, home">
          <span className="text-primary">&lt;</span>AS<span className="text-primary">/&gt;</span>
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {links.map(([href, label]) => (
            <a key={href} href={`/${href}`} className="rounded-md px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild variant="hero" size="sm"><a href="/#projects">View my projects</a></Button>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((current) => !current)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav aria-label="Mobile navigation" className="grid border-t border-border bg-background px-5 py-4 lg:hidden">
          {links.map(([href, label]) => (
            <a key={href} href={`/${href}`} onClick={() => setOpen(false)} className="border-b border-border/50 py-3 text-sm text-muted-foreground last:border-0 hover:text-primary">
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}