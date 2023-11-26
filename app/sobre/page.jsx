import SpinningLoading from "@/components/SpinningLoading"
import dynamic from "next/dynamic"

const AboutData = dynamic(() => import("@/components/AboutData"), {
  ssr: false,
  loading: () =>
    <div className="w-full xl:max-w-[50%] flex items-center justify-center">
      <SpinningLoading />
    </div>
})

const AboutText = dynamic(() => import("@/components/AboutText"), {
  ssr: false,
  loading: () =>
    <div className="w-full xl:max-w-[50%] flex items-center justify-center">
      <SpinningLoading />
    </div>
})

export default function About() {
  return (
    <main className={`h-full w-screen overflow-hidden py-32 text-center xl:text-left`}>
      <div className={`container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6`}>
        <AboutText />
        <AboutData />
      </div>
    </main>
  )
}