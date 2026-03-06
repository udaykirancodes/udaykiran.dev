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
  {
    title: "npx-udaykiran",
    description:
      "An interactive terminal UI portfolio built for the modern developer",
    logo: "/assets/tech-stack/npm.svg",
    githubLink: "https://github.com/udaykirancodes/npx-udaykiran",
    liveLink: "https://www.npmjs.com/package/udaykiran",
    skills: ["Node.js", "TypeScript", "Terminal UI", "CLI UX", "ESM", "tsup"],
    isExpanded: true,
    descriptionList: [
      "Interactive terminal UI (TUI) experience",
      "Keyboard-driven navigation",
      "Runs directly in terminal via npx udaykiran",
      "Beautiful colored layouts and prompts",
    ],
  },
  {
    title: "kinetic-studio",
    description:
      "A developer-first motion studio for designing and rendering kinetic typography videos with React and Remotion",
    logo: "/assets/tech-stack/video-library.svg",
    githubLink: "https://github.com/udaykirancodes/kinetic-studio",
    liveLink: "https://kinetics.udaykiran.dev/",
    skills: ["React", "Next.js", "Remotion", "TypeScript"],
    isExpanded: true,
    descriptionList: [
      "Kinetic typography video editing",
      "Programmatic video rendering using React & Remotion",
      "Live video preview inside the browser",
      "Frame-accurate sequencing and timing control",
      "Editor-style UX inspired by motion design tools",
    ],
  },
]
