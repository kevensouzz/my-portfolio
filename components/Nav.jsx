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
  { path: '/', icon: <HiHome /> },
  { path: '/about', icon: <HiUser /> },
  { path: '/projects', icon: <HiRectangleGroup /> },
  { path: '/contact', icon: <HiChatBubbleBottomCenterText /> }
];

export default function Nav() {

  const pathname = usePathname();

  return (
    <nav className={`flex flex-col items-center md:justify-center gap-y-4 fixed h-max bottom-0 mt-auto md:right-[1%] z-10 top-0 w-full md:w-16 md:max-w-md md:h-screen`}>
      <div className={`flex w-full md:flex-col items-center justify-between md:justify-center gap-y-10 px-4 md:px-0 h-[80px] bg-black/25 md:h-max py-8 backdrop-blur-sm text-3xl md:text-xl md:rounded-full border-accent border-t md:border`}>
        {navData.map((link, index) => {
          return <Link className={`${link.path == pathname && "text-accent"} md:hover:text-accent max-md:cursor-default transition-all duration-300 ease-linear`} key={index} href={link.path}>{link.icon}</Link>
        })}
      </div>
    </nav>
  )
}