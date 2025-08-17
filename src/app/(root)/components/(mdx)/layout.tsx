export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="mt-0 flex min-h-screen flex-col px-2">{children}</div>
    </>
  )
}
