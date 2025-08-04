import { ContainerWrapper } from "../container"

export const SiteHeader = () => {
  return (
    <header className="border-edge bg-background h-12 w-full border-b-[1px]">
      <ContainerWrapper className={""}>
        <nav className="flex h-full items-center">UDAYKIRAN</nav>
      </ContainerWrapper>
    </header>
  )
}
