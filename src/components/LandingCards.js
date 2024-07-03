import { Button } from "./Button";
import { FormattedDate } from "./FormattedDate";

export const LandingCards = ({ articles }) => {
  return (
    <div>
      <div className="gap-4 relative flex flex-col h-[600px] rounded-2xl overflow-hidden lg:mt-[100px]">
        <div className="absolute  bg-white bottom-0 m-6 rounded-xl p-[30px] lg:w-[50%]">
          {articles.slice(0, 3).map((item, index) => {
            return (
              <div className="flex flex-col gap-3">
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
