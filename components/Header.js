import Link from 'next/link';
import styled from 'styled-components';
import { Nav } from './Nav';

const StyledHeader = styled.header`
  top: 0px;
  position: sticky;
  background-color: ${props => props.theme.primary};
  display: grid;
  z-index: 99;
  padding: 2rem 0;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: stretch;
`;

const Logo = styled.div`
  font-size: 3rem;
  margin-left: 1rem;
  min-width: 200px;
  position: relative;
  z-index: 2;
  a {
    margin-top: 4px;
    position: absolute;
    color: ${props => props.theme.light};
    text-decoration: none;
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo>
      <Link href="/">
        <a>Bedrock</a>
        {/* <img src={'/../static/bedrock.svg'} /> */}
      </Link>
    </Logo>
    <Nav />
  </StyledHeader>
);

export default Header;
