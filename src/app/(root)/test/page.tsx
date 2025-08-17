import { CodeTabs } from "@/components/code/code-tabs"
import { ContainerWrapper } from "@/components/site/container"

export default function page() {
  return (
    <ContainerWrapper className="">
      <div className="px-2">
        <CodeTabs componentName="command" />
      </div>
    </ContainerWrapper>
  )
}
