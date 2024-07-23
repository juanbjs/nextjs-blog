import HomeNews from "@/components/PostTemplate/HomeNews";
import { Suspense } from "react";

async function getNews() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEWS_API_KEY}`, {
    rejectUnauthorized: false,
    method: 'GET',
  });
  return res.json()
}

export default async function Home() {
  const newsData = getNews();

  const [news] = await Promise.all([newsData])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeNews posts={news.articles} />
    </Suspense>
  );
}
