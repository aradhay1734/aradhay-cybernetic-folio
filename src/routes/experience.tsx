import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  head: () => ({ meta: [{ title: "Experience — Aradhay Sharda" }, { name: "description", content: "Work and volunteer experience supporting Aradhay Sharda’s software development career." }, { property: "og:title", content: "Experience — Aradhay Sharda" }, { property: "og:description", content: "Leadership, customer service, and independent operations experience." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  beforeLoad: () => { throw redirect({ to: "/", hash: "experience", replace: true }); },
});