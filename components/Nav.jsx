"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: "Início", path: '/', icon: <HiHome /> },
  { name: "Sobre", path: '/sobre', icon: <HiUser /> },
  { name: "Projetos", path: '/projetos', icon: <HiRectangleGroup /> },
  { name: "Contato", path: '/contato', icon: <HiChatBubbleBottomCenterText /> }
];

export default function Nav() {

  const pathname = usePathname();

  return (
    <nav className={`flex flex-col items-center md:justify-center gap-y-4 fixed h-max bottom-0 mt-auto md:right-[1%] z-10 top-0 w-full md:w-16 md:max-w-md md:h-screen`}>
      <div className={`flex w-full md:flex-col items-center justify-between md:justify-center gap-y-10 px-4 md:px-0 h-[80px] bg-black/25 md:h-max py-8 backdrop-blur-sm text-3xl md:text-xl md:rounded-full border-accent border-t md:border`}>
        {navData.map((link, index) => {
          return <Link className={`
          ${link.path == pathname && "text-accent"}
          md:hover:text-accent
          transition-all duration-300 ease-linear
          relative flex items-center group
          `}
            key={index}
            href={link.path}
          >
            <div className={`absolute pr-14 right-0 hidden xl:group-hover:flex`}>
              <div className={`bg-white relative flex text-accent items-center p-2 rounded-[4px]`}>
                <div className={`text-xs leading-none font-semibold capitalize`}>{link.name}</div>
                <div className={`border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2`}></div>
              </div>
            </div>
            {link.icon}
          </Link>
        })}
      </div>
    </nav>
  )
}