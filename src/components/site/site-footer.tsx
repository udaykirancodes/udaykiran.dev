import { USER } from "@/data/user"
import { Button } from "../ui/button"
import { ContainerWrapper } from "./container"

export const SiteFooter = () => {
  return (
    <footer className="w-full">
      <ContainerWrapper className="relative">
        <div className="py-0">
          <h3 className="text-muted-foreground mb-1 px-4 text-center font-mono text-xs text-balance">
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
