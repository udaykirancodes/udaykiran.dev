"use client"

import { cn } from "@/lib/utils"
import { motion, useScroll, useSpring, useTransform } from "motion/react"

const BAR_COUNT = 61
const SPREAD = 8 // how many bars the ripple spreads across

export function AnimatingScrollBars() {
  const { scrollYProgress } = useScroll()

  // Single spring for overall scroll to avoid 61 springs
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    bounce: 0,
  })

  // Wave center: marches from -SPREAD to BAR_COUNT + SPREAD
  const waveCenter = useTransform(
    smoothScroll,
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

  // Base width is 50px for long, 40px for short
  const baseWidth = isLongerLine ? 50 : 40
  // Peak width is 100px for long, 80px for short
  const peakWidth = isLongerLine ? 100 : 80
  const scalePeak = peakWidth / baseWidth

  const scaleX = useTransform(waveCenter, (center) => {
    const dist = index - center
    if (dist <= -SPREAD || dist >= SPREAD) return 1
    // Linear interpolation for scale
    const progress = 1 - Math.abs(dist) / SPREAD
    return 1 + (scalePeak - 1) * progress
  })

  return (
    <motion.div
      style={{ width: baseWidth, scaleX, transformOrigin: "left" }}
      className={cn(
        "my-1.5 h-px bg-neutral-300 dark:bg-neutral-600",
        isLongerLine && "bg-neutral-400 dark:bg-neutral-500",
        "will-change-transform"
      )}
    />
  )
}
