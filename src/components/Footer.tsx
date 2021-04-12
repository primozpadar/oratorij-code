import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => (
  <Container>
    <Text>
      <span>© 2021 </span>
      <a href="https://oratorijzelimlje.si">Oratorij Želimlje</a>
      <span> - </span>
      <span>Primož Padar</span>
    </Text>
  </Container>
);

const Container = styled.footer`
  display: grid;
  place-items: center;
  backdrop-filter: brightness(0.6);
  padding: 2rem 0;
  margin: 1rem 0 0 0;

  grid-auto-columns: 1fr;
`;

const Text = styled.p`
  & > * {
    color: ${(props) => props.theme.white};
    opacity: 0.8;
  }
`;

export default Footer;
