"use client";

import { AllBlogs } from "@/components/AllBlog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Landing } from "@/components/Landing";
import { NavBar } from "@/components/NavBar";

import { Trending } from "@/components/Trending";
import { useEffect, useState } from "react";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

const getArticle = async () => {
  const res = await fetch("https://dev.to/api/articles");
  const articles = await res.json();
  return articles;
};

export default function Home() {
  const [articles, setArticles] = useState([]);
  const getData = async () => {
    const data = await getArticle();
    setArticles(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={workSans.className}>
      <NavBar />
      <Landing articles={articles} />
      <Trending articles={articles} />
      <AllBlogs />
      <Footer />
    </div>
  );
}
