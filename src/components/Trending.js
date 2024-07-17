import { TrendingCard } from "./TrendingCards";
import Link from "next/link";

export const Trending = ({ articles }) => {
  return (
    <div className="p-4 max-w-screen-xl m-auto">
      <h1 className="font-bold text-2xl mb-[32px]">Trending</h1>
      <div className="overflow-x-scroll w-[100%]">
        <div className="w-fit flex gap-[20px]">
          {articles.slice(7, 16).map((item, index) => {
            return (
              <>
                <Link key={item.id} href={`/blogs/${item.id}`}>
                  <TrendingCard
                    tag={item.tags}
                    title={item.title}
                    social={item.cover_image}
                  />
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
