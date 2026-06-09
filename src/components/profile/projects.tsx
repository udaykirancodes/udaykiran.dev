import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Project } from "@/data/projects"
import { PROJECTS } from "@/data/projects"
import { cn } from "@/lib/utils"

import { ArrowRight, GithubIcon, LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CardDescription } from "../ui/card"
import { HeaderTitle } from "./header-title"

export function Projects() {
  if (!PROJECTS.length) return null

  return (
    <>
      <section className="w-full">
        <HeaderTitle title="Projects" />
        <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <SingleProject key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}

export function SingleProject({ project }: { project: Project }) {
  return (
    <div className="relative z-10 p-3">
      {/* Link */}
      <div className="group flex w-full cursor-pointer flex-col gap-2">
        <Link
          href={project.href}
          className="border-border rounded-[10px] border p-[4px]"
        >
          <div
            className={cn(
              "bg-muted border-border relative aspect-video w-full overflow-hidden rounded-[6px] border select-none",
              "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] transition-all duration-300 [--pattern-foreground:var(--color-edge)]/0 group-hover:[--pattern-foreground:var(--color-border)]/90"
            )}
          >
            <h1 className="text-muted-foreground absolute top-2 left-2 text-xs font-medium transition-all duration-300 group-hover:left-1/2 group-hover:-translate-x-1/2">
              {project.title}
            </h1>
            <div className="bg-background absolute bottom-0 left-1/2 h-[80%] w-[80%] -translate-x-1/2 rounded-t-[6px] p-[2px] pb-0 transition-all duration-300 group-hover:h-[75%]">
              <div className="h-full w-full overflow-hidden rounded-t-[4px]">
                <div className="hidden dark:block">
                  <Image
                    alt="Dark Screenshot"
                    loading="lazy"
                    width="1000"
                    height="1000"
                    decoding="async"
                    data-nimg="1"
                    className="h-full w-full object-cover"
                    src={project.darkModeImage}
                  />
                </div>
                <div className="block dark:hidden">
                  <Image
                    src={project.image}
                    alt="Light Screenshot"
                    loading="lazy"
                    width="1000"
                    height="1000"
                    decoding="async"
                    data-nimg="1"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-1 px-2">
          <Link href={project.href}>
            <div className="flex items-center justify-between">
              <h3 className="text-primary/95 mb-1 text-sm leading-snug font-medium text-balance sm:text-base">
                {project.title}
              </h3>
              <div className="flex items-center gap-1 select-none">
                <div className="relative flex items-center justify-center">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping bg-green-500 group-hover:hidden"></div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="relative z-10 text-green-500"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
                  </svg>
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  Live
                </p>
              </div>
            </div>
            <CardDescription className="text-muted-foreground min-h-[40px] text-sm">
              {project.description}
            </CardDescription>
          </Link>

          <div className="flex items-center justify-between gap-1 py-1 select-none">
            <div className="flex gap-x-2">
              <Tooltip>
                <TooltipTrigger>
                  <a
                    className="text-muted-foreground hover:text-foreground flex size-6 shrink-0 items-center justify-center"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="pointer-events-none size-4" />
                    <span className="sr-only">Open Project Link</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>Open Project Link</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <a
                    className="text-muted-foreground hover:text-foreground flex size-6 shrink-0 items-center justify-center"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="ring-muted-foreground pointer-events-none size-4" />
                    <span className="sr-only">Open GitHub Link</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>Open GitHub Link</TooltipContent>
              </Tooltip>
            </div>
            <Link href={project.href} className="flex">
              <p className="text-foreground text-xs transition-colors duration-300">
                View Project
              </p>
              <ArrowRight className="text-foreground ml-1 size-3 -rotate-45 transition-all duration-300 group-hover:rotate-0 sm:size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
