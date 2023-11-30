"use client";
import Link from "next/link"
import { GoDownload } from "react-icons/go"
import { HiRectangleGroup } from "react-icons/hi2"
import { motion } from "framer-motion"
import { fadeIn } from '@/variants';

export default function HomeButtons() {
  return (
    <motion.div variants={fadeIn("up", 0.3)} initial="hidden" animate="show" exit="hidden" className={`w-full max-w-[60%] max-md:max-w-[100%] max-md:h-[92.5px] flex items-center justify-between max-md:flex-col`}>
      <a href={"/myCurriculum.pdf"} download={"kevensouza.pdf"} className={`border border-white rounded-full cursor-pointer max-md:cursor-default w-full py-2 max-sm:py-[6px] max-w-[175px] max-[320px]:max-w-[150px] transition-all duration-300 ease-linear flex gap-1 md:gap-2 item-center justify-center overflow-hidden focus-visible:outline-0 md:focus-visible:border-accent hover:border-accent md:focus-visible:bg-accent hover:bg-accent`}>
        <p>Baixar CV</p>
        <GoDownload className={`mt-[2px] text-lg`} />
      </a>

      <Link href={"/projetos"} className={`border border-white rounded-full cursor-pointer max-md:cursor-default w-full py-2 max-sm:py-[6px] max-w-[175px] max-[320px]:max-w-[150px] transition-all duration-300 ease-linear flex gap-1 md:gap-2 item-center justify-center overflow-hidden focus-visible:outline-0 md:focus-visible:border-accent hover:border-accent md:focus-visible:bg-accent hover:bg-accent`}>
        <p>Ver Projetos</p>
        <HiRectangleGroup className={`mt-[2px] text-lg`} />
      </Link>
    </motion.div>
  )
}