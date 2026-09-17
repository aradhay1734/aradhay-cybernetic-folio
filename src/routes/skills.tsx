import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  head: () => ({ meta: [{ title: "Skills — Aradhay Sharda" }, { name: "description", content: "Software development languages, frameworks, tools, and engineering skills used by Aradhay Sharda." }, { property: "og:title", content: "Skills — Aradhay Sharda" }, { property: "og:description", content: "Software development languages, frameworks, tools, and engineering skills." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  beforeLoad: () => { throw redirect({ to: "/", hash: "skills", replace: true }); },
});