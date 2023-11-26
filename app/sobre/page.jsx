import AboutText from "@/components/AboutText"
import AboutData from "@/components/AboutData"

export default function About() {
  return (
    <main className={`h-full w-screen overflow-hidden py-32 text-center xl:text-left`}>
      <div className={`container mx-auto h-full flex flex-col items-center xl:flex-row xl:gap-6`}>
        <AboutText />
        <AboutData />
      </div>
    </main>
  )
}