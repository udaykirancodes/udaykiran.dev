"use client"

import { cn } from "@/lib/utils"
import { motion, useScroll, useSpring, useTransform } from "motion/react"

const BAR_COUNT = 61
const SPREAD = 8 // how many bars the ripple spreads across

export const AnimatingScrollBars = () => {
  const { scrollYProgress } = useScroll()

  // Wave center: marches from -SPREAD (before first bar) to BAR_COUNT + SPREAD (past last bar)
  // so every bar gets a turn at being the "active" center across the full scroll range
  const waveCenter = useTransform(
    scrollYProgress,
    [0, 1],
    [-SPREAD, BAR_COUNT + SPREAD]
  )

  return (
    <section
      className={cn(
        "fixed top-1/2 left-0 hidden -translate-y-1/2 lg:inline-block"
      )}
    >
      {Array.from({ length: BAR_COUNT }).map((_, index) => (
        <Bar key={index} index={index} waveCenter={waveCenter} />
      ))}
    </section>
  )
}

const Bar = ({
  index,
  waveCenter,
}: {
  index: number
  waveCenter: ReturnType<typeof useTransform<number, number>>
}) => {
  const isLongerLine = index % 5 === 0

  // Distance of this bar from the moving wave center
  const distance = useTransform(waveCenter, (center) => index - center)

  const width = useSpring(
    useTransform(
      distance,
      [-SPREAD, 0, SPREAD],
      isLongerLine ? [50, 100, 50] : [40, 80, 40]
    ),
    {
      bounce: 0,
      stiffness: 200,
      damping: 20,
    }
  )

  return (
    <motion.div
      style={{ width }}
      className={cn(
        "my-1.5 h-px bg-neutral-300 dark:bg-neutral-600",
        isLongerLine && "bg-neutral-400 dark:bg-neutral-500"
      )}
    />
  )
}
