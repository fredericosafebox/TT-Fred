import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { Provider } from "react-redux";
import store from "../store/store";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
