import { generateMetaDataForOg } from "@/lib/utils"
import React from "react"

export const metadata = generateMetaDataForOg("command")

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
