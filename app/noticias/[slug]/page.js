import React, { Suspense } from "react";

import PublicLayout from "@/components/Layouts/PublicLayout";
import LastNews from "@/components/PostTemplate/LastNews";
import SimplePost from "@/components/PostTemplate/SimplePost";

import PropTypes from "prop-types";

Page.propTypes = {
  params: PropTypes.object.isRequired,
};

async function getPostById(id) {

  const res = await fetch(`${process.env.BACKEND_URL}/api/posts/${id}`, {
    rejectUnauthorized: false,
    method: 'GET',
  });
  return res.json()
}

export default async function Page({ params }) {

  const postData = getPostById(params.slug);

  const [post] = await Promise.all([postData])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PublicLayout>
        <SimplePost
          title={post.title}
          slug={post.slug}
          date={post.date}
          time={post.time}
          text={post.content}
        />
        {
          //<LastNews posts={postArray} />
        }
      </PublicLayout>
    </Suspense>
  )
}
