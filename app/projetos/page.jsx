import ProjectsText from "@/components/ProjectsText"
import ProjectsCarroussel from "@/components/ProjectsCarroussel"

export default function Projects() {
  return (
    <main className={`h-full w-screen overflow-hidden flex items-center justify-center`}>
      <div className={`container mx-auto`}>
        <div className="flex flex-col lg:flex-row justify-around gap-5 lg:gap-0 items-center">
          <ProjectsText />
          <ProjectsCarroussel />
        </div>
      </div>
    </main>
  )
}