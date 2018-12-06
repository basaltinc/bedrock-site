import Link from 'next/link';
import styled from 'styled-components';
import { Nav } from './Nav';

const StyledHeader = styled.header`
  top: 0px;
  position: sticky;
  background-color: ${props => props.theme.primary};
  display: flex;
  min-height: 70px;
  z-index: 99;
  padding: 1rem 0;
  justify-content: space-between;
  a {
    z-index: 9999;
  }
`;

const Logo = styled.div`
  margin-left: 2rem;
  min-width: 200px;
  max-height: 50px;
  &:hover {
    cursor: pointer;
  }
  img {
    max-height: 50px;
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo>
      <Link href="/">
        <a>
          <img src="/../static/bedrock.png" alt="bedrock logo" />
        </a>
      </Link>
    </Logo>
    <Nav />
  </StyledHeader>
);

export default Header;
