import PublicLayout from "@/components/Layouts/PublicLayout";
import HomeNews from "@/components/PostTemplate/HomeNews";
import { Suspense } from "react";

async function getNews() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/posts`, {
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
      <PublicLayout>
        <HomeNews posts={news} />
      </PublicLayout>
    </Suspense>
  );
}
