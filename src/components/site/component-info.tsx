"use client"

import { COMPONENTS } from "@/data/components"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { PageHeaderTitle } from "./page-header-title"

export const BackButton = ({ title, href }: { title: string, href: string }) => {
  return (
    <>
      <Link
        href={href}
        className="flex items-center justify-start gap-x-1 px-1"
      >
        <Button variant={"ghost"} size={"icon"} className="cursor-pointer size-6">
          <ArrowLeft className="text-primary/90 size-5" />
        </Button>
        <div>
          <div className="border-edge border-b-[1px] px-2">
            <Button variant={"link"} className="mx-0 px-0 text-base cursor-pointer">
              {title}
            </Button>
          </div>
        </div>
      </Link>
    </>
  )
}
export const ShowComponentInfo = () => {
  const pathname = usePathname()

  const componentName = pathname.split("/").pop()

  const component = COMPONENTS.find(
    (component) => component.name === componentName
  )
  if (!component) return null
  return (
    <PageHeaderTitle
      title={component.title}
      description={component.description}
    />
  )
}
