import { ContainerWrapper } from "../container";

export const SiteHeader = () => {
  return (
    <header className="h-12 w-full border-b-[1px] border-edge bg-background">
      <ContainerWrapper className={""}>
        <nav className="flex items-center h-full">UDAYKIRAN</nav>
      </ContainerWrapper>
    </header>
  );
};
