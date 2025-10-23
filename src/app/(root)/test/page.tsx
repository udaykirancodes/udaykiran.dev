"use client"

import { HireMe } from "@/core/hire-me"
import { TEXT_TO_ANIMATE } from "@/data"

export default function page() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-4 p-4">
      <HireMe text={TEXT_TO_ANIMATE} />
    </div>
  )
}
