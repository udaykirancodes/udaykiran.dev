import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { readFileSync } from "node:fs"
import { Code } from "./code"
import { CodeCollapsibleWrapper } from "./code-wrapper"
import { ComponentPreview } from "./component-preview"

type ComponentCodePreview = {
  filePath: string
  hasReTrigger?: boolean
}

export function CodeTabs({ filePath, hasReTrigger }: ComponentCodePreview) {
  const fileContent =
    readFileSync(filePath.replace("@", "."), "utf8") || "code not found!"

  return (
    <div className="not-prose relative z-0 flex items-center justify-between pt-2 pb-2">
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <TabsList className="">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <ComponentPreview
            component={
              <>
                <h1>Hello World</h1>
              </>
            }
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
