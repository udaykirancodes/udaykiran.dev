import { COMPONENTS, SITE_INFO } from "@/data"
import { PROJECTS } from "@/data/projects"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = SITE_INFO.url

  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/components`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]

  const componentRoutes: MetadataRoute.Sitemap = COMPONENTS.map(
    (component) => ({
      url: `${BASE_URL}/components/${component.name}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  )

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${BASE_URL}${project.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...routes, ...componentRoutes, ...projectRoutes]
}
