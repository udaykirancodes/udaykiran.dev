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
        "mx-auto w-full max-w-4xl",
        "border-edge h-full border-x-[1px]",
        className
      )}
    >
      {children}
    </div>
  )
}
