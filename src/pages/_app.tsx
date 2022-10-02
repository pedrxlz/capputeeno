import type { AppProps } from "next/app";
import Home from "./home";

function MyApp({ pageProps }: AppProps) {
  return <Home {...pageProps} />;
}

export default MyApp;
