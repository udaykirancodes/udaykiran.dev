import { ContainerWrapper } from "@/components/container"
import { ProfileHeader } from "@/components/profile-header"

const Page = () => {
  return (
    <>
      <ContainerWrapper className="">
        <ProfileHeader />
      </ContainerWrapper>
      <Line />
    </>
  )
}

export default Page

function Line() {
  return <div className="bg-edge h-px w-screen" />
}
