import { Separator } from "@/components/profile/separator"
import { PageHeaderTitle } from "@/components/site/page-header-title"
import { Button } from "@/components/ui/button"
import { HireMe } from "@/core/hire-me"
import { TEXT_TO_ANIMATE } from "@/data"
import { COMPONENTS } from "@/data/components"
import { generateMetaData, generateOgImageUrl } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

const pageMetadata = {
  title: "Components",
  description: "Explore the collection of reusable components by Uday",
}

const generatedStaticMetadata = generateMetaData(
  pageMetadata.title,
  pageMetadata.description,
  generateOgImageUrl(pageMetadata.title, pageMetadata.description)
)

export const metadata: Metadata = {
  title: "Components",
  ...generatedStaticMetadata,
}

const Page = () => {
  return (
    <>
      <Separator />

      <PageHeaderTitle
        title="Components"
        description="A collection of reusable components."
      />
      <Separator />

      {COMPONENTS.map((component) => (
        <div
          key={component.title}
          className="border-edge group flex items-center gap-x-2 border-b-[1px]"
        >
          <div className="border-edge flex aspect-square h-full items-center justify-center border-r-[1px] px-4 py-2">
            <Image
              alt="Component Icon"
              width={24}
              height={24}
              src={`/assets/tech-stack/react.svg`}
              className="h-8 w-8 transition-all duration-250 group-hover:rotate-100"
            />
          </div>
          <div>
            <Button variant={"link"} asChild className="m-0 h-0 p-0">
              <Link href={component.href}>{component.title}</Link>
            </Button>
            <p className="text-muted-foreground hidden text-xs sm:block">
              {component.description}
            </p>
          </div>
        </div>
      ))}
      <div className="flex-1"></div>
      <HireMe text={TEXT_TO_ANIMATE} />
    </>
  )
}

export default Page
