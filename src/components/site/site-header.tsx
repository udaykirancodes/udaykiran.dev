import { ContainerWrapper } from "./container"
import ThemeSwitcher from "./theme-switcher"

export const SiteHeader = () => {
  return (
    <header className="border-edge bg-background h-12 w-full border-b-[1px]">
      <ContainerWrapper className="">
        <nav className="flex h-full items-center justify-between px-1">
          <h3 className="text-xl font-semibold">UDAYKIRAN</h3>
          <ThemeSwitcher />
        </nav>
      </ContainerWrapper>
    </header>
  )
}
