import { cn } from "@/lib/utils"

export const ContainerWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "mx-auto h-full max-w-4xl",
        "border-edge border-x-[1px]",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BorderXContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("border-edge border-x-[1px]", className)}>
      {children}
    </div>
  )
}
