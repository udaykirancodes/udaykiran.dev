import { ChevronsDownUpIcon, ChevronsUpDownIcon, Infinity } from "lucide-react"
import moment from "moment"
import Image from "next/image"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Experience } from "@/data/experience"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Badge } from "../ui/badge"

export function ExperienceItem({
  className,
  experience,
}: {
  className?: string
  experience: Experience
}) {
  const companyName = experience.company
  const isUpperCase = (char: string) => char === char.toUpperCase()
  const avatarName = companyName.split("").filter(isUpperCase).join("")

  return (
    <Collapsible defaultOpen={experience.isExpanded} asChild>
      <div
        className={cn(
          className,
          "border-edge w-full border-b-[1px] last:border-b-0"
        )}
      >
        <div className="flex items-center">
          {experience.logo ? (
            <Image
              src={experience.logo}
              alt={experience.title}
              width={32}
              height={32}
              quality={100}
              className="mx-4 flex aspect-square size-4 shrink-0 sm:size-6"
              unoptimized
              aria-hidden="true"
            />
          ) : (
            <div
              className="mx-4 flex size-6 shrink-0 items-center justify-center"
              aria-hidden="true"
            >
              <Avatar>
                <AvatarFallback>{avatarName}</AvatarFallback>
              </Avatar>
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
                <div className="h-full flex-1 items-center">
                  <h3 className="text-primary/95 mb-1 text-sm leading-snug font-medium text-balance sm:text-base">
                    {experience.title}
                  </h3>

                  <div className="flex h-full w-full flex-row items-center gap-x-2">
                    <div className="border-edge hidden border-r-[1px] pr-2 sm:block">
                      <Badge variant={"outline"} className="text-xs">
                        {experience.company}
                      </Badge>
                    </div>
                    <Badge variant={"outline"} className="text-xs">
                      {experience.type}
                    </Badge>
                    <div className="border-edge border-l-[1px] pl-2">
                      <div className="flex flex-row items-center space-x-2">
                        <p className="text-muted-foreground text-xs">
                          {moment(experience.from).format("MMM YYYY")}
                        </p>
                        <span className="text-muted-foreground text-xs">
                          {"-"}
                        </span>
                        {experience.to ? (
                          <p className="text-muted-foreground text-xs">
                            {moment(experience.to).format("MMM YYYY")}
                          </p>
                        ) : (
                          <span className="text-muted-foreground text-xs">
                            <Infinity className="size-5 text-xs" />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
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
              {experience.descriptionList.length > 0 && (
                <ul className="flex list-disc flex-col gap-1.5 pl-5">
                  {experience.descriptionList.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      <p className="text-primary text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="space-y-2">
              <SkillBadgeList skills={experience.skills} />
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}

export const SkillBadgeList = ({ skills }: { skills: string[] }) => {
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
