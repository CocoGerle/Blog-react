import { BurgerMenuIcon } from "@/assets/icons/BurgerMenuIcon";
import { BlogIcon } from "@/assets/icons/blogIcon";

export const NavBar = () => {
  return (
    <div className="flex flex-row justify-between p-[20px] border">
      <div className="flex flex-row items-center gap-[7.69px]">
        <BlogIcon />
        <div className="flex flex-row text-[#141624] text-[20px]">
          <p>Meta</p>
          <p className="font-bold">Blog</p>
        </div>
      </div>
      <BurgerMenuIcon />
    </div>
  );
};
