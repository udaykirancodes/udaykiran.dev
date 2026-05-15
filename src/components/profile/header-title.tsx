import { cn } from "@/lib/utils"

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
}

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
      <h2
        className="text-primary/90 p-2 text-xl font-bold md:text-2xl"
        id={slugify(title)}
      >
        {title}
      </h2>
    </div>
  )
}
