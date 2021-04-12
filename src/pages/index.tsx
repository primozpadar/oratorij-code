import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Layout from '../components/Layout';
import { CodeIcon } from '../components/styles/Icons';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          fields: {
            slug: string;
            title: string;
            description: string;
          };
        };
      }[];
    };
  };
}

const index: React.FC<Props> = ({ data }) => (
  <Layout title="Domov">
    <CardsContainer>
      {data.allMarkdownRemark.edges.map(
        ({
          node: {
            fields: { slug, title, description },
          },
        }) => (
          <Link to={slug} key={slug}>
            <Card title={title} description={description} icon={<CodeIcon />} />
          </Link>
        )
      )}
    </CardsContainer>
  </Layout>
);

export const query = graphql`
  query AllMarkdownPages {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
            title
            description
          }
        }
      }
    }
  }
`;

const CardsContainer = styled.div`
  margin: 0 var(--site-margin);
  margin-bottom: 2rem;

  display: grid;
  gap: 2rem;
  height: auto;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export default index;
