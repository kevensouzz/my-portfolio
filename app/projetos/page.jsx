import SpinningLoading from "@/components/SpinningLoading";
import dynamic from "next/dynamic";

const ProjectsSlider = dynamic(() => import("@/components/ProjectsSlider"), {
  ssr: false,
  loading: () =>
    <div className="w-2/3 max-sm:w-full flex justify-center items-center">
      <SpinningLoading />
    </div>
})

const ProjectsText = dynamic(() => import("@/components/ProjectsText"), {
  ssr: false,
  loading: () =>
    <div className="w-2/3 max-sm:w-full flex justify-center items-center">
      <SpinningLoading />
    </div>
})

export default function Projects() {
  return (
    <main className={`h-full w-full flex items-center justify-center`}>
      <div className={`container mx-auto`}>
        <div className="flex flex-col lg:flex-row justify-around gap-5 lg:gap-0 items-center">
          <ProjectsText />
          <ProjectsSlider />
        </div>
      </div>
    </main>
  )
}