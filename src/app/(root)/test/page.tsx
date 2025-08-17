import { Code } from "@/components/code/code"
import { CodeTabs } from "@/components/code/code-tabs"
import { CodeCollapsibleWrapper } from "@/components/code/code-wrapper"
import { Commands } from "@/components/code/commands"
import { ContainerWrapper } from "@/components/site/container"

const code = `import { About } from "@/components/profile/about"
import { Experience } from "@/components/profile/experience"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileInfo } from "@/components/profile/profile-info"
import { Projects } from "@/components/profile/projects"
import { Separator } from "@/components/profile/separator"
import { TechStack } from "@/components/profile/tech-stack"
import { ContainerWrapper } from "@/components/site/container"

const Page = () => {
  return (
    <>
      <ContainerWrapper className="">
        <ProfileHeader />
        <Separator />

        <ProfileInfo />
        <Separator />

        <About />
        <Separator />

        <TechStack />
        <Separator />

        <Projects />
        <Separator />

        <Experience />
        <Separator />
      </ContainerWrapper>
    </>
  )
}

export default Page
`
export default function page() {
  return (
    <ContainerWrapper className="">
      <div className="px-2">
        <CodeTabs filePath="src/app/(root)/components/page.tsx" />

        <Commands commands={{ pnpm: "pnpm", yarn: "yarn", npm: "npm" }} />
        <CodeCollapsibleWrapper>
          <Code showLineNumbers={true} code={code} />
        </CodeCollapsibleWrapper>
      </div>
    </ContainerWrapper>
  )
}
