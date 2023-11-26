import SpinningLoading from "@/components/SpinningLoading"
import dynamic from "next/dynamic"

const HomeText = dynamic(() => import("@/components/HomeText"), {
  loading: () => <SpinningLoading />,
  ssr: false
})

const HomeButtons = dynamic(() => import("@/components/HomeButtons"), {
  ssr: false
})

export default function Home() {
  return (
    <main className={`h-screen w-full flex items-center justify-center overflow-hidden`}>
      <div className={`z-0 w-full md:w-[700px] text-center font-bold flex items-center justify-center flex-col gap-2 max-[340px]:px-2 `}>
        <HomeText />
        <HomeButtons />
      </div>
    </main>
  )
}
