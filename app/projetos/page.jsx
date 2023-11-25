import SpinningLoading from "@/components/SpinningLoading";
import dynamic from "next/dynamic";

const ProjectsSlider = dynamic(() => import("@/components/ProjectsSlider"), {
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
          <div className="flex flex-col text-left max-w-[400px] 2xl:max-w-[600px] max-sm:max-w-full max-sm:px-5">
            <h2 className="text-2xl max-sm:text-lg 2xl:text-6xl xl:text-4xl font-semibold">
              Meus Projetos<span className="text-accent">.</span>
            </h2>
            <p className="font-extralight text-lg max-sm:text-sm 2xl:text-2xl">
              Bem-vindo à seção de projetos, onde compartilho alguns desafios realizados e ideias que sairam do papél, além de mostrar um pouco da minha experiência como desenvolvedor. Sinta-se convidado para explorar os repositórios e os Deployments.
            </p>
          </div>
          <ProjectsSlider />
        </div>
      </div>
    </main>
  )
}