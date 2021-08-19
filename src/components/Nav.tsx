import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { GithubIcon } from './styles/Icons';

const Nav: React.FC = () => (
  <Container>
    <Link to="/">
      <Title>Oratorij Code</Title>
    </Link>
    <GithubLink href="https://github.com/primozpadar/oratorij-code">
      <GithubIcon />
      <span>Github</span>
    </GithubLink>
  </Container>
);

const Container = styled.div`
  margin: 0 var(--site-margin);
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    margin-left: 0.4rem;
    font-weight: bold;
  }
`;

const GithubLink = styled.a.attrs({ target: '_blank' })`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  position: relative;
  margin-left: 0.4rem;

  @media (max-width: 800px) {
    font-size: 1.8rem;
  }

  @media (max-width: 300px) {
    font-size: 1.2rem;
  }

  &::before {
    content: ' ';
    z-index: -1;
    position: absolute;
    bottom: 0.4rem;
    left: -0.4rem;
    width: 40%;
    height: 1rem;
    background: ${(props) => props.theme.greenDark};

    @media (max-width: 800px) {
      height: 0.8rem;
    }

    @media (max-width: 300px) {
      height: 0.6rem;
      bottom: 0.2rem;
    }
  }
`;

export default Nav;
