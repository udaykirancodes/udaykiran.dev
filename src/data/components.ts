import registryData from "@root/registry.json"

const CUSTOM_LAYOUT: Record<string, string> = {
  "animated-clock": "sm:col-span-2 lg:col-span-2",
  "better-card": "sm:row-span-2 lg:row-span-2",
}

export const COMPONENTS = registryData.items
  .map((item) => ({
    title: item.title,
    name: item.name,
    href: `/components/${item.name}`,
    path: item.files?.[0]?.path || "",
    description: item.description,
    className: CUSTOM_LAYOUT[item.name] || "",
  }))
  .sort((a, b) => a.title.localeCompare(b.title))
