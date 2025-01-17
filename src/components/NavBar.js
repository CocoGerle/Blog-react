"use client";
import { BurgerMenuIcon } from "@/assets/icons/BurgerMenuIcon";
import { BlogIcon } from "@/assets/icons/BlogIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { IoMdClose } from "react-icons/io";
import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { InstaIcon } from "@/assets/icons/InstaIcon";
import { LinkedIcon } from "@/assets/icons/LinkedIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const paths = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blogs",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "About",
    path: "#footer",
  },
];

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="overflow-hidden">
      <div className="flex flex-row items-center justify-between  lg:mb-[60px] max-w-screen-xl m-auto p-[16px]">
        <Link href={`/`}>
          <div className="flex flex-row items-center gap-[7.69px]">
            <BlogIcon width={30.76} height={26} />

            <div className="flex flex-row text-[#141624] text-[20px]">
              <p>Meta</p>
              <p className="font-bold">Blog</p>
            </div>
          </div>
        </Link>
        <div className="hidden lg:flex lg:gap-[250px]">
          <div className="lg:flex hidden lg:gap-[40px] text-[#3B3C4A] text-[16px] lg:items-center">
            {paths.map((path, index) => (
              <Link key={index} href={path.path}>
                <div
                  className="text-black"
                  style={{ color: pathname === path.path ? "blue" : "#000" }}
                >
                  {path.name}
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-[#F4F4F5] p-2 lg:flex rounded flex items-center justify-between text-[14px] text-[#A1A1AA] w-fit">
            <input className="bg-[#F4F4F5]" placeholder="Search" />
            <SearchIcon />
          </div>
        </div>
        <div onClick={handleNav} className="lg:hidden  ">
          <BurgerMenuIcon />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 w-[65%] lg:hidden h-full bg-[#e8e7ea] p-10 ease-in duration-400 z-10"
            : "fixed right-[-100%] top-0 p-10 h-full ease-in duration-400 z-10"
        }
      >
        <div>
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <IoMdClose size={30} />
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            {paths.map((path, index) => (
              <Link key={index} href={path.path}>
                <div
                  className="text-black"
                  style={{ color: pathname === path.path ? "blue" : "#000" }}
                >
                  {path.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex gap-[26.67px] justify-around pt-10 items-center">
            <Link
              target="blank"
              href={"https://www.facebook.com/Munkhgerel.2812"}
            >
              <FacebookIcon />
            </Link>
            <Link target="blank" href={"https://www.instagram.com"}>
              <InstaIcon />
            </Link>
            <Link target="blank" href={"https://x.com/"}>
              <TwitterIcon />
            </Link>
            <Link target="blank" href={"https://www.linkedin.com/"}>
              <LinkedIcon />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-[7.69px] p-6">
            <BlogIcon width={30.76} height={26} />
            <div className="flex flex-row text-[#141624] text-[20px]">
              <p>Meta</p>
              <p className="font-bold">Blog</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
