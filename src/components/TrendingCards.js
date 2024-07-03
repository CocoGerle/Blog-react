import { Button } from "./Button";
export const TrendingCard = (props) => {
  return (
    // <div className=" ">
      <div className="p-4 gap-4 relative flex flex-col w-[320px] h-[320px] ">
        <img
          src={props.social}
          className="rounded-xl overflow-hidden flex object-cover absolute left-0 top-0 h-full w-full  "
        />
        <div className="flex flex-col gap-4 absolute text-white bottom-1">
          <Button
            tag={props.tag}
            color="bg-[#4B6BFB]"
            textColor="text-gray-100"
          />
          <p className="font-semibold text-[18px] leading-8">{props.title}</p>
        </div>
      </div>
    // </div>
  );
};

