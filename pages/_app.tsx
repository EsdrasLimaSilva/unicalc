import GlobalStyle from "@/styles/global";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { storeWrapper } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
   const { store } = storeWrapper.useWrappedStore(pageProps);

   return (
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
         </ThemeProvider>
      </Provider>
   );
}
