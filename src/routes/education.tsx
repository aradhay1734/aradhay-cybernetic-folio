import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/education")({
  head: () => ({ meta: [{ title: "Education — Aradhay Sharda" }, { name: "description", content: "Bachelor of Computer Science education at the University of New Brunswick." }, { property: "og:title", content: "Education — Aradhay Sharda" }, { property: "og:description", content: "Bachelor of Computer Science at the University of New Brunswick." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  beforeLoad: () => { throw redirect({ to: "/", hash: "education", replace: true }); },
});