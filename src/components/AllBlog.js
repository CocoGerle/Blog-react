import { BlogCard } from "./BlogCard";

export const AllBlog = ({ articles }) => {
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="px-4 gap-8 ">
        <h1 className="font-bold text-2xl mb-[32px]">All Blog Post</h1>
        <ul className="flex justify-between">
          <li className="font-bold text-xs">All</li>
          <li className="font-bold text-xs">Design</li>
          <li className="font-bold text-xs">Travel</li>
          <li className="font-bold text-xs">Fashion</li>
          <li className="font-bold text-xs">Technology</li>
          <li className="font-bold text-xs">Branding</li>
        </ul>
      </div>
      <div className="p-4 gap-3 mt-[32px] lg:grid lg:grid-cols-3">
        {articles.slice(1, 9).map((item) => {
          return (
            <>
              <BlogCard
                cover={item.cover_image}
                tag={item.tags}
                title={item.title}
                date={item.published_at}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
