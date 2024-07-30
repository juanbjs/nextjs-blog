"use client";

import { ReactNode, useState } from "react";
import Header from "../AdminHeader";
import Sidebar from "../Sidebar";
import Information from "@/components/Alert/Information";
import { Alert } from "@/model/Alert";

interface AdminLayoutProps {
  children: ReactNode;
  messages?: Array<Alert>;
}

function AdminLayout({children, messages} : AdminLayoutProps){
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div className="absolute right-4 sm:w-52 md:w-60 lg:w-72 xl:w-96">
                {
                  messages
                    .map(
                      item => <Information />
                    )
                }
              </div>
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

// Definición de defaultProps
AdminLayout.defaultProps = {
  children: null,
  messages: [],
};

export default AdminLayout;