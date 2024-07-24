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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminLayout>
        <Breadcrumbs pageName={entityConfiguration.title} rootName="Admin" />
        <div className="flex flex-col gap-10">
          <Table configuration={entityConfiguration} data={posts} />
        </div>
      </AdminLayout>
    </Suspense>
  );
}