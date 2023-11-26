"use client";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

export default function AboutText() {
  return (
    <motion.div variants={fadeIn("right", 0.3)} initial="hidden" animate="show" exit="hidden" className={`flex-1 flex flex-col justify-center`}>
      <h2 className="capitalize text-accent font-bold text-3xl max-md:text-2xl max-sm:text-xl max-[425px]:text-base">transformando ideias em projetos reais...</h2>
      <p className="text-xl max-md:text-lg max-sm:text-base max-[425px]:text-xs max-w-[500px] max-sm:max-w-[375px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">Desde <span className="text-accent">Fevereiro de 2022</span> estou aprimorando minhas habilidades voltadas ao <span className="text-accent">desenvolvimento Web</span>, sempre aprendendo com meus próprios erros através de práticas diárias, e a cada dia me tornando um desenvolvedor melhor.
      </p>
    </motion.div>
  )
}