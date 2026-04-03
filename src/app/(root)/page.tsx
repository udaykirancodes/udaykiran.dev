import { About } from "@/components/profile/about"
import { Blogs } from "@/components/profile/blogs"
import { Experience } from "@/components/profile/experience"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileInfo } from "@/components/profile/profile-info"
import { Projects } from "@/components/profile/projects"
import { Separator } from "@/components/profile/separator"
import { TechStack } from "@/components/profile/tech-stack"
import { AnimatingBars } from "@/components/site/bar"
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

        <Blogs />
        <Separator />

        <Experience />
        <Separator />
        <HireMe text={TEXT_TO_ANIMATE} />
        <AnimatingBars />
      </ContainerWrapper>
    </>
  )
}

export default Page
