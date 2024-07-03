
import { Landing } from "./Landing";
import { NavBar } from "./NavBar";

export const Header = ({articles}) => {
  return (
    <div className="max-w-screen-xl m-auto p-[16px]">
      <NavBar />
      <Landing articles={articles}/>
    </div>
  );
};
