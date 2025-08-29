import { metadataMap } from "@/lib/og"
import React from "react"

export const metadata = metadataMap["wellfound-landing-animation"]

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
