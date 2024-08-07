import React, { Suspense } from "react";

import Breadcrumbs from "@/components/Breadcrumbs";
import AdminLayout from "@/components/Layouts/AdminLayout";
import Table from "@/components/Table";

import { entityConfiguration } from './constants';
import { getAllPosts } from "@/service/postsServices";

interface PostsProps {
  searchParams: {
    page: number;
  }
}


export default async function Posts({searchParams}: Readonly<PostsProps>) {

  const posts = await getAllPosts();
  const { page } = searchParams;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminLayout
        messages= {[]}
      >
        <Breadcrumbs pageName={entityConfiguration.title} rootName="Admin" />
        <Table
          configuration={entityConfiguration}
          data={posts}
          page={page || 1}
          newUrl="/admin/posts/new"
        />
      </AdminLayout>
    </Suspense>
  );
}
