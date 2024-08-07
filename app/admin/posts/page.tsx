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
        <div className="flex flex-col gap-6">
          <div className="flex justify-end">
            <a className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 w-32" href="/admin/posts/new">Nuevo</a>
          </div>
          <Table
            configuration={entityConfiguration}
            data={posts}
            page={page || 1}
          />
        </div>
      </AdminLayout>
    </Suspense>
  );
}
