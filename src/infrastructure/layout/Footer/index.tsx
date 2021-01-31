import Link from 'next/link';

import { Container, GridList } from '~/application/styles/global';
import { Footer, Info, NavList, Widgets } from './styles';

const FooterNav = (): JSX.Element => {
  return (
    <Footer>
      <Container>
        <GridList>
          <Widgets>
            <h3>About DEV</h3>
            <p>
              DEV is a community of software developers getting together to help one another out.
              The software industry relies on collaboration and networked learning. We provide a
              place for that to happen.
            </p>
            <p>
              Our application is
              <a href="https://github.com/thepracticaldev/dev.to" rel="noreferrer" target="_blank">
                open source
              </a>
              , meaning you can inspect every little detail of the code, or chip in yourself! We are{' '}
              <a
                href="https://dev.to/devteam/the-future-of-dev-160n"
                rel="noreferrer"
                target="_blank">
                working to make our platform available
              </a>
              for anyone to stand up similar communities in any niche or passion.
            </p>
            <p>
              We believe in transparency and adding value to the ecosystem. We hope you poke around
              and like what you see!
            </p>
          </Widgets>
        </GridList>
      </Container>
      <Info>
        <Container>
          <a href="https://dev.to/" rel="noreferrer" target="_blank">
            DEV Community
          </a>
          <nav>
            <NavList>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
            </NavList>
          </nav>
        </Container>
      </Info>
    </Footer>
  );
};

export default FooterNav;
