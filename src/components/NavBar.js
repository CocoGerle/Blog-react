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

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
    console.log("hhu");
  };
  return (
    <div className="overflow-hidden">
      <div className="flex flex-row justify-between items-center  lg:mb-[60px] max-w-screen-xl m-auto p-[16px]">
        <Link href={`/`}>
          <div className="flex flex-row items-center gap-[7.69px]">
            <BlogIcon width={30.76} height={26} />

            <div className="flex flex-row text-[#141624] text-[20px]">
              <p>Meta</p>
              <p className="font-bold">Blog</p>
            </div>
          </div>
        </Link>
        <ul className="invisible lg:visible lg:flex lg:gap-[40px] text-[#3B3C4A] text-[16px]">
          <Link href={`/`}>
            <li>Home</li>
          </Link>
          <Link href={`/blogs`}>
            <li>Blog</li>
          </Link>
          <Link href={`/contact`}>
            <li>Contact</li>
          </Link>
          <Link href="#footer">
            <li>About</li>
          </Link>
        </ul>
        <div className="invisible bg-[#F4F4F5] p-2 lg:visible rounded flex items-center justify-between text-[14px] text-[#A1A1AA] w-fit">
          <input className="bg-[#F4F4F5]" placeholder="Search" />
          <SearchIcon />
        </div>
        <div onClick={handleNav} className="lg:hidden ">
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
          <div>
            <ul className="flex flex-col gap-[40px] text-[#3B3C4A] text-[16px]">
              <Link href={`/`}>
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link href={`/blogs`}>
                <li className="cursor-pointer">Blog</li>
              </Link>
              <Link href={`/contact`}>
                <li className="cursor-pointer">Contact</li>
              </Link>
            </ul>
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
