import { NAV_ITEMS } from "@/data/nav-items"
import { USER } from "@/data/user"
import Link from "next/link"
import { Button } from "../ui/button"
import { ContainerWrapper } from "./container"
import MobileNavbar from "./mobile-nav"
import ThemeSwitcher from "./theme-switcher"

export const SiteHeader = () => {
  return (
    <header className="border-edge sticky top-0 z-[500] h-12 w-full border-b-[1px] backdrop-blur-xs">
      <ContainerWrapper className="">
        <nav className="z-100 mx-auto flex h-full w-full items-center justify-between px-2">
          {/* Desktop Nav */}
          <div className="hidden h-full w-full items-center justify-between sm:flex">
            <Link href="/">
              <h2 className="text-primary font-bold sm:text-xl">{USER.name}</h2>
            </Link>
            <ul className="flex items-center gap-x-3">
              {NAV_ITEMS.map((item, index) => (
                <li key={index}>
                  <Button variant="link" className="text-primary text-sm">
                    <Link prefetch={false} key={index} href={item.href}>
                      {item.name}
                    </Link>
                  </Button>
                </li>
              ))}
              <ThemeSwitcher />
            </ul>
          </div>

          {/* Mobile Nav */}
          <div className="flex h-full w-full items-center gap-x-3 sm:hidden">
            <MobileNavbar />
          </div>
          <div className="sm:hidden">
            <ThemeSwitcher />
          </div>
        </nav>
      </ContainerWrapper>
    </header>
  )
}
