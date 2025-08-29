import { metadataMap } from "@/lib/og"
import React from "react"

export const metadata = metadataMap["command"]

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
