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
      </ContainerWrapper>
    </>
  )
}

export default Page
