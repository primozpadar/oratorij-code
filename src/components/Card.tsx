import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  description: string;
  icon: JSX.Element;
}

const Card: React.FC<Props> = ({ title, icon, description }) => (
  <Container>
    <Header>
      <h2>{title}</h2>
      {icon}
    </Header>
    <Divider />
    <Content>
      {description.length > 120
        ? description
            .split('')
            .slice(0, 120)
            .join('') + ' ...'
        : description}
    </Content>
  </Container>
);

const Container = styled.div`
  height: 100%;
  background: ${props => props.theme.blue};
  padding: 1rem 1.4rem;
  box-shadow: 0 0.4rem 1rem 0 rgba(2, 8, 15, 0.4);
  border-radius: 0.6rem;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
    box-shadow: inset 0 0 4rem 2px rgba(15, 217, 144, 0.2), 0 0 1rem 2px rgba(15, 217, 144, 0.1);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.4rem;
    color: ${props => props.theme.green};
    margin-right: 0.6rem;

    @media (max-width: 800px) {
      font-size: 1.4rem;
    }

    @media (max-width: 600px) {
      font-size: 1.2rem;
    }

    @media (max-width: 300px) {
      font-size: 1rem;
    }
  }

  svg {
    height: 1.8rem;
    width: 1.8rem;
    fill: ${props => props.theme.green};

    @media (max-width: 300px) {
      height: 1rem;
      width: 1rem;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 1rem;
  background: ${props => props.theme.green};
  margin: 0.8rem 0;
`;

const Content = styled.div`
  color: ${props => props.theme.white};
  font-size: 1rem;
  font-family: 'Open Sans';
`;

export default Card;
