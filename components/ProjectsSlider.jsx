"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import { IoCodeSlashOutline, IoStarOutline } from "react-icons/io5";
import { TbLicense } from "react-icons/tb";
import { PiGitForkLight } from "react-icons/pi";
import { MdRocketLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
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

export default function ProjectsSlider() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepos().then(data => setRepos(data));
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={100}
      speed={1000}
      autoplay={{
        delay: 5000
      }}
      pagination={{
        enabled: true,
        clickable: true,
        type: "bullets"
      }}
      modules={[Pagination, Autoplay]}
      className="rounded-xl h-[220px] lg:h-60 w-[400px] max-sm:w-full lg:max-w-[300px] xl:max-w-[450px] 2xl:max-w-[600px]"
    >
      {
        repos.map(repo => {
          return (
            <SwiperSlide key={repo.name}>
              <motion.div variants={fadeIn("left", 0.3)} initial="hidden" animate="show" exit="hidden" className="bg-black/25 backdrop-blur-sm h-5/6 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-2xl">{repo.name}</h3>
                  <p className="text-lg">{repo.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex gap-1 items-center">
                    <IoCodeSlashOutline />
                    {repo.language}
                  </span>

                  <span className="flex gap-1 items-center">
                    <IoStarOutline />
                    {repo.stars}
                  </span>
                  <span className="flex gap-1 items-center">
                    <PiGitForkLight />
                    {repo.forks}
                  </span>
                </div>
                <div className={`flex text-xl items-center justify-around`}>
                  <Link target="_blank" href={repo.repoLink} className="outline-none hover:text-accent md:focus-visible:text-accent transition-all duration-300 ease-linear">
                    <FaGithub />
                  </Link>

                  {repo.deployLink ? (
                    <Link
                      target="_blank"
                      href={repo.deployLink}
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
              </motion.div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}