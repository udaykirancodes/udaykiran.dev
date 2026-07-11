"use client"

import { TECH_STACK } from "@/data/tech-stack"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Button } from "../ui/button"
import { HeaderTitle } from "./header-title"

export function TechStack() {
  const { theme } = useTheme()
  return (
    <>
      <section className="w-full">
        <HeaderTitle title="Tech Stack" />
        <div className="my-2 grid w-full grid-cols-4 gap-2 p-2 lg:grid-cols-6">
          {TECH_STACK.map((item) => {
            const getThemeString = () => {
              if (item.theme) {
                if (theme === "dark") {
                  return "-dark"
                }
                if (theme === "light") {
                  return "-light"
                }
                return "-dark"
              }
              return ""
            }
            const url = `/assets/tech-stack/${item.key}${getThemeString()}.svg`
            return (
              <div key={item.key} className="flex items-center justify-center sm:justify-start">
                <Image
                  src={url}
                  alt={item.title}
                  width={48}
                  height={48}
                  quality={100}
                  unoptimized
                  fetchPriority="high"
                  className="h-8 w-8 rounded-sm"
                  suppressHydrationWarning={true}
                />
                <Button
                  variant="link"
                  className="ml-2 hidden p-0 sm:inline-block"
                >
                  {item.title}
                </Button>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
