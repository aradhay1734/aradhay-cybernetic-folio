import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Aradhay Sharda" }, { name: "description", content: "Contact Aradhay Sharda about software developer co-op and internship opportunities." }, { property: "og:title", content: "Contact — Aradhay Sharda" }, { property: "og:description", content: "Connect with Aradhay Sharda about software developer opportunities." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  beforeLoad: () => { throw redirect({ to: "/", hash: "contact", replace: true }); },
});