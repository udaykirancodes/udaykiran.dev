"use client"

import React, { useState } from "react"

import { Check, ChevronRight, Code2, Copy } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"

import { cn } from "@/lib/utils"

export type CommandManager = "npm" | "yarn" | "pnpm"

export interface Commands {
  commands?: {
    npm: string
    yarn: string
    pnpm: string
  }
  defaultTab?: CommandManager
}

export function Commands({
  commands = { npm: "npm", yarn: "yarn", pnpm: "pnpm" },
  defaultTab = "pnpm",
}: Commands) {
  const [selectedTab, setSelectedTab] = useState<CommandManager>(defaultTab)

  return (
    <TooltipProvider>
      <Tabs
        value={selectedTab}
        onValueChange={(val) => setSelectedTab(val as CommandManager)}
        defaultValue={defaultTab}
        className="group bg-primary-foreground relative my-2 flex w-full gap-0 rounded-md"
      >
        <TabsList className="border-muted-foreground/10 flex w-full items-center justify-start rounded-none rounded-t-md border-b-[1px] bg-transparent py-5">
          <Code2 className="text-muted-foreground mx-3 h-4 w-4" />
          <div>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
          </div>
          <CopyCode code={commands[selectedTab]} position="absolute" />
        </TabsList>
        <Separator className="h-px w-full" />
        {Object.entries(commands).map(([manager, command]) => (
          <TabsContent key={manager} value={manager}>
            <div className="text-muted-foreground relative flex flex-row items-center rounded-b-md p-3 font-mono text-sm">
              <div>
                <ChevronRight className="text-muted-foreground mr-3 h-4 w-4" />
              </div>
              <pre className="overflow-x-auto pr-10">{command}</pre>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </TooltipProvider>
  )
}

type CopyCodeProps = {
  code: string
  position?: "absolute" | "relative"
}

const CopyCode: React.FC<CopyCodeProps> = ({ code, position = "absolute" }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false)

  const onCopy = () => {
    navigator.clipboard.writeText(code)
    setHasCheckIcon(true)

    setTimeout(() => {
      setHasCheckIcon(false)
    }, 1000)
  }

  return (
    <div
      className={cn(
        position === "absolute" ? "absolute top-3 right-3" : "relative",
        "cursor-pointer bg-transparent p-2 opacity-100 group-hover:opacity-100"
      )}
      onClick={onCopy}
    >
      <div
        className={`absolute inset-0 transform transition-all duration-150 ${
          hasCheckIcon ? "scale-90 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <Copy className="h-4 w-4" />
      </div>
      <div
        className={`absolute inset-0 transform transition-all duration-150 ${
          hasCheckIcon ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <Check className="h-4 w-4" />
      </div>
    </div>
  )
}

export { CopyCode }
