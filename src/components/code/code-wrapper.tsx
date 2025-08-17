import { ChevronsDownUpIcon, ChevronsUpDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { Separator } from "../ui/separator"

export function CodeCollapsibleWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible>) {
  return (
    <Collapsible
      className={cn("group/collapsible not-prose relative", className)}
      {...props}
    >
      <CollapsibleTrigger asChild>
        <div className="absolute top-3 right-9 z-10 flex items-center gap-2">
          <Button className="size-6 rounded-md" variant="secondary" size="icon">
            <ChevronsDownUpIcon className="hidden group-data-[state=open]/collapsible:block" />
            <ChevronsUpDownIcon className="hidden group-data-[state=closed]/collapsible:block" />
          </Button>

          <Separator
            className="data-[orientation=vertical]:h-4"
            orientation="vertical"
          />
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent
        className="overflow-hidden data-[state=closed]:max-h-96 data-[state=closed]:rounded-b-lg [&>figure]:my-0"
        forceMount
      >
        {children}
      </CollapsibleContent>

      {/* <CollapsibleTrigger className="text-primary from-background/80 absolute inset-x-0 bottom-0 flex h- items-end justify-center rounded-b-lg bg-linear-to-t from-25% to-transparent pb-4 text-sm font-medium group-data-[state=open]/collapsible:hidden">
        Expand
      </CollapsibleTrigger> */}
    </Collapsible>
  )
}
