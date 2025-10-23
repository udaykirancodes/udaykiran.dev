import { About } from "@/components/profile/about"
import { Experience } from "@/components/profile/experience"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileInfo } from "@/components/profile/profile-info"
import { Projects } from "@/components/profile/projects"
import { Separator } from "@/components/profile/separator"
import { TechStack } from "@/components/profile/tech-stack"
import { ContainerWrapper } from "@/components/site/container"
import { HireMe } from "@/core/hire-me"
import { TEXT_TO_ANIMATE } from "@/data"

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
        <HireMe text={TEXT_TO_ANIMATE} />
      </ContainerWrapper>
    </>
  )
}

export default Page
