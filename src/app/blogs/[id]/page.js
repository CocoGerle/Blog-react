"use client";

import { Footer } from "@/components/Footer";
import { FormattedDate } from "@/components/FormattedDate";
import { NavBar } from "@/components/NavBar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://dev.to/api/articles/${id}`);
      const data = await res.json();
      setData(data);
    };
    getData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }
  const image =
    "https://img.wallpapic.com/i2911-721-325/thumb/sunrise-nature-sea-coast-wallpaper.jpg";
  return (
    <>
      <NavBar />
      <div className="max-w-screen-lg m-auto p-[16px]">
        <h1 className="text-[#181A2A] text-[36px] font-semibold mb-[20px]">
          {data.title}
        </h1>
        <div className="flex items-center gap-[24px] mb-[32px]">
          <div className="flex items-center gap-2">
            <img
              className="w-[28px] h-[28px] rounded-full"
              src={data.user.profile_image}
              alt={data.user.name}
            />
            <p>{data.user.name}</p>
          </div>
          <FormattedDate date={data.published_at} />
        </div>
        {data.cover_image && (
          <div className="h-[462px] w-full rounded overflow-hidden">
            <img
              className="h-full object-cover"
              src={data.cover_image ?? image}
              alt={data.title}
            />
          </div>
        )}
        <div
          className="mt-[32px] text-[#3B3C4A] text-[18px] flex flex-col items-start gap-6 [&>p]:text-[20px] [&>h3]:font-semibold [&>img]:self-center"
          dangerouslySetInnerHTML={{ __html: data?.body_html }}
        />
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
