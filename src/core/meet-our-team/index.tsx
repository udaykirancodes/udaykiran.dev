import Image from "next/image"

export type TeamMember = {
  name: string
  role: string
  imageUrl: string
}

type MeetOurTeamProps = {
  team: TeamMember[]
}

export const MeetOurTeam: React.FC<MeetOurTeamProps> = ({ team }) => {
  return (
    <div className="mx-auto max-w-4xl bg-neutral-50 py-10 dark:bg-neutral-950">
      <div className="space-y-2 px-2 sm:px-10">
        <h1 className="text-center text-4xl font-bold sm:text-5xl">
          Meet our Team
        </h1>
        <p className="text-muted-foreground px-5 text-center text-xl">
          We are a team of passionate and talented individuals who are dedicated
          to creating innovative solutions for our clients.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-10">
        {team.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

const TeamMember = ({
  name,
  role,
  imageUrl,
}: {
  name: string
  role: string
  imageUrl: string
}) => {
  return (
    <div
      className={
        "flex w-[150px] flex-row items-center gap-2 rounded-[64px] bg-white p-2 sm:w-[250px] sm:gap-3"
      }
    >
      <div>
        <Image
          src={imageUrl}
          alt={name}
          width={80}
          height={80}
          className="h-8 w-8 rounded-full sm:h-16 sm:w-16"
        />
      </div>
      <div className="p-0 sm:pr-4">
        <h1 className={"text-xs font-semibold text-black/95 sm:text-base"}>
          {name}
        </h1>
        <p className={"text-muted-foreground text-[10px] sm:text-sm"}>{role}</p>
      </div>
    </div>
  )
}
