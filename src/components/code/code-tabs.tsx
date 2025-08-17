import fs from "node:fs"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { COMPONENTS } from "@/data/components"
import { Code } from "./code"
import { CodeCollapsibleWrapper } from "./code-wrapper"
import { COMPONENT_MAP, getComponent } from "./component-map"
import { ComponentPreview } from "./component-preview"

type ComponentCodePreview = {
  componentName: string
  hasReTrigger?: boolean
}

export async function CodeTabs({
  componentName,
  hasReTrigger,
}: ComponentCodePreview) {
  const component = COMPONENTS.find(
    (component) => component.name === componentName
  )
  if (!component) return null
  const fileContent = fs.readFileSync(component.path, "utf8")

  const Component = getComponent(componentName as keyof typeof COMPONENT_MAP)

  return (
    <div className="not-prose relative z-0 flex items-center justify-between pt-2 pb-2">
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <TabsList className="">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <ComponentPreview
            component={<Component />}
            hasReTrigger={hasReTrigger}
          ></ComponentPreview>
        </TabsContent>
        <TabsContent value="code" className="">
          <CodeCollapsibleWrapper>
            <Code showLineNumbers={true} code={fileContent} />
          </CodeCollapsibleWrapper>
        </TabsContent>
      </Tabs>
    </div>
  )
}
