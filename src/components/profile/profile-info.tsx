import { USER } from "@/data/constants"
import { Code2Icon, Mail, MapPin } from "lucide-react"
import { Button } from "../ui/button"

type ProfileInfoProps = {
  icon: React.ReactNode
  content: React.ReactNode
}

const PROFILE_INFO: ProfileInfoProps[] = [
  {
    icon: <Code2Icon className="text-primary h-4 w-4 text-xl" />,
    content: (
      <div className="text-primary/90 font-mono">
        SDE at{" "}
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
      <div className="text-primary/90 font-mono text-sm">
        Medak,Hyderabad,Telangana,India
      </div>
    ),
  },
]

export const ProfileInfo = () => {
  return (
    <section className="w-full p-2">
      <div className="flex flex-col items-center gap-x-2 gap-y-3">
        {PROFILE_INFO.map((item, index) => {
          return <Item key={index} {...item} />
        })}
      </div>
      <div></div>
    </section>
  )
}

const Item = ({ icon, content }: ProfileInfoProps) => {
  return (
    <div className="flex w-full items-center gap-x-2">
      <div className="bg-accent flex size-7 items-center justify-center rounded-md">
        {icon}
      </div>
      <div>{content}</div>
    </div>
  )
}
