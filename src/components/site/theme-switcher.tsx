"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  if (!mounted) {
    return (
      <div className="hover:bg-accent/50 flex cursor-pointer items-center justify-center rounded-md p-2 transition-colors">
        <div className="size-5" />
      </div>
    )
  }

  return (
    <div
      className="hover:bg-accent/50 flex cursor-pointer items-center justify-center rounded-md p-2 transition-colors"
      onClick={handleClick}
    >
      {theme === "light" ? (
        <Moon className="size-5" />
      ) : (
        <Sun className="size-5" />
      )}
    </div>
  )
}
