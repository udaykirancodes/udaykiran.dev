import { Code } from "@/components/code/code"
import { getFileContent } from "@/lib/file"
import { CodeCollapsibleWrapper } from "./code-wrapper"

type CodeWithFilenameProps = {
  fileName: string
  showLineNumbers?: boolean
  collapsible?: boolean
}

export async function CodeWithFilename({
  fileName,
  showLineNumbers = false,
  collapsible = false,
}: CodeWithFilenameProps) {
  const code = await getFileContent(fileName)

  if (collapsible) {
    return (
      <CodeCollapsibleWrapper>
        <Code code={code} showLineNumbers={showLineNumbers} />
      </CodeCollapsibleWrapper>
    )
  }
  return <Code code={code} showLineNumbers={showLineNumbers} />
}
