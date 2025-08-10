import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { NAV_ITEMS } from "@/data/nav-items"
import { USER } from "@/data/user"
import { cn } from "@/lib/utils"

import { AlignJustifyIcon } from "lucide-react"
import Link from "next/link"

const MobileNavbar = ({ activeUrl }: { activeUrl: string }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="default" size={"icon"} className="size-8">
          <AlignJustifyIcon className="text-primary-foreground h-4 w-4 cursor-pointer" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mb-10">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-primary text-base font-bold">
              {USER.name}
            </DrawerTitle>
          </DrawerHeader>
          <ul className="flex flex-col gap-3 px-4 pb-4">
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
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileNavbar
