import { Command } from "@/core/command/command"

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
}

export const getComponent = (name: string) => {
  return COMPONENT_MAP[name]
}
