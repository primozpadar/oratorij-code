import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <Container>
      <a href="https://oratorijzelimlje.si">Oratorij Želimlje 2021</a>
    </Container>
  );
};

const Container = styled.footer`
  display: grid;
  place-items: center;
  background: ${props => props.theme.blue};
  padding: 2rem 0;
  margin: 1rem 0 0 0;
`;

export default Footer;
