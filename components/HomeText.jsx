"use client";
import Typewriter from 'typewriter-effect';

export default function HomeText() {
  return (
    <span>
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
            cursor: "",
          }}
        />
      </h3>
    </span>
  )
}