"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"
import { fadeIn } from "@/variants";
import { IoCodeSlashOutline, IoStarOutline } from "react-icons/io5";
import { PiGitForkLight } from "react-icons/pi";
import { MdRocketLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

async function getRepos() {
  const response = await fetch("https://api.github.com/users/kevensouzz/repos");
  const data = await response.json();

  const repos = data.map(repo => ({
    name: repo.name,
    description: repo.description,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
    repoLink: repo.html_url,
    deployLink: repo.homepage,
  }))

  return repos
}

export default function ProjectsCarroussel() {

  const [index, setIndex] = useState(0);
  const [repos, setRepos] = useState([]);


  useEffect(() => {
    getRepos().then(data => setRepos(data));
  }, []);

  return (
    <motion.div variants={fadeIn("left", 0.3)} initial="hidden" animate="show" exit="hidden" className="z-10 flex flex-col items-center justify-between rounded-xl h-60 w-[400px] max-sm:w-full lg:max-w-[300px] xl:max-w-[450px] 2xl:max-w-[600px]">
      {
        repos.map((item, itemIndex) => {
          return (
            <div key={itemIndex} className={`h-5/6 w-full bg-black/50 backdrop-blur-sm rounded-2xl p-4 flex flex-col justify-between ${index !== itemIndex && "hidden"}`}>
              <div>
                <h3 className="font-semibold text-2xl">{item.name}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex gap-1 items-center">
                  <IoCodeSlashOutline />
                  {item.language}
                </span>

                <span className="flex gap-1 items-center">
                  <IoStarOutline />
                  {item.stars}
                </span>
                <span className="flex gap-1 items-center">
                  <PiGitForkLight />
                  {item.forks}
                </span>
              </div>
              <div className={`flex text-xl items-center justify-around`}>
                <Link target="_blank" href={item.repoLink} className="outline-none hover:text-accent md:focus-visible:text-accent transition-all duration-300 ease-linear">
                  <FaGithub />
                </Link>

                {item.deployLink ? (
                  <Link
                    target="_blank"
                    href={item.deployLink}
                    className="outline-none hover:text-accent md:focus-visible:text-accent transition-all duration-300 ease-linear"
                  >
                    <MdRocketLaunch />
                  </Link>
                ) : (
                  <span
                    className="text-white/50"
                  >
                    <MdRocketLaunch />
                  </span>
                )}
              </div>
            </div>
          )
        })
      }
      <span className="w-full h-1/6 flex items-center justify-center gap-3">
        {
          repos.map((item, itemIndex) => {
            return (
              <span onClick={() => setIndex(itemIndex)} key={itemIndex} className={` cursor-pointer rounded-full ${index == itemIndex ? "bg-accent w-[10px] h-[10px]" : "bg-accent/50 w-2 h-2"}`} />
            )
          })
        }
      </span>
    </motion.div>
  )
}