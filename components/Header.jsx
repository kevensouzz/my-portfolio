import Link from "next/link";
import Social from "./Social";

export default function Header() {
  return (
    <header className={`absolute z-20 w-full flex items-center px-2 md:h-[75px]`}>
      <div className={`container mx-auto`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 py-4 max-[320px]:gap-y-2 max-[320px]:py-2">
          <Link className={`outline-none text-4xl max-[320px]:text-2xl font-thin max-[320px]:font-extralight text-white md:focus-visible:text-accent md:hover:text-accent transition-all duration-300 ease-linear`} href={"/"} >
            <span className="text-accent">&lt;</span>
            <span>KevenSouza </span>
            <span className={`text-accent`}>/&gt;</span>
          </Link>
          <Social />
        </div>
      </div>
    </header>
  )
}