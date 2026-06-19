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

const Test = () => {
  return (
    <section className="mx-auto flex h-auto max-w-5xl flex-wrap items-center justify-center gap-4 p-4">
      <BetterCard className="">
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
          <BetterCardItem className="h-20">Hello</BetterCardItem>
          <BetterCardItem className="h-20">Hello</BetterCardItem>
          <BetterCardItem className="h-20">Hello</BetterCardItem>
        </BetterCardContent>
        <BetterCardFooter className="">
          <BetterCardFooterActions className="flex justify-between">
            <Button
              size="sm"
              variant={"ghost"}
              className="h-6 px-2 text-xs not-disabled:hover:cursor-pointer"
            >
              Edit
            </Button>
            <Button
              size="sm"
              variant={"default"}
              className="h-6 px-2 text-xs not-disabled:hover:cursor-pointer"
            >
              Save
            </Button>
          </BetterCardFooterActions>
        </BetterCardFooter>
      </BetterCard>
    </section>
  )
}

export default Test
