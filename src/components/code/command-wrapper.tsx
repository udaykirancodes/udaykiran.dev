"use client"

import { Command } from "@/core/command/command"
import { COMPONENTS } from "@/data/components"

type CommandWrapperProps = {
  componentName: string
}

export function CommandWrapper({ componentName }: CommandWrapperProps) {
  const component = COMPONENTS.find((c) => c.name === componentName)
  if (!component) return null

  const commands = {
    npm: `npx shadcn@latest add https://udaykiran.dev/r/${componentName}.json`,
    yarn: `yarn shadcn@latest add https://udaykiran.dev/r/${componentName}.json`,
    pnpm: `pnpm dlx shadcn@latest add https://udaykiran.dev/r/${componentName}.json`,
  }

  return (
    <div className="bg-background h-full w-full">
      <Command commands={commands} defaultTab="pnpm" />
    </div>
  )
}
