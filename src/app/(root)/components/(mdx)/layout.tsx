import { Separator } from "@/components/profile/separator"
import { BackButton, ShowComponentInfo } from "@/components/site/component-info"
import { ComponentNavigator } from "@/components/site/component-navigator"
import { Button } from "@/components/ui/button"

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
      <div className="border-edge flex w-full items-center justify-center border-t-[1px] py-2">
        <Button variant={"ghost"} className="">
          Please adjust the imports
        </Button>
      </div>
      <Separator />
      <ComponentNavigator />
    </>
  )
}
