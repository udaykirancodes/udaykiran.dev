import { cn } from "@/lib/utils"

export function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:border-edge before:border-y-[1px]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  )
}

export function HorizontalSeparator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full",
        "before:absolute before:left-0 before:-z-1 before:h-full before:w-[100%]",
        "before:border-edge before:border-y-[1px]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  )
}
