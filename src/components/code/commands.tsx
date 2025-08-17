"use client"

import { ChevronRight, Code2 } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"
import { useState } from "react"
import { CopyCode } from "./copy"
type CommandManager = "npm" | "yarn" | "pnpm"

interface Commands {
  commands: {
    npm: string
    yarn: string
    pnpm: string
  }
  defaultTab?: CommandManager
}

export function Commands({ commands, defaultTab = "npm" }: Commands) {
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
