import { Button } from "./Button";

export const Introduction = () => {
  return (
    <div className="relative border h-[600px]">
      <div className="h-[100%] absolute top-[20px] left-[20px] right-[20px] bottom-[20px]">
        <img className="h-[100%]" src="/introImage.png" />
        <div className="absolute p-[40px] bg-white left-[28px] right-[28px] bottom-0 rounded-xl">
          <div className="gap-[16px] flex flex-col">
            <Button
              value="Technology"
              color="bg-[#4B6BFB]"
              textColor="text-white"
            />
            <h1 className="text-[36px] font-semibold leading-10 ">
              Grid system for better Design User Interface
            </h1>
          </div>
          <p className="text-[16px] text-[#97989F] mt-[24px]">
            August 20, 2022
          </p>
        </div>
      </div>
    </div>
  );
};
