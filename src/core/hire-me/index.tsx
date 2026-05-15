"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import Image from "next/image"
import { useEffect, useState } from "react"

const ANIMATION_DURATION = 1 // seconds
const ANIMATION_REPEAT_DELAY = 1 // seconds

export type HireMeProps = {
  text: string[]
  avatarSrc: string
}

export const HireMe = ({ text, avatarSrc }: HireMeProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => {
        setIndex((prevIndex) => (prevIndex + 1) % text.length)
      },
      ANIMATION_DURATION * 1000 + ANIMATION_REPEAT_DELAY * 1000
    )
    return () => clearInterval(interval)
  }, [text.length])
  return (
    <motion.div
      className={cn(
        "fixed right-6 bottom-6 z-50",
        "hidden items-center gap-x-2 sm:flex"
      )}
    >
      <div className={cn("flex h-10 items-center justify-center")}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: ANIMATION_DURATION,
            repeatDelay: ANIMATION_REPEAT_DELAY,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className={cn(
            "flex items-center justify-center gap-2 px-4 py-2",
            "h-8",
            "bg-accent",
            "rounded-full text-sm"
          )}
        >
          {text[index]}
        </motion.div>
      </div>
      <Image
        src={avatarSrc}
        alt="Uday Kiran"
        width={48}
        height={48}
        className={cn(
          "ring-primary ring-offset-base size-10 rounded-full ring-1"
        )}
      />
    </motion.div>
  )
}
