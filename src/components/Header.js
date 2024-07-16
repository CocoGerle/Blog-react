
import { Landing } from "./Landing";
import { NavBar } from "./NavBar";

export const Header = ({articles}) => {
  return (
    <div className="flex flex-col gap-[24px]">
      <NavBar />
      <Landing articles={articles}/>
    </div>
  );
};
