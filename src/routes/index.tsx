import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Download,
  Github,
  GraduationCap,
  ImageIcon,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  TerminalSquare,
} from "lucide-react";
import { Button } from "../components/ui/button";
import profileAsset from "../assets/profile-photo.png.asset.json";

type Project = {
  title: string;
  summary: string;
  stack: readonly string[];
  tags: readonly string[];
  repo?: string;
  bullets: readonly string[];
};

const projects: readonly Project[] = [
  {
    title: "Co-op Desk — AI Job Application Agent",
    summary: "A human-in-the-loop agent for discovering, evaluating, and organizing co-op applications.",
    stack: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    tags: ["AI Agents", "Next.js", "TypeScript", "API Integration"],
    repo: "https://github.com/aradhay1734/Co-op-Application-agent",
    bullets: [
      "Built an agent that searches intern and co-op postings, fetches descriptions, scores resume fit from 0–100, drafts tailored cover letters, and maintains a tracker with CSV export.",
      "Designed five explicit tools around a bounded loop that halts after N postings or once every target company is searched.",
      "Enforced the no-auto-submit policy in code, so no application can leave the system without human approval.",
      "Integrated public Greenhouse and Lever board APIs with a deterministic fallback catalog; automated tests cover policy, scoring, and stop-condition logic.",
    ],
  },
  {
    title: "Campus Gradebook — Java Desktop Application",
    summary: "A tested desktop gradebook with resilient importing, polymorphic rules, and headless operation.",
    stack: ["Java 21", "Swing", "Maven", "JUnit 5"],
    tags: ["Java", "OOP", "Testing"],
    repo: "https://github.com/aradhay1734/Java-Basics-",
    bullets: [
      "Built a Swing gradebook for students, graduate students, and instructors, using an abstract Person base class and three-level inheritance for polymorphic grading and billing rules.",
      "Implemented a fault-tolerant bulk importer that parses inconsistent delimiters and reports each bad line by number and reason instead of aborting.",
      "Added 64 JUnit 5 tests and a headless CLI mode so the project builds, runs, and verifies on machines without a display.",
    ],
  },
];

const skillGroups = [
  ["Languages", ["Java", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"]],
  ["Frameworks & Libraries", ["React", "Next.js", "Tailwind CSS", "Java Swing", "JUnit 5"]],
  ["Developer Tools", ["Git", "GitHub", "Maven", "Eclipse", "Cursor"]],
  ["Concepts", ["Object-Oriented Design", "AI Agent Tool-Calling", "REST API Integration", "Unit Testing", "State Management"]],
] as const;

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  copy: string;
  connection?: string;
};

const experience: readonly ExperienceItem[] = [
  {
    role: "Overnight Associate",
    company: "Kent Building Supplies",
    period: "Jun 2026 — Present",
    copy: "Execute overnight inventory and stocking operations independently, following established procedures and safety standards.",
  },
  {
    role: "Customer Service Manager",
    company: "Walmart",
    period: "May 2025 — Sep 2026",
    copy: "Led front-end operations including cashier scheduling and register coverage, resolved escalated customer issues, owned cash reconciliation, and trained new cashiers on POS systems.",
  },
  {
    role: "Volunteer Donation Collector",
    company: "The Salvation Army",
    period: "Dec 2025",
    copy: "Supported a community donation campaign through clear, welcoming communication with members of the public.",
  },
];

const coursework = ["Programming I & II (Java)", "Introduction to Databases", "Discrete Structures", "Computability & Formal Languages", "Numerical Methods", "Linear Algebra", "Probability & Statistics"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aradhay Sharda — Software Developer" },
      { name: "description", content: "Computer Science student at UNB building AI agents, full-stack web apps, and Java applications. Seeking software developer co-op roles." },
      { property: "og:title", content: "Aradhay Sharda — Software Developer" },
      { property: "og:description", content: "Computer Science student at UNB building AI agents, full-stack web apps, and Java applications. Seeking software developer co-op roles." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://aradhay-cybernetic-folio.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://aradhay-cybernetic-folio.lovable.app/" }],
  }),
  component: Home,
});

function SectionHeading({ index, title, copy }: { index: string; title: string; copy: string }) {
  return (
    <div className="mb-10 max-w-3xl lg:mb-14">
      <p className="font-mono text-xs uppercase text-cyan-muted">{index} / {title}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      <p className="mt-4 leading-7 text-muted-foreground">{copy}</p>
    </div>
  );
}

function Badge({ children }: { children: string }) {
  return <span className="rounded border border-border bg-accent px-2.5 py-1 font-mono text-xs text-cyan-muted">{children}</span>;
}

function Home() {
  return (
    <>
      <section id="home" className="grid-field relative scroll-mt-16 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_35%)]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-5 py-14 lg:px-8 lg:py-20">
          <div className="inline-flex w-fit items-center gap-2 rounded border border-border bg-card px-3 py-2 font-mono text-xs text-cyan-muted">
            <span className="size-2 rounded-full bg-primary node-pulse" />Available for 2027 co-op and internship terms
          </div>
          <div className="mt-8 grid grid-cols-[112px_minmax(0,1fr)] items-start gap-5 sm:grid-cols-[180px_minmax(0,1fr)] lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
            <div className="relative mx-auto w-full max-w-xs">
              <div className="absolute -inset-3 rounded-lg border border-primary/20" />
              <div className="relative aspect-[3/4] max-h-[260px] overflow-hidden rounded-lg border border-primary/50 bg-card shadow-[var(--shadow-glow)]">
                <div className="grid-field absolute inset-0 opacity-30" />
                <img src={profileAsset.url} alt="Portrait of Aradhay Sharda" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-primary shadow-[var(--shadow-glow)]" />
              </div>
            </div>
            <div className="min-w-0 animate-fade-in">
              <p className="font-mono text-sm text-primary">Hello, I’m</p>
              <h1 className="mt-3 text-4xl font-extrabold leading-none text-glow sm:text-5xl lg:text-7xl">Aradhay<br />Sharda</h1>
              <p className="mt-4 text-base font-medium text-cyan sm:text-xl">Computer Science Student <span className="text-muted-foreground">|</span> Software Developer</p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground">I build AI agents, full-stack web apps, and Java applications.</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">Studying Computer Science at UNB with a strong interest in product development, security, and systems.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="xl"><a href="#projects">Explore my work<ArrowUpRight /></a></Button>
                <Button asChild variant="glass" size="xl"><a href="#contact">Contact me</a></Button>
                <Button variant="glass" size="xl" disabled title="Resume PDF will be added when supplied"><Download />Download resume</Button>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2"><MapPin className="size-4 text-primary" />Fredericton, New Brunswick</span>
                <a href="https://github.com/aradhay1734" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Github className="size-4" />GitHub</a>
                <a href="https://www.linkedin.com/in/aradhaysharda2" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Linkedin className="size-4" />LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-16 border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeading index="01" title="Projects" copy="Selected applications spanning AI agent design, full-stack web development, and tested Java desktop engineering." />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card backdrop-blur-md">
                <div className="grid-field relative grid aspect-[16/7] place-items-center border-b border-border bg-background/60" aria-label={`${project.title} screenshot placeholder`}>
                  <div className="text-center text-muted-foreground"><ImageIcon className="mx-auto size-7" /><span className="mt-2 block font-mono text-xs">PROJECT SCREENSHOT · 0{index + 1}</span></div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
                  <h3 className="mt-5 text-xl font-semibold sm:text-2xl">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-cyan-muted">{project.summary}</p>
                  <div className="mt-5 border-y border-border py-4">
                    <p className="font-mono text-xs text-muted-foreground">STACK</p>
                    <p className="mt-2 text-sm leading-6">{project.stack.join(" · ")}</p>
                  </div>
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted-foreground">
                    {project.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{bullet}</li>)}
                  </ul>
                  {project.repo && <div className="mt-7"><Button asChild variant="glass"><a href={project.repo} target="_blank" rel="noreferrer"><Github />View code<ArrowUpRight /></a></Button></div>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeading index="02" title="Skills" copy="Technologies and engineering practices I use to design, build, and test software." />
          <div className="divide-y divide-border rounded-lg border border-border bg-card px-5 sm:px-7">
            {skillGroups.map(([title, skills]) => <div key={title} className="grid gap-4 py-6 md:grid-cols-[220px_1fr]"><h3 className="font-mono text-sm text-cyan">{title}</h3><div className="flex flex-wrap gap-2">{skills.map((skill) => <Badge key={skill}>{skill}</Badge>)}</div></div>)}
          </div>
          <div className="mt-5 flex flex-col gap-3 rounded-md border border-border bg-background/40 px-5 py-4 sm:flex-row sm:items-center">
            <h3 className="font-mono text-xs text-muted-foreground sm:w-[205px]">Professional strengths</h3>
            <p className="text-xs text-muted-foreground">Communication · Teamwork · Adaptability · Problem solving</p>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-16 border-b border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeading index="03" title="Experience" copy="Customer-facing leadership and independent operations experience that shapes how I build dependable products." />
          <div className="relative mx-auto max-w-4xl border-l border-border pl-6 sm:pl-10">
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="relative border-b border-border py-7 first:pt-0 last:border-0 last:pb-0">
                <span className="absolute -left-[29px] top-2 size-2 rounded-full bg-primary shadow-[var(--shadow-glow)] sm:-left-[45px]" />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div><h3 className="text-xl font-semibold">{item.role}</h3><p className="mt-1 text-sm text-cyan">{item.company} · Fredericton, NB</p></div>
                  <p className="shrink-0 font-mono text-xs text-muted-foreground">{item.period}</p>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{item.copy}</p>
                {item.connection && <p className="mt-3 max-w-3xl border-l-2 border-primary pl-4 text-sm leading-6 text-foreground">{item.connection}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="scroll-mt-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeading index="04" title="Education" copy="A Computer Science foundation combining software development, databases, mathematics, and computational theory." />
          <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
            <article className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <GraduationCap className="size-8 text-primary" />
              <p className="mt-6 font-mono text-xs text-cyan-muted">JAN 2025 — EXPECTED 2029</p>
              <h3 className="mt-3 text-2xl font-semibold">Bachelor of Computer Science</h3>
              <p className="mt-2 text-cyan">University of New Brunswick</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4" />Fredericton, NB</p>
              <div className="mt-6 flex flex-wrap gap-2"><Badge>Co-op eligible</Badge><Badge>Good academic standing</Badge></div>
            </article>
            <article className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h3 className="flex items-center gap-3 text-lg font-semibold"><Code2 className="size-5 text-primary" />Relevant coursework</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">{coursework.map((course) => <div key={course} className="border-l border-border py-1 pl-4 text-sm text-muted-foreground">{course}</div>)}</div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="grid-field scroll-mt-16">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <SectionHeading index="05" title="Let’s build something useful." copy="I’m looking for software developer co-op and internship roles where I can contribute to real products and keep strengthening my engineering skills." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a href="mailto:k99z8@unb.ca" className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"><Mail className="size-5 text-primary" /><p className="mt-4 text-xs text-muted-foreground">Email</p><p className="mt-1 break-all text-sm">k99z8@unb.ca</p></a>
            <a href="tel:+15063130350" className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"><Phone className="size-5 text-primary" /><p className="mt-4 text-xs text-muted-foreground">Phone</p><p className="mt-1 text-sm">+1 506 313 0350</p></a>
            <a href="https://github.com/aradhay1734" target="_blank" rel="noreferrer" className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"><Github className="size-5 text-primary" /><p className="mt-4 text-xs text-muted-foreground">GitHub</p><p className="mt-1 text-sm">aradhay1734</p></a>
            <a href="https://www.linkedin.com/in/aradhaysharda2" target="_blank" rel="noreferrer" className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"><Linkedin className="size-5 text-primary" /><p className="mt-4 text-xs text-muted-foreground">LinkedIn</p><p className="mt-1 text-sm">aradhaysharda2</p></a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2"><BriefcaseBusiness className="size-4 text-primary" />Software developer co-op / internship</span>
            <span className="inline-flex items-center gap-2"><CalendarDays className="size-4 text-primary" />Available in 2027</span>
            <span className="inline-flex items-center gap-2"><TerminalSquare className="size-4 text-primary" />Fredericton, NB</span>
          </div>
        </div>
      </section>
    </>
  );
}
