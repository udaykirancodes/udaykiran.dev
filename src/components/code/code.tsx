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

  const htmlLight = await codeToHtml(code, { lang, theme: "github-light" })
  const htmlDark = await codeToHtml(code, { lang, theme: "github-dark" })

  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-md text-sm dark:hidden [&_code]:block [&_code]:w-fit [&_code]:min-w-full [&>pre]:overflow-x-auto [&>pre]:!bg-neutral-50 [&>pre]:py-3 [&>pre]:pr-5 [&>pre]:pl-4 [&>pre]:leading-snug"
        dangerouslySetInnerHTML={{ __html: htmlLight }}
      />
      <div
        className="hidden overflow-hidden rounded-md text-sm dark:block [&_code]:block [&_code]:w-fit [&_code]:min-w-full [&>pre]:overflow-x-auto [&>pre]:!bg-neutral-900 [&>pre]:py-3 [&>pre]:pr-5 [&>pre]:pl-4 [&>pre]:leading-snug"
        dangerouslySetInnerHTML={{ __html: htmlDark }}
      />
    </div>
  )
}
