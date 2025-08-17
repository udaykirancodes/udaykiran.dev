import { cn } from "@/lib/utils"
import type { BundledLanguage } from "shiki" // Import the types from Shiki
import { codeToHtml } from "shiki"
import { CopyCode } from "./copy"

type Props = {
  code: string
  lang?: BundledLanguage
  showLineNumbers?: boolean
}

export async function Code({
  code,
  lang = "javascript",
  showLineNumbers = false,
}: Props) {
  const htmlLight = await codeToHtml(code, { lang, theme: "github-light" })
  const htmlDark = await codeToHtml(code, { lang, theme: "github-dark" })

  const wrapperClass = showLineNumbers ? "" : "no-lines"

  return (
    <div className="relative my-1">
      <div>
        <CopyCode code={code} />
      </div>
      <div
        className={cn(
          wrapperClass,
          "overflow-hidden rounded-md text-sm dark:hidden [&_code]:block [&_code]:w-fit [&_code]:min-w-full [&>pre]:overflow-x-auto [&>pre]:!bg-neutral-100 [&>pre]:py-3 [&>pre]:pr-5 [&>pre]:pl-4 [&>pre]:leading-snug"
        )}
        dangerouslySetInnerHTML={{ __html: htmlLight }}
      />
      <div
        className={cn(
          wrapperClass,
          "hidden overflow-hidden rounded-md text-sm dark:block [&_code]:block [&_code]:w-fit [&_code]:min-w-full [&>pre]:overflow-x-auto [&>pre]:!bg-neutral-900 [&>pre]:py-3 [&>pre]:pr-5 [&>pre]:pl-4 [&>pre]:leading-snug"
        )}
        dangerouslySetInnerHTML={{ __html: htmlDark }}
      />
    </div>
  )
}
