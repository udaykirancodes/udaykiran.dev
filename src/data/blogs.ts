export type Blog = {
  title: string
  url: string
  image: string
  date: Date
  tags: string[]
}

export const BLOGS: Blog[] = [
  {
    title:
      "Implementing Browser Push Notifications in React.js and Next.js with Web Push",
    url: "https://hexacluster.ai/blog/implementing-browser-push-notifications-in-reactjs-and-nextjs-with-web-push",
    image:
      "https://hexacluster.ai/uploads/1770388097424-push-notifications.png",
    date: new Date("2026-02-17"),
    tags: ["web-push", "push-notifications", "react", "nextjs"],
  },
  {
    title: "Getting Started with Micro Frontends and Module Federation",
    url: "https://hexacluster.ai/blog/getting-started-with-micro-frontends-and-module-federation",
    image:
      "https://hexacluster.ai/uploads/1762433882649-micro-frontends-and-module-federation-1024x576.png",
    date: new Date("2024-06-24"),
    tags: ["micro-frontends", "module-federation", "react"],
  },
]
