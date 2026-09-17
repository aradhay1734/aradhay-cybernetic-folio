import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/career-goals")({
  head: () => ({ meta: [{ title: "Career — Aradhay Sharda" }, { name: "description", content: "Aradhay Sharda is seeking software developer co-op and internship roles in 2027." }, { property: "og:title", content: "Career — Aradhay Sharda" }, { property: "og:description", content: "Software developer co-op and internship availability in 2027." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  beforeLoad: () => { throw redirect({ to: "/", hash: "contact", replace: true }); },
});