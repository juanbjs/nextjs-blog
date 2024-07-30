import React, { Suspense } from "react";

import PublicLayout from "@/components/Layouts/PublicLayout";
import LastNews from "@/components/PostTemplate/LastNews";
import SimplePost from "@/components/PostTemplate/SimplePost";

import { getPostBySlug } from "@/service/postsServices";
import { getAllPosts } from "@/service/api/postsService";

export default async function Page({ params }) {

  const { slug } = params;
  const post = await getPostBySlug(slug);
  const posts = await getAllPosts();

  if(!post) {
    return <div>404</div>
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PublicLayout>
        <SimplePost
          title={post.title}
          urlToImage={post.urlToImage}
          slug={post.slug}
          date={post.date}
          time={post.time}
          text={post.content}
        />
        <LastNews posts={posts.slice(0, 4)} />
      </PublicLayout>
    </Suspense>
  )
}
