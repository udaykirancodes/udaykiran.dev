import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code } from "./code"
import { CodeCollapsibleWrapper } from "./code-wrapper"
import { ComponentPreview } from "./component-preview"

type ComponentCodePreview = {
  component: React.ReactNode
  fileContent: string
  hasReTrigger?: boolean
}

export async function CodeTabs({
  fileContent,
  component,
  hasReTrigger,
}: ComponentCodePreview) {
  return (
    <div className="not-prose relative z-0 flex items-center justify-between pt-2 pb-2">
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <TabsList className="">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <ComponentPreview
            component={<>{component}</>}
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
