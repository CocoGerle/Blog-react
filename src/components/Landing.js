import { Left } from "@/assets/icons/Left";
import { LandingCards } from "./LandingCards";
import { Right } from "@/assets/icons/Right";
import { useState } from "react";

const perPage = 4;

export const Landing = ({ articles }) => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prev) => (prev === 3 ? 0 : prev + 1));
  };
  const clickPrev = () => {
    setActiveImage((prev) => (prev === 0 ? 3 : prev - 1));
  };
  return (
    <div className="max-w-screen-xl m-auto  flex flex-col gap-[11px] ">
      <div className="overflow-hidden w-[100%]">
        <div
          className="flex w-[400%] duration-1000"
          style={{ transform: `translateX(${-activeImage * 25}%)` }}
        >
          {articles &&
            articles
              .slice(0, perPage)
              .map((item) => (
                <LandingCards
                  img={item.cover_image}
                  title={item.title}
                  tags={item.tag_list}
                  published_at={item.published_at}
                />
              ))}
        </div>
      </div>
      <div className="flex lg:justify-end justify-center gap-[9px] ">
        <div onClick={clickPrev}>
          <Left />
        </div>
        <div onClick={clickNext}>
          <Right />
        </div>
      </div>
    </div>
  );
};
