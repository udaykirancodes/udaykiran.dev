import { cn } from "@/lib/utils"

export const BetterCard = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        className,
        "bg-card/60 border-border flex min-w-xs flex-col rounded-xl border px-2 py-1 shadow-xs"
      )}
      {...props}
    />
  )
}

export const BetterCardHeader = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-x-2 px-1 py-1 pt-2",
        className
      )}
      {...props}
    />
  )
}

export const BetterCardTitle = ({
  className,
  ...props
}: React.ComponentProps<"h3">) => {
  return (
    <span
      className={cn(
        "text-sm leading-none font-normal tracking-tight",
        className
      )}
      {...props}
    />
  )
}

export const BetterCardContent = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "flex w-full flex-1 flex-col gap-x-2 gap-y-2 py-1",
        className
      )}
      {...props}
    />
  )
}

export const BetterCardItem = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("bg-accent h-auto rounded-md px-2 py-1 text-xs", className)}
      {...props}
    />
  )
}

export const BetterCardFooter = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("h-auto rounded-md py-1 text-xs", className)}
      {...props}
    />
  )
}

export const BetterCardActions = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "text-muted-foreground ml-auto flex items-center gap-1",
        className
      )}
      {...props}
    />
  )
}

export const BetterCardFooterActions = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}
