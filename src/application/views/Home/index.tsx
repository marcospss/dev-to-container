const CollectionArticles = (await import('collections/Articles')).default;
const PageArticle = (await import('article/Article')).default;

import { Container, GridList, SectionTitleSecondary } from '~/application/styles/global';
import { Main } from './styles';

const HomePage = (): JSX.Element => {
  return (
    <Container>
      <Main>
        <SectionTitleSecondary>
          <span>Latest News</span>
        </SectionTitleSecondary>
        <GridList>
          <CollectionArticles />
        </GridList>
        <PageArticle />
      </Main>
    </Container>
  );
};

export default HomePage;
