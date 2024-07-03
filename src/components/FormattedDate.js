import { format } from "date-fns";

export const FormattedDate = ({ date }) => {
  const formattedDate = format(date, "MMMM dd, yyyy");
  return (
    <>
      <p className="text-[#97989F] text-[16px]">{formattedDate}</p>
    </>
  );
};
