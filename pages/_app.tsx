import { AppProps } from "next/app"
import { useApollo } from "../utils/apollo-client"
import { ApolloProvider } from "@apollo/client"

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
