import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

export function createApolloClient() {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_BASE_URL,
  });

  const authLink = setContext((_, { headers }) => {
    const accessToken = `Bearer ${localStorage.getItem('accessToken')}`;

    return {
      headers: {
        ...headers,
        Authorization: accessToken,
      },
    };
  });

  const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      console.log(graphQLErrors);
    }
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
  });

  return client;
}

