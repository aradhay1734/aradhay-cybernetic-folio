import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects — Aradhay Sharda" }, { name: "description", content: "Software projects by Aradhay Sharda across AI agents, web applications, Java, and data analysis." }, { property: "og:title", content: "Projects — Aradhay Sharda" }, { property: "og:description", content: "Software projects across AI agents, web applications, Java, and data analysis." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  beforeLoad: () => { throw redirect({ to: "/", hash: "projects", replace: true }); },
});