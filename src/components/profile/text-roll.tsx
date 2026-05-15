"use client"

import {
  motion,
  TargetAndTransition,
  Transition,
  useAnimationControls,
  Variants,
} from "motion/react"
import { useEffect, useRef } from "react"

type RollVariants = {
  enter: {
    initial: TargetAndTransition
    animate: TargetAndTransition
  }
  exit: {
    initial: TargetAndTransition
    animate: TargetAndTransition
  }
}

export type TextRollProps = {
  children: string
  isHovered?: boolean
  duration?: number
  getEnterDelay?: (index: number) => number
  getExitDelay?: (index: number) => number
  className?: string
  transition?: Transition
  variants?: RollVariants
}

export function TextRoll({
  children,
  isHovered = false,
  duration = 0.5,
  getEnterDelay = (i) => i * 0.05,
  getExitDelay = (i) => i * 0.05,
  className,
  transition = {
    type: "spring",
    stiffness: 120,
    damping: 18,
  },
  variants,
}: TextRollProps) {
  const controls = useAnimationControls()

  const hasMounted = useRef(false)
  const prevHovered = useRef(isHovered)

  const defaultVariants: RollVariants = {
    enter: {
      initial: { rotateX: 0 },
      animate: { rotateX: 90 },
    },
    exit: {
      initial: { rotateX: 90 },
      animate: { rotateX: 0 },
    },
  }

  const letters = children.split("")

  /**
   * Initial mount animation
   *
   * enter -> exit
   */
  useEffect(() => {
    let mounted = true

    async function playInitialAnimation() {
      await controls.start("enter")

      if (!mounted) return

      await controls.start("exit")

      if (!mounted) return

      hasMounted.current = true
    }

    playInitialAnimation()

    return () => {
      mounted = false
    }
  }, [controls])

  /**
   * External hover animation
   *
   * false -> true  = enter
   * true -> false  = exit
   */
  useEffect(() => {
    if (!hasMounted.current) return

    const wasHovered = prevHovered.current

    async function handleHoverAnimation() {
      // Hover enter
      if (!wasHovered && isHovered) {
        await controls.start("enter")
      }

      // Hover leave
      if (wasHovered && !isHovered) {
        await controls.start("exit")
      }
    }

    handleHoverAnimation()

    prevHovered.current = isHovered
  }, [isHovered, controls])

  return (
    <motion.span initial="exit" animate={controls} className={className}>
      {letters.map((letter, i) => {
        const enterVariants: Variants = {
          exit: variants?.enter.initial ?? defaultVariants.enter.initial,

          enter: variants?.enter.animate ?? defaultVariants.enter.animate,
        }

        const exitVariants: Variants = {
          exit: variants?.exit.initial ?? defaultVariants.exit.initial,

          enter: variants?.exit.animate ?? defaultVariants.exit.animate,
        }

        return (
          <span
            key={i}
            className="relative inline-block [perspective:1000px] [transform-style:preserve-3d]"
            aria-hidden="true"
          >
            {/* Enter Layer */}
            <motion.span
              className="absolute top-0 left-0 inline-block [transform-origin:50%_25%] [backface-visibility:hidden]"
              variants={enterVariants}
              transition={{
                ...transition,
                duration,
                delay: getEnterDelay(i),
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>

            {/* Exit Layer */}
            <motion.span
              className="absolute top-0 left-0 inline-block [transform-origin:50%_100%] [backface-visibility:hidden]"
              variants={exitVariants}
              transition={{
                ...transition,
                duration,
                delay: getExitDelay(i),
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>

            {/* Layout spacer */}
            <span className="invisible">
              {letter === " " ? "\u00A0" : letter}
            </span>
          </span>
        )
      })}
    </motion.span>
  )
}
