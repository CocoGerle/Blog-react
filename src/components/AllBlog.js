"use client";

import { useEffect, useState } from "react";
import { BlogCard } from "./BlogCard";

const categories = [
  "All",
  "React",
  "JavaScript",
  "Python",
  "Web Development",
  "Node.js",
];

export const AllBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const [category, setCategory] = useState("All");
  const [perPage, setPerPage] = useState(9);

  const handleCategory = (category) => {
    setCategory(category);
    setPerPage(9);
  };

  const handleLoadMore = () => {
    setPerPage(perPage + 3);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://dev.to/api/articles?page=1&per_page=${perPage}${
            category !== "All" ? `&tag=${category}` : ""
          }`
        );

        const data = await res.json();

        setBlogs(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [category, perPage]);

  return (
    <div className="flex flex-col gap-8 max-w-screen-xl m-auto py-8">
      <h1 className="font-bold text-2xl p-4">All Blog Post</h1>

      <div className="flex flex-wrap justify-center gap-5 lg:justify-start lg:px-4">
        {categories.map((item) => (
          <button
            key={item}
            className="font-bold text-[12px] text-[#495057]"
            style={{
              color: category === item ? "#D4A373" : "",
            }}
            onClick={() => handleCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="p-4 gap-3 lg:grid lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.title}
            image={blog.cover_image}
            title={blog.title}
            date={blog.published_at}
            tags={blog.tags}
          />
        ))}
      </div>

      <button
        className="m-auto w-fit px-[20px] py-[12px] border border-gray-400 bg-white text-[#696A75] rounded-md"
        onClick={handleLoadMore}
      >
        {loading ? <p>Loading...</p> : <p>Load More</p>}
      </button>
    </div>
  );
};