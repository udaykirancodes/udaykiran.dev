import { cn } from "@/lib/utils"

type HeaderTitleProps = {
  title: string
  className?: string
}
export const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  className,
}) => {
  return (
    <div
      className={cn(
        "border-b-edge flex h-10 w-full items-center justify-start border-b-[1px]",
        className
      )}
    >
      <h1
        className="text-primary/90 p-2 text-xl font-bold md:text-2xl"
        id={title.replaceAll(" ", "-").toLowerCase()}
      >
        {title}
      </h1>
    </div>
  )
}
