import { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '~/application/styles/global';
import theme from '~/application/styles/theme';
import Head from '~/infrastructure/layout/Head';
import Footer from '~/infrastructure/layout/Footer';

const CollectionArticles = (await import('collections/Articles')).default;
const ArticleComplete = (await import('article/Article')).default;

const IndexPage: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head />
      <GlobalStyle />
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js TypeScript!</a>
        </h1>
        <CollectionArticles />
        <ArticleComplete />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;
