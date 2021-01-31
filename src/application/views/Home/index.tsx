const CollectionArticles = (await import('collections/Articles')).default;

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
      </Main>
    </Container>
  );
};

export default HomePage;
