import { USER } from "@/data"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import TerminalArrowSvg from "./arrow-svg"
import { NPXHolder } from "./npx-holder"
import { WordLoop } from "./word-loop"

export function ProfileHeader() {
  return (
    <div className="relative flex h-full min-h-[250px] justify-center sm:justify-between">
      <div
        className={cn(
          "h-[45%] w-full sm:h-[50%]",
          "absolute inset-0",
          "[background-image:radial-gradient(var(--edge)_1.5px,transparent_0)] [background-size:10px_10px] bg-repeat-round"
        )}
      />
      <div className="z-40 mt-10 grid w-full grid-cols-1 gap-y-2 px-4 sm:grid-cols-3">
        <div className="col-span-2 space-y-1">
          <div className="relative flex w-full justify-center sm:justify-start">
            <Image
              src={USER.avatar}
              alt={`${USER.name}'s avatar`}
              width={300}
              height={300}
              fetchPriority="high"
              className="ring-border ring-offset-edge size-30 rounded-full ring-1 ring-offset-2 saturate-50 select-none"
            />
            <TerminalArrowSvg />
          </div>
          <div className="flex items-center justify-center gap-1 sm:mt-2 sm:justify-start">
            <h1 className="text-primary text-center text-xl font-bold sm:text-left md:text-2xl">
              {USER.name}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 22"
              className="size-5"
            >
              <path
                d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                fill="#1d9bf0"
              />
            </svg>
          </div>
          <h2 className="text-muted-foreground text-center text-sm sm:text-left md:text-base">
            Software Developer |{" "}
            <span className="sm:hidden">
              Building fast, polished web experiences
            </span>
            <div className="hidden sm:inline-block">
              <WordLoop
                texts={[
                  "Building fast, polished web experiences",
                  "Delivering scalable, high-performance solutions",
                  "Solving complex problems with code",
                  "Focused on clean, thoughtful design",
                  "Crafting with attention to detail",
                  "Sweating the small details",
                ]}
                transition={{
                  type: "spring",
                  stiffness: 800,
                  damping: 80,
                  mass: 10,
                }}
                interval={4}
                wordStagger={0.05}
              />
            </div>
          </h2>
        </div>
        <div className="mx-2 my-2 flex flex-col items-end sm:justify-end">
          {/* Social icons */}
          <div className="border-edge group relative grid w-full cursor-pointer grid-cols-3 rounded-sm sm:w-auto sm:gap-x-8 sm:py-1">
            {USER.socials.map((item) => {
              return (
                <Tooltip key={item.name}>
                  <TooltipTrigger asChild>
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      className="border-edge flex h-full items-center justify-center overflow-hidden border-dashed [&:not(:first-child)]:border-l-[1px]"
                    >
                      <Image
                        src={item.icon}
                        alt={item.name}
                        width={48}
                        height={48}
                        fetchPriority="high"
                        className="size-7 rounded-sm"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent
                    className="bg-secondary"
                    arrowClassName="bg-secondary fill-secondary"
                  >
                    <p className="text-foreground text-sm">{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </div>
          {/* Mail */}
          <div className="mt-2 flex w-full items-center justify-center gap-x-2 sm:mt-0 sm:justify-end">
            <div className="text-primary text-sm">
              <Button
                asChild
                variant={"link"}
                className="p-0 font-mono text-xs"
              >
                <a href={`mailto:${USER.email}`}>{USER.email}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <NPXHolder />
    </div>
  )
}
