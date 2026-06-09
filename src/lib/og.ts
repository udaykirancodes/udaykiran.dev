import { COMPONENTS } from "@/data"
import { Metadata } from "next"
import { generateMetaDataForOg } from "./utils"

export const metadataMap: Record<string, Metadata> = COMPONENTS.reduce(
  (acc, component) => {
    acc[component.name] = generateMetaDataForOg(component.name)
    return acc
  },
  {} as Record<string, Metadata>
)

export const getComponentTitle = (componentName: string) => {
  const component = COMPONENTS.find((c) => c.name === componentName)
  return component?.title || ""
}
