import { Separator } from "@/components/profile/separator"
import { BackButton, ShowComponentInfo } from "@/components/site/component-info"

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Separator />
      <BackButton />
      <Separator />
      <ShowComponentInfo />
      <div className="mt-0 flex min-h-screen flex-col px-2">{children}</div>
    </>
  )
}
