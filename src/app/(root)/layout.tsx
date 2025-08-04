import { SiteHeader } from "@/components/site/site-header"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <SiteHeader />
      <main className="max-w-screen overflow-x-hidden px-1">{children}</main>
    </>
  )
}
