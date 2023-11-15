import HomeText from "@/components/HomeText"
import Link from "next/link"
import { GoDownload } from "react-icons/go"
import { HiRectangleGroup } from "react-icons/hi2"

export default function Home() {
  return (
    <main className={`h-screen w-full flex items-center justify-center overflow-hidden`}>
      <div className={`z-0 w-full md:w-[700px] text-center font-bold flex items-center justify-center flex-col gap-2 max-[340px]:px-2 `}>
        <HomeText />
        <div className={`w-full max-w-[60%] max-md:max-w-[100%] max-md:h-[90px] max-sm:h-[82.5px] flex items-center justify-between max-md:flex-col`}>
          <Link href={""} className={`border border-white rounded-full cursor-pointer max-md:cursor-default max-md:border-accent max-md:bg-accent w-full py-2 max-sm:py-[6px] max-w-[175px] max-[320px]:max-w-[150px] transition-all duration-300 ease-linear flex gap-1 md:gap-2 item-center justify-center overflow-hidden focus-visible:outline-0 md:focus-visible:border-accent md:hover:border-accent md:focus-visible:bg-accent md:hover:bg-accent`}>
            <p>Baixar CV</p>
            <GoDownload className={`mt-[2px] text-lg`} />
          </Link>

          <Link href={"/projetos"} className={`z-0 border border-white rounded-full cursor-pointer max-md:cursor-default max-md:border-accent max-md:bg-accent w-full py-2 max-sm:py-[6px] max-w-[175px] max-[320px]:max-w-[150px] transition-all duration-300 ease-linear flex gap-1 md:gap-2 item-center justify-center overflow-hidden focus-visible:outline-0 md:focus-visible:border-accent md:hover:border-accent md:focus-visible:bg-accent md:hover:bg-accent`}>
            <p>Ver Projetos</p>
            <HiRectangleGroup className={`mt-[2px] text-lg`} />
          </Link>
        </div>
      </div>
    </main>
  )
}
