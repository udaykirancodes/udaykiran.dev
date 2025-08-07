"use client"

import { TECH_STACK } from "@/data/tech-stack"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Button } from "../ui/button"
import { HeaderTitle } from "./header-title"

export const TechStack: React.FC = () => {
  const { theme } = useTheme()
  return (
    <>
      <section className="w-full">
        <HeaderTitle title="Tech Stack" />
        <div className="grid w-full grid-cols-4 gap-2 p-2 lg:grid-cols-6">
          {TECH_STACK.map((item) => {
            const url = `/assets/tech-stack/${item.key}${item.theme ? (theme === "dark" ? "-dark" : "-light") : ""}.svg`
            return (
              <div key={item.key} className="flex">
                <Image
                  src={url}
                  alt={item.title}
                  width={48}
                  height={48}
                  quality={100}
                  unoptimized
                  fetchPriority="high"
                  className="h-8 w-8 rounded-sm"
                />
                <Button
                  variant={"link"}
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
