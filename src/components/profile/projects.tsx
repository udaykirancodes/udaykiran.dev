import { PROJECTS } from "@/data/projects"
import { HeaderTitle } from "./header-title"
import { ProjectItem } from "./project-item"

export const Projects: React.FC = () => {
  return (
    <>
      <section className="w-full">
        <HeaderTitle title="Projects" />
        <div className="grid w-full">
          {PROJECTS.map((item) => {
            return <ProjectItem key={item.title} project={item} />
          })}
        </div>
      </section>
    </>
  )
}
