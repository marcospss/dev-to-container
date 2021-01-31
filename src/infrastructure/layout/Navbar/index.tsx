import Link from 'next/link';

import { Container } from '~/application/styles/global';
import { Header, Nav, Logo, List, NavItem } from './styles';

const Navbar = (): JSX.Element => {
  return (
    <Header>
      <Container>
        <Logo>DEV Community</Logo>
        <Nav>
          <List>
            <NavItem>
              <Link href="/">
                <a>Home</a>
              </Link>
            </NavItem>
            {/* <NavItem>
              <Link href="/discover" prefetch={false}>
                <a>Discover</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/favorites" prefetch={false}>
                <a>Favorites</a>
              </Link>
            </NavItem> */}
          </List>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;
