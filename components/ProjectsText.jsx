"use client"
import { fadeIn } from "@/variants"
import { motion } from "framer-motion"

export default function ProjectsText() {
  return (
    <motion.div variants={fadeIn("right", 0.3)} initial="hidden" animate="show" exit="hidden" className="flex flex-col text-left max-w-[400px] 2xl:max-w-[600px] max-sm:max-w-full max-sm:px-5">
      <h2 className="text-2xl max-sm:text-lg 2xl:text-6xl xl:text-4xl font-semibold">
        Meus Projetos<span className="text-accent">.</span>
      </h2>
      <p className="font-extralight text-lg max-sm:text-sm 2xl:text-2xl">
        Bem-vindo à seção de projetos, onde compartilho alguns desafios realizados e ideias que sairam do papél, além de mostrar um pouco da minha experiência como desenvolvedor. Sinta-se convidado para explorar os repositórios e os Deployments.
      </p>
    </motion.div>
  )
}