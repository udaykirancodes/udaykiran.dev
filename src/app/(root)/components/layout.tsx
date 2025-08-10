import { Separator } from "@/components/profile/separator"
import { ContainerWrapper } from "@/components/site/container"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ContainerWrapper className="h-full">
        <div className="min-h-screen">{children}</div>
        <Separator />
      </ContainerWrapper>
    </>
  )
}
