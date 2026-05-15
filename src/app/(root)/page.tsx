import { About } from "@/components/profile/about"
import { Blogs } from "@/components/profile/blogs"
import { Experience } from "@/components/profile/experience"
import { ProfileHeader } from "@/components/profile/profile-header"
import { Projects } from "@/components/profile/projects"
import { Separator } from "@/components/profile/separator"
import { TechStack } from "@/components/profile/tech-stack"
import { ContainerWrapper } from "@/components/site/container"
import { AnimatingScrollBars } from "@/components/site/scroll-bars"
import { HireMe } from "@/core/hire-me"
import { TEXT_TO_ANIMATE, USER } from "@/data"

const Page = () => {
  return (
    <ContainerWrapper className="">
      <ProfileHeader />
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

      <HireMe text={TEXT_TO_ANIMATE} avatarSrc={USER.avatar} />
      <AnimatingScrollBars />
    </ContainerWrapper>
  )
}

export default Page
