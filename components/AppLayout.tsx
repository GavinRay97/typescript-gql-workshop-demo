import React from "react"

import { MenuAlt2Icon } from "@heroicons/react/outline"

import UserMenu from "./UserMenu"
import Search from "./Search"
import Sidebar from "./Sidebar"

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Sidebar open={sidebarOpen} onClose={setSidebarOpen} />

      <div className="flex flex-col flex-1 w-0 max-w-4xl mx-auto md:px-8 xl:px-0">
        {/* <div className="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200"> */}
        <div className="relative flex flex-shrink-0 h-16 bg-white border-b border-gray-200">
          <button
            className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="w-6 h-6" aria-hidden="true" />
          </button>
          <div className="flex justify-between flex-1 px-4 md:px-0">
            <Search />
            <UserMenu />
          </div>
        </div>

        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 sm:px-6 md:px-0">
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
            <div className="px-4 sm:px-6 md:px-0">
              {/* Replace with your content */}
              <div className="py-4">
                <div className="rounded-lg h-96">{children}</div>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
