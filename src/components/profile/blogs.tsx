"use client"

import { Blog, BLOGS } from "@/data"
import { ArrowRight, CalendarIcon } from "lucide-react"
import Link from "next/link"
import { formatMonthYear } from "@/lib/utils"
import { SkillBadgeList } from "./experience-item"
import { HeaderTitle } from "./header-title"

export const Blogs: React.FC = () => {
  return (
    <>
      <section className="w-full">
        <HeaderTitle title="Blogs" />
        <div className="flex flex-col">
          {BLOGS.map((blog) => (
            <SingleBlog key={blog.title} blog={blog} />
          ))}
        </div>
      </section>
    </>
  )
}

export const SingleBlog: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <Link
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      className="border-edge group w-full border-b-[1px] p-1 last:border-b-0 hover:cursor-pointer"
    >
      <div className="hover:bg-accent flex w-full flex-col gap-y-1 rounded-[10px] p-2">
        {/* Top Section */}
        <div>
          <h3 className="text-primary/95 mb-1 text-sm leading-snug font-medium text-balance sm:text-base">
            {blog.title}
          </h3>
        </div>
        {/* Middle Section */}
        <div className="flex flex-row items-center justify-between pb-1">
          <div className="flex flex-row items-center">
            <CalendarIcon className="text-muted-foreground size-3 sm:size-4" />
            <span className="ml-2 text-[14px]">
              {formatMonthYear(blog.date)}
            </span>
          </div>
          <div>
            <ArrowRight className="text-muted-foreground size-3 -rotate-45 transition-all duration-300 group-hover:rotate-0 sm:size-4" />
          </div>
        </div>
        {/* Bottom Section */}
        <div>
          <SkillBadgeList skills={blog.tags} />
        </div>
      </div>
    </Link>
  )
}
