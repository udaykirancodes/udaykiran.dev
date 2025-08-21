import { USER } from "@/data/user"
import Link from "next/link"
import { Button } from "../ui/button"
import { ContainerWrapper } from "./container"

export const SiteFooter = () => {
  return (
    <footer className="border-edge w-full border-b-[1px]">
      <ContainerWrapper className="relative">
        <div className="py-0">
          <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-1 text-center font-mono text-xs text-balance sm:px-4">
            Inspired by{" "}
            <Button
              variant={"link"}
              asChild
              className="m-0 p-0 text-xs underline"
            >
              <Link href="http://tailwindcss.com" target="_blank">
                tailwindcss.com
              </Link>
            </Button>
            <span className="">,</span>
            <Button
              variant={"link"}
              asChild
              className="m-0 p-0 text-xs underline"
            >
              <Link href="https://ui.shadcn.com" target="_blank">
                ui.shadcn.com
              </Link>
            </Button>
            <span className="">,</span>
            <Button
              variant={"link"}
              asChild
              className="m-0 p-0 text-xs underline"
            >
              <Link href="https://chanhdai.com/" target="_blank">
                chanhdai.com
              </Link>
            </Button>
          </div>
        </div>
        <div className="py-0">
          <h3 className="text-muted-foreground px-4 text-center font-mono text-xs text-balance">
            Developed by{" "}
            <Button variant={"link"} className="m-0 p-0 text-xs underline">
              <a href="https://github.com/udaykirancodes" target="_blank">
                {USER.name}
              </a>
            </Button>
          </h3>
        </div>
      </ContainerWrapper>
    </footer>
  )
}
