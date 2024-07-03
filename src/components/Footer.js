import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { InstaIcon } from "@/assets/icons/InstaIcon";
import { LinkedIcon } from "@/assets/icons/LinkedIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
import { BlogIcon } from "@/assets/icons/BlogIcon";

export const Footer = () => {
  return (
    <div className="bg-[#E8E8EA] lg:mt-[69px]  ">
      <div className="px-[16px] pb-[25px] pt-[64px] max-w-screen-xl m-auto flex flex-col lg:flex-row">
        <div className="lg:flex-1">
          <h1 className="font-semibold text-[18px] mb-[12px]">About</h1>
          <p className="text-[#696A75] mb-[24px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="text-[#3B3C4A] mb-[20px]">
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <div className="flex text-[#3B3C4A] mb-[20px] gap-[24px] lg:flex-col lg:flex-1 lg:items-center">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-[26.67px] lg:flex-1 lg:justify-center">
          <FacebookIcon />
          <InstaIcon />
          <TwitterIcon />
          <LinkedIcon />
        </div>
      </div>
      <div className="max-w-screen-xl m-auto">
        <div className="flex flex-col gap-[64px] text-[#3B3C4A] m-auto border-t border-[#DCDDDF] px-[16px]  py-[32px] lg:flex-row lg:justify-between lg:items-center">
          <div className="flex items-center gap-[7.69px]">
            <BlogIcon width={48} height={48} />
            <div>
              <div className="flex flex-row text-[#141624] text-[20px]">
                <p>Meta</p>
                <p className="font-bold">Blog</p>
              </div>
              <p>© All Rights Reserved.</p>
            </div>
          </div>
          <ul className="flex flex-col gap-[16px] lg:flex-row ">
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
