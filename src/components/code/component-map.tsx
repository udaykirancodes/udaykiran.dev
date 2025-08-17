import { Commands } from "@/core/command/command"

const c = {
  npm: "npm command",
  yarn: "yarn command",
  pnpm: "pnpm command",
}

export const COMPONENT_MAP = {
  command: () => (
    <div className="bg-background h-full w-full">
      <Commands commands={c} />
    </div>
  ),
}

export const getComponent = (name: keyof typeof COMPONENT_MAP) => {
  return COMPONENT_MAP[name]
}
