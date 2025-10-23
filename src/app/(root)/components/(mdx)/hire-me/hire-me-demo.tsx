"use client"

import { HireMe } from "@/core/hire-me"

const TEXT_TO_ANIMATE = [
  "I'm Uday Kiran",
  "I'm a Software Engineer",
  "Hire me, I use Next.js!",
  "Hire me, I use Zustand!",
  "Hire me, I use TailwindCSS!",
  "Hire me, I use TypeScript!",
]

export const HireMeDemo = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-base underline underline-offset-4">
        check this at bottom right!
      </h1>
      <HireMe text={TEXT_TO_ANIMATE} />
    </div>
  )
}
