"use client"

import { cn } from "@/lib/utils"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { useRef } from "react"

export const AnimatingBars = () => {
  const bars = new Array(61).fill(0)

  const mouseY = useMotionValue<number>(Infinity)

  return (
    <section
      onMouseMove={(e) => mouseY.set(e.clientY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className={cn(
        "fixed top-1/2 left-0 hidden -translate-y-1/2 md:inline-block"
      )}
    >
      {bars.map((_, index) => (
        <Bar key={index} index={index} mouseY={mouseY} />
      ))}
    </section>
  )
}

const Bar = ({
  index,
  mouseY,
}: {
  index: number
  mouseY: ReturnType<typeof useMotionValue<number>>
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const isLongerLine = index % 5 === 0

  const distance = useTransform(mouseY, (value) => {
    if (value === Infinity) return 1000 // far away → small width

    const bounds = ref.current?.getBoundingClientRect()
    if (!bounds) return 0

    return value - bounds.y - bounds.height / 2
  })

  const width = useSpring(
    useTransform(
      distance,
      [-50, 0, 50],
      isLongerLine ? [50, 120, 50] : [40, 100, 40]
    ),
    {
      bounce: 0,
      stiffness: 200,
      damping: 20,
    }
  )

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "my-1.5 h-px bg-neutral-300 dark:bg-neutral-600",
        isLongerLine && "bg-neutral-400 dark:bg-neutral-500"
      )}
    />
  )
}
