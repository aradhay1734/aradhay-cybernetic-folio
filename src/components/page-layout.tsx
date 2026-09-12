import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="grid-field border-b border-border"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><p className="mb-4 font-mono text-xs uppercase text-cyan">// {eyebrow}</p><h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{copy}</p></div></section>;
}

export function Content({ children }: { children: ReactNode }) { return <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">{children}</div>; }

export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) { return <div className={`rounded-lg border border-border bg-card p-6 backdrop-blur-md ${className}`}>{children}</div>; }

export function Tag({ children }: { children: ReactNode }) { return <span className="rounded border border-border bg-accent px-2.5 py-1 font-mono text-xs text-cyan-muted">{children}</span>; }

export function NextStep({ title, copy, to, label }: { title: string; copy: string; to: "/about" | "/skills" | "/experience" | "/projects" | "/education" | "/career-goals" | "/contact"; label: string }) {
  return <section className="border-t border-border bg-surface"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-2 text-muted-foreground">{copy}</p></div><Button asChild variant="hero" size="xl"><Link to={to}>{label}<ArrowUpRight /></Link></Button></div></section>;
}