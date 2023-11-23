"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import { IoCodeSlashOutline, IoStarOutline } from "react-icons/io5";
import { TbLicense } from "react-icons/tb";
import { PiGitForkLight } from "react-icons/pi";
import { MdRocketLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
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
    license: repo.license && repo.license.name,
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
        type: "bullets"
      }}
      modules={[Pagination, Autoplay]}
      className="rounded-xl h-[200px] lg:h-60 w-[400px] max-sm:w-full max-sm:px-5 lg:max-w-[300px] xl:max-w-[450px] 2xl:max-w-[600px]"
    >
      {
        repos.map(repo => {
          return (
            <SwiperSlide key={repo.name}>
              <div className="bg-black/25 backdrop-blur-sm h-5/6 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-2xl">{repo.name}</h3>
                  <p className="text-lg font-medium">{repo.description}</p>
                </div>
                <div className="flex items-center justify-around">
                  <span className="flex gap-1 items-center font-medium">
                    <IoCodeSlashOutline />
                    {repo.language}
                  </span>

                  {repo.license && (
                    <span className="flex gap-1 items-center font-medium">
                      <TbLicense />
                      {repo.license}
                    </span>
                  )}

                  <span className="flex gap-1 items-center font-medium">
                    <IoStarOutline />
                    {repo.stars}
                  </span>
                  <span className="flex gap-1 items-center font-medium">
                    <PiGitForkLight />
                    {repo.forks}
                  </span>
                </div>
                <div className={`flex text-xl items-center justify-around`}>
                  <Link target="_blank" href={repo.repoLink} className="outline-none md:hover:text-accent md:focus-visible:text-accent transition-all duration-300 ease-linear">
                    <FaGithub />
                  </Link>

                  {repo.deployLink ? (
                    <Link
                      target="_blank"
                      href={repo.deployLink}
                      className="outline-none md:hover:text-accent md:focus-visible:text-accent transition-all duration-300 ease-linear"
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
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}