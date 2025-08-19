import { Badge } from "../ui/badge"
import { CopyCode } from "./copy"

type CopyFileNameProps = {
  fileName: string
}

export function CopyFileName({ fileName }: CopyFileNameProps) {
  return (
    <div className="flex items-center justify-start">
      <Badge variant={"outline"} className="my-1">
        <code className="font-mono text-sm">{fileName}</code>
      </Badge>
      <div className="ml-2">
        <CopyCode code={fileName} position="relative" />
      </div>
    </div>
  )
}
