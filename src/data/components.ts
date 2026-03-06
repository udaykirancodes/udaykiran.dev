import registryData from "../../registry.json"

export const COMPONENTS = registryData.items
  .map((item) => ({
    title: item.title,
    name: item.name,
    href: `/components/${item.name}`,
    path: item.files?.[0]?.path || "",
    description: item.description,
  }))
  .sort((a, b) => a.title.localeCompare(b.title))
