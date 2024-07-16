"use client";

import { Footer } from "@/components/Footer";
import { FormattedDate } from "@/components/FormattedDate";
import { NavBar } from "@/components/NavBar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://dev.to/api/articles/${id}`);
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="max-w-screen-lg m-auto">
        <h1 className="text-[#181A2A] text-[36px] font-semibold mb-[20px]">
          {data?.title}
        </h1>
        <div className="flex items-center gap-[24px] mb-[32px]">
          <div className="flex items-center gap-2">
            <img
              className="w-[28px] h-[28px] rounded-full"
              src={data?.user.profile_image}
            />
            <p>{data?.user.name}</p>
          </div>
          {data && <FormattedDate date={data.published_at} />}
        </div>
        <div className="h-[462px] w-full rounded overflow-hidden">
          <img className="h-full object-cover" src={data?.cover_image} />
        </div>
        <p className="mt-[32px] text-[#3B3C4A] text-[20px]">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels. One of the most rewarding aspects of
          traveling is immersing yourself in the local culture and customs. This
          includes trying local cuisine, attending cultural events and
          festivals, and interacting with locals. Learning a few phrases in the
          local language can also go a long way in making connections and show
        </p>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
