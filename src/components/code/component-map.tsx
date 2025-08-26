import { Command } from "@/core/command/command"
import { WellFoundLandingAnimation } from "@/core/wellfound-landing-animation"

const c = {
  npm: "npm command",
  yarn: "yarn command",
  pnpm: "pnpm command",
}

type ComponentMap = {
  [key: string]: React.ReactNode
}

export const COMPONENT_MAP: ComponentMap = {
  command: (
    <div className="bg-background h-full w-full">
      <Command commands={c} />
    </div>
  ),
  "wellfound-landing-animation": (
    <div className="h-full w-full">
      <WellFoundLandingAnimation />
    </div>
  ),
}

export const getComponent = (name: string) => {
  return COMPONENT_MAP[name]
}
