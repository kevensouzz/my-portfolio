"use client";
import { TbBrandMysql } from "react-icons/tb"
import { useState } from "react";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGithub,
  FaDocker,
  FaLinux,

} from "react-icons/fa";

import {
  SiExpress,
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
} from "react-icons/si";

const Data = [
  {
    title: 'habilidades',
    info: [
      {
        title: 'Linguagens',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
        ],
      },
      {
        title: "Ferramentas",
        icons: [
          <SiGit />,
          <FaGithub />,
          <FaLinux />,
        ],
      },
      {
        title: 'Frameworks/Biblioitecas',
        icons: [
          <FaReact />,
          <SiNextdotjs />,
          <SiNodedotjs />,
          <SiExpress />,
        ],
      },
      {
        title: "Bancos de Dados",
        icons: [
          <SiMongodb />,
        ],
      }
    ],
  },
  {
    title: 'certificados',
    info: [
      {
        title: "Javascript (Basic) - HackerRank",
        stage: "2023"
      },
      {
        title: "Trilha Especializar - Rocketseat",
        stage: "2023"
      },
      {
        title: "Trilha Fundamentar - Rocketseat",
        stage: "2023"
      },
      {
        title: "Trilha Conectar - Rocketseat",
        stage: "2022"
      },
      {
        title: "Estrutura de Dados e Algoritmos - DIO",
        stage: "2022",
      },
    ],
  },
  {
    title: "educação",
    info: [
      {
        title: "ETEAAF - Curso Técnico Desenvolvimento de Sistemas",
        stage: "2021 - 2023",
      }
    ]
  },
  {
    title: 'experiência',
    info: [
      {
        title: "ETEAAF - EXPOTEC",
        stage: "2023",
      }
    ],
  }
];

export default function AboutData() {

  const [index, setIndex] = useState(0);

  return (
    <motion.div variants={fadeIn("left", 0.3)} initial="hidden" animate="show" exit="hidden" className={`flex flex-col max-md:pt-8 pt-10 xl:pt-32 w-full xl:max-w-[50%] h-[480px] max-sm:h-[300px]`}>
      <div className={`flex max-[300px]:gap-x-1 max-[425px]:gap-x-2 gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4`}>
        {Data.map((item, itemIndex) => {
          return (
            <div
              key={itemIndex}
              onClick={() => setIndex(itemIndex)}
              className={`
                      ${index === itemIndex ? 'text-accent after:bg-accent after:w-full after:transition-all after:duration-300 after:ease-linear' : 'after:bg-white'}
                      xl:cursor-pointer capitalize
                      max-[425px]:text-xs
                      xl:text-lg relative
                      after:w-8 after:h-[2px]
                      after:absolute
                      after:-bottom-1 after:left-0
                      `}
            >
              {item.title}
            </div>
          )
        })}
      </div>

      <div className={`py-1 xl:py-2 flex flex-col gap-y-1 xl:gap-y-2 items-center xl:items-start`}>
        {Data[index].info.map((item, itemIndex) => {
          return (
            <div
              key={itemIndex}
              className={`flex-1 flex flex-row justify-center gap-x-1 items-center capitalize text-white/75 font-light text-sm max-[460px]:text-xs`}
            >
              <span>{item.title}</span>
              <span>{item.stage}</span>
              <span className={`flex gap-x-2`}>
                {item.icons?.map((icon, iconIndex) => {
                  return <span key={iconIndex} className={`text-white flex items-center justify-center text-base`}>{icon}</span>
                })}
              </span>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}