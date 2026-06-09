import fs from "node:fs/promises"

export const getFileContent = async (path: string) => {
  try {
    return await fs.readFile(path, "utf8")
  } catch (error) {
    console.error(`Error reading file ${path}:`, error)
    return ""
  }
}
