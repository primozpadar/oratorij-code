import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <Layout title={data.markdownRemark.frontmatter.title}>
    <Content>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Content>
  </Layout>
);

const Content = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: 40vw;

  @media (max-width: 1500px) {
    max-width: 45vw;
  }
  @media (max-width: 1200px) {
    max-width: 60vw;
  }
  @media (max-width: 800px) {
    max-width: 80vw;
  }
  @media (max-width: 450px) {
    max-width: 90vw;
  }

  li,
  ul {
    margin-left: 1.2rem;
  }

  blockquote {
    font-size: 1rem;
    opacity: 0.9;
    font-style: italic;
    margin: 1rem auto 1rem;
    padding-left: 0.8rem;
    border-left: 0.4rem solid ${(props) => props.theme.greenDark};
  }

  pre {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  p {
    margin: 0.2rem 0 1rem 0;
    height: auto;
  }

  hr {
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.blue};
    margin: 1rem 0;
  }

  h1,
  h2 {
    padding: 1.8rem 0 0.1rem 0;
    margin-bottom: 0.8rem;
    border-bottom: 1px solid ${(props) => props.theme.blueLight};
    page-break-after: avoid;
    color: ${(props) => props.theme.blueStrong};
  }

  h3,
  h4,
  h5 {
    margin: 2rem 0 0.2rem 0;
    color: ${(props) => props.theme.blueStrong};
  }

  a {
    color: ${(props) => props.theme.green};
    text-decoration: underline;
  }
`;

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`;
