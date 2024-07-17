
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="p-[16px] flex flex-col gap-[20px] max-w-screen-md m-auto">
        <div>
          <h1 className="text-[36px] font-semibold">Contact Us</h1>
          <p className="text-[#696A75]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex flex-col gap-[24px] lg:flex-row lg:gap-[50px]">
          <div className="border rounded-xl p-[16px]">
            <h1 className="text-[24px] font-semibold">Address</h1>
            <p className="text-[#696A75] text-[18px]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="border rounded-xl p-[16px]">
            <h1 className="text-[24px] font-semibold">Contact</h1>
            <p className="text-[#696A75] text-[18px]">
              313-332-8662 info@email.com
            </p>
          </div>
        </div>

        <div className="bg-[#F6F6F7] flex flex-col p-[16px] rounded-lg gap-[24px] lg:mt-[36px]">
          <h1 className="text-[18px] font-semibold">Leave a message</h1>
          <div className="flex flex-col gap-[10px] text-[#97989F] ">
            <div className="flex flex-col gap-[10px] lg:flex-row lg:gap-[28px]">
              <input
                className="w-full block border py-[5px] px-[20px] rounded-md"
                type="text"
                placeholder="Subject"
              />
              <input
                className="w-full block border py-[5px] px-[20px] rounded-md"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <input
              className="w-full block border py-[5px] px-[20px] rounded-md"
              type="text"
              placeholder="Your Name"
            />
            <textarea
              className="border py-[5px] px-[20px] rounded-md"
              rows="4"
              cols="50"
            >
              Write a message
            </textarea>
            <div className="bg-[#4B6BFB] text-white px-[10px] py-[4px] rounded-md flex gap-2 lg:w-fit" >
              Send message
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
