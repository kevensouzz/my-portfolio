"use client";
import { useState } from "react";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGithub,
  FaLinux,
  FaDocker,
  FaJava,
  FaAngular
} from "react-icons/fa";

import {
  SiExpress,
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiSpring,
} from "react-icons/si";

import { TbBrandMysql } from "react-icons/tb"

import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";

const Data = [
  {
    title: 'habilidades',
    info: [
      {
        title: 'Linguagens',
        icons: [
          { icon: <FaHtml5 />, name: "HTML" },
          { icon: <FaCss3 />, name: "CSS" },
          { icon: <FaJs />, name: "JavaScript" },
          { icon: <BiLogoTypescript />, name: "TypeScript" }, ,
          { icon: <FaJava />, name: "Java" }, ,
        ],
      },
      {
        title: "Ferramentas",
        icons: [
          { icon: <SiGit />, name: "Git" },
          { icon: <FaGithub />, name: "GitHub" },
          { icon: <FaLinux />, name: "Linux" },
          { icon: <FaDocker />, name: "Docker" },
        ],
      },
      {
        title: 'Frameworks/Biblioitecas',
        icons: [
          { icon: <FaAngular />, name: "Angular.js" },
          { icon: <FaReact />, name: "React.js" },
          { icon: <SiNextdotjs />, name: "Next.js" },
          { icon: <SiNodedotjs />, name: "Node.js" },
          { icon: <SiExpress />, name: "Express.js" },
          { icon: <SiSpring />, name: "Spring" },
        ],
      },
      {
        title: "Bancos de Dados",
        icons: [
          { icon: <SiMongodb />, name: "MongoDB" },
          { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
          { icon: <TbBrandMysql />, name: "MySQL" },
        ],
      }
    ],
  },
  {
    title: 'certificados',
    info: [
      {
        title: "Haravard (CC50) - Fundação Estudar ",
        stage: "01/2024"
      },
      {
        title: "Web Development Fundamentals - IBM",
        stage: "01/2024"
      },
      {
        title: "Javascript (Basic) - HackerRank",
        stage: "07/2023"
      },
      {
        title: "Trilha Especializar - Rocketseat",
        stage: "02/2023"
      },
      {
        title: "Trilha Fundamentar - Rocketseat",
        stage: "01/2023"
      },
      {
        title: "Trilha Conectar - Rocketseat",
        stage: "10/2022"
      },
      {
        title: "Estrutura de Dados e Algoritmos - DIO",
        stage: "07/2022",
      },
    ],
  },
  {
    title: "educação",
    info: [
      {
        title: "ETEAAF - Curso Técnico Desenvolvimento de Sistemas",
        stage: "2021 - 2023",
      },
      {
        title: "Estácio - Engenharia de Software",
        stage: "2024 - 2028",
      }
    ]
  },
  {
    title: 'experiência',
    info: [
      {
        title: "ETEAAF - EXPOTEC | Feira de Ciências",
        stage: "07/2023 - 09/2023",
      },
      {
        title: "ETEAAF - Web Care | Projeto Integrador",
        stage: "02/2023 - 12/2023",
      },
      {
        title: "Desenvolvedor Web | Freelancer",
        stage: "2023 - 2024",
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
              <span>{item.stage && `(${item.stage})`}</span>
              <span className={`flex gap-x-2`}>
                {item.icons?.map((iconObj, iconIndex) => {
                  return <span key={iconIndex} className={`transition-all duration-300 ease-linear
                  text-white flex items-center justify-center text-base hover:text-accent sm:cursor-pointer z-50 relative group`}>
                    <div className={`absolute pr-7 pb-2 right-0 hidden group-hover:flex`}>
                      <div className={`bg-accent relative flex text-white items-center p-1 rounded-[4px]`}>
                        <div className={`text-xs leading-none font-semibold normal-case`}>{iconObj.name}</div>
                        <div className={`border-solid border-l-accent border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -bottom-[0.25px] -right-[6px]`}></div>
                      </div>
                    </div>
                    {iconObj.icon}
                  </span>
                })}
              </span>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}