export type Experience = {
  company: string
  title: string
  type: string
  logo: string
  from: string
  to: string | null
  descriptionList: string[]
  skills: string[]
  isExpanded: boolean
}

export const EXPERIENCE: Experience[] = [
  {
    title: "Software Developer Engineer",
    company: "HexaCluster",
    logo: "",
    isExpanded: true,
    descriptionList: [
      "Built custom UI components and extended shadcn/ui primitives to meet specific product requirements",
      "Ensured high code quality using ESLint, Prettier, and Husky as part of the development workflow",
      "Developed responsive, accessible web applications using React, TypeScript, and Tailwind CSS",
      "Built and maintained a production-grade Next.js application",
      "Created scalable server-side applications in TypeScript using Node.js",
      "Implemented Micro Frontend architecture for modular and independently deployable frontend features",
      "Worked on Golang micro-services backend",
      "Worked on Data Migration Tool with spring boot & spring batch",
    ],
    from: "2024-08-01",
    to: null,
    type: "Full-time",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Golang",
      "Framer-Motion",
    ],
  },
  {
    title: "UI/UX Developer Intern",
    company: "HexaCluster",
    logo: "",
    isExpanded: false,
    descriptionList: [
      "Designed and developed pixel-perfect web interfaces with a focus on user experience and responsiveness",
      "Implemented a Retrieval-Augmented Generation (RAG) based chatbot using TypeScript",
      "Applied Server-Side Rendering (SSR) and Static Site Generation (SSG) in Next.js to enhance SEO and improve page load performance",
    ],
    from: "2024-01-01",
    to: "2024-07-30",
    type: "Internship",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer-Motion"],
  },
  {
    title: "Next.js Developer Intern",
    company: "CosEdge",
    logo: "",
    isExpanded: false,
    descriptionList: [
      "Developed pixel-perfect websites following modern UI/UX design practices",
      "Styled applications using Tailwind CSS for utility-first, responsive design",
      "Built dynamic web applications using Next.js and React",
    ],
    from: "2023-05-01",
    to: "2023-06-30",
    type: "Internship",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
]
