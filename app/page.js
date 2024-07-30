import React, { Suspense } from "react";

import PublicLayout from "@/components/Layouts/PublicLayout";
import HomeNews from "@/components/PostTemplate/HomeNews";
import { getAllPosts } from "@/service/postsServices";



export default async function Home() {

  const posts = await getAllPosts();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PublicLayout>
        <HomeNews posts={posts} />
      </PublicLayout>
    </Suspense>
  );
}
