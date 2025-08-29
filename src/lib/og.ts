import { COMPONENTS } from "@/data"
import { Metadata } from "next"
import { generateMetaDataForOg } from "./utils"

const names = COMPONENTS.map((component) => {
  return component.name
})

export const metadataMap = names.reduce(
  (acc, cur) => {
    acc[`${cur}`] = generateMetaDataForOg(cur)
    return acc
  },
  {} as Record<string, Metadata>
)
