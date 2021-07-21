import { AppProps } from "next/app"
import { useApollo } from "../utils/apollo-client"
import { ApolloProvider } from "@apollo/client"

import { useState } from 'react'

import {
  MenuAlt2Icon,
} from '@heroicons/react/outline'

import UserMenu from "../components/UserMenu"
import Search from "../components/Search"
import Sidebar from "../components/Sidebar"

import '../styles/global.css';


function MyApp({ Component, pageProps }: AppProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <div className="h-screen bg-white overflow-hidden flex">
      
      <Sidebar open={sidebarOpen} onClose={setSidebarOpen} />
      
      <div className="flex-1 max-w-4xl mx-auto w-0 flex flex-col md:px-8 xl:px-0">
        <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
          <button
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 flex justify-between px-4 md:px-0">
            <Search />
            <UserMenu />
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 sm:px-6 md:px-0">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="px-4 sm:px-6 md:px-0">
              {/* Replace with your content */}
              <div className="py-4">
                <div className="h-96 border-4 border-dashed border-gray-200 rounded-lg" >
                <Component {...pageProps} />
                  </div>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
      
    </ApolloProvider>
  )
}

export default MyApp
