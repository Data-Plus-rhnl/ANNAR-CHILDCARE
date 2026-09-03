import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  // All public routes across Annar Child Care
  const routes: {
    path: string;
    priority: number;
    changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about-us", priority: 0.9, changeFrequency: "monthly" },
    { path: "/programs", priority: 0.95, changeFrequency: "weekly" },
    { path: "/programs/infant-toddler", priority: 0.9, changeFrequency: "monthly" },
    { path: "/programs/daycare-3-to-5", priority: 0.9, changeFrequency: "monthly" },
    { path: "/programs/before-after-school", priority: 0.9, changeFrequency: "monthly" },
    { path: "/events", priority: 0.85, changeFrequency: "weekly" },
    { path: "/events/summer-camp", priority: 0.85, changeFrequency: "monthly" },
    { path: "/events/spring-break", priority: 0.85, changeFrequency: "monthly" },
    { path: "/events/birthday-parties", priority: 0.8, changeFrequency: "monthly" },
    { path: "/resources/policies-procedures", priority: 0.8, changeFrequency: "monthly" },
    { path: "/resources/pick-up-drop-off", priority: 0.8, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.75, changeFrequency: "monthly" },
    { path: "/contact-us", priority: 0.9, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
