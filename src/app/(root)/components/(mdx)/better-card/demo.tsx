"use client"

import { Button } from "@/components/ui/button"
import {
  BetterCard,
  BetterCardActions,
  BetterCardContent,
  BetterCardFooter,
  BetterCardFooterActions,
  BetterCardHeader,
  BetterCardItem,
  BetterCardTitle,
} from "@/core/better-card"
import { MoreHorizontal } from "lucide-react"

const Demo = () => {
  return (
    <BetterCard className="mx-auto w-[320px]">
      <BetterCardHeader className="">
        <div className="flex items-center">
          <div className="mr-2 size-2 rounded-full bg-amber-500" />
          <BetterCardTitle>In progress</BetterCardTitle>
        </div>
        <BetterCardActions>
          <MoreHorizontal className="text-muted-foreground/80 size-4 cursor-pointer" />
        </BetterCardActions>
      </BetterCardHeader>
      <BetterCardContent>
        <BetterCardItem className="flex h-20 items-center justify-center">
          Card Item Content
        </BetterCardItem>
      </BetterCardContent>
      <BetterCardFooter className="">
        <BetterCardFooterActions className="flex justify-between">
          <Button size="sm" variant="ghost" className="h-6 px-2 text-xs">
            Edit
          </Button>
          <Button size="sm" variant="default" className="h-6 px-2 text-xs">
            Save
          </Button>
        </BetterCardFooterActions>
      </BetterCardFooter>
    </BetterCard>
  )
}

export default Demo
