import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(null);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
