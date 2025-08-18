import { Code } from "@/components/code/code"
import { ComponentPreview } from "@/components/code/component-preview"
import { PreviewComponentWithCode } from "@/components/code/preview-and-code"
import { ContainerWrapper } from "@/components/site/container"

export default function page() {
  return (
    <ContainerWrapper className="">
      <div className="space-y-2 px-2">
        <PreviewComponentWithCode componentName="command" />
        <ComponentPreview
          component={
            <>
              <h1>Hello</h1>
            </>
          }
          hasReTrigger={true}
        />
        <Code
          code={`<ContainerWrapper className="">
  <div className="space-y-2 px-2">
    <PreviewAndCode componentName="command" />
    <ComponentPreview
      component={
        <>
          <h1>Hello</h1>
        </>
      }
      hasReTrigger={true}
    />
    <Code code={""} />
  </div>
</ContainerWrapper>`}
        />
      </div>
    </ContainerWrapper>
  )
}
