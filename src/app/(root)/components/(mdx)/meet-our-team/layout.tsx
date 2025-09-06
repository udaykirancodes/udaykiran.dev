import { getComponentTitle, metadataMap } from "@/lib/og"
import React from "react"

const componentName = "meet-our-team"

export const metadata = {
  title: getComponentTitle(componentName),
  ...metadataMap[componentName],
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
