import type { AppProps } from "next/app";
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./home";
import { Header } from "../components/Header";
import { themeDark, themeLight } from "../style/theme";

const client = new ApolloClient({
  uri: "http://localhost:3333/",
  cache: new InMemoryCache(),
});

function MyApp({ pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Header />
        <Home {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
