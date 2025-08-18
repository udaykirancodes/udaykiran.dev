import fs from "node:fs"

export const getFileContent = (path: string) => {
  return fs.readFileSync(path, "utf8")
}
