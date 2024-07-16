"use client";

import { useEffect, useState } from "react";
import { BlogCard } from "../../components/BlogCard";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const BlogsPage = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const [category, setCategory] = useState("All");
  const [perPage, setPerPage] = useState(12);

  const handleLoadMore = () => {
    setPerPage(perPage + 3);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://dev.to/api/articles?page=1&per_page=${perPage}${category}`
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
    <div>
      <div className="flex flex-col  max-w-screen-xl m-auto py-8">
        <h1 className="font-bold text-2xl p-4">All Blog Post</h1>

        <div className="flex flex-wrap justify-center gap-5 lg:justify-start lg:px-4"></div>

        <div className="p-4 gap-3 lg:grid lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <BlogCard
                key={blog.title}
                image={blog.cover_image}
                title={blog.title}
                date={blog.published_at}
                tags={blog.tags}
                profile_image={blog.user.profile_image}
                name={blog.user.name}
              />
             
            </Link>
          ))}
        </div>

        <button
          className="m-auto w-fit px-[20px] py-[12px] border border-gray-400 bg-white text-[#696A75] rounded-md cursor-pointer hover:bg-[#4B6BFB] hover:text-white"
          onClick={handleLoadMore}
        >
          {loading ? <p>Loading...</p> : <p>Load More</p>}
        </button>
      </div>
      <Footer />
    </div>
  );
};
export default BlogsPage;