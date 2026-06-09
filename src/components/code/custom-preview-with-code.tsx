import { getFileContent } from "@/lib/file"
import { CodeTabs } from "./code-tabs"

type CustomPreviewWithCodeProps = {
  component: React.ReactNode
  filePath: string
}

export async function CustomPreviewWithCode({
  component,
  filePath,
}: CustomPreviewWithCodeProps) {
  const fileContent = await getFileContent(filePath)

  return (
    <>
      <CodeTabs component={component} fileContent={fileContent} />
    </>
  )
}
