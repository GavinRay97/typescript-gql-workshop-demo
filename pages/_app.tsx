import React from "react"
import { AppProps } from "next/app"
import { useApollo } from "../utils/apollo-client"
import { ApolloProvider } from "@apollo/client"

// import type { Page } from '../types/page'

// type Props = AppProps & {
//   Component: Page
// }

import "../styles/global.css"

import { NotificationProvider } from "./NotificationProvider"

import { store } from "../store"
import { StoreProvider } from "easy-peasy"

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <StoreProvider store={store}>
        {getLayout(<Component {...pageProps} />)}
        <NotificationProvider />
      </StoreProvider>
    </ApolloProvider>
  )
}

export default MyApp
