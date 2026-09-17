import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socialLinks = [
  { href: "mailto:k99z8@unb.ca", label: "Email", Icon: Mail, external: false },
  { href: "tel:+15063130350", label: "Phone", Icon: Phone, external: false },
  { href: "https://github.com/aradhay1734", label: "GitHub", Icon: Github, external: true },
  { href: "https://www.linkedin.com/in/aradhaysharda2", label: "LinkedIn", Icon: Linkedin, external: true },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm"><span className="font-mono text-primary">AS</span> · Aradhay Sharda</p>
          <p className="mt-1 text-xs text-muted-foreground">Software developer based in Fredericton, New Brunswick.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map(({ href, label, Icon, external }) => (
            <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary" aria-label={label} title={label}>
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}