import { About } from "@/components/profile/about"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileInfo } from "@/components/profile/profile-info"
import { Separator } from "@/components/profile/separator"
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
      </ContainerWrapper>
    </>
  )
}

export default Page
