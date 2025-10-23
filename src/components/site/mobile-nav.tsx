import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { COMPONENTS, USER } from "@/data"
import { NAV_ITEMS } from "@/data/nav-items"
import { cn } from "@/lib/utils"

import { AlignJustifyIcon, ChevronRight } from "lucide-react"
import Link from "next/link"

const MobileNavbar = ({ activeUrl }: { activeUrl: string }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="default" size={"icon"} className="z-50 size-8">
          <AlignJustifyIcon className="text-primary-foreground h-4 w-4 cursor-pointer" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mb-10">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-primary text-base font-bold">
              <DrawerClose asChild>
                <Link href="/" className="hover:text-primary">
                  {USER.name}
                </Link>
              </DrawerClose>
            </DrawerTitle>
          </DrawerHeader>
          <ul className="mb-20 flex flex-col gap-3 px-4 pb-4">
            {NAV_ITEMS.map((item, index) => (
              <div key={index} className="flex flex-col gap-y-2">
                <DrawerClose asChild className="flex flex-col items-start">
                  <Link
                    prefetch={false}
                    key={index}
                    href={item.href}
                    className={cn(
                      "text-sm",
                      "text-base font-medium",
                      activeUrl === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    <li>{item.name}</li>
                  </Link>
                </DrawerClose>
              </div>
            ))}
            {COMPONENTS.map((item, index) => (
              <div key={index} className="flex items-center gap-y-0 pl-2">
                <DrawerClose key={index} asChild>
                  <Link
                    prefetch={false}
                    key={index}
                    href={item.href}
                    className={cn(
                      "text-sm",
                      "flex items-center",
                      "text-base font-medium",
                      activeUrl === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    <ChevronRight className="text-muted-foreground h-4 w-4 cursor-pointer" />
                    <li>{item.title}</li>
                  </Link>
                </DrawerClose>
              </div>
            ))}
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileNavbar
