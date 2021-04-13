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
  margin: 0 var(--site-margin);
  margin-bottom: 2rem;

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
    margin: 1rem auto 1rem;
  }

  p {
    margin: 1rem auto 1rem;
    height: auto;
    line-height: 1.45;
  }

  hr {
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.blue};
    margin: 1rem 0;
  }

  h1,
  h2 {
    padding: 1rem 0 0.1rem 0;
    margin-bottom: 0.8rem;
    border-bottom: 1px solid ${(props) => props.theme.blueLight};
    page-break-after: avoid;
  }

  h3,
  h4,
  h5 {
    margin: 0.8rem 0 0.2rem 0;
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
