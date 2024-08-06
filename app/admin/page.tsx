import React, { Suspense } from "react";

import Breadcrumbs from "@/components/Breadcrumbs";
import AdminLayout from "@/components/Layouts/AdminLayout";

export default async function Posts() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminLayout>
        <div className="flex flex-col gap-6">
          
        </div>
      </AdminLayout>
    </Suspense>
  );
}