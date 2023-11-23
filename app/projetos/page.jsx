import ProjectsSlider from "@/components/ProjectsSlider";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo non, quam omnis, delectus sunt minima neque possimus ipsam hic voluptates voluptas autem veritatis doloremque mollitia quisquam labore optio? Incidunt, vero!
            </p>
          </div>
          <ProjectsSlider />
        </div>
      </div>
    </main>
  )
}