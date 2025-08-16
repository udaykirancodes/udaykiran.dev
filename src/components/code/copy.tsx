"use client"

import { copyToClipboard } from "@/lib/copy"
import { cn } from "@/lib/utils"

import { Check, Copy } from "lucide-react"
import React, { useState } from "react"

type CopyCodeProps = {
  code: string
  position?: "absolute" | "relative"
}

const CopyCode: React.FC<CopyCodeProps> = ({ code, position = "absolute" }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false)

  const onCopy = () => {
    copyToClipboard(code)
    setHasCheckIcon(true)

    setTimeout(() => {
      setHasCheckIcon(false)
    }, 1000)
  }

  return (
    <div
      className={cn(
        position === "absolute" ? "absolute top-3 right-3" : "relative",
        "cursor-pointer bg-transparent p-2 opacity-100 group-hover:opacity-100"
      )}
      onClick={onCopy}
    >
      <div
        className={`absolute inset-0 transform transition-all duration-150 ${
          hasCheckIcon ? "scale-90 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <Copy className="h-4 w-4" />
      </div>
      <div
        className={`absolute inset-0 transform transition-all duration-150 ${
          hasCheckIcon ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <Check className="h-4 w-4" />
      </div>
    </div>
  )
}

export { CopyCode }
