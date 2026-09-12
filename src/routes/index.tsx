import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Panel } from "../components/page-layout";
import profileAsset from "../assets/profile-photo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Aradhay Sharda — Aspiring Cybersecurity Professional" },
    { name: "description", content: "Portfolio of Aradhay Sharda, a UNB Computer Science student pursuing cybersecurity." },
    { property: "og:title", content: "Aradhay Sharda — Aspiring Cybersecurity Professional" },
    { property: "og:description", content: "Computer Science student at UNB focused on cybersecurity, learning, and practical growth." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Home,
});

function Home() {
  return <>
    <section className="grid-field relative min-h-[calc(100vh-4rem)] overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_35%)]"/>
      <div className="relative mx-auto flex max-w-7xl min-h-[calc(100vh-4rem)] flex-col justify-center px-5 py-16 lg:px-8 lg:py-20">
        <div className="inline-flex w-fit items-center gap-2 rounded border border-border bg-card px-3 py-2 font-mono text-xs text-cyan-muted"><span className="size-2 rounded-full bg-primary node-pulse"/>Currently studying Computer Science at UNB</div>
        <div className="mt-8 grid grid-cols-[120px_1fr] items-start gap-5 sm:grid-cols-[180px_1fr] lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-4 rounded-lg border border-primary/20"/>
            <div className="relative aspect-[3/4] max-h-[260px] overflow-hidden rounded-lg border border-primary/50 bg-card shadow-[var(--shadow-glow)]">
              <div className="grid-field absolute inset-0 opacity-30"/>
              <img src={profileAsset.url} alt="Aradhay Sharda" className="h-full w-full object-cover"/>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-primary shadow-[var(--shadow-glow)]"/>
            </div>
            {["left-[-6px] top-[22%]","right-[-6px] top-[38%]","left-[18%] bottom-[-6px]"].map((p,i)=><span key={p} className={`absolute ${p} size-3 rounded-full border border-primary bg-background node-pulse`} style={{animationDelay:`${i*.8}s`}}/>)}
          </div>
          <div className="animate-fade-in">
            <p className="font-mono text-sm text-primary">Hello, I’m</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-none text-glow sm:text-5xl lg:text-8xl">Aradhay<br/>Sharda</h1>
            <p className="mt-4 text-lg font-medium text-cyan sm:text-xl">Computer Science Student <span className="text-muted-foreground">|</span> Aspiring Cybersecurity Professional</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">Computer Science student at the University of New Brunswick with a strong interest in cybersecurity, problem-solving, and technology. Passionate about learning, building practical skills, and developing a career in cybersecurity.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="hero" size="xl"><Link to="/projects">Explore my work<ArrowRight/></Link></Button><Button asChild variant="glass" size="xl"><Link to="/contact">Contact me</Link></Button></div>
            <div className="mt-9 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4 text-primary"/>Fredericton, New Brunswick</div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-surface"><div className="mx-auto grid max-w-7xl gap-5 px-5 py-16 md:grid-cols-3 lg:px-8">
      <Panel><Shield className="size-6 text-primary"/><p className="mt-6 font-mono text-xs text-cyan-muted">01 / FOCUS</p><h2 className="mt-2 text-lg font-semibold">Cybersecurity</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Building toward a career protecting systems, information, and people.</p></Panel>
      <Panel><span className="font-mono text-2xl text-primary">&lt;/&gt;</span><p className="mt-6 font-mono text-xs text-cyan-muted">02 / FOUNDATION</p><h2 className="mt-2 text-lg font-semibold">Computer Science</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Studying core computing concepts at UNB with graduation expected in 2029.</p></Panel>
      <Panel><span className="font-mono text-2xl text-primary">♞</span><p className="mt-6 font-mono text-xs text-cyan-muted">03 / MINDSET</p><h2 className="mt-2 text-lg font-semibold">Strategic thinking</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Using patience, pattern recognition, and planning sharpened through chess.</p></Panel>
    </div></section>
  </>;
}