import AnimatedClock from "@/core/animated-clock"
import { Command } from "@/core/command"

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
  "animated-clock": (
    <div className="h-full w-full">
      <AnimatedClock />
    </div>
  ),
}

export const getComponent = (name: string) => {
  return COMPONENT_MAP[name]
}
