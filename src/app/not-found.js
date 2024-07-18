import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center p-[16px] lg:flex-row lg:justify-center">
        <div className="text-[72px] mb-[40px] lg:px-[58px] lg:mb-0">404</div>
        <div className="flex flex-col gap-[10px] border-t-2 pt-[80px] lg:border-t-0 lg:border-l-2 lg:px-[58px] lg:justify-center lg:pt-0">
          <h1 className="text-[24px]">Page Not Found</h1>
          <p className="text-[#696A75] text-[18px]">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <Link href={`/`}>
            <div className="bg-[#4B6BFB] text-white px-[10px] py-[4px] rounded-md flex gap-2 w-fit">
              Back To Home
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default NotFound;
