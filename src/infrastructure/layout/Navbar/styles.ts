import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  z-index: 50;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  padding: 1rem;
  position: fixed;
  background-color: ${({ theme: { colors } }) => colors.grayLight};
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.grayLight};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
`;

export const Logo = styled.div`
  margin-right: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  background: ${({ theme: { colors } }) => colors.black};
  color: ${({ theme: { colors } }) => colors.white};
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 10px -3px #4e4949, 0 4px 6px -2px #6d7681;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: start;
  margin-left: auto;
`;

export const NavItem = styled.li`
  list-style: none;
  padding-right: 2rem;
  a {
    text-decoration: none;
    text-transform: uppercase;
    background-color: ${({ theme: { colors } }) => colors.grayMedium};
    color: ${({ theme: { colors } }) => colors.white};
    padding: 0.5rem 2rem;
    font-weight: 700;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    border-radius: 1rem;
    &:hover {
      color: ${({ theme: { colors } }) => colors.primary};
      background-color: ${({ theme: { colors } }) => colors.grayMedium};
    }
  }
`;
