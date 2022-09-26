import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { Provider } from "react-redux";
import { wrapper } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
