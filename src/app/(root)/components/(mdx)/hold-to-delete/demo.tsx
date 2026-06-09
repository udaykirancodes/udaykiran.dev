"use client"

import { HoldToDeleteButton } from "@/core/hold-to-delete/index"
import { toast } from "sonner"

const Demo = () => {
  const handleDelete = () => {
    toast.success("Deleted Action Triggered!", {
      position: "top-center",
    })
  }
  return (
    <div className="dark:bg-secondary flex h-[70vh] w-full flex-col items-center justify-center gap-4 rounded-md bg-white/60">
      <HoldToDeleteButton onDelete={handleDelete} />
      <p className="mt-10 text-center text-xs underline-offset-4">
        click & hold the button or use spacebar if button is in focus to trigger
        the delete
      </p>
    </div>
  )
}

export default Demo
