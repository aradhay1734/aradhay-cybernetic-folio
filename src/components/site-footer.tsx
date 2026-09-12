import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return <footer className="border-t border-border bg-surface">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <p><span className="font-mono text-primary">AS</span> · Built with curiosity and purpose.</p>
      <div className="flex gap-5"><Link to="/contact" className="hover:text-foreground">Contact</Link><Link to="/projects" className="hover:text-foreground">Projects</Link><span>Fredericton, NB</span></div>
    </div>
  </footer>;
}