import React from "react"

type PageHeaderTitle = {
  title: string
  description: string
}

export function PageHeaderTitle({ title, description }: PageHeaderTitle) {
  return (
    <>
      <div className="border-edge border-b-[1px] px-2 py-2">
        <h1 className="text-primary/90 text-base font-bold sm:text-xl md:text-2xl">
          {title}
        </h1>
      </div>
      <div className="border-edge border-b-[1px] px-2 py-2">
        <p className="text-primary/90 font-mono text-xs sm:text-sm">
          {description}
        </p>
      </div>
    </>
  )
}
