"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import React from "react"

const TRANSITION_DURATION = 2 * 1000 // ms

export const HoldToDeleteButton = ({ onDelete }: { onDelete?: () => void }) => {
  const timerRef = React.useRef<NodeJS.Timeout | null>(null)
  const [isHolding, setIsHolding] = React.useState(false)

  const startHold = () => {
    if (timerRef.current) return
    setIsHolding(true)
    timerRef.current = setTimeout(() => {
      onDelete?.()
      setIsHolding(false)
    }, TRANSITION_DURATION)
  }

  const cancelHold = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
      setIsHolding(false)
    }
  }

  return (
    <>
      <Button
        onPointerDown={(e) => {
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
          startHold();
        }}
        onPointerUp={(e) => {
          (e.target as HTMLElement).releasePointerCapture(e.pointerId);
          cancelHold();
        }}
        onPointerLeave={cancelHold}
        onPointerCancel={cancelHold}
        onBlur={cancelHold}
        onKeyDown={(e) => {
          if (e.key === " ") {
             e.preventDefault(); 
             startHold();
          }
        }}
        size={"lg"}
        onKeyUp={(e) => {
          if (e.key === " ") {
            cancelHold()
          }
        }}
        className="relative cursor-pointer overflow-hidden border-none shadow-none ring-0 ring-offset-0 outline-none focus:scale-[0.97] focus-visible:scale-[0.97] active:scale-[0.97]"
      >
        <svg height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.75 2.75C6.75 2.05964 7.30964 1.5 8 1.5C8.69036 1.5 9.25 2.05964 9.25 2.75V3H6.75V2.75ZM5.25 3V2.75C5.25 1.23122 6.48122 0 8 0C9.51878 0 10.75 1.23122 10.75 2.75V3H12.9201H14.25H15V4.5H14.25H13.8846L13.1776 13.6917C13.0774 14.9942 11.9913 16 10.6849 16H5.31508C4.00874 16 2.92263 14.9942 2.82244 13.6917L2.11538 4.5H1.75H1V3H1.75H3.07988H5.25ZM4.31802 13.5767L3.61982 4.5H12.3802L11.682 13.5767C11.6419 14.0977 11.2075 14.5 10.6849 14.5H5.31508C4.79254 14.5 4.3581 14.0977 4.31802 13.5767Z"
            fill="currentColor"
          />
        </svg>
        Hold to Delete
        <div
          id={"overlay"}
          className={cn(
            "flex items-center justify-center gap-2 border border-[#FFDBDC] text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            "absolute top-0 left-0 flex h-full w-full items-center justify-center border-none bg-[#FFDBDC] text-[#E5484D] dark:bg-[#f56f73] dark:text-white",
            "transition-all duration-300 ease-out [clip-path:inset(-1px_100%_-1px_-1px)]",
            isHolding ? "duration-[2000ms] ease-linear [clip-path:inset(-1px_-1px_-1px_-1px)]" : ""
          )}
        >
          <svg
            height="16"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width="16"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.75 2.75C6.75 2.05964 7.30964 1.5 8 1.5C8.69036 1.5 9.25 2.05964 9.25 2.75V3H6.75V2.75ZM5.25 3V2.75C5.25 1.23122 6.48122 0 8 0C9.51878 0 10.75 1.23122 10.75 2.75V3H12.9201H14.25H15V4.5H14.25H13.8846L13.1776 13.6917C13.0774 14.9942 11.9913 16 10.6849 16H5.31508C4.00874 16 2.92263 14.9942 2.82244 13.6917L2.11538 4.5H1.75H1V3H1.75H3.07988H5.25ZM4.31802 13.5767L3.61982 4.5H12.3802L11.682 13.5767C11.6419 14.0977 11.2075 14.5 10.6849 14.5H5.31508C4.79254 14.5 4.3581 14.0977 4.31802 13.5767Z"
              fill="currentColor"
            />
          </svg>
          Hold to Delete
        </div>
      </Button>
    </>
  )
}
