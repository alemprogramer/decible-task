import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from './ApolloClient'

export default function App({ Component, pageProps }: AppProps) {
  const client = createApolloClient();
  console.log();
  
  return(
    <ApolloProvider client={client} >
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
