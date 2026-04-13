export type Project = {
  title: string
  href: string
  description: string
  image: string
  darkModeImage: string
  githubLink: string
  liveLink: string
  skills: string[]
  descriptionList: string[]
}

export const PROJECTS: Project[] = [
  {
    title: "turbo-code",
    href: "/projects/turbo-code",
    description:
      "A collaborative, real-time code playground and microservices-based evaluation platform",
    image: "/assets/turbo-code-light.png",
    darkModeImage: "/assets/turbo-code-dark.png",
    githubLink: "https://github.com/udaykirancodes/turbo-code",
    liveLink: "https://code.udaykiran.dev",
    skills: ["React", "NodeJS", "TypeScript", "yJS", "Docker", "Microservices"],
    descriptionList: [
      "Real-time code collaboration via websockets",
      "Interactive code execution environment",
      "Containerized microservice architecture",
      "Project member management and access control",
    ],
  },
  {
    title: "npx-udaykiran",
    href: "/projects/npx-udaykiran",
    description:
      "An interactive terminal UI portfolio built for the modern developer",
    image: "/assets/npx-udaykiran-light.png",
    darkModeImage: "/assets/npx-udaykiran-dark.png",
    githubLink: "https://github.com/udaykirancodes/npx-udaykiran",
    liveLink: "https://www.npmjs.com/package/udaykiran",
    skills: ["Node.js", "TypeScript", "Terminal UI", "CLI UX", "ESM", "tsup"],
    descriptionList: [
      "Interactive terminal UI (TUI) experience",
      "Keyboard-driven navigation",
      "Runs directly in terminal via npx udaykiran",
      "Beautiful colored layouts and prompts",
    ],
  },
  {
    title: "kinetic-studio",
    href: "/projects/kinetic-studio",
    description:
      "A developer-first motion studio for designing and rendering kinetic typography videos with React and Remotion",
    image: "/assets/kinetic-studio-light.png",
    darkModeImage: "/assets/kinetic-studio-dark.png",
    githubLink: "https://github.com/udaykirancodes/kinetic-studio",
    liveLink: "https://kinetics.udaykiran.dev/",
    skills: ["React", "Next.js", "Remotion", "TypeScript"],
    descriptionList: [
      "Kinetic typography video editing",
      "Programmatic video rendering using React & Remotion",
      "Live video preview inside the browser",
      "Frame-accurate sequencing and timing control",
      "Editor-style UX inspired by motion design tools",
    ],
  },
  {
    title: "udaykiran.dev",
    href: "/projects/udaykiran.dev",
    description: "A minimal responsive portfolio with component registry",
    image: "/assets/portfolio-light.png",
    darkModeImage: "/assets/portfolio-dark.png",
    githubLink: "https://github.com/udaykirancodes/udaykiran.dev",
    liveLink: "https://udaykiran.dev",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    descriptionList: [
      "Clean & modern design",
      "Light & Dark theme support",
      "Component registry",
      "Re-Usable components",
      "Shadcn CLI supported",
    ],
  },
]
