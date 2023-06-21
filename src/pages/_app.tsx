import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from '@/utils/ApolloClient'
import TokenExpiration from '@/utils/tokeTimeDetect';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const client = createApolloClient();
  const router = useRouter();
  useEffect(()=>{
     let token :any = localStorage.getItem('accessToken')
     const interval = setInterval(() => {
      console.log(TokenExpiration(token));
      
      if(TokenExpiration(token)){
        // localStorage.clear();
         router.push('/')
      }
    }, 1000*10); 

   
    return () => {
      clearInterval(interval);
    };

  },[])
  
  return(
    <ApolloProvider client={client} >
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
