import { SkillBadgeList } from "@/components/profile/experience-item"
import { Separator } from "@/components/profile/separator"
import { BackButton } from "@/components/site/component-info"
import { ContainerWrapper } from "@/components/site/container"
import { Card } from "@/components/ui/card"
import { PROJECTS } from "@/data"
import { cn } from "@/lib/utils"
import { ArrowUpRight, GithubIcon, LinkIcon } from "lucide-react"

import Image from "next/image"

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ href: string }>
}) => {
  const href = (await params)?.href || "/turbo-code"
  const project = PROJECTS.find((project) => project.href.endsWith(href))
  if (!project) {
    return (
      <ContainerWrapper>
        <Separator />
        <BackButton title="Projects" href="/" />
        <Separator />
        <div className="flex items-center justify-center">
          <p className="text-muted-foreground">Project not found</p>
        </div>
      </ContainerWrapper>
    )
  }
  const links = [
    {
      name: "GitHub",
      description: "View on GitHub",
      href: project.githubLink,
      icon: <GithubIcon />,
    },
    {
      name: "Live",
      description: "View Live",
      href: project.liveLink,
      icon: <LinkIcon />,
    },
  ]
  return (
    <ContainerWrapper>
      <Separator />
      <BackButton title="Projects" href="/" />
      <Separator />
      <div className="p-2 md:p-4">
        <Card className={cn("group p-2")}>
          <div
            className={cn(
              "bg-muted border-border relative aspect-video w-full overflow-hidden rounded-[6px] border select-none",
              "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] transition-all duration-300 [--pattern-foreground:var(--color-edge)]/0 group-hover:[--pattern-foreground:var(--color-border)]/90"
            )}
          >
            <h1 className="text-muted-foreground absolute top-3 left-2 text-xs font-medium transition-all duration-300 group-hover:left-1/2 group-hover:-translate-x-1/2 sm:text-base">
              {project.title}
            </h1>
            <div className="bg-background absolute bottom-0 left-1/2 h-[80%] w-[90%] -translate-x-1/2 rounded-t-[6px] p-[2px] pb-0 transition-all duration-300 group-hover:h-[85%] sm:h-[90%]">
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
        </Card>
      </div>
      {/* Links Section */}
      <div className="flex w-full gap-x-4 p-2 md:p-4">
        {links.map((item) => {
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="border-edge group relative flex w-1/2 cursor-pointer flex-row rounded-sm border-[1px] border-dashed"
            >
              <div
                key={item.name}
                className="flex w-full items-center gap-x-2 p-2"
              >
                <div className="flex h-full items-center justify-center overflow-hidden md:size-10">
                  {item.icon}
                </div>
                <div className="border-edge h-[80%] border-r-[1px] border-dashed" />
                <div className="flex-1">
                  <h3 className="text-primary text-[14px] font-medium">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground hidden text-sm sm:block">
                    {item.description}
                  </p>
                </div>
                <div className="opacity-0 transition-all delay-50 group-hover:opacity-100">
                  <ArrowUpRight className="text-primary h-4 w-4 text-xl" />
                </div>
              </div>
            </a>
          )
        })}
      </div>
      <Separator />
      {/* Bottom Section */}
      <div className="flex flex-col gap-2 p-2 sm:p-4">
        <a
          href={project.liveLink}
          className="text-primary/90 text-base font-bold sm:text-xl md:text-2xl"
        >
          {project.title}
        </a>
        <p className="text-primary/90 font-mono text-xs sm:text-sm">
          {project.description}
        </p>
        <div className="space-y-2">
          {project.descriptionList.length > 0 && (
            <ul className="flex list-disc flex-col gap-1.5 pl-5">
              {project.descriptionList.map((item, index) => (
                <li key={index} className="text-muted-foreground">
                  <p className="text-primary text-sm">{item}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <SkillBadgeList skills={project.skills} />
      </div>
      <Separator />
    </ContainerWrapper>
  )
}

export default ProjectPage
