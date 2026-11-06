export const meta = (title: string, description: string) => ({
  meta: [
    { title: `${title} · I&I Theme Exploration` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} · I&I Theme Exploration` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
