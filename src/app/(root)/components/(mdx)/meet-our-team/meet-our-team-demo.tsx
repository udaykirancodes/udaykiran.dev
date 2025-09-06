import { MeetOurTeam } from "@/core/meet-our-team"

export const MeetOurTeamDemo = () => {
  const team = [
    {
      name: "Uday Kiran",
      role: "Software Engineer",
      imageUrl: "/assets/uday.jpeg",
    },
    {
      name: "Uday Kiran",
      role: "Founder",
      imageUrl: "/assets/uday.jpeg",
    },
    {
      name: "Uday Kiran",
      role: "SDE",
      imageUrl: "/assets/uday.jpeg",
    },
    {
      name: "Uday Kiran",
      role: "UI/UX Developer",
      imageUrl: "/assets/uday.jpeg",
    },
    {
      name: "Uday Kiran",
      role: "Backend Engineer",
      imageUrl: "/assets/uday.jpeg",
    },
  ]
  return (
    <>
      <MeetOurTeam team={team} />
    </>
  )
}
