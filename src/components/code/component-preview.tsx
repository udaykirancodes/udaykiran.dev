"use client"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { RotateCw } from "lucide-react"
import { cloneElement, useState } from "react"

type ComponentPreviewProps = {
  component: React.ReactElement
  hasReTrigger?: boolean
  className?: string
  filePath?: string
}

export function ComponentPreview({
  component,
  hasReTrigger = false,
  className,
  filePath,
}: ComponentPreviewProps) {
  const [reTriggerKey, setReTriggerKey] = useState<number>(Date.now())

  console.log(filePath)

  //   const componentName = filePath?.split('/').pop()?.split('.').shift()

  const reTrigger = () => {
    setReTriggerKey(Date.now())
  }

  return (
    <div
      className={cn(
        "group relative mt-1 flex min-h-96 w-full items-center justify-center rounded-md border-none bg-neutral-100 dark:bg-neutral-900",
        className
      )}
    >
      <div className="absolute top-3 right-3">
        <div className="flex items-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
          {hasReTrigger && (
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="cursor-pointer"
                  onClick={reTrigger}
                  type="button"
                >
                  <RotateCw className="h-4 w-4 transition-colors" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Re-trigger</TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
      {hasReTrigger
        ? cloneElement(component, { key: reTriggerKey })
        : component}
    </div>
  )
}
