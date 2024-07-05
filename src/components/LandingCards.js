import { Button } from "./Button";
import { FormattedDate } from "./FormattedDate";

export const LandingCards = ({ img, title, published_at, tag }) => {
  return (
    <div className=" h-[600px] w-[100%] relative m-auto overflow-hidden rounded-md">
      <img src={img} className=" w-[100%] h-[100%]  object-cover  " />
      <div className="absolute flex flex-col gap-[24px] bg-[#FFFFFF] py-[40px] shadow-md rounded-md bottom-[13px] lg:left-[11px] left-[5%] lg:w-[598px] w-[90%] justify-evenly">
        <div className="px-[50px]">
          <div>
            <Button
              tag={tag}
              textColor="text-[#FFFFFF]"
              color="bg-[#4B6BFB]"
            />
          </div>

          <div className="text-[32px] mt-[16px] font-semibold text-[#181A2A] lg:w-[400px] w-fit">
            {title}
          </div>

          <FormattedDate date={published_at} />
        </div>
      </div>
    </div>
  );
};
