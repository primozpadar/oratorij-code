import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

interface QueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

interface Props {
  title?: string;
}

const Layout: React.FC<Props> = ({ title, children }) => {
  const data = useStaticQuery<QueryProps>(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <Helmet
        title={title ? `${title} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
        ]}
      />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Nav />
          <div>{children}</div>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: var(--nav-height) auto;
  gap: 1rem;
  min-height: 100vh;
  width: 100vw;
`;

export default Layout;
