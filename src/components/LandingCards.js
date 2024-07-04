import { Button } from "./Button";
import { FormattedDate } from "./FormattedDate";

export const LandingCards = ({ img, title, published_at, tags }) => {
  return (
    <div className=" h-[600px] relative m-auto">
      <img src={img} className=" w-[100%] h-[100%] object-cover rounded-md " />
      <div className="absolute flex flex-col gap-[24px] bg-[#FFFFFF] py-[40px] shadow-md rounded-md bottom-[13px] lg:left-[11px] left-[5%] lg:w-[598px] w-[90%] lg:h-[252px] justify-evenly">
        <div className="px-[50px]">
          <div>
            <Button
              lai={tags}
              textColor="text-[#FFFFFF]"
              bgColor="bg-[#4B6BFB]"
            />
          </div>

          <div className="text-[36px] font-semibold text-[#181A2A] lg:w-[400px] w-fit">
            {title}
          </div>

          <FormattedDate date={published_at} />
        </div>
      </div>
    </div>
  );
};
