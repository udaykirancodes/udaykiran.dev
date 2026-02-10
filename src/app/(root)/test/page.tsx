"use client"

import { HoldToDeleteButton } from "@/core/hold-to-delete"

export default function page() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-4 p-4">
      <HoldToDeleteButton />
    </div>
  )
}
