export type Experience = {
  company: string
  title: string
  type: string
  logo: string
  from: Date
  to: Date | null
  descriptionList: string[]
  skills: string[]
  isExpanded: boolean
}

export const EXPERIENCE: Experience[] = [
  {
    title: "Software Developer Engineer",
    company: "HexaCluster",
    logo: "/assets/tech-stack/react.svg",
    isExpanded: true,
    descriptionList: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
    from: new Date(2024, 7, 1),
    to: null,
    type: "Full-time",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Spring Boot",
      "Golang",
    ],
  },
  {
    title: "UI/UX Developer Intern",
    company: "HexaCluster",
    logo: "/assets/tech-stack/react.svg",
    isExpanded: true,
    descriptionList: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
    from: new Date(2024, 0, 1),
    to: new Date(2024, 6, 30),
    type: "Internship",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Next.js Developer Intern",
    company: "CosEdge",
    logo: "/assets/tech-stack/react.svg",
    isExpanded: true,
    descriptionList: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
    from: new Date(2023, 4, 1),
    to: new Date(2023, 5, 30),
    type: "Internship",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
]
