"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import ReactGA from "react-ga4"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const PageViewAnalytics = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return
    // Initialize GA4
    ReactGA.initialize(GA_MEASUREMENT_ID)
  }, [])

  useEffect(() => {
    if (!pathname) return
    ReactGA.send({ hitType: "pageview", page: pathname })
  }, [pathname])

  return null
}
