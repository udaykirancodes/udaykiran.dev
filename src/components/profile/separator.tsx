import { cn } from "@/lib/utils"

export function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow relative flex h-8 w-full",
        "border-edge border-y-[1px]",
        "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-border)]/70",
        className
      )}
    />
  )
}
