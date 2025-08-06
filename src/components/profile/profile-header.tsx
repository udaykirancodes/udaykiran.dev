import { USER } from "@/data/user"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function ProfileHeader() {
  return (
    <div className="relative flex h-full min-h-[250px] items-center justify-center">
      <div
        className={cn(
          "h-[50%] w-full",
          "absolute inset-0",
          "[background-image:radial-gradient(var(--edge)_1.5px,transparent_0)] [background-size:10px_10px] bg-repeat-round"
        )}
      />
      <div className="z-50 flex flex-col items-center justify-center gap-y-1">
        <Image
          src={USER.avatar}
          alt={`${USER.displayName}'s avatar`}
          width={300}
          height={300}
          fetchPriority="high"
          className="ring-border ring-offset-edge h-32 w-32 rounded-full ring-1 ring-offset-2 select-none"
        />
        <h1 className="text-primary text-center text-2xl font-bold">
          {USER.displayName}
        </h1>
        <h2 className="text-muted-foreground">SDE @ HexaCluster</h2>
      </div>
    </div>
  )
}
