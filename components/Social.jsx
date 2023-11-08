import Link from "next/link"
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri"


export default function Social() {
  return (
    <div className="flex items-center gap-x-3 text-xl">
      <Link href={"https://github.com/kevensouzz"} target="_blank" className="md:hover:text-accent max-md:cursor-default transition-all duration-300 ease-linear">
        <RiGithubFill />
      </Link>

      <Link href={"https://linkedin.com/in/kevensouzz"} target="_blank" className="md:hover:text-accent max-md:cursor-default transition-all duration-300 ease-linear">
        <RiLinkedinBoxFill />
      </Link>
    </div>
  )
}