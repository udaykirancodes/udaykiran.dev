import { EXPERIENCE } from "@/data/experience"
import { ExperienceItem } from "./experience-item"
import { HeaderTitle } from "./header-title"

export function Experience() {
  return (
    <>
      <section className="w-full">
        <HeaderTitle title="Experience" />
        <div className="grid w-full">
          {EXPERIENCE.map((item) => {
            return <ExperienceItem key={item.title} experience={item} />
          })}
        </div>
      </section>
    </>
  )
}
