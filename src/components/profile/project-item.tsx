import {
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  GithubIcon,
  LinkIcon,
} from "lucide-react"
import Image from "next/image"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Project } from "@/data/projects"
import { cn } from "@/lib/utils"
import { Badge } from "../ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export function ProjectItem({
  className,
  project,
}: {
  className?: string
  project: Project
}) {
  return (
    <Collapsible defaultOpen={project.isExpanded} asChild>
      <div
        className={cn(
          className,
          "border-edge w-full border-b-[1px] last:border-b-0"
        )}
      >
        <div className="flex items-center">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.title}
              width={32}
              height={32}
              quality={100}
              className="mx-4 flex aspect-square size-6 shrink-0"
              unoptimized
              aria-hidden="true"
            />
          ) : (
            <div
              className="mx-4 flex size-6 shrink-0 items-center justify-center"
              aria-hidden="true"
            >
              {project.title.charAt(0)}
            </div>
          )}

          <div className="border-edge flex-1 border-l border-dashed">
            <CollapsibleTrigger
              className={cn(
                "group/project flex w-full items-center gap-4 p-2 pr-2 text-left select-none"
              )}
              asChild
            >
              <div>
                <div className="flex-1">
                  <h3 className="mb-1 text-base leading-snug font-medium text-balance">
                    {project.title}
                  </h3>

                  <div>
                    <SkillBadgeList skills={project.skills} />
                  </div>
                </div>

                <Tooltip>
                  <TooltipTrigger>
                    <a
                      className="text-muted-foreground hover:text-foreground flex size-6 shrink-0 items-center justify-center"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener"
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
                      rel="noopener"
                    >
                      <GithubIcon className="ring-muted-foreground pointer-events-none size-4" />
                      <span className="sr-only">Open GitHub Link</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Open GitHub Link</TooltipContent>
                </Tooltip>

                <div
                  className="text-muted-foreground shrink-0 [&_svg]:size-4"
                  aria-hidden
                >
                  <ChevronsDownUpIcon className="hidden group-data-[state=open]/project:block" />
                  <ChevronsUpDownIcon className="hidden group-data-[state=closed]/project:block" />
                </div>
              </div>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden duration-300">
          <div className="border-edge space-y-4 border-t border-dashed p-4">
            <div className="space-y-2">
              <p className="text-sm">{project.description}</p>
              {project.descriptionList.length > 0 && (
                <ul className="flex list-disc flex-wrap gap-1.5 pl-5">
                  {project.descriptionList.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      <p className="text-primary text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}

const SkillBadgeList = ({ skills }: { skills: string[] }) => {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {skills.map((skill, index) => (
        <li key={index} className="flex">
          <Badge variant={"outline"} className="text-xs">
            {skill}
          </Badge>
        </li>
      ))}
    </ul>
  )
}
