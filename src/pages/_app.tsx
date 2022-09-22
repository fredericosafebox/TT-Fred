import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My app</title>
        <link href="http://fonts.cdnfonts.com/css/open-sans" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
