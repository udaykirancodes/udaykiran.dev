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
    title: "udaykiran.dev",
    description: "A minimal responsive portfolio with component registry",
    logo: "/assets/tech-stack/react.svg",
    githubLink: "https://github.com/udaykirancodes/udaykiran.dev",
    liveLink: "https://udaykiran.dev",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    isExpanded: true,
    descriptionList: [
      "Clean & modern design",
      "Light & Dark theme support",
      "Component registry",
      "Re-Usable components",
      "Shadcn CLI supported",
    ],
  },
]
