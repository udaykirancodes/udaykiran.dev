export type Project = {
  title: string
  description: string
  logo: string
  githubLink: string
  liveLink: string
  skills: string[]
  descriptionList: string[]
  isExpanded: boolean
}

export const PROJECTS: Project[] = [
  {
    title: "Project Name 1",
    description:
      "Project Description 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    logo: "/assets/tech-stack/react.svg",
    githubLink: "https://github.com/udaykirancodes/udaykiran.dev",
    liveLink: "https://udaykiran.dev",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    isExpanded: true,
    descriptionList: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
  },
  {
    title: "Project Name 2",
    description:
      "Project Description 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    logo: "/assets/tech-stack/react.svg",
    githubLink: "https://github.com/udaykirancodes/udaykiran.dev",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    isExpanded: true,
    descriptionList: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
    liveLink: "https://udaykiran.dev",
  },
  {
    title: "Project Name 3",
    description:
      "Project Description 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    logo: "/assets/tech-stack/react.svg",
    githubLink: "https://github.com/udaykirancodes/udaykiran.dev",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    isExpanded: true,
    descriptionList: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
    liveLink: "https://udaykiran.dev",
  },
]
