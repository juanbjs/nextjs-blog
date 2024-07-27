import { Suspense } from "react";

import Breadcrumbs from "@/components/Breadcrumbs";
import AdminLayout from "@/components/Layouts/AdminLayout";
import Table from "@/components/Table";

import { entityConfiguration } from './constants';

async function getPosts() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/posts`, {
    rejectUnauthorized: false,
    method: 'GET',
  });
  return res.json()
}

export default async function Posts() {
  const postsData = getPosts();

  const [posts] = await Promise.all([postsData])

  console.log(posts);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminLayout>
        <Breadcrumbs pageName={entityConfiguration.title} rootName="Admin" />
        <div className="flex flex-col gap-6">
          <div className="flex justify-end">
            <a className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 w-32" href="/admin/posts/new">Nuevo</a>
          </div>
          <Table configuration={entityConfiguration} data={posts} />
        </div>
      </AdminLayout>
    </Suspense>
  );
}