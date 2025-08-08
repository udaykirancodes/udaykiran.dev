import { cn } from "@/lib/utils"

export const ContainerWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("mx-auto h-full w-full max-w-4xl", className)}>
      <div className={cn("border-edge mx-2 h-full border-x-[1px]")}>
        {children}
      </div>
    </div>
  )
}
