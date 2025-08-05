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
        "mx-2",
        "mx-auto h-full max-w-4xl",
        "border-edge border-x-[1px]",
        "mx-2 sm:mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}
