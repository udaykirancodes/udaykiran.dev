"use client"

import { USER } from "@/data"
import { NAV_ITEMS } from "@/data/nav-items"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { TextRoll } from "../profile/text-roll"
import { Button } from "../ui/button"
import { ContainerWrapper } from "./container"
import MobileNavbar from "./mobile-nav"
import ThemeSwitcher from "./theme-switcher"

export const SiteHeader = () => {
  const pathname = usePathname()
  const activeUrl = "/" + pathname.split("/")[1]
  return (
    <header className="border-edge sticky top-0 z-[500] h-12 w-full border-b-[1px] backdrop-blur-xs">
      <ContainerWrapper className="">
        <nav className="z-100 mx-auto flex h-full w-full items-center justify-between px-2">
          {/* Desktop Nav */}
          <div className="hidden h-full w-full items-center justify-between sm:flex">
            <Link href="/">
              <h2 className="text-primary font-bold sm:text-xl">
                {USER.name.toUpperCase()}
              </h2>
            </Link>
            <ul className="flex items-center gap-x-3">
              {NAV_ITEMS.map((item, index) => {
                return (
                  <li key={index}>
                    <Button
                      variant="link"
                      asChild
                      className={cn(
                        "text-sm",
                        activeUrl === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      <Link
                        prefetch={false}
                        key={index}
                        href={item.href}
                        className="hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </Button>
                  </li>
                )
              })}
              <ThemeSwitcher />
            </ul>
          </div>
          {/* Mobile Nav */}
          <div className="relative flex h-full items-center gap-x-3 sm:hidden">
            <MobileNavbar activeUrl={activeUrl} />
          </div>
          <div className="sm:hidden">
            <TextRoll
              className="text-muted-foreground font-mono text-xs transition-all duration-100 ease-out sm:text-sm"
              variants={{
                enter: {
                  initial: { rotateX: 0, filter: "blur(0px)" },
                  animate: { rotateX: 90, filter: "blur(2px)" },
                },
                exit: {
                  initial: { rotateX: 90, filter: "blur(2px)" },
                  animate: { rotateX: 0, filter: "blur(0px)" },
                },
              }}
              duration={1.2}
            >
              npx udaykiran
            </TextRoll>
          </div>

          <div className="sm:hidden">
            <ThemeSwitcher />
          </div>
        </nav>
      </ContainerWrapper>
    </header>
  )
}
