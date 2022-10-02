import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./home";

const client = new ApolloClient({
  uri: "http://localhost:3333/",
  cache: new InMemoryCache(),
});

function MyApp({ pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Home {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
