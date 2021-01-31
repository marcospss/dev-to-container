import { ThemeProvider } from 'styled-components';

import theme from '~/application/styles/theme';
import GlobalStyle from '~/application/styles/global';
import Navbar from '~/infrastructure/layout/Navbar';
import Footer from '~/infrastructure/layout/Footer';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App;
