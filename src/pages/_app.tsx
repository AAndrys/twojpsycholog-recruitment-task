import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "utils/styled/globalStyles";
import theme from "utils/styled/theme";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component key={router.route} router={router} {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
