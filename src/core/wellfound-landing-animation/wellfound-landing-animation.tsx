"use client"

import { motion } from "motion/react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

const MULTIPLIER = 5
type DIRECTION = "opposite" | "same"

const techButtons = [
  { id: 1, name: "Next.js", x: 15, y: 20, multiplier: 0.03 * MULTIPLIER },
  { id: 2, name: "React", x: 70, y: 15, multiplier: 0.025 * MULTIPLIER },
  { id: 3, name: "Tailwind CSS", x: 25, y: 60, multiplier: 0.04 * MULTIPLIER },
  { id: 4, name: "TypeScript", x: 80, y: 70, multiplier: 0.035 * MULTIPLIER },
  { id: 5, name: "Framer Motion", x: 45, y: 30, multiplier: 0.02 * MULTIPLIER },
  { id: 6, name: "Vercel", x: 85, y: 45, multiplier: 0.045 * MULTIPLIER },
  { id: 7, name: "Node.js", x: 10, y: 80, multiplier: 0.03 * MULTIPLIER },
  { id: 8, name: "Prisma", x: 60, y: 75, multiplier: 0.025 * MULTIPLIER },
  { id: 9, name: "Supabase", x: 35, y: 85, multiplier: 0.04 * MULTIPLIER },
  { id: 10, name: "shadcn/ui", x: 75, y: 25, multiplier: 0.035 * MULTIPLIER },
]

type Props = {
  direction?: DIRECTION
}

export const WellFoundLandingAnimation = ({
  direction = "opposite",
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const [state, setState] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setState({
      width: rect.width,
      height: rect.height,
    })
  }, [ref, setState])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-[60vh] w-full overflow-hidden"
    >
      {techButtons.map((item, index) => {
        return (
          <motion.div
            key={index}
            className={cn("absolute top-0 left-0")}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 0.8,
            }}
            animate={{
              x:
                (direction === "opposite" ? -1 : 1) *
                ((mousePosition.x - state.width / 2) * item.multiplier),
              y:
                (direction === "opposite" ? -1 : 1) *
                ((mousePosition.y - state.height / 2) * item.multiplier),
            }}
          >
            <Button asChild variant={"outline"}>
              <span>{item.name}</span>
            </Button>
          </motion.div>
        )
      })}

      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        <div className="flex w-auto items-center justify-center rounded-md border-2 border-dashed border-red-500 px-4 py-2">
          <h1 className="text-3xl font-semibold">Find what&apos;s next</h1>
        </div>
      </div>
    </div>
  )
}
