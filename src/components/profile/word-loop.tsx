"use client"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion, Transition, Variants } from "motion/react"
import { useEffect, useState } from "react"

export type WordLoopProps = {
  /**
   * Array of plain strings to loop through.
   * Each string is split on spaces and animated word by word.
   */
  texts: string[]
  className?: string
  /** Seconds between transitions. Default: 3 */
  interval?: number
  /** Per-word entry/exit transition. Default: duration 0.25 */
  transition?: Transition
  /** Delay between each word in seconds. Default: 0.08 */
  wordStagger?: number
  /** Custom variants for each word span. Receives word index as `custom` prop. */
  wordVariants?: Variants
  onIndexChange?: (index: number) => void
  /** Set to false to pause the loop. Default: true */
  trigger?: boolean
}

const defaultWordVariants: Variants = {
  initial: { y: 18, opacity: 0, filter: "blur(4px)" },
  animate: () => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
  }),
  exit: () => ({
    y: -18,
    opacity: 0,
    filter: "blur(4px)",
  }),
}

export function WordLoop({
  texts,
  className,
  interval = 3,
  transition = { duration: 0.22, ease: "easeOut" },
  wordStagger = 0.08,
  wordVariants,
  onIndexChange,
  trigger = true,
}: WordLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!trigger) return
    const id = setInterval(() => {
      setCurrentIndex((cur) => {
        const next = (cur + 1) % texts.length
        onIndexChange?.(next)
        return next
      })
    }, interval * 1000)
    return () => clearInterval(id)
  }, [texts.length, interval, onIndexChange, trigger])

  const variants = wordVariants || defaultWordVariants
  const words = texts[currentIndex].split(" ")

  return (
    <span className={cn("inline-flex flex-wrap gap-x-[0.3em]", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        {words.map((word, i) => (
          <motion.span
            key={`${currentIndex}-${i}`}
            custom={i}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              ...transition,
              delay: i * wordStagger,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  )
}
