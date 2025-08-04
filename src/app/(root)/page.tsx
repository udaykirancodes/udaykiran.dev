import { ProfileHeader } from "@/components/portfolio/profile-header"
import { Separator } from "@/components/portfolio/separator"
import { ContainerWrapper } from "@/components/site/container"

const Page = () => {
  return (
    <>
      <ContainerWrapper className="">
        <ProfileHeader />
        <Separator />

        <ProfileHeader />
        <Separator />
      </ContainerWrapper>
    </>
  )
}

export default Page
