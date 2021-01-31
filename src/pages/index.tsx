import { NextPage } from 'next';
import HeadNext from '~/infrastructure/components/Head';

import Home from '~/application/views/Home';

const IndexPage: NextPage = () => {
  return (
    <>
      <HeadNext title="Home" />
      <Home />
    </>
  );
};

export default IndexPage;
