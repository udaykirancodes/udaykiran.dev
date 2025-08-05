import { ArrowUpRight, Code2Icon, Mail, MapPin } from "lucide-react"

import { Button } from "../ui/button"

import { USER } from "@/data/constants"
import Image from "next/image"
import React from "react"

type ProfileInfoProps = {
  icon: React.ReactNode
  content: React.ReactNode
}

const PROFILE_INFO: ProfileInfoProps[] = [
  {
    icon: <Code2Icon className="text-primary h-4 w-4 text-xl" />,
    content: (
      <div className="">
        <span className="text-primary/90 p-0 font-mono text-sm">SDE at </span>
        <Button asChild variant={"link"} className="p-0 font-mono text-sm">
          <a target="_blanket" href="https://hexacluter.ai">
            @HexaCluster
          </a>
        </Button>
      </div>
    ),
  },
  {
    icon: <Mail className="text-primary h-4 w-4 text-xl" />,
    content: (
      <div className="text-primary/90">
        <Button asChild variant={"link"} className="p-0 font-mono text-sm">
          <a href={`mailto:${USER.email}`}>{USER.email}</a>
        </Button>
      </div>
    ),
  },
  {
    icon: <MapPin className="text-primary h-4 w-4 text-xl" />,
    content: (
      <div>
        <p className="text-primary/90 p-0 font-mono text-sm">
          Medak,Hyderabad,Telangana,India
        </p>
      </div>
    ),
  },
]

export const ProfileInfo = () => {
  return (
    <section className="w-full p-2">
      <div className="grid grid-rows-3">
        {PROFILE_INFO.map((item, index) => {
          return <SocialItem key={index} {...item} />
        })}
      </div>
      <div className="my-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {USER.socials.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            className="border-edge group relative flex cursor-pointer flex-row rounded-sm border-[1px] border-dashed"
          >
            <div
              key={item.name}
              className="flex w-full items-center gap-x-2 p-2"
            >
              <div className="flex h-full items-center justify-center overflow-hidden">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={48}
                  height={48}
                  quality={100}
                  unoptimized
                  fetchPriority="high"
                  className="h-8 w-8 rounded-sm"
                />
              </div>
              <div className="border-edge h-[80%] border-r-[1px] border-dashed" />
              <div className="flex-1">
                <h3 className="text-primary text-[14px] font-medium">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm">{item.username}</p>
              </div>
              <div className="opacity-0 transition-all delay-50 group-hover:opacity-100">
                <ArrowUpRight className="text-primary h-4 w-4 text-xl" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

const SocialItem = ({ icon, content }: ProfileInfoProps) => {
  return (
    <div className="flex w-full items-center gap-x-2">
      <div className="bg-accent flex size-7 items-center justify-center rounded-md">
        {icon}
      </div>
      <div>{content}</div>
    </div>
  )
}
