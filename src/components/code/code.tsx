import type { BundledLanguage, BundledTheme } from "shiki" // Import the types from Shiki
import { codeToHtml } from "shiki"

type Props = {
  code: string
  lang?: BundledLanguage
  theme?: BundledTheme
}

export async function Code({
  code,
  lang = "javascript",
  theme = "github-dark",
}: Props) {
  const html = await codeToHtml(code, {
    lang,
    theme,
  })

  return (
    <div className="">
      {/* <div className="flex items-center justify-between bg-gradient-to-r from-neutral-900 to-neutral-800 py-2 pr-4 pl-2 text-sm">
          <span className="-mb-[calc(0.5rem+2px)] rounded-t-lg border-2 border-white/5 border-b-neutral-700 bg-neutral-800 px-4 py-2">
            {"filename.tsx"}
          </span>
        </div> */}
      <div
        className="text-sm [&_code]:block [&_code]:w-fit [&_code]:min-w-full [&>pre]:overflow-x-auto [&>pre]:!bg-neutral-900 [&>pre]:py-3 [&>pre]:pr-5 [&>pre]:pl-4 [&>pre]:leading-snug"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  )
}
