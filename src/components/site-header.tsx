import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const links = [
  ["/", "Home"], ["/about", "About"], ["/skills", "Skills"],
  ["/experience", "Experience"], ["/projects", "Projects"],
  ["/education", "Education"], ["/career-goals", "Career Goals"], ["/contact", "Contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
      <Link to="/" className="font-mono text-sm font-medium text-foreground" onClick={() => setOpen(false)}>
        <span className="text-primary">&lt;</span>AS<span className="text-primary">/&gt;</span>
      </Link>
      <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
        {links.map(([to, label]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="rounded-md px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-accent data-[status=active]:text-cyan">{label}</Link>)}
      </nav>
      <div className="hidden lg:block"><Button asChild variant="hero" size="sm"><Link to="/projects">Explore my work</Link></Button></div>
      <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav aria-label="Mobile navigation" className="grid border-t border-border bg-background px-5 py-4 lg:hidden">
      {links.map(([to, label]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-border/50 py-3 text-sm text-muted-foreground data-[status=active]:text-primary">{label}</Link>)}
    </nav>}
  </header>;
}