"use client";

import React, { ReactNode, useEffect, useState } from "react";

import Header from "../AdminHeader";
import Sidebar from "../Sidebar";
import Success from "@/components/Alert/Success";
import { Alert } from "@/model/Alert";
import Warning from "../Alert/Warning";
import AlertError from "../Alert/Error";

interface AdminLayoutProps {
  children: ReactNode;
  messages: Array<Alert>;
}

function AdminLayout({children, messages}: Readonly<AdminLayoutProps>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [alertMessages, setAlertMessages] = useState<Array<Alert>>([]);

  useEffect(() => {
    setAlertMessages(messages);
    setTimeout(() => {
      setAlertMessages([]);
    }, 5000);
  }, [messages]);

  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div className="absolute right-4 sm:w-52 md:w-60 lg:w-72 xl:w-96">

                {
                    alertMessages
                      .map(
                        item => {
                          if(item.type === 'success') {
                            return <Success key={item.type} title={item.title} subTitle={item.subTitle} />
                          }

                          if(item.type === 'error') {
                            return <AlertError key={item.type} title={item.title} subTitle={item.subTitle} />
                          }

                          return <Warning key={item.type} title={item.title} subTitle={item.subTitle} />
                        }
                      )
                }
              </div>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
