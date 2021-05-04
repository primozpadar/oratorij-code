import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Err404: React.FC = () => (
  <Layout title="Stran ne obstaja">
    <Container>
      <p>Stran ne obstaja!</p>
      <Link to="/">
        <Button>Domov</Button>
      </Link>
    </Container>
  </Layout>
);

const Container = styled.div`
  margin: 0 var(--site-margin);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 1.4rem;
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  cursor: pointer;
  font-weight: bold;
  background: ${(props) => props.theme.green};
  color: ${(props) => props.theme.blueDark};
  padding: 0.4rem 1rem;
`;

export default Err404;
