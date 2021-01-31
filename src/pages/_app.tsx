/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ThemeProvider } from 'styled-components';

import theme from '~/application/styles/theme';
import GlobalStyle from '~/application/styles/global';
import Navbar from '~/infrastructure/layout/Navbar';
import Footer from '~/infrastructure/layout/Footer';

const App = ({ Component, pageProps }: any): JSX.Element => {
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
