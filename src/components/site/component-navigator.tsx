"use client"

import { COMPONENTS } from "@/data"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

export function ComponentNavigator() {
  const pathname = usePathname()

  const componentName = pathname.split("/").pop()

  const component = COMPONENTS.find(
    (component) => component.name === componentName
  )
  if (!component) return null

  const componentIndex = COMPONENTS.findIndex(
    (component) => component.name === componentName
  )

  return (
    <>
      <div className="flex w-full flex-row items-center justify-between px-2 py-4">
        {componentIndex !== 0 ? (
          <Link href={COMPONENTS[componentIndex - 1].href}>
            <Button variant={"secondary"} className="cursor-pointer">
              <ArrowLeftIcon className="size-4" />
              {COMPONENTS[componentIndex - 1].title}
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
        {componentIndex !== COMPONENTS.length - 1 ? (
          <Link href={COMPONENTS[componentIndex + 1].href}>
            <Button variant={"secondary"} className="cursor-pointer">
              {COMPONENTS[componentIndex + 1].title}
              <ArrowRightIcon className="size-4" />
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </>
  )
}
