import { Button } from "./Button";
import { FormattedDate } from "./FormattedDate";

export const BlogCard = (props) => {

  return (
    <div className="border rounded-xl p-4 flex flex-col gap-4 ">
      <img src={props.image} className="rounded-md flex object-cover h-[240px]" />
      <div className="flex flex-col flex-1 gap-4">
        <Button
          tag={props.tags}
          color="bg-gray-100"
          textColor="text-[#4B6BFB]"
        />
        <p className="font-semibold text-[32px] leading-8">{props.title}</p>
        <FormattedDate date={props.date}/>
        
      </div>
    </div>
  );
};
