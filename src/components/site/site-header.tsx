"use client"

import { NAV_ITEMS } from "@/data/nav-items"
import { USER } from "@/data/user"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
                console.log(item.href, activeUrl)
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
          <div className="relative flex h-full w-full items-center gap-x-3 sm:hidden">
            <MobileNavbar activeUrl={activeUrl} />
            {activeUrl !== "/" && (
              <div className="absolute flex w-full items-center justify-center">
                <Button
                  variant="link"
                  size={"icon"}
                  className="size-8 underline"
                >
                  Home
                </Button>
              </div>
            )}
          </div>
          <div className="sm:hidden">
            <ThemeSwitcher />
          </div>
        </nav>
      </ContainerWrapper>
    </header>
  )
}
