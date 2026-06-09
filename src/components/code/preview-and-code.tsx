import { COMPONENTS } from "@/data/components"
import { getFileContent } from "@/lib/file"
import { CodeTabs } from "./code-tabs"
import { getComponent } from "./component-map"

type PreviewComponentWithCodeProps = {
  componentName: string
}

export async function PreviewComponentWithCode({
  componentName,
}: PreviewComponentWithCodeProps) {
  const component = COMPONENTS.find(
    (component) => component.name === componentName
  )
  if (!component) return null

  const fileContent = await getFileContent(component.path)

  const Component = getComponent(componentName)

  return (
    <>
      <CodeTabs component={<>{Component}</>} fileContent={fileContent} />
    </>
  )
}
