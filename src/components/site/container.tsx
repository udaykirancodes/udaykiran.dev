import { cn } from "@/lib/utils"

type ContainerWrapperProps = {
  children: React.ReactNode
  className?: string
}

export function ContainerWrapper({
  children,
  className,
}: ContainerWrapperProps) {
  return (
    <div className="mx-auto h-full w-full max-w-5xl px-4">
      <div className={cn("border-edge h-full border-x-[1px]", className)}>
        {children}
      </div>
    </div>
  )
}
