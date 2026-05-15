"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"

const AnimatedClock = () => {
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    setTime(new Date())
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!time) {
    return (
      <div className="flex h-[600px] items-end justify-center overflow-hidden"></div>
    )
  }

  return (
    <div className="flex h-[600px] items-end justify-center overflow-hidden">
      <div className="mt-10 inline-flex gap-x-4 text-white">
        <WatchCard limit={2} activeNumber={Math.floor(time.getHours() / 10)} />
        <WatchCard limit={9} activeNumber={Math.floor(time.getHours() % 10)} />
        :
        <WatchCard
          limit={5}
          activeNumber={Math.floor(time.getMinutes() / 10)}
        />
        <WatchCard
          limit={9}
          activeNumber={Math.floor(time.getMinutes() % 10)}
        />
        :
        <WatchCard
          limit={5}
          activeNumber={Math.floor(time.getSeconds() / 10)}
        />
        <WatchCard
          limit={9}
          activeNumber={Math.floor(time.getSeconds() % 10)}
        />
      </div>
    </div>
  )
}

export default AnimatedClock

export const WatchCard = ({
  limit,
  activeNumber,
}: {
  limit: number
  activeNumber: number
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: activeNumber * 32 * -1 }}
      transition={{
        duration: activeNumber === 0 ? 0.3 : 1,
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className={
        "flex max-h-max w-12 flex-col items-center rounded-md bg-yellow-500 py-1"
      }
    >
      {Array.from({ length: limit + 1 }).map((_, i) => {
        return (
          <motion.div
            key={i}
            className={`flex size-8 items-center justify-center rounded-full text-xl transition duration-300 ease-in ${
              activeNumber === i ? "bg-black" : "bg-yellow-500"
            }`}
          >
            {i}
          </motion.div>
        )
      })}
    </motion.div>
  )
}
