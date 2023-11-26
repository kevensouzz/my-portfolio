"use client";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { fadeIn } from '@/variants';

export default function HomeText() {
  return (
    <motion.span variants={fadeIn("down", 0.3)} initial="hidden" animate="show" exit="hidden">
      <h2 className={`text-3xl md:text-6xl max-[340px]:text-2xl`}>
        Olá Mundo, Sou <span className={`text-accent`}>Keven</span>!
      </h2>
      <h3 className={`text-xl md:text-4xl max-[340px]:text-base`}>
        <Typewriter
          options={{
            strings: [
              "Desenvolvedor Fullstack",
              "Desenvolvedor React",
              "Desenvolvedor Node",
            ],
            autoStart: true,
            loop: true,
            delay: 125,
            deleteSpeed: 125,
          }}
        />
      </h3>
    </motion.span>
  )
}