import { Separator } from "@/components/profile/separator"
import { BackButton } from "@/components/site/component-info"
import { PageHeaderTitle } from "@/components/site/page-header-title"

import { HireMe } from "@/core/hire-me"
import { TEXT_TO_ANIMATE, USER } from "@/data"
import { COMPONENTS } from "@/data/components"
import { generateMetaData, generateOgImageUrl } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { getComponent } from "@/components/code/component-map"
import { ComponentPreview } from "@/components/code/component-preview"
import { cn } from "@/lib/utils"

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
      <BackButton title="Home" href="/" />
      <Separator />

      <PageHeaderTitle
        title="Components"
        description="A collection of reusable components."
      />
      <Separator />

      <div className="bg-border relative mb-12 grid gap-px p-px sm:grid-cols-2 lg:grid-cols-3">
        {COMPONENTS.map((component) => (
          <div
            key={component.title}
            className={cn(
              "group relative min-h-64 max-sm:overflow-hidden",
              component.className
            )}
          >
            <div className="bg-background hover:bg-muted/50 peer relative z-1 flex h-full flex-col p-4 transition-colors">
              <Link
                href={component.href}
                className="absolute inset-0 z-0 focus:outline-none"
              >
                <span className="sr-only">View {component.title}</span>
              </Link>

              <div className="pointer-events-auto relative z-10 w-full overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.02]">
                <ComponentPreview
                  component={
                    <div className="flex h-full w-full items-center justify-center overflow-hidden">
                      {getComponent(component.name) || (
                        <Image
                          alt="Component Icon"
                          width={32}
                          height={32}
                          src={`/assets/tech-stack/react.svg`}
                          className="h-8 w-8 transition-transform duration-500 group-hover:rotate-180"
                        />
                      )}
                    </div>
                  }
                  className="!mt-0 h-[200px] min-h-[200px] w-full"
                />
              </div>
              <div className="pointer-events-none relative z-10 mt-4 flex flex-col items-center text-center">
                <h3 className="text-foreground flex items-center justify-center text-base font-medium tracking-tight">
                  {component.title}
                  <ArrowRight className="text-primary ml-1.5 h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </h3>
                <p className="text-muted-foreground mt-1 line-clamp-1 text-xs">
                  {component.description}
                </p>
              </div>
            </div>
            {/* Grid corner markers */}
            <div
              aria-hidden="true"
              className="border-foreground/20 absolute -top-px -left-px z-20 size-1.5 border-t border-l opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></div>
            <div
              aria-hidden="true"
              className="border-foreground/20 absolute -bottom-px -left-px z-20 size-1.5 border-b border-l opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></div>
            <div
              aria-hidden="true"
              className="border-foreground/20 absolute -right-px -bottom-px z-20 size-1.5 border-r border-b opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></div>
            <div
              aria-hidden="true"
              className="border-foreground/20 absolute -top-px -right-px z-20 size-1.5 border-t border-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></div>
          </div>
        ))}
      </div>
      <div className="flex-1"></div>
      <HireMe text={TEXT_TO_ANIMATE} avatarSrc={USER.avatar} />
    </>
  )
}

export default Page
