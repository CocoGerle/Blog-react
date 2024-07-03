"use client";

import { AllBlog } from "@/components/AllBlog";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Trending } from "@/components/Trending";
import { useEffect, useState } from "react";

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
    <div>
      <Header articles={articles}/>
      <Trending articles={articles}/>
      <AllBlog articles={articles} />
      <Footer />
    </div>
  );
}
