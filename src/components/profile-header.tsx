import { USER } from "@/data/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function ProfileHeader() {
  return (
    <div className="h-full">
      <div
        className={cn(
          "h-[150px] w-full",
          "[background-image:radial-gradient(var(--edge)_1px,transparent_0)] [background-size:10px_10px] bg-repeat-round"
        )}
      />
      <div className="flex translate-y-[-50%] flex-col items-center justify-center">
        <Image
          src={USER.avatar}
          alt={`${USER.displayName}'s avatar`}
          width={300}
          height={300}
          fetchPriority="high"
          className="ring-border ring-offset-edge h-32 w-32 rounded-full ring-1 ring-offset-2 select-none"
        />
        <h1 className="text-center">{USER.displayName}</h1>
      </div>
    </div>
  )
}
