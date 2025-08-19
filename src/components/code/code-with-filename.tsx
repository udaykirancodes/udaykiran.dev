import { Code } from "@/components/code/code"
import { getFileContent } from "@/lib/file"
import { CodeCollapsibleWrapper } from "./code-wrapper"

type CodeWithFilenameProps = {
  filename: string
  showLineNumbers?: boolean
  collapsible?: boolean
}

export const CodeWithFilename = ({
  filename,
  showLineNumbers = false,
  collapsible = false,
}: CodeWithFilenameProps) => {
  const code = getFileContent(filename)

  if (collapsible) {
    return (
      <CodeCollapsibleWrapper>
        <Code code={code} showLineNumbers={showLineNumbers} />
      </CodeCollapsibleWrapper>
    )
  }
  return <Code code={code} showLineNumbers={showLineNumbers} />
}
