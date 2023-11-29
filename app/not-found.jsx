"use client";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { fadeIn } from '@/variants';
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="h-full w-full overflow-hidden flex items-center justify-center">
      <motion.span variants={fadeIn("up", 0.3)} initial="hidden" animate="show" exit="hidden" className="flex flex-col items-center justify-center gap-5">
        <h3 className="text-xl md:text-4xl max-[340px]:text-base text-accent font-bold">
          <Typewriter
            options={{
              strings: [
                "Page Not Found!",
                "404!",
                "/:",
              ],
              autoStart: true,
              loop: true,
              delay: 125,
              deleteSpeed: 125,
            }}
          />
        </h3>

        <Link href={"/"} className="z-10 border-2 bg-black/25 backdrop-blur-[2px] flex items-center justify-center gap-1 border-accent text-accent text-xl max-[340px]:text-base font-semibold rounded-full max-md:cursor-default px-3 py-1 outline-none transition-all ease-linear duration-300 md:focus-visible:bg-accent md:focus-visible:text-white hover:bg-accent hover:text-white">
          <IoMdArrowRoundBack />
          <p>Voltar</p>
        </Link>

      </motion.span>
    </main>
  )
}