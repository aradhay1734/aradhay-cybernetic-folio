import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Aradhay Sharda" }, { name: "description", content: "About Aradhay Sharda, a software developer and Computer Science student at UNB." }, { property: "og:title", content: "About — Aradhay Sharda" }, { property: "og:description", content: "About Aradhay Sharda, a software developer and Computer Science student at UNB." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  beforeLoad: () => { throw redirect({ to: "/", hash: "home", replace: true }); },
});