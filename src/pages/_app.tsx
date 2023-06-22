import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from '@/utils/ApolloClient'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const client = createApolloClient();
  const router = useRouter();
  
  return(
    <ApolloProvider client={client} >
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
