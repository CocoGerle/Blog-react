import { BurgerMenuIcon } from "@/assets/icons/BurgerMenuIcon";
import { BlogIcon } from "@/assets/icons/BlogIcon";
import { SearchIcon } from "@/assets/icons/SearchIcon";

export const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center ">
      <div className="flex flex-row items-center gap-[7.69px]">
        <BlogIcon width={30.76} height={26} />
        <div className="flex flex-row text-[#141624] text-[20px]">
          <p>Meta</p>
          <p className="font-bold">Blog</p>
        </div>
      </div>
      <ul className="invisible lg:visible lg:flex lg:gap-[40px] text-[#3B3C4A] text-[16px]">
        <li>Home</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className="invisible bg-[#F4F4F5] p-2 lg:visible rounded flex items-center justify-between text-[14px] text-[#A1A1AA] w-[166px]">
        <p>Search</p>
        <SearchIcon />
      </div>
      <div className="lg:hidden">
        <BurgerMenuIcon />
      </div>
    </div>
  );
};
