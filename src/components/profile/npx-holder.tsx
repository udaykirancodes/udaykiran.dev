"use client"

import { useState } from "react"
import { CopyCode } from "../code/copy"
import { TextRoll } from "./text-roll"

export function NPXHolder() {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="pointer-events-none absolute top-0 z-50 hidden h-1/2 w-full flex-col items-center justify-center sm:flex">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="bg-background group border-border pointer-events-auto relative flex w-fit max-w-sm -translate-y-2/3 flex-col items-center justify-between rounded-md border p-0.5"
      >
        <div className="bg-muted/50 border-border relative flex max-w-sm flex-col items-center justify-between rounded-sm border px-2 py-1">
          <div className="text-muted-foreground flex items-center gap-x-2">
            <TextRoll
              isHovered={hovered}
              className="text-muted-foreground font-mono text-xs sm:text-sm"
              variants={{
                enter: {
                  initial: {
                    rotateX: 0,
                    filter: "blur(0px)",
                  },
                  animate: {
                    rotateX: 90,
                    filter: "blur(2px)",
                  },
                },

                exit: {
                  initial: {
                    rotateX: 90,
                    filter: "blur(2px)",
                  },
                  animate: {
                    rotateX: 0,
                    filter: "blur(0px)",
                  },
                },
              }}
              duration={1.2}
            >
              npx udaykiran
            </TextRoll>
            <CopyCode code={"npx udaykiran"} position="relative" />
          </div>
        </div>
      </div>
    </div>
  )
}
