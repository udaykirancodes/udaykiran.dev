import AnimatedClock from "@/core/animated-clock"
import { Command } from "@/core/command"
import { HireMe } from "@/core/hire-me"
import { TEXT_TO_ANIMATE, USER } from "@/data"
import HoldToDeleteDemo from "@/app/(root)/components/(mdx)/hold-to-delete/demo"

const sampleCommands = {
  npm: "npm command",
  yarn: "yarn command",
  pnpm: "pnpm command",
}

type ComponentMap = {
  [key: string]: React.ReactNode
}

export const COMPONENT_MAP: ComponentMap = {
  command: (
    <div className="bg-background w-[450px] rounded-md px-1.5">
      <Command commands={sampleCommands} />
    </div>
  ),
  "animated-clock": (
    <div className="flex h-[400px] w-[600px] items-center justify-center">
      <AnimatedClock />
    </div>
  ),
  "hire-me": (
    <div className="flex items-center justify-center">
      <HireMe
        text={TEXT_TO_ANIMATE}
        avatarSrc={USER.avatar}
        className="relative z-10"
      />
    </div>
  ),
  "hold-to-delete": (
    <div className="flex items-center justify-center">
      <HoldToDeleteDemo />
    </div>
  ),
}

export function getComponent(name: string) {
  return COMPONENT_MAP[name] || null
}
