import styled from 'styled-components';

export const Footer = styled.footer`
  margin-top: 30px;
  padding-top: 30px;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.primary};
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.black};
  padding: 1rem 0;
  font-weight: bold;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    padding: 0px 1rem;
  }
`;

export const Widgets = styled.div`
  h3 {
    font-size: 1.25rem;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme: { colors } }) => colors.white};
  }
`;
